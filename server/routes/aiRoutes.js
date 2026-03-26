const express = require('express');
const router = express.Router();
const { evaluatePsychometricTest } = require('../controllers/aiController');
const { protect } = require('../middleware/auth');

router.post('/psychometric', protect, evaluatePsychometricTest);

module.exports = router;
