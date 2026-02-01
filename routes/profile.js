const express = require('express');
const router = express.Router();
const upload = require('../middleware/profile_upload');
const profileController = require('../controller/profile_controller');

// Upload profile image
router.post('/upload', upload.single('image'), profileController.uploadProfileImage);

// Get profile
router.get('/:customerId', profileController.getProfile);

module.exports = router;