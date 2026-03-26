import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCredentials } from '../../redux/slices/authSlice';
import api from '../../utils/api';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await api.post('/auth/login', form);
      dispatch(setCredentials(data));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center"
         style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="container" style={{ maxWidth: 460 }}>
        <div className="card cc-card shadow-lg border-0 animate-fadeInUp">
          <div className="card-body p-4 p-md-5">
            {/* Logo */}
            <div className="text-center mb-4">
              <div style={{ fontSize: '3rem' }}>🧭</div>
              <h1 className="h3 fw-bold mb-1">
                Career<span style={{ color: '#6366f1' }}>Compass</span>
              </h1>
              <p className="text-muted small">Your personalized career guide</p>
            </div>

            <h5 className="fw-bold mb-4">Welcome back!</h5>

            {error && (
              <div className="alert alert-danger d-flex align-items-center gap-2 py-2" role="alert">
                <i className="bi bi-exclamation-triangle-fill"></i>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="loginEmail">Email address</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                  <input id="loginEmail" type="email" name="email" className="form-control"
                         placeholder="you@example.com" value={form.email}
                         onChange={handleChange} required />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold" htmlFor="loginPassword">Password</label>
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-lock"></i></span>
                  <input id="loginPassword" type="password" name="password" className="form-control"
                         placeholder="••••••••" value={form.password}
                         onChange={handleChange} required />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-semibold py-2"
                      disabled={loading} id="loginSubmit">
                {loading ? (
                  <><span className="spinner-border spinner-border-sm me-2"></span>Signing in...</>
                ) : 'Sign In'}
              </button>
            </form>

            <hr className="my-4" />
            <p className="text-center text-muted small mb-0">
              Don't have an account?{' '}
              <Link to="/register" className="fw-semibold text-primary">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
