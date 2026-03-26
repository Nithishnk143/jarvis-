const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, default: '' },
  expertise: [String],
  bio: { type: String, required: true },
  forTypes: [{ type: String, enum: ['tenth', 'twelfth', 'ug', 'pg', 'professional', 'all'] }],
  email: { type: String, default: '' },
  linkedin: { type: String, default: '#' },
  avatar: { type: String, default: '' },
  rating: { type: Number, default: 4.5, min: 1, max: 5 },
  sessions: { type: Number, default: 0 },
});

module.exports = mongoose.model('Mentor', mentorSchema);
