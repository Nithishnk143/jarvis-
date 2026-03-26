import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const PORTAL_CARDS = [
  {
    type: 'tenth',
    title: '10th Student Portal',
    icon: '📚',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    desc: 'Discover the right stream for 11th & 12th based on your interests and strengths.',
    features: ['Stream Quiz', 'Subject Guide', 'Scholarships', 'Roadmap'],
    to: '/portal/tenth',
  },
  {
    type: 'twelfth',
    title: '12th Student Portal',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #16a34a 0%, #4ade80 100%)',
    desc: 'Find the best degree and college aligned with your scores and interests.',
    features: ['Degree Quiz', 'College Finder', 'Exam Tracker', 'What-If Simulator'],
    to: '/portal/twelfth',
  },
  {
    type: 'ug',
    title: 'UG Student Portal',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #22d3ee 100%)',
    desc: 'Land your dream job with tailored role recommendations and skill tracking.',
    features: ['Job Match', 'Skill Gap', 'Internships', 'Interview Prep'],
    to: '/portal/ug',
  },
  {
    type: 'pg',
    title: 'PG Student Portal',
    icon: '🔬',
    gradient: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)',
    desc: 'Navigate PhD, MBA, or global study options with expert guidance.',
    features: ['Path Recommender', 'Research Finder', 'Abroad Guide', 'Mentor Connect'],
    to: '/portal/pg',
  },
  {
    type: 'professional',
    title: 'Professional Portal',
    icon: '💼',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)',
    desc: 'Upskill, switch careers, or grow with AI-powered personalized guidance.',
    features: ['Skill Analyzer', 'Career Switch', 'Salary Insights', 'Certifications'],
    to: '/portal/professional',
  },
];

const UserTypeSelect = () => {
  const { user } = useSelector((s) => s.auth);
  const myPortal = PORTAL_CARDS.find((c) => c.type === user?.userType);

  return (
    <div className="container py-5">
      {myPortal && (
        <div className="row mb-5">
          <div className="col-12">
            <div className="portal-banner animate-fadeInUp" style={{ background: myPortal.gradient }}>
              <div className="d-flex align-items-center gap-3">
                <span style={{ fontSize: '3.5rem' }}>{myPortal.icon}</span>
                <div>
                  <h2 className="fw-bold mb-1">Welcome, {user?.name?.split(' ')[0]}! 👋</h2>
                  <p className="mb-2 opacity-90">{myPortal.desc}</p>
                  <NavLink to={myPortal.to} className="btn btn-light btn-sm fw-semibold">
                    Go to My Portal <i className="bi bi-arrow-right ms-1"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h4 className="fw-bold mb-1">All Portals</h4>
      <p className="text-muted mb-4">Explore all career guidance portals available on CareerCompass.</p>

      <div className="row g-4">
        {PORTAL_CARDS.map((card) => (
          <div key={card.type} className="col-12 col-md-6 col-lg-4">
            <div className="cc-card card h-100 animate-fadeInUp" style={{ overflow: 'hidden' }}>
              <div style={{ background: card.gradient, height: 6 }}></div>
              <div className="card-body p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span style={{ fontSize: '2rem' }}>{card.icon}</span>
                  <h6 className="fw-bold mb-0" style={{ fontSize: '0.95rem' }}>{card.title}</h6>
                  {card.type === user?.userType && (
                    <span className="badge bg-primary rounded-pill ms-auto cc-badge">My Portal</span>
                  )}
                </div>
                <p className="text-muted small mb-3">{card.desc}</p>
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {card.features.map((f) => (
                    <span key={f} className="badge bg-light text-dark border cc-badge">{f}</span>
                  ))}
                </div>
                <NavLink to={card.to} className="btn btn-sm fw-semibold w-100"
                         style={{ background: card.gradient, color: '#fff', border: 'none' }}>
                  Enter Portal <i className="bi bi-arrow-right ms-1"></i>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTypeSelect;
