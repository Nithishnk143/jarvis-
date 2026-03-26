import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PORTAL_LINKS = {
  tenth: [
    { to: '/portal/tenth', label: 'Dashboard', icon: 'bi-speedometer2' },
    { to: '/portal/tenth/quiz', label: 'Stream Quiz', icon: 'bi-clipboard-check' },
    { to: '/portal/tenth/stream', label: 'Stream Guide', icon: 'bi-map' },
    { to: '/portal/tenth/roadmap', label: 'Roadmap', icon: 'bi-signpost-2' },
    { to: '/scholarships', label: 'Scholarships', icon: 'bi-mortarboard' },
  ],
  twelfth: [
    { to: '/portal/twelfth', label: 'Dashboard', icon: 'bi-speedometer2' },
    { to: '/portal/twelfth/quiz', label: 'Degree Quiz', icon: 'bi-clipboard-check' },
    { to: '/portal/twelfth/colleges', label: 'College Finder', icon: 'bi-building' },
    { to: '/portal/twelfth/exams', label: 'Exam Tracker', icon: 'bi-calendar-event' },
    { to: '/portal/twelfth/whatif', label: 'What-If Simulator', icon: 'bi-arrow-left-right' },
    { to: '/scholarships', label: 'Scholarships', icon: 'bi-mortarboard' },
  ],
  ug: [
    { to: '/portal/ug', label: 'Dashboard', icon: 'bi-speedometer2' },
    { to: '/portal/ug/jobs', label: 'Job Recommender', icon: 'bi-briefcase' },
    { to: '/portal/ug/skills', label: 'Skill Gap', icon: 'bi-bar-chart-steps' },
    { to: '/portal/ug/resume', label: 'Resume Tips', icon: 'bi-file-earmark-person' },
    { to: '/portal/ug/internships', label: 'Internships', icon: 'bi-laptop' },
    { to: '/portal/ug/interview', label: 'Interview Prep', icon: 'bi-chat-quote' },
    { to: '/scholarships', label: 'Scholarships', icon: 'bi-mortarboard' },
  ],
  pg: [
    { to: '/portal/pg', label: 'Dashboard', icon: 'bi-speedometer2' },
    { to: '/portal/pg/path', label: 'Path Recommender', icon: 'bi-signpost-split' },
    { to: '/portal/pg/research', label: 'Research Finder', icon: 'bi-search' },
    { to: '/portal/pg/abroad', label: 'Abroad Guide', icon: 'bi-globe' },
    { to: '/mentors', label: 'Mentor Connect', icon: 'bi-people' },
    { to: '/scholarships', label: 'Scholarships', icon: 'bi-mortarboard' },
  ],
  professional: [
    { to: '/portal/professional', label: 'Dashboard', icon: 'bi-speedometer2' },
    { to: '/portal/professional/skills', label: 'Skill Gap Analyzer', icon: 'bi-graph-up-arrow' },
    { to: '/portal/professional/courses', label: 'Course Recommender', icon: 'bi-play-circle' },
    { to: '/portal/professional/switch', label: 'Career Switch', icon: 'bi-arrow-repeat' },
    { to: '/portal/professional/salary', label: 'Salary Insights', icon: 'bi-currency-rupee' },
    { to: '/portal/professional/certs', label: 'Certifications', icon: 'bi-patch-check' },
    { to: '/mentors', label: 'Mentor Connect', icon: 'bi-people' },
  ],
};

const PORTAL_COLORS = {
  tenth: '#7c3aed',
  twelfth: '#16a34a',
  ug: '#0891b2',
  pg: '#d97706',
  professional: '#dc2626',
};

const PORTAL_TITLES = {
  tenth: '10th Student',
  twelfth: '12th Student',
  ug: 'UG Student',
  pg: 'PG Student',
  professional: 'Professional',
};

const Sidebar = () => {
  const { user } = useSelector((s) => s.auth);
  if (!user) return null;

  const links = PORTAL_LINKS[user.userType] || [];
  const color  = PORTAL_COLORS[user.userType];
  const title  = PORTAL_TITLES[user.userType];

  return (
    <aside className="cc-sidebar d-none d-md-flex flex-column py-3">
      {/* Portal header */}
      <div className="px-3 mb-3">
        <div className="rounded-3 p-3 text-white" style={{ background: color }}>
          <div className="fw-bold" style={{ fontSize: '0.85rem' }}>{title} Portal</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>{user.name}</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-grow-1">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to.split('/').length <= 3}
            className={({ isActive }) => `cc-nav-link ${isActive ? 'active' : ''}`}
            style={({ isActive }) => isActive ? { background: color } : {}}>
            <i className={`bi ${link.icon}`} style={{ fontSize: '1rem' }}></i>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Common links */}
      <div className="border-top pt-2 mt-2">
        <NavLink to="/dashboard" className="cc-nav-link">
          <i className="bi bi-house"></i><span>Home</span>
        </NavLink>
        <NavLink to="/mentors" className="cc-nav-link">
          <i className="bi bi-people"></i><span>Mentors</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
