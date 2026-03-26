import { useState } from 'react';

const COLLEGES = [
  { id: 1, name: 'Indian Institute of Technology (IIT)', location: 'Mumbai, MH', type: 'Govt', fees: '₹2.5L/yr', ranking: 1, exams: ['JEE Advanced'], degrees: ['B.Tech', 'BS'] },
  { id: 2, name: 'National Institute of Technology (NIT)', location: 'Trichy, TN', type: 'Govt', fees: '₹1.8L/yr', ranking: 8, exams: ['JEE Main'], degrees: ['B.Tech', 'B.Arch'] },
  { id: 3, name: 'Vellore Institute of Technology (VIT)', location: 'Vellore, TN', type: 'Private', fees: '₹3.5L/yr', ranking: 11, exams: ['VITEEE'], degrees: ['B.Tech', 'BCA', 'BBA'] },
  { id: 4, name: 'SRM Institute of Science and Tech', location: 'Chennai, TN', type: 'Private', fees: '₹3.0L/yr', ranking: 18, exams: ['SRMJEEE'], degrees: ['B.Tech', 'B.Sc'] },
  { id: 5, name: 'Delhi University (DU)', location: 'New Delhi, DL', type: 'Govt', fees: '₹25K/yr', ranking: 1, exams: ['CUET'], degrees: ['B.A', 'B.Sc', 'B.Com'] },
  { id: 6, name: 'Symbiosis International (Deemed)', location: 'Pune, MH', type: 'Private', fees: '₹4.0L/yr', ranking: 32, exams: ['SET'], degrees: ['BBA', 'BCA', 'BA LLB'] },
  { id: 7, name: 'All India Institute of Medical Sci.', location: 'Delhi, DL', type: 'Govt', fees: '₹6K/yr', ranking: 1, exams: ['NEET'], degrees: ['MBBS'] },
  { id: 8, name: 'Christian Medical College (CMC)', location: 'Vellore, TN', type: 'Private', fees: '₹1.5L/yr', ranking: 3, exams: ['NEET'], degrees: ['MBBS', 'B.Sc Nursing'] },
];

const CollegeFinder = () => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [degreeFilter, setDegreeFilter] = useState('All');

  const filtered = COLLEGES.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.location.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === 'All' ? true : c.type === typeFilter;
    const matchDegree = degreeFilter === 'All' ? true : c.degrees.some(d => d.includes(degreeFilter));
    return matchSearch && matchType && matchDegree;
  });

  return (
    <div className="animate-fadeInUp portal-twelfth">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 gap-2">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-building me-2 text-success"></i>College Finder</h4>
          <p className="text-muted small mb-0">Search and filter top colleges in India</p>
        </div>
        <span className="badge bg-success rounded-pill px-3 py-2">{filtered.length} Colleges Found</span>
      </div>

      <div className="cc-card card mb-4 border-0">
        <div className="card-body p-4">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label small fw-semibold text-muted">Search Name or Location</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><i className="bi bi-search text-muted"></i></span>
                <input className="form-control border-start-0 ps-0" placeholder="e.g. IIT, Delhi, VIT..."
                       value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
            </div>
            <div className="col-md-3">
              <label className="form-label small fw-semibold text-muted">Institution Type</label>
              <select className="form-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="All">All Types</option>
                <option value="Govt">Government / Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label small fw-semibold text-muted">Degree Offered</label>
              <select className="form-select" value={degreeFilter} onChange={(e) => setDegreeFilter(e.target.value)}>
                <option value="All">All Degrees</option>
                <option value="B.Tech">B.Tech / B.E.</option>
                <option value="MBBS">MBBS / Medical</option>
                <option value="BBA">BBA / Business</option>
                <option value="B.Com">B.Com / Commerce</option>
                <option value="B.A">B.A / Arts</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle cc-card overflow-hidden" style={{ borderRadius: 12 }}>
          <thead className="table-light">
            <tr>
              <th className="py-3 px-4 border-0">College Name</th>
              <th className="py-3 px-4 border-0">Location</th>
              <th className="py-3 px-4 border-0">Type</th>
              <th className="py-3 px-4 border-0">Approx. Fees</th>
              <th className="py-3 px-4 border-0 text-center">NIRF Rank</th>
              <th className="py-3 px-4 border-0 text-end">Entrance Exam</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td className="px-4 py-3">
                  <div className="fw-semibold text-dark">{c.name}</div>
                  <div className="d-flex flex-wrap gap-1 mt-1">
                    {c.degrees.map(d => <span key={d} className="badge bg-light text-secondary border cc-badge" style={{ fontSize: '0.65rem' }}>{d}</span>)}
                  </div>
                </td>
                <td className="px-4 py-3 text-muted"><i className="bi bi-geo-alt me-1"></i>{c.location}</td>
                <td className="px-4 py-3">
                  <span className={`badge ${c.type === 'Govt' ? 'bg-info bg-opacity-10 text-info' : 'bg-secondary bg-opacity-10 text-secondary'} cc-badge`}>
                    {c.type}
                  </span>
                </td>
                <td className="px-4 py-3 fw-semibold text-success">{c.fees}</td>
                <td className="px-4 py-3 text-center"><span className="badge bg-dark rounded-circle p-2" style={{ width: 30, height: 30 }}>{c.ranking}</span></td>
                <td className="px-4 py-3 text-end">
                  {c.exams.map(ex => <span key={ex} className="badge bg-primary cc-badge me-1">{ex}</span>)}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-5 text-muted">
                  <i className="bi bi-search d-block mb-3" style={{ fontSize: '2rem' }}></i>
                  No colleges match your filters. Try adjusting your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollegeFinder;
