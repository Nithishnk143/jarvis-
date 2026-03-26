const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  provider: { type: String, required: true },
  amount: { type: String, required: true },
  level: {
    type: String,
    required: true,
    enum: ['tenth', 'twelfth', 'ug', 'pg', 'professional', 'all'],
  },
  eligibility: { type: String, required: true },
  deadline: { type: String, required: true },
  link: { type: String, default: '#' },
  category: { type: String, default: 'General' },
  state: { type: String, default: 'All India' },
});

module.exports = mongoose.model('Scholarship', scholarshipSchema);
