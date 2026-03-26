const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    userType: {
      type: String,
      required: true,
      enum: ['tenth', 'twelfth', 'ug', 'pg', 'professional'],
    },
    interests: [{ type: String }],
    educationLevel: { type: String },
    language: { type: String, default: 'en', enum: ['en', 'hi', 'ta'] },
    darkMode: { type: Boolean, default: false },
    notifications: [
      {
        message: String,
        read: { type: Boolean, default: false },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    savedRoadmaps: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Roadmap' }],
    savedScholarships: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Scholarship' }],
  },
  { timestamps: true }
);

// Hash password before save
userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
