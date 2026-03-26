const roadmaps = [
  {
    title: 'Science Stream — 11th & 12th Roadmap',
    userType: 'tenth',
    category: 'Science',
    steps: [
      { stepNumber: 1, title: 'Choose Your Subjects', description: 'Decide between PCM, PCB, or PCMB based on your quiz results and career interest.', duration: 'Month 1', resources: ['NCERT syllabus guide', 'Talk to a career counsellor'] },
      { stepNumber: 2, title: 'Build Strong Foundations', description: 'Focus on NCERT textbooks for Physics, Chemistry, Math/Biology in 11th.', duration: 'Months 1–6', resources: ['NCERT Class 11', 'Khan Academy', 'Vedantu'] },
      { stepNumber: 3, title: 'Start Entrance Exam Awareness', description: 'Learn about JEE (for engineering) or NEET (for medicine) and their patterns.', duration: 'Months 4–8', resources: ['JEE official site', 'NEET official site'] },
      { stepNumber: 4, title: 'Practice Previous Papers', description: 'Begin solving past 5-year question papers for board exams and entrance exams.', duration: 'Months 6–10', resources: ['CBSE sample papers', 'Allen study material'] },
      { stepNumber: 5, title: 'Revise & Mock Tests', description: 'Appear for mock tests and revise all concepts before board exams.', duration: 'Months 10–12', resources: ['Test series platforms', 'NCERT exemplar'] },
    ],
  },
  {
    title: 'Commerce Stream — 11th & 12th Roadmap',
    userType: 'tenth',
    category: 'Commerce',
    steps: [
      { stepNumber: 1, title: 'Understand Commerce Basics', description: 'Learn about Accountancy, Business Studies, and Economics as core subjects.', duration: 'Month 1', resources: ['NCERT Commerce guide'] },
      { stepNumber: 2, title: 'Build Accounting Skills', description: 'Practice journal entries, ledgers, and trial balance regularly.', duration: 'Months 1–6', resources: ['TS Grewal textbook', 'YouTube - CA Wallah'] },
      { stepNumber: 3, title: 'Explore CA/CS/CMA Foundation', description: 'Register for CA Foundation if interested in Chartered Accountancy path.', duration: 'Month 4', resources: ['ICAI official site'] },
      { stepNumber: 4, title: 'Board Exam Preparation', description: 'Practice full-length papers and focus on presentation and calculation accuracy.', duration: 'Months 8–12', resources: ['CBSE sample papers', 'Oswaal guide'] },
    ],
  },
  {
    title: 'B.Tech Admission Roadmap',
    userType: 'twelfth',
    category: 'Engineering',
    steps: [
      { stepNumber: 1, title: 'Register for JEE Main', description: 'Register at NTA website, understand exam pattern: Physics, Chemistry, Math.', duration: 'November (Year 1)', resources: ['jeemain.nta.nic.in'] },
      { stepNumber: 2, title: 'Prepare for JEE Advanced', description: 'If JEE Main rank qualifies, prepare for JEE Advanced for IIT admit.', duration: 'January–May', resources: ['IIT JEE prep material', 'PW / Unacademy'] },
      { stepNumber: 3, title: 'Apply via JoSAA Counselling', description: 'Choose preferred IIT/NIT/IIIT branches and fill preferences.', duration: 'June–July', resources: ['josaa.nic.in'] },
      { stepNumber: 4, title: 'Explore BITS / State CETs', description: 'Also prepare for BITSAT and state-level exams like MHT-CET, KCET.', duration: 'April–June', resources: ['BITS Pilani admissions', 'State CET portals'] },
    ],
  },
  {
    title: 'Software Engineer — UG Career Roadmap',
    userType: 'ug',
    category: 'Software Engineering',
    steps: [
      { stepNumber: 1, title: 'Master Core CS Subjects', description: 'Strengthen Data Structures, Algorithms, OS, DBMS, CN in 2nd year.', duration: '6 months', resources: ['CLRS Book', 'GeeksForGeeks'] },
      { stepNumber: 2, title: 'Pick a Tech Stack', description: 'Choose frontend (React), backend (Node.js), or full-stack. Practice building projects.', duration: '3 months', resources: ['The Odin Project', 'freeCodeCamp'] },
      { stepNumber: 3, title: 'Apply for Internships', description: 'Apply to Internshala, LinkedIn. Target SDE intern roles in product companies.', duration: 'Semester 5-6', resources: ['Internshala', 'LinkedIn Jobs'] },
      { stepNumber: 4, title: 'Build Portfolio & GitHub', description: 'Have 3+ strong projects on GitHub. Write clean READMEs.', duration: 'Ongoing', resources: ['GitHub', 'Vercel/Netlify for hosting'] },
      { stepNumber: 5, title: 'Crack Placement Drive', description: 'Practice 150+ LeetCode problems. Prepare STAR stories for HR.', duration: 'Final Year', resources: ['LeetCode', 'InterviewBit'] },
    ],
  },
  {
    title: 'MBA / Management — PG Path Roadmap',
    userType: 'pg',
    category: 'MBA',
    steps: [
      { stepNumber: 1, title: 'Decide MBA vs Work', description: 'If < 2 years experience, consider deferred MBA. If 2–5 years, go executive MBA.', duration: 'Month 1', resources: ['IIM sites', 'CAT prep'] },
      { stepNumber: 2, title: 'Prepare for CAT / GMAT', description: 'Target 99+ percentile in CAT for IIMs. Or GMAT 700+ for international.', duration: '6–8 months', resources: ['IMS Learning', 'BYJU\'s CAT'] },
      { stepNumber: 3, title: 'Apply to Top B-Schools', description: 'Shortlist 5–7 colleges. Prepare SOP, essays, and recommendation letters.', duration: 'September–December', resources: ['IIM official sites', 'MBA Crystal Ball'] },
      { stepNumber: 4, title: 'Prepare for GD/PI', description: 'Practice current affairs, case studies, and group discussion rounds.', duration: 'January–March', resources: ['The Hindu', 'MBA aspirant groups'] },
    ],
  },
  {
    title: 'Career Switch to Data Science',
    userType: 'professional',
    category: 'Data Science',
    steps: [
      { stepNumber: 1, title: 'Learn Python & Statistics', description: 'Master Python basics, NumPy, Pandas. Revise probability, statistics.', duration: '2 months', resources: ['Kaggle Python course', 'StatQuest YouTube'] },
      { stepNumber: 2, title: 'Build Data Projects', description: 'Create 3 end-to-end projects: EDA, prediction model, dashboard.', duration: '3 months', resources: ['Kaggle datasets', 'Towards Data Science'] },
      { stepNumber: 3, title: 'Learn SQL & Visualization', description: 'Master SQL joins/aggregations, Power BI or Tableau basics.', duration: '1 month', resources: ['Mode SQL Tutorial', 'Tableau Public'] },
      { stepNumber: 4, title: 'Get Certified', description: 'Complete Google Data Analytics or IBM Data Science certificate.', duration: '2 months', resources: ['Coursera Google DA', 'IBM Skills Network'] },
      { stepNumber: 5, title: 'Apply and Network', description: 'Update LinkedIn, apply to DA roles, attend data meetups.', duration: 'Ongoing', resources: ['LinkedIn', 'Meetup.com', 'DataHack Summit'] },
    ],
  },
];

module.exports = roadmaps;
