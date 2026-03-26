import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '../../utils/api';

const MentorAvatar = ({ name }) => {
  const initials = name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
  const colors = ['#6366f1','#0891b2','#16a34a','#d97706','#dc2626','#7c3aed'];
  const bg = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className="mentor-avatar" style={{ background: bg }}>
      {initials}
    </div>
  );
};

const Mentors = () => {
  const { user } = useSelector((s) => s.auth);
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState(user?.userType || 'all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/mentors?type=${filter === 'all' ? '' : filter}`);
        setMentors(data);
      } catch { setMentors([]); } finally { setLoading(false); }
    };
    fetchData();
  }, [filter]);

  return (
    <div className="animate-fadeInUp">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 gap-2">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-people-fill me-2 text-info"></i>Mentor Connect</h4>
          <p className="text-muted small mb-0">Connect with industry experts and PhD scholars</p>
        </div>
      </div>

      {/* Filter */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        {['all','tenth','twelfth','ug','pg','professional'].map((t) => (
          <button key={t}
            className={`btn btn-sm ${filter === t ? 'btn-info text-white' : 'btn-outline-secondary'}`}
            onClick={() => setFilter(t)} style={{ borderRadius: 20, fontWeight: 600, textTransform: 'capitalize' }}>
            {t}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-info" role="status"></div>
        </div>
      ) : (
        <div className="row g-4">
          {mentors.map((m) => (
            <div key={m._id} className="col-12 col-md-6 col-xl-4">
              <div className="cc-card card h-100">
                <div className="card-body p-4">
                  <div className="d-flex gap-3 mb-3">
                    <MentorAvatar name={m.name} />
                    <div>
                      <h6 className="fw-bold mb-0">{m.name}</h6>
                      <div className="text-muted small">{m.role}</div>
                      <div className="text-muted small">{m.company}</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="text-warning">{'★'.repeat(Math.round(m.rating))}</span>
                    <span className="text-muted small">{m.rating}/5 · {m.sessions} sessions</span>
                  </div>
                  <p className="text-muted small mb-3" style={{ lineHeight: 1.5 }}>{m.bio}</p>
                  <div className="d-flex flex-wrap gap-1 mb-3">
                    {m.expertise?.map((e) => (
                      <span key={e} className="badge bg-light text-dark border cc-badge">{e}</span>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-info btn-sm text-white flex-grow-1"
                            onClick={() => setSelected(m)} data-bs-toggle="modal" data-bs-target="#mentorModal">
                      <i className="bi bi-envelope me-1"></i>Connect
                    </button>
                    <a href={m.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mentor Modal */}
      <div className="modal fade" id="mentorModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content cc-card border-0">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold">Connect with {selected?.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p className="text-muted small">Send a connection request to <strong>{selected?.name}</strong> to schedule a mentorship session.</p>
              <div className="mb-3">
                <label className="form-label fw-semibold small">Your Message</label>
                <textarea className="form-control" rows={4}
                          placeholder="Hi! I'm interested in career guidance for..."></textarea>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-info text-white flex-grow-1 fw-semibold" data-bs-dismiss="modal">
                  <i className="bi bi-send me-2"></i>Send Request
                </button>
                <button className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
