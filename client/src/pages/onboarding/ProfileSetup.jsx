import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import { updateProfile } from '../../redux/slices/authSlice';

const ProfileSetup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  
  const [formData, setFormData] = useState({
    userType: user?.userType || '',
    interests: [],
    educationLevel: '',
  });
  const [loading, setLoading] = useState(false);

  const PORTAL_TYPES = [
    { id: 'tenth', label: '10th Standard', icon: '📚' },
    { id: 'twelfth', label: '12th Standard', icon: '🎓' },
    { id: 'ug', label: 'Undergraduate (UG)', icon: '🏛️' },
    { id: 'pg', label: 'Postgraduate (PG)', icon: '🔬' },
    { id: 'professional', label: 'Working Professional', icon: '💼' }
  ];

  const INTERESTS = ['Technology', 'Business', 'Design', 'Science', 'Arts', 'Healthcare', 'Engineering', 'Law'];

  const toggleInterest = (i) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(i) ? prev.interests.filter(x => x !== i) : [...prev.interests, i]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.put('/profile', formData);
      dispatch(updateProfile(data));
      navigate('/onboarding');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-fadeInUp d-flex align-items-center justify-content-center py-5 min-vh-100 bg-light">
      <div className="container" style={{ maxWidth: 600 }}>
        
        <div className="text-center mb-4">
          <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: 64, height: 64, fontSize: '2rem' }}>
            <i className="bi bi-person-gear"></i>
          </div>
          <h3 className="fw-bold">Complete Your Profile</h3>
          <p className="text-muted">Tell us about yourself to personalize your CareerCompass experience.</p>
        </div>

        <div className="cc-card card border-0 shadow-sm">
          <div className="card-body p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              
              <div className="mb-4">
                <label className="form-label fw-bold small text-uppercase text-muted mb-3">1. Select Your Current Stage</label>
                <div className="row g-2">
                  {PORTAL_TYPES.map(type => (
                    <div key={type.id} className="col-12 col-sm-6 text-start">
                      <button type="button" 
                              className={`btn w-100 text-start py-2 px-3 fw-semibold border ${formData.userType === type.id ? 'btn-primary border-primary' : 'btn-light border-light'}`}
                              onClick={() => setFormData({...formData, userType: type.id})}>
                        <span className="me-2">{type.icon}</span> {type.label}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold small text-uppercase text-muted mb-3">2. Areas of Interest</label>
                <div className="d-flex flex-wrap gap-2">
                  {INTERESTS.map(int => (
                    <button type="button" key={int}
                            className={`badge border cc-badge px-3 py-2 ${formData.interests.includes(int) ? 'bg-primary text-white border-primary' : 'bg-white text-dark'}`}
                            onClick={() => toggleInterest(int)}>
                      {formData.interests.includes(int) ? <i className="bi bi-check me-1"></i> : <i className="bi bi-plus me-1"></i>}{int}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <label className="form-label fw-bold small text-uppercase text-muted mb-3">3. Current Education Level</label>
                <input type="text" className="form-control form-control-lg bg-light border-0" 
                       placeholder="e.g. Completed 10th, B.Tech 2nd Year, etc."
                       value={formData.educationLevel} onChange={(e) => setFormData({...formData, educationLevel: e.target.value})} />
              </div>

              <button type="submit" className="btn btn-primary w-100 py-3 fw-bold shadow-sm" disabled={loading || !formData.userType}>
                {loading ? <span className="spinner-border spinner-border-sm"></span> : 'Save & Continue'}
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileSetup;
