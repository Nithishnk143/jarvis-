import { useState } from 'react';

const ResearchFinder = () => {
  const [query, setQuery] = useState('');

  const grants = [
     { title: 'Prime Minister\'s Research Fellowship (PMRF)', org: 'MoE, Govt of India', amt: '₹70k-85k/mo', ddl: 'May 30, 2026', tags: ['PhD', 'Stem'] },
     { title: 'CSIR Junior Research Fellowship', org: 'CSIR India', amt: '₹37,000/mo', ddl: 'March 15, 2026', tags: ['Science', 'JRF'] },
     { title: 'Fulbright-Nehru Doctoral Fellowship', org: 'USIEF', amt: 'Variable', ddl: 'July 15, 2026', tags: ['US', 'Exchange'] }
  ];

  const labs = [
     { name: 'AI Institute', org: 'IIT Bombay', PI: 'Dr. A. Sharma', topic: 'NLP & GenAI', req: 'B.Tech/M.Tech in CS, strong PyTorch' },
     { name: 'Quantum Comm Lab', org: 'IISc Bangalore', PI: 'Dr. V. Menon', topic: 'Quantum Cryptography', req: 'Solid State Physics, Optics' }
  ];

  return (
     <div className="animate-fadeInUp portal-pg">
         <div className="d-flex align-items-center justify-content-between mb-4">
           <div>
             <h4 className="fw-bold mb-0"><i className="bi bi-journal-check me-2 text-info"></i>Research & Grants Finder</h4>
             <p className="text-muted small mb-0">Discover funding, fellowships, and open lab positions.</p>
           </div>
         </div>

         <div className="input-group mb-5 shadow-sm">
            <span className="input-group-text bg-white border-0"><i className="bi bi-search text-muted"></i></span>
            <input className="form-control form-control-lg border-0 bg-white" placeholder="Search for grants, labs, topics... (e.g., NLP, Fellowship)"
                   value={query} onChange={(e) => setQuery(e.target.value)} />
         </div>

         <div className="row g-5">
            <div className="col-lg-6">
               <h5 className="fw-bold mb-4 d-flex align-items-center"><i className="bi bi-cash-coin me-2 text-success"></i>Fellowships & Grants</h5>
               <div className="d-flex flex-column gap-3">
                 {grants.map((g, i) => (
                    <div key={i} className="cc-card card border-0 shadow-sm">
                       <div className="card-body p-4">
                          <h6 className="fw-bold mb-1">{g.title}</h6>
                          <div className="text-muted small mb-2"><i className="bi bi-building me-1"></i>{g.org}</div>
                          <div className="d-flex flex-wrap gap-2 mb-3">
                             {g.tags.map(t => <span key={t} className="badge bg-light text-dark border cc-badge">{t}</span>)}
                          </div>
                          <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                             <span className="fw-semibold text-success"><i className="bi bi-currency-rupee me-1"></i>{g.amt}</span>
                             <span className="text-danger small fw-semibold"><i className="bi bi-calendar-x me-1"></i>{g.ddl}</span>
                          </div>
                       </div>
                    </div>
                 ))}
               </div>
            </div>

            <div className="col-lg-6">
               <h5 className="fw-bold mb-4 d-flex align-items-center"><i className="bi bi-building me-2 text-primary"></i>Open Lab Positions</h5>
               <div className="d-flex flex-column gap-3">
                 {labs.map((l, i) => (
                    <div key={i} className="cc-card card border-0 shadow-sm border-start border-4 border-info">
                       <div className="card-body p-4">
                          <div className="d-flex justify-content-between mb-2">
                             <h6 className="fw-bold mb-0">{l.name}</h6>
                             <span className="badge bg-primary rounded-pill cc-badge">Hiring</span>
                          </div>
                          <div className="text-muted small mb-2"><i className="bi bi-geo-alt me-1 text-danger"></i>{l.org}</div>
                          
                          <div className="bg-light p-3 rounded mt-3">
                             <div className="small mb-1"><span className="fw-semibold">PI:</span> {l.PI}</div>
                             <div className="small mb-1"><span className="fw-semibold">Topic:</span> <span className="text-info fw-semibold">{l.topic}</span></div>
                             <div className="small"><span className="fw-semibold">Req:</span> {l.req}</div>
                          </div>
                          
                          <button className="btn btn-outline-primary btn-sm w-100 mt-3 fw-semibold">Contact PI</button>
                       </div>
                    </div>
                 ))}
               </div>
            </div>
         </div>
     </div>
  );
};

export default ResearchFinder;
