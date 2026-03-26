const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });

const Scholarship = require('../models/Scholarship');
const Mentor = require('../models/Mentor');
const Roadmap = require('../models/Roadmap');

const scholarships = require('./scholarships');
const mentors = require('./mentors');
const roadmaps = require('./roadmaps');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected for seeding...');

    // Clear existing data
    await Scholarship.deleteMany({});
    await Mentor.deleteMany({});
    await Roadmap.deleteMany({});

    // Insert seed data
    await Scholarship.insertMany(scholarships);
    console.log(`✅ Seeded ${scholarships.length} scholarships`);

    await Mentor.insertMany(mentors);
    console.log(`✅ Seeded ${mentors.length} mentors`);

    await Roadmap.insertMany(roadmaps);
    console.log(`✅ Seeded ${roadmaps.length} roadmaps`);

    console.log('🎉 Seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
};

seed();
