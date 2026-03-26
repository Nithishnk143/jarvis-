import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '../../utils/api';

const LEVEL_COLORS = { tenth:'purple', twelfth:'success', ug:'info', pg:'warning', professional:'danger', all:'secondary' };

const Scholarships = () => {
  const { user } = useSelector((s) => s.auth);
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(user?.userType || 'all');
  const [search, setSearch] = useState('');
  const [applied, setApplied] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get(`/scholarships?level=${filter === 'all' ? '' : filter}`);
        setScholarships(data);
      } catch { setScholarships([]); } finally { setLoading(false); }
    };
    fetchData();
  }, [filter]);

  const filtered = scholarships.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.provider.toLowerCase().includes(search.toLowerCase())
  );

  const toggleApplied = (id) => setApplied((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="animate-fadeInUp">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 gap-2">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-mortarboard-fill me-2 text-primary"></i>Scholarships</h4>
          <p className="text-muted small mb-0">Discover and track scholarship opportunities</p>
        </div>
        <span className="badge bg-primary rounded-pill" style={{ fontSize: '0.85rem' }}>
          {filtered.length} Available
        </span>
      </div>

      {/* Search & Filter */}
      <div className="row g-2 mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text"><i className="bi bi-search"></i></span>
            <input className="form-control" placeholder="Search scholarships..."
                   value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        <div className="col-md-6 d-flex gap-2 flex-wrap">
          {['all','tenth','twelfth','ug','pg','professional'].map((lv) => (
            <button key={lv}
              className={`btn btn-sm ${filter === lv ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setFilter(lv)} style={{ borderRadius: 20, fontWeight: 600, textTransform: 'capitalize' }}>
              {lv === 'all' ? 'All' : lv}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2 text-muted">Loading scholarships...</p>
        </div>
      ) : (
        <div className="row g-3">
          {filtered.map((s) => (
            <div key={s._id} className="col-12 col-md-6 col-xl-4">
              <div className="cc-card card h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="fw-bold mb-0" style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>{s.name}</h6>
                    <span className={`badge bg-${LEVEL_COLORS[s.level] || 'secondary'} cc-badge ms-2 flex-shrink-0`}>
                      {s.level}
                    </span>
                  </div>
                  <div className="text-muted small mb-1">
                    <i className="bi bi-building me-1"></i>{s.provider}
                  </div>
                  <div className="mb-2">
                    <span className="badge bg-success-subtle text-success fw-semibold me-1">
                      <i className="bi bi-currency-rupee"></i>{s.amount}
                    </span>
                    <span className="badge bg-danger-subtle text-danger fw-semibold">
                      <i className="bi bi-calendar me-1"></i>{s.deadline}
                    </span>
                  </div>
                  <p className="text-muted small mb-3">{s.eligibility}</p>
                  <div className="d-flex gap-2">
                    <a href={s.link} target="_blank" rel="noreferrer"
                       className="btn btn-primary btn-sm flex-grow-1">
                      <i className="bi bi-box-arrow-up-right me-1"></i>Apply
                    </a>
                    <button className={`btn btn-sm ${applied[s._id] ? 'btn-success' : 'btn-outline-success'}`}
                            onClick={() => toggleApplied(s._id)}
                            title={applied[s._id] ? 'Applied!' : 'Mark as Applied'}>
                      <i className={`bi ${applied[s._id] ? 'bi-check-circle-fill' : 'bi-check-circle'}`}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-12 text-center py-5">
              <i className="bi bi-search text-muted" style={{ fontSize: '3rem' }}></i>
              <p className="mt-2 text-muted">No scholarships found. Try a different filter.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Scholarships;
