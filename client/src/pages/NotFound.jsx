import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light text-center px-3 animate-fadeInUp">
      <div>
        <div style={{ fontSize: '8rem', lineHeight: 1 }} className="fw-bold text-primary mb-2">404</div>
        <h3 className="fw-bold mb-3">Page Not Found</h3>
        <p className="text-muted mb-4 max-w-sm mx-auto" style={{ maxWidth: 400 }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <NavLink to="/" className="btn btn-primary fw-semibold px-4 py-2 rounded-pill shadow-sm">
          <i className="bi bi-house me-2"></i>Return Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
