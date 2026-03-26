const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({
  title: { type: String, required: true },
  userType: {
    type: String,
    required: true,
    enum: ['tenth', 'twelfth', 'ug', 'pg', 'professional'],
  },
  category: { type: String, default: 'General' },
  steps: [
    {
      stepNumber: Number,
      title: String,
      description: String,
      duration: String,
      resources: [String],
    },
  ],
});

module.exports = mongoose.model('Roadmap', roadmapSchema);
