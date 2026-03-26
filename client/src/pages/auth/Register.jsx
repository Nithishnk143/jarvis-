import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCredentials } from '../../redux/slices/authSlice';
import api from '../../utils/api';

const USER_TYPES = [
  { value: 'tenth',        label: '10th Standard',   icon: '📚', color: '#7c3aed' },
  { value: 'twelfth',      label: '12th Standard',   icon: '🎓', color: '#16a34a' },
  { value: 'ug',           label: 'UG Student',       icon: '🏛️', color: '#0891b2' },
  { value: 'pg',           label: 'PG Student',       icon: '🔬', color: '#d97706' },
  { value: 'professional', label: 'Professional',     icon: '💼', color: '#dc2626' },
];

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', userType: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleTypeSelect = (value) => setForm({ ...form, userType: value });

  const handleStep1 = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match'); return;
    }
    setError('');
    setStep(2);
  };

  const handleSubmit = async () => {
    if (!form.userType) { setError('Please select your category'); return; }
    setLoading(true);
    try {
      const { data } = await api.post('/auth/register', {
        name: form.name, email: form.email, password: form.password, userType: form.userType,
      });
      dispatch(setCredentials(data));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center py-5"
         style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}>
      <div className="container" style={{ maxWidth: 520 }}>
        <div className="card cc-card shadow-lg border-0 animate-fadeInUp">
          <div className="card-body p-4 p-md-5">
            <div className="text-center mb-4">
              <div style={{ fontSize: '3rem' }}>🧭</div>
              <h1 className="h3 fw-bold mb-1">Career<span style={{ color: '#6366f1' }}>Compass</span></h1>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <small className="fw-semibold text-muted">Step {step} of 2</small>
                <small className="text-muted">{step === 1 ? 'Account Details' : 'Select Your Category'}</small>
              </div>
              <div className="progress" style={{ height: 4 }}>
                <div className="progress-bar bg-primary" style={{ width: step === 1 ? '50%' : '100%' }}></div>
              </div>
            </div>

            {error && (
              <div className="alert alert-danger py-2 d-flex align-items-center gap-2">
                <i className="bi bi-exclamation-triangle-fill"></i><span>{error}</span>
              </div>
            )}

            {step === 1 && (
              <form onSubmit={handleStep1}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-person"></i></span>
                    <input type="text" name="name" className="form-control" placeholder="Your full name"
                           value={form.name} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                    <input type="email" name="email" className="form-control" placeholder="you@example.com"
                           value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-lock"></i></span>
                    <input type="password" name="password" className="form-control" placeholder="Min 6 characters"
                           value={form.password} onChange={handleChange} minLength={6} required />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                    <input type="password" name="confirmPassword" className="form-control" placeholder="Repeat password"
                           value={form.confirmPassword} onChange={handleChange} required />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-semibold py-2" id="registerNext">
                  Continue <i className="bi bi-arrow-right ms-1"></i>
                </button>
              </form>
            )}

            {step === 2 && (
              <div>
                <h6 className="fw-bold mb-3">I am a...</h6>
                <div className="row g-2 mb-4">
                  {USER_TYPES.map((t) => (
                    <div key={t.value} className="col-12">
                      <div className={`card border-2 cursor-pointer ${form.userType === t.value ? 'border-primary bg-primary bg-opacity-10' : ''}`}
                           style={{ cursor: 'pointer', borderRadius: 12, transition: 'all 0.15s' }}
                           onClick={() => handleTypeSelect(t.value)}>
                        <div className="card-body py-2 px-3 d-flex align-items-center gap-3">
                          <span style={{ fontSize: '1.5rem' }}>{t.icon}</span>
                          <div>
                            <div className="fw-semibold" style={{ fontSize: '0.9rem' }}>{t.label}</div>
                          </div>
                          {form.userType === t.value && (
                            <i className="bi bi-check-circle-fill text-primary ms-auto"></i>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary flex-grow-1" onClick={() => setStep(1)}>
                    <i className="bi bi-arrow-left me-1"></i>Back
                  </button>
                  <button className="btn btn-success flex-grow-1 fw-semibold" onClick={handleSubmit}
                          disabled={loading || !form.userType} id="registerSubmit">
                    {loading ? <span className="spinner-border spinner-border-sm"></span> : 'Create Account 🚀'}
                  </button>
                </div>
              </div>
            )}

            <hr className="my-4" />
            <p className="text-center text-muted small mb-0">
              Already have an account? <Link to="/login" className="fw-semibold text-primary">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
