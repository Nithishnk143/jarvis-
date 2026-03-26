import { useState } from 'react';

const INTERNSHIPS = [
  { id: 1, role: 'Software Engineering Intern', company: 'Google', mode: 'On-site', loc: 'Bangalore', stipend: '₹1.5L/mo', duration: '2 Months', posted: '2 days ago', tag: 'Top Tier' },
  { id: 2, role: 'Frontend Intern (React)', company: 'Cred', mode: 'Hybrid', loc: 'Bangalore', stipend: '₹50K/mo', duration: '6 Months', posted: '1 week ago', tag: 'Fast-growing' },
  { id: 3, role: 'Data Science Intern', company: 'Amazon', mode: 'Remote', loc: 'Pan India', stipend: '₹80K/mo', duration: '3 Months', posted: '3 days ago', tag: 'Remote' },
  { id: 4, role: 'UI/UX Design Intern', company: 'Zomato', mode: 'On-site', loc: 'Gurgaon', stipend: '₹40K/mo', duration: '3 Months', posted: 'Just now', tag: 'Creative' },
  { id: 5, role: 'Business Analyst Intern', company: 'Flipkart', mode: 'Hybrid', loc: 'Bangalore', stipend: '₹60K/mo', duration: '6 Months', posted: '5 days ago', tag: 'Analytics' },
  { id: 6, role: 'Backend Dev Intern (Node)', company: 'Razorpay', mode: 'Remote', loc: 'Pan India', stipend: '₹55K/mo', duration: '4 Months', posted: '1 day ago', tag: 'Fintech' },
];

const InternshipBoard = () => {
  const [filter, setFilter] = useState('All');

  const filtered = INTERNSHIPS.filter(i => filter === 'All' ? true : i.mode === filter);

  return (
    <div className="animate-fadeInUp portal-ug">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 gap-2">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-laptop me-2 text-warning"></i>Internship Board</h4>
          <p className="text-muted small mb-0">Curated entry-level roles for UG students.</p>
        </div>
      </div>

      <div className="d-flex gap-2 mb-4">
        {['All', 'Remote', 'Hybrid', 'On-site'].map(f => (
          <button key={f} className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-outline-secondary'}`}
                  style={{ borderRadius: 20, fontWeight: 600 }} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filtered.map(int => (
          <div key={int.id} className="col-12 col-md-6 col-xl-4">
            <div className="cc-card card h-100 border-0 shadow-sm border-top border-5 border-info">
              <div className="card-body p-4 position-relative">
                <span className="badge bg-warning bg-opacity-10 text-warning cc-badge position-absolute top-0 end-0 mt-3 me-3">
                  <i className="bi bi-star-fill me-1"></i>{int.tag}
                </span>
                
                <h5 className="fw-bold pe-5">{int.role}</h5>
                <h6 className="text-muted small mb-3"><i className="bi bi-building me-1"></i>{int.company}</h6>
                
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-light text-dark border cc-badge"><i className="bi bi-geo-alt me-1 text-danger"></i>{int.loc} ({int.mode})</span>
                  <span className="badge bg-light text-dark border cc-badge"><i className="bi bi-clock me-1 text-info"></i>{int.duration}</span>
                </div>

                <div className="bg-success bg-opacity-10 text-success p-2 rounded-3 text-center fw-bold mb-3">
                  <i className="bi bi-currency-rupee me-1"></i>{int.stipend}
                </div>

                <div className="d-flex align-items-center justify-content-between mt-auto">
                  <span className="text-muted small"><i className="bi bi-stopwatch me-1"></i>{int.posted}</span>
                  <button className="btn btn-info btn-sm text-white fw-semibold px-3 rounded-pill shadow-sm">Apply Now <i className="bi bi-box-arrow-up-right ms-1"></i></button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-12 text-center py-5 text-muted">
            <i className="bi bi-clipboard-x fs-1 mb-2 d-block"></i>
            No internships match your filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipBoard;
