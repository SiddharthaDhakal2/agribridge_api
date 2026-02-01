const Customer = require('../models/customer_model');

// Upload profile image and update customer
exports.uploadProfileImage = async (req, res) => {
  try {
    const { customerId } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const imagePath = req.file.path;

    // Update customer profileImage
    const customer = await Customer.findByIdAndUpdate(
      customerId,
      { profileImage: imagePath },
      { new: true }
    );
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json({ message: 'Image uploaded', profileImage: imagePath, customer });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get customer profile (with image)
exports.getProfile = async (req, res) => {
  try {
    const { customerId } = req.params;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};