import { useState } from 'react';

const PREP_DATA = {
  'Software Engineer': [
    { type: 'Data Structures', qs: ['Reverse a Linked List', 'Find cycle in a graph', 'Implement LRU Cache'], link: 'Leetcode / Striver SDE Sheet' },
    { type: 'System Design', qs: ['Design URL Shortener', 'Design WhatsApp architecture', 'Rate limiting strategy'], link: 'Grokking the System Design' },
    { type: 'React.js', qs: ['Virtual DOM vs Real DOM', 'React Lifecycle vs Hooks', 'Custom Hook implementation'], link: 'React Docs' }
  ],
  'Business Analyst': [
    { type: 'SQL & Data', qs: ['Difference between CTE and Subquery', 'Write a query to find 2nd highest salary', 'Explain window functions'], link: 'Mode SQL' },
    { type: 'Case Studies', qs: ['Guesstimate: How many flights take off daily in India?', 'Profitability case: Zomato decreasing profits'], link: 'Victor Cheng' }
  ]
};

const InterviewPrep = () => {
  const [role, setRole] = useState('Software Engineer');
  const data = PREP_DATA[role] || [];

  return (
    <div className="animate-fadeInUp portal-ug pb-5">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-chat-quote-fill me-2 text-primary"></i>Interview Prep</h4>
          <p className="text-muted small mb-0">Role-specific questions and study guides.</p>
        </div>
      </div>

      <div className="cc-card card mb-4 border-0">
         <div className="card-body p-4 bg-primary bg-opacity-10 rounded">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div>
                <div className="text-muted small fw-bold text-uppercase">Preparing For</div>
                <select className="form-select bg-transparent border-0 fw-bold fs-4 text-primary ms-n2" style={{ cursor: 'pointer', boxShadow: 'none' }}
                        value={role} onChange={(e) => setRole(e.target.value)}>
                  {Object.keys(PREP_DATA).map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
            </div>
         </div>
      </div>

      <div className="row g-4 mb-4">
        {data.map((cat, i) => (
          <div key={i} className="col-lg-6">
             <div className="cc-card card h-100 border-0">
               <div className="card-body p-4">
                  <h6 className="fw-bold mb-3 d-flex align-items-center justify-content-between">
                    <span><i className="bi bi-bookmarks-fill me-2 text-warning"></i>{cat.type}</span>
                    <span className="badge bg-light text-dark cc-badge fw-normal"><i className="bi bi-link-45deg me-1"></i>{cat.link}</span>
                  </h6>
                  <ul className="list-group list-group-flush border-0">
                    {cat.qs.map((q, idx) => (
                      <li key={idx} className="list-group-item border-0 px-0 d-flex gap-2">
                        <i className="bi bi-arrow-right-short text-primary"></i>
                        <span className="text-dark small lh-sm">{q}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-outline-primary btn-sm w-100 mt-3 pt-2">View Answers & Theory</button>
               </div>
             </div>
          </div>
        ))}
      </div>
      
      <div className="cc-card card border-0 bg-dark text-white text-center p-5 rounded-4 position-relative overflow-hidden mb-5">
         <i className="bi bi-mic-fill position-absolute text-white opacity-10" style={{ fontSize: '15rem', top: '-20%', right: '-5%' }}></i>
         <div className="position-relative z-1">
           <h3 className="fw-bold mb-2">Practice Mock Interview</h3>
           <p className="opacity-75 mb-4">Book a 1-on-1 mock interview with an industry expert to validate your preparation.</p>
           <button className="btn btn-primary fw-bold text-white fs-5 px-5 py-3 rounded-pill shadow-lg">Book Session</button>
         </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
