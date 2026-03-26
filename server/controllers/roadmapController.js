const Roadmap = require('../models/Roadmap');

// @desc  Get roadmaps by userType
const getRoadmaps = async (req, res) => {
  try {
    const { type } = req.params;
    const roadmaps = await Roadmap.find({ userType: type });
    res.json(roadmaps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getRoadmaps };
