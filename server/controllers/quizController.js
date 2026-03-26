// Quiz result computation — pure logic, no DB needed
// Scores map to stream / degree / job / path recommendations

const STREAM_RECOMMENDATIONS = {
  science: {
    name: 'Science (PCM/PCB/PCMB)',
    description: 'Best for analytical thinkers who love math, physics, biology, and chemistry.',
    careers: ['Engineering', 'Medicine', 'Research', 'Architecture', 'Pharmacy'],
    avgSalary: '₹4–30 LPA depending on specialization',
    subjects: ['PCM – Physics, Chemistry, Math', 'PCB – Physics, Chemistry, Biology', 'PCMB – All four'],
    icon: '🔬',
    color: 'success',
  },
  commerce: {
    name: 'Commerce',
    description: 'Perfect for those interested in business, finance, and economics.',
    careers: ['CA/CS', 'Banking', 'MBA', 'Marketing', 'Entrepreneurship'],
    avgSalary: '₹3–25 LPA depending on specialization',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Math (optional)'],
    icon: '📊',
    color: 'warning',
  },
  arts: {
    name: 'Arts / Humanities',
    description: 'Great for creative and socially conscious individuals.',
    careers: ['Law', 'Journalism', 'Civil Services', 'Design', 'Social Work'],
    avgSalary: '₹2–20 LPA depending on specialization',
    subjects: ['History', 'Geography', 'Political Science', 'Psychology', 'Fine Arts'],
    icon: '🎨',
    color: 'info',
  },
};

const computeQuizResult = (req, res) => {
  const { type } = req.params;
  const { answers } = req.body; // array of { questionId, score, category }

  if (type === 'tenth') {
    const scores = { science: 0, commerce: 0, arts: 0 };
    (answers || []).forEach(({ category, score }) => {
      if (scores[category] !== undefined) scores[category] += score;
    });
    const recommended = Object.keys(scores).reduce((a, b) => (scores[a] >= scores[b] ? a : b));
    return res.json({
      recommended: STREAM_RECOMMENDATIONS[recommended],
      scores,
      alternatives: Object.keys(scores)
        .filter((k) => k !== recommended)
        .map((k) => STREAM_RECOMMENDATIONS[k]),
    });
  }

  if (type === 'twelfth') {
    const { marks, interests, budget, location } = answers || {};
    let degree = 'B.Tech / B.E.';
    let color = 'primary';
    if (interests === 'medicine') { degree = 'MBBS / BDS / BAMS'; color = 'danger'; }
    else if (interests === 'law') { degree = 'BA LLB / BBA LLB'; color = 'success'; }
    else if (interests === 'design') { degree = 'B.Des / BFA'; color = 'warning'; }
    else if (interests === 'business') { degree = 'BBA / BMS / B.Com'; color = 'info'; }
    else if (interests === 'arts') { degree = 'BA / B.Lib'; color = 'secondary'; }
    else if (interests === 'science') { degree = 'B.Sc / B.Tech'; color = 'success'; }
    return res.json({ recommended: { name: degree, color }, marks, budget, location });
  }

  if (type === 'ug') {
    const { degree, skills, cgpa } = answers || {};
    const roles = [];
    if (degree === 'cse' || skills?.includes('coding')) roles.push({ title: 'Software Engineer', match: 95 });
    if (skills?.includes('data')) roles.push({ title: 'Data Analyst', match: 88 });
    if (skills?.includes('design')) roles.push({ title: 'UI/UX Designer', match: 82 });
    if (cgpa >= 8) roles.push({ title: 'Research Intern', match: 78 });
    roles.push({ title: 'Business Analyst', match: 70 });
    return res.json({ roles: roles.slice(0, 4) });
  }

  if (type === 'pg') {
    const { goal, research, budget } = answers || {};
    
    if (goal === 'research' || research === 'high') {
      return res.json({
        recommended: 'Ph.D. / Research Fellowship',
        description: 'Ideal for those passionate about diving deep into a single topic and contributing to academia or R&D labs.',
        icon: 'bi-mortarboard',
        requirements: ['Strong academic record (CGPA > 8.5)', 'Published research papers (preferred)', 'Clear research proposal', 'GRE/TOEFL for abroad'],
      });
    } else if (goal === 'management') {
      return res.json({
        recommended: 'MBA (Master of Business Administration)',
        description: 'Best for climbing the corporate ladder, moving into product management, or starting your own venture.',
        icon: 'bi-briefcase',
        requirements: ['2-4 years of work experience', 'GMAT / CAT / GRE scores', 'Strong leadership profile'],
      });
    } else {
      return res.json({
        recommended: 'M.S. / M.Tech',
        description: 'Aimed at specializing in technical skills (like AI, VLSI) for higher-paying tech roles or settling abroad.',
        icon: 'bi-laptop',
        requirements: ['Valid GATE or GRE scores', 'Relevant Bachelor’s degree in Engineering/Science', 'A good portfolio of technical projects'],
      });
    }
  }

  if (type === 'professional') {
    const { currentRole, targetRole, experience } = answers || {};
    
    // Provide a generic but structured mock response for Career Switcher
    return res.json({
      title: `Transition to ${targetRole ? targetRole.toUpperCase() : 'New Role'}`,
      overlap: '60%',
      description: `With your background in ${currentRole || 'your current role'}, you have a solid foundation. You'll need to bridge the technical gap by focusing on domain-specific tools.`,
      transferable: ['Project Management', 'Communication', 'Agile Methodology', 'Stakeholder Management'],
      toLearn: ['System Design Basics', 'Domain-specific Frameworks', 'Advanced Analytics'],
      time: experience === '5+' ? '4-6 Months' : '3-5 Months'
    });
  }

  res.status(400).json({ message: 'Unknown quiz type' });
};

module.exports = { computeQuizResult };
