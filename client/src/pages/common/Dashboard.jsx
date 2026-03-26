import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const PORTAL_META = {
  tenth:        { color: '#7c3aed', gradient: 'linear-gradient(135deg,#7c3aed,#a855f7)', icon: '📚', label: '10th Student', to: '/portal/tenth' },
  twelfth:      { color: '#16a34a', gradient: 'linear-gradient(135deg,#16a34a,#4ade80)', icon: '🎓', label: '12th Student', to: '/portal/twelfth' },
  ug:           { color: '#0891b2', gradient: 'linear-gradient(135deg,#0891b2,#22d3ee)', icon: '🏛️', label: 'UG Student',   to: '/portal/ug' },
  pg:           { color: '#d97706', gradient: 'linear-gradient(135deg,#d97706,#fbbf24)', icon: '🔬', label: 'PG Student',   to: '/portal/pg' },
  professional: { color: '#dc2626', gradient: 'linear-gradient(135deg,#dc2626,#f87171)', icon: '💼', label: 'Professional', to: '/portal/professional' },
};

const QUICK_ACTIONS = {
  tenth:        [{ label: 'Take Stream Quiz', icon: 'bi-clipboard-check', to: '/portal/tenth/quiz' }, { label: 'View Roadmap', icon: 'bi-signpost-2', to: '/portal/tenth/roadmap' }],
  twelfth:      [{ label: 'Take Degree Quiz', icon: 'bi-clipboard-check', to: '/portal/twelfth/quiz' }, { label: 'Find Colleges', icon: 'bi-building', to: '/portal/twelfth/colleges' }],
  ug:           [{ label: 'Job Recommender', icon: 'bi-briefcase', to: '/portal/ug/jobs' }, { label: 'Skill Gap', icon: 'bi-bar-chart-steps', to: '/portal/ug/skills' }],
  pg:           [{ label: 'Path Recommender', icon: 'bi-signpost-split', to: '/portal/pg/path' }, { label: 'Abroad Guide', icon: 'bi-globe', to: '/portal/pg/abroad' }],
  professional: [{ label: 'Skill Gap Analyzer', icon: 'bi-graph-up-arrow', to: '/portal/professional/skills' }, { label: 'Career Switch', icon: 'bi-arrow-repeat', to: '/portal/professional/switch' }],
};

const Dashboard = () => {
  const { user } = useSelector((s) => s.auth);
  const meta = PORTAL_META[user?.userType];
  const actions = QUICK_ACTIONS[user?.userType] || [];

  return (
    <div className="animate-fadeInUp">
      {/* Hero banner */}
      <div className="portal-banner mb-4" style={{ background: meta?.gradient }}>
        <h2 className="fw-bold mb-1">
          {meta?.icon} Hello, {user?.name?.split(' ')[0]}!
        </h2>
        <p className="mb-3 opacity-90">Welcome to your personalized career guidance dashboard.</p>
        <NavLink to={meta?.to} className="btn btn-light btn-sm fw-semibold">
          Go to My Portal <i className="bi bi-arrow-right ms-1"></i>
        </NavLink>
      </div>

      {/* Stats row */}
      <div className="row g-3 mb-4">
        {[
          { label: 'Scholarships', value: '12+', icon: 'bi-mortarboard-fill', bg: '#6366f1' },
          { label: 'Mentors',      value: '8',   icon: 'bi-people-fill',       bg: '#0891b2' },
          { label: 'Roadmaps',     value: '6',   icon: 'bi-signpost-2-fill',   bg: '#16a34a' },
          { label: 'Courses',      value: '50+', icon: 'bi-play-circle-fill',  bg: '#d97706' },
        ].map((s) => (
          <div key={s.label} className="col-6 col-md-3">
            <div className="stat-card" style={{ background: s.bg }}>
              <div className="h4 fw-bold mb-0">{s.value}</div>
              <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>{s.label}</div>
              <i className={`bi ${s.icon} stat-icon`}></i>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="row g-3 mb-4">
        <div className="col-12">
          <h5 className="fw-bold mb-3">Quick Actions</h5>
          <div className="d-flex flex-wrap gap-2">
            {actions.map((a) => (
              <NavLink key={a.to} to={a.to} className="btn fw-semibold"
                       style={{ background: meta?.color, color: '#fff', borderRadius: 10 }}>
                <i className={`bi ${a.icon} me-2`}></i>{a.label}
              </NavLink>
            ))}
            <NavLink to="/scholarships" className="btn btn-outline-secondary fw-semibold" style={{ borderRadius: 10 }}>
              <i className="bi bi-mortarboard me-2"></i>Scholarships
            </NavLink>
            <NavLink to="/mentors" className="btn btn-outline-secondary fw-semibold" style={{ borderRadius: 10 }}>
              <i className="bi bi-people me-2"></i>Mentors
            </NavLink>
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div className="row g-3">
        <div className="col-md-6">
          <div className="cc-card card h-100">
            <div className="card-body p-4">
              <h6 className="fw-bold mb-3"><i className="bi bi-lightbulb-fill text-warning me-2"></i>Tip of the Day</h6>
              <p className="text-muted small mb-0">
                "The best time to plant a tree was 20 years ago. The second best time is now." — Start exploring your career path today and take the quiz to get personalized recommendations!
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="cc-card card h-100">
            <div className="card-body p-4">
              <h6 className="fw-bold mb-3"><i className="bi bi-calendar-event-fill text-danger me-2"></i>Upcoming Deadlines</h6>
              {[
                { name: 'GATE Application', date: 'Oct 31, 2025', badge: 'Exam' },
                { name: 'INSPIRE Scholarship', date: 'Nov 30, 2025', badge: 'Scholarship' },
                { name: 'JEE Main Registration', date: 'Nov 15, 2025', badge: 'Entrance' },
              ].map((d) => (
                <div key={d.name} className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <div className="fw-semibold" style={{ fontSize: '0.85rem' }}>{d.name}</div>
                    <div className="text-muted" style={{ fontSize: '0.75rem' }}>{d.date}</div>
                  </div>
                  <span className="badge bg-danger-subtle text-danger cc-badge">{d.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
