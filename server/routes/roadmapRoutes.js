const express = require('express');
const router = express.Router();
const { getRoadmaps } = require('../controllers/roadmapController');
const { protect } = require('../middleware/auth');

router.get('/:type', protect, getRoadmaps);

module.exports = router;
