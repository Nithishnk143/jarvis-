import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';
import { toggleDarkMode, setLanguage } from '../redux/slices/uiSlice';

const PORTAL_META = {
  tenth:        { label: '10th Student',       color: '#7c3aed', icon: 'bi-mortarboard-fill' },
  twelfth:      { label: '12th Student',       color: '#16a34a', icon: 'bi-book-fill' },
  ug:           { label: 'UG Student',          color: '#0891b2', icon: 'bi-briefcase-fill' },
  pg:           { label: 'PG Student',          color: '#d97706', icon: 'bi-award-fill' },
  professional: { label: 'Professional',        color: '#dc2626', icon: 'bi-person-workspace' },
};

const LANG_LABELS = { en: 'English', hi: 'हिंदी', ta: 'தமிழ்' };

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const { darkMode, language } = useSelector((s) => s.ui);
  const meta = user ? PORTAL_META[user.userType] : null;

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom sticky-top"
         style={{ background: 'var(--card-bg)', zIndex: 200 }}>
      <div className="container-fluid px-3">
        {/* Brand */}
        <NavLink className="navbar-brand fw-800 d-flex align-items-center gap-2" to="/dashboard">
          <span style={{ fontSize: '1.4rem' }}>🧭</span>
          <span className="fw-bold" style={{ fontSize: '1.1rem', letterSpacing: '-0.5px' }}>
            Career<span style={{ color: meta?.color || '#6366f1' }}>Compass</span>
          </span>
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold ms-lg-4">
            {meta && (
              <li className="nav-item">
                <NavLink className="nav-link" to={meta.to}>
                  <i className="bi bi-box-arrow-in-right me-1 text-primary"></i> Go to My Portal
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/scholarships">
                <i className="bi bi-mortarboard me-1 text-success"></i> Scholarships
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/roadmaps">
                <i className="bi bi-signpost-split me-1 text-warning"></i> Roadmap
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {/* Portal badge */}
            {meta && (
              <li className="nav-item">
                <span className="badge rounded-pill fw-semibold"
                      style={{ background: meta.color, fontSize: '0.75rem' }}>
                  <i className={`bi ${meta.icon} me-1`}></i>{meta.label}
                </span>
              </li>
            )}

            {/* Language toggle */}
            <li className="nav-item dropdown">
              <button className="btn btn-sm btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
                <i className="bi bi-translate me-1"></i>{LANG_LABELS[language]}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {Object.entries(LANG_LABELS).map(([code, label]) => (
                  <li key={code}>
                    <button className={`dropdown-item ${language === code ? 'active' : ''}`}
                            onClick={() => dispatch(setLanguage(code))}>
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </li>

            {/* Dark mode toggle */}
            <li className="nav-item">
              <button className="btn btn-sm btn-outline-secondary" onClick={() => dispatch(toggleDarkMode())}
                      title="Toggle dark mode">
                <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
              </button>
            </li>

            {/* Notifications */}
            {user && (
              <li className="nav-item">
                <NavLink to="/notifications" className="btn btn-sm btn-outline-secondary position-relative">
                  <i className="bi bi-bell-fill"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style={{ fontSize: '0.6rem' }}>3</span>
                </NavLink>
              </li>
            )}

            {/* User avatar + dropdown */}
            {user ? (
              <li className="nav-item dropdown">
                <button className="btn btn-sm d-flex align-items-center gap-2 dropdown-toggle"
                        style={{ background: meta?.color, color: '#fff', borderRadius: '20px', padding: '4px 12px' }}
                        data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle"></i>
                  <span className="d-none d-md-inline">{user.name?.split(' ')[0]}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><span className="dropdown-item-text fw-semibold">{user.name}</span></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item" to="/dashboard"><i className="bi bi-speedometer2 me-2"></i>Dashboard</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/scholarships"><i className="bi bi-mortarboard me-2"></i>Scholarships</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/mentors"><i className="bi bi-people me-2"></i>Mentors</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      <i className="bi bi-box-arrow-right me-2"></i>Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink to="/login" className="btn btn-primary btn-sm">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
