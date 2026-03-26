const express = require('express');
const router = express.Router();
const { getScholarships, getScholarship, saveScholarship } = require('../controllers/scholarshipController');
const { protect } = require('../middleware/auth');

router.get('/', protect, getScholarships);
router.get('/:id', protect, getScholarship);
router.post('/save', protect, saveScholarship);

module.exports = router;
