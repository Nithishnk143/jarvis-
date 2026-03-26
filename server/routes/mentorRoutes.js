const express = require('express');
const router = express.Router();
const { getMentors, getMentor } = require('../controllers/mentorController');
const { protect } = require('../middleware/auth');

router.get('/', protect, getMentors);
router.get('/:id', protect, getMentor);

module.exports = router;
