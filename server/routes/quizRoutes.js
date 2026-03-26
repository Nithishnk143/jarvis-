const express = require('express');
const router = express.Router();
const { computeQuizResult } = require('../controllers/quizController');
const { protect } = require('../middleware/auth');

router.post('/:type', protect, computeQuizResult);

module.exports = router;
