const Mentor = require('../models/Mentor');

// @desc  Get all mentors (optionally filter by userType)
const getMentors = async (req, res) => {
  try {
    const { type } = req.query;
    const filter = type ? { $or: [{ forTypes: type }, { forTypes: 'all' }] } : {};
    const mentors = await Mentor.find(filter);
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc  Get single mentor
const getMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) return res.status(404).json({ message: 'Mentor not found' });
    res.json(mentor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getMentors, getMentor };
