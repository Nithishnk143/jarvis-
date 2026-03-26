import { useState } from 'react';

const DEGREE_DATA = {
  'B.Tech': {
    title: 'Bachelor of Technology (B.Tech)', duration: '4 Years',
    difficulty: 'High', focus: 'Practical Engineering & Tech',
    cost: '₹4L - ₹20L', salary: '₹6L - ₹25L+',
    roles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
    pros: ['High earning potential', 'Global opportunities', 'Dynamic field'],
    cons: ['Highly competitive entrance', 'Requires continuous upskilling']
  },
  'B.Sc': {
    title: 'Bachelor of Science (B.Sc)', duration: '3-4 Years',
    difficulty: 'Medium', focus: 'Theoretical Science & Research',
    cost: '₹50K - ₹5L', salary: '₹3L - ₹8L+',
    roles: ['Research Analyst', 'Lab Technician', 'Professor (after PG)'],
    pros: ['Foundation for research/PhD', 'Lower college fees', 'Less stressful than B.Tech'],
    cons: ['Lower starting salary', 'Often requires Masters/PhD for growth']
  },
  'BBA': {
    title: 'Bachelor of Business Admin (BBA)', duration: '3 Years',
    difficulty: 'Low-Medium', focus: 'Management & Operations',
    cost: '₹2L - ₹10L', salary: '₹4L - ₹10L+',
    roles: ['Business Analyst', 'HR Manager', 'Consultant'],
    pros: ['Prepares for MBA', 'Develops soft skills', 'No heavy math/coding'],
    cons: ['Lower value without MBA', 'Broad scope can lack specialization']
  },
  'BA LLB': {
    title: 'BA LLB (Integrated Law)', duration: '5 Years',
    difficulty: 'High', focus: 'Legal Studies & Humanities',
    cost: '₹5L - ₹15L', salary: '₹5L - ₹15L+',
    roles: ['Corporate Lawyer', 'Litigator', 'Legal Advisor'],
    pros: ['Respected profession', 'High earnings in corporate', 'Saves 1 year (integrated)'],
    cons: ['Longduration (5 yrs)', 'Requires massive reading/memory', 'Initial struggle in litigation']
  }
};

const WhatIfSimulator = () => {
  const [degLeft, setDegLeft] = useState('B.Tech');
  const [degRight, setDegRight] = useState('B.Sc');

  const left = DEGREE_DATA[degLeft];
  const right = DEGREE_DATA[degRight];

  return (
    <div className="animate-fadeInUp portal-twelfth pb-5">
      <div className="text-center mb-5">
        <h3 className="fw-bold"><i className="bi bi-arrow-left-right text-warning me-2"></i>What-If Simulator</h3>
        <p className="text-muted mb-0">Confused between two degrees? Compare them side-by-side.</p>
      </div>

      <div className="row g-0 rounded-4 overflow-hidden cc-card border-0 shadow-lg">
        {/* Left Column */}
        <div className="col-md-6 border-end">
          <div className="p-4 bg-light border-bottom text-center">
            <select className="form-select form-select-lg fw-bold text-center border-0 shadow-sm mx-auto"
                    style={{ maxWidth: 300, cursor: 'pointer' }}
                    value={degLeft} onChange={(e) => setDegLeft(e.target.value)}>
              {Object.keys(DEGREE_DATA).map(d => <option key={`l-${d}`} value={d}>{DEGREE_DATA[d].title}</option>)}
            </select>
          </div>
          <div className="p-4 p-lg-5 text-center">
            <div className="row g-4 mb-5">
              <div className="col-12"><div className="text-muted small fw-bold text-uppercase mb-1">Duration</div><div className="fs-5 fw-semibold"><i className="bi bi-clock me-2 text-warning"></i>{left.duration}</div></div>
              <div className="col-12"><div className="text-muted small fw-bold text-uppercase mb-1">Focus</div><div className="fs-5 fw-semibold"><i className="bi bi-bullseye me-2 text-danger"></i>{left.focus}</div></div>
              <div className="col-6"><div className="text-muted small fw-bold text-uppercase mb-1">Avg Cost</div><div className="fs-5 fw-semibold text-danger">{left.cost}</div></div>
              <div className="col-6"><div className="text-muted small fw-bold text-uppercase mb-1">Avg Salary</div><div className="fs-5 fw-semibold text-success">{left.salary}</div></div>
            </div>

            <div className="text-start mb-4">
              <h6 className="fw-bold"><i className="bi bi-briefcase text-primary me-2"></i>Top Roles</h6>
              <div className="d-flex flex-wrap gap-2">
                {left.roles.map(r => <span key={r} className="badge bg-light text-dark border cc-badge">{r}</span>)}
              </div>
            </div>

            <div className="text-start mb-4">
              <h6 className="fw-bold text-success"><i className="bi bi-plus-circle me-2"></i>Pros</h6>
              <ul className="text-muted small px-3">
                {left.pros.map(p => <li key={p} className="mb-1">{p}</li>)}
              </ul>
            </div>

            <div className="text-start">
              <h6 className="fw-bold text-danger"><i className="bi bi-dash-circle me-2"></i>Cons</h6>
              <ul className="text-muted small px-3 mb-0">
                {left.cons.map(c => <li key={c} className="mb-1">{c}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 border-end">
          <div className="p-4 border-bottom text-center" style={{ backgroundColor: '#f1f5f9' }}>
            <select className="form-select form-select-lg fw-bold text-center border-0 shadow-sm mx-auto"
                    style={{ maxWidth: 300, cursor: 'pointer' }}
                    value={degRight} onChange={(e) => setDegRight(e.target.value)}>
              {Object.keys(DEGREE_DATA).map(d => <option key={`r-${d}`} value={d}>{DEGREE_DATA[d].title}</option>)}
            </select>
          </div>
          <div className="p-4 p-lg-5 text-center">
            <div className="row g-4 mb-5">
              <div className="col-12"><div className="text-muted small fw-bold text-uppercase mb-1">Duration</div><div className="fs-5 fw-semibold"><i className="bi bi-clock me-2 text-warning"></i>{right.duration}</div></div>
              <div className="col-12"><div className="text-muted small fw-bold text-uppercase mb-1">Focus</div><div className="fs-5 fw-semibold"><i className="bi bi-bullseye me-2 text-danger"></i>{right.focus}</div></div>
              <div className="col-6"><div className="text-muted small fw-bold text-uppercase mb-1">Avg Cost</div><div className="fs-5 fw-semibold text-danger">{right.cost}</div></div>
              <div className="col-6"><div className="text-muted small fw-bold text-uppercase mb-1">Avg Salary</div><div className="fs-5 fw-semibold text-success">{right.salary}</div></div>
            </div>

            <div className="text-start mb-4">
              <h6 className="fw-bold"><i className="bi bi-briefcase text-primary me-2"></i>Top Roles</h6>
              <div className="d-flex flex-wrap gap-2">
                {right.roles.map(r => <span key={r} className="badge bg-light text-dark border cc-badge">{r}</span>)}
              </div>
            </div>

            <div className="text-start mb-4">
              <h6 className="fw-bold text-success"><i className="bi bi-plus-circle me-2"></i>Pros</h6>
              <ul className="text-muted small px-3">
                {right.pros.map(p => <li key={p} className="mb-1">{p}</li>)}
              </ul>
            </div>

            <div className="text-start">
              <h6 className="fw-bold text-danger"><i className="bi bi-dash-circle me-2"></i>Cons</h6>
              <ul className="text-muted small px-3 mb-0">
                {right.cons.map(c => <li key={c} className="mb-1">{c}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIfSimulator;
