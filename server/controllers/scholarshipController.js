const Scholarship = require('../models/Scholarship');
const User = require('../models/User');

// @desc  Get all scholarships (optionally filter by level)
const getScholarships = async (req, res) => {
  try {
    const { level } = req.query;
    const filter = level ? { $or: [{ level }, { level: 'all' }] } : {};
    const scholarships = await Scholarship.find(filter).sort({ deadline: 1 });
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get single scholarship
const getScholarship = async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id);
    if (!scholarship) return res.status(404).json({ message: 'Scholarship not found' });
    res.json(scholarship);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Save scholarship for user
const saveScholarship = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { scholarshipId } = req.body;
    if (!user.savedScholarships.includes(scholarshipId)) {
      user.savedScholarships.push(scholarshipId);
      await user.save();
    }
    res.json({ message: 'Scholarship saved', saved: user.savedScholarships });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getScholarships, getScholarship, saveScholarship };
