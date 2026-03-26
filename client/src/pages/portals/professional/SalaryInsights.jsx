import { useState } from 'react';

const SALARY_DATA = {
  'Software Engineer': { min: 6, max: 25, avg: 12, roles: ['Junior SDE', 'SDE II', 'Senior SDE'], growth: '+15%' },
  'Data Scientist': { min: 8, max: 28, avg: 15, roles: ['Data Analyst', 'Data Scientist', 'Lead DS'], growth: '+22%' },
  'Product Manager': { min: 10, max: 35, avg: 20, roles: ['APM', 'PM', 'Senior PM'], growth: '+18%' },
  'UX Designer': { min: 5, max: 20, avg: 10, roles: ['Junior UX', 'UX Designer', 'Product Designer'], growth: '+12%' },
};

const SalaryInsights = () => {
  const [role, setRole] = useState('Software Engineer');
  const data = SALARY_DATA[role];

  return (
    <div className="animate-fadeInUp portal-professional pb-5">
       <div className="d-flex align-items-center justify-content-between mb-5">
         <div>
           <h4 className="fw-bold mb-0"><i className="bi bi-cash-stack me-2 text-success"></i>Salary Benchmarking</h4>
           <p className="text-muted small mb-0">Compare market rates, negotiate better, and track salary growth.</p>
         </div>
       </div>

       <div className="row g-4 mb-5">
         <div className="col-lg-4">
           <div className="cc-card card border-0 h-100 p-4">
              <label className="fw-semibold small form-label text-muted">Select Role to Benchmark</label>
              <select className="form-select form-select-lg mb-4 fw-bold text-success border-success" 
                      value={role} onChange={(e) => setRole(e.target.value)}>
                {Object.keys(SALARY_DATA).map(r => <option key={r} value={r}>{r}</option>)}
              </select>

              <label className="fw-semibold small form-label text-muted">Location</label>
              <select className="form-select mb-4">
                <option value="blr">Bangalore, India</option>
                <option value="hyd">Hyderabad, India</option>
                <option value="ncr">Delhi NCR, India</option>
                <option value="pun">Pune, India</option>
              </select>

              <label className="fw-semibold small form-label text-muted">Experience Level</label>
              <select className="form-select mb-4">
                <option value="mid">Mid Level (3-5 Yrs)</option>
                <option value="entry">Entry Level (0-2 Yrs)</option>
                <option value="senior">Senior (5+ Yrs)</option>
              </select>

              <button className="btn btn-success w-100 fw-bold mt-auto py-2">Compare My Salary</button>
           </div>
         </div>

         <div className="col-lg-8">
            <div className="cc-card card border-0 h-100 bg-white shadow-sm">
               <div className="card-body p-4 p-md-5">
                  <div className="d-flex justify-content-between align-items-center flex-wrap mb-5">
                     <div>
                       <h2 className="fw-bold mb-0"><i className="bi bi-currency-rupee"></i>{data.avg} Lakhs</h2>
                       <span className="text-muted fw-semibold">Average Base Pay (Per Year)</span>
                     </div>
                     <span className="badge bg-success bg-opacity-10 text-success cc-badge fs-6 px-3 py-2 rounded-pill border border-success border-opacity-25">
                       <i className="bi bi-graph-up-arrow me-2"></i>{data.growth} YoY Demand
                     </span>
                  </div>

                  <h6 className="fw-bold mb-4">Salary Distribution <span className="text-muted fw-normal small ms-2">(in LPA)</span></h6>
                  <div className="position-relative w-100 px-3 py-5 bg-light rounded-4 mb-5 d-flex align-items-center justify-content-between" style={{ minHeight: 120 }}>
                     {/* Timeline Line */}
                     <div className="position-absolute start-0 end-0 bg-success opacity-25" style={{ height: 4, top: '50%', transform: 'translateY(-50%)', margin: '0 40px' }}></div>
                     
                     <div className="position-relative z-1 text-center">
                       <div className="bg-white border border-2 border-secondary rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm mx-auto mb-2" style={{ width: 40, height: 40 }}>{data.min}</div>
                       <span className="small text-muted fw-semibold d-block">Minimum</span>
                     </div>
                     
                     <div className="position-relative z-1 text-center">
                       <div className="bg-success text-white border border-3 border-white rounded-circle d-flex align-items-center justify-content-center fw-bold shadow mx-auto mb-2" style={{ width: 60, height: 60, fontSize: '1.25rem' }}>{data.avg}</div>
                       <span className="small text-success fw-bold d-block">Median Pay</span>
                     </div>

                     <div className="position-relative z-1 text-center">
                       <div className="bg-white border border-2 border-primary rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm mx-auto mb-2" style={{ width: 40, height: 40 }}>{data.max}</div>
                       <span className="small text-primary fw-semibold d-block">Maximum</span>
                     </div>
                  </div>

                  <div className="row g-4 border-top pt-4">
                     <div className="col-md-6">
                        <h6 className="fw-bold text-dark"><i className="bi bi-building me-2 text-info"></i>Top Paying Companies</h6>
                        <ul className="text-muted small ps-3 mb-0">
                          <li className="mb-1">FAANG (Google, Amazon)</li>
                          <li className="mb-1">High-Growth Startups (Cred, Stripe)</li>
                          <li>Fintech (Goldman Sachs)</li>
                        </ul>
                     </div>
                     <div className="col-md-6">
                        <h6 className="fw-bold text-dark"><i className="bi bi-trophy me-2 text-warning"></i>Key Competencies</h6>
                        <div className="d-flex flex-wrap gap-1 mt-2">
                           <span className="badge bg-light text-dark border">System Architecture</span>
                           <span className="badge bg-light text-dark border">Cloud (AWS/GCP)</span>
                           <span className="badge bg-light text-dark border">Team Leadership</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default SalaryInsights;
