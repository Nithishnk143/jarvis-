import { useState } from 'react';

const COUNTRIES = {
  US: { name: 'United States', flag: '🇺🇸', exams: ['GRE', 'TOEFL', 'IELTS'], cost: '₹25L - ₹60L/yr', stay: '3 Years (STEM OPT)', pros: ['Top Universities', 'High Tech Salaries', 'Huge Tech Market'], cons: ['H1B Visa Lottery', 'High Cost of Living'] },
  UK: { name: 'United Kingdom', flag: '🇬🇧', exams: ['IELTS', 'PTE'], cost: '₹20L - ₹40L/yr', stay: '2 Years (Graduate Route)', pros: ['1-Year Masters', 'Close to Europe', 'Culture'], cons: ['High Taxes', 'Slowing Tech Market'] },
  CA: { name: 'Canada', flag: '🇨🇦', exams: ['IELTS'], cost: '₹15L - ₹30L/yr', stay: 'Up to 3 Years (PGWP)', pros: ['Easier PR Process', 'Welcoming Society'], cons: ['Extreme Cold', 'Lower Sal. than US'] },
  DE: { name: 'Germany', flag: '🇩🇪', exams: ['IELTS', 'German (A1/A2 optional)'], cost: '₹5L - ₹10L/yr (Public)', stay: '18 Months', pros: ['Near Zero Tuition', 'Strong Auto/Mech Industry'], cons: ['Language Barrier', 'High Taxes'] },
};

const STEPS = [
  { step: 1, title: 'Profile Evaluation', desc: 'Assess CGPA, Projects, and Work Ex.', time: 'Month 1' },
  { step: 2, title: 'Standardized Tests', desc: 'Prepare and take GRE/GMAT & TOEFL/IELTS.', time: 'Month 2-4' },
  { step: 3, title: 'Shortlisting Univs', desc: 'Select Ambitious, Target, and Safe universities.', time: 'Month 5' },
  { step: 4, title: 'SOP & LORs', desc: 'Draft Statement of Purpose and get 3 letters of recommendation.', time: 'Month 6-7' },
  { step: 5, title: 'Applications', desc: 'Submit applications before early deadlines for scholarships.', time: 'Month 8-9' },
  { step: 6, title: 'Visa & Finance', desc: 'Show proof of funds, manage loans, and attend Visa interview.', time: 'Month 10-12' },
];

const AbroadGuide = () => {
  const [selected, setSelected] = useState('US');

  return (
    <div className="animate-fadeInUp portal-pg pb-5">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-globe-americas me-2 text-primary"></i>Study Abroad Guide</h4>
          <p className="text-muted small mb-0">Navigate exams, applications, and visas for higher education abroad.</p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-3">
          <div className="list-group sticky-top" style={{ top: 20 }}>
             {Object.keys(COUNTRIES).map(c => (
               <button key={c} className={`list-group-item list-group-item-action fw-semibold py-3 border-0 rounded-3 mb-2 shadow-sm ${selected === c ? 'bg-primary text-white' : 'bg-white text-dark'}`}
                       onClick={() => setSelected(c)}>
                 <span className="fs-4 me-2">{COUNTRIES[c].flag}</span> {COUNTRIES[c].name}
               </button>
             ))}
          </div>
        </div>

        <div className="col-lg-9">
          <div className="cc-card card border-0 border-top border-4 border-primary h-100">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex align-items-center gap-3 mb-4 pb-4 border-bottom">
                 <div className="fs-1">{COUNTRIES[selected].flag}</div>
                 <div>
                   <h2 className="fw-bold mb-0">{COUNTRIES[selected].name}</h2>
                   <div className="text-muted fw-semibold">Destination Overview</div>
                 </div>
              </div>

              <div className="row g-4 mb-4">
                 <div className="col-md-4">
                   <div className="text-muted small fw-bold text-uppercase mb-1"><i className="bi bi-journal-text me-1 text-info"></i>Required Exams</div>
                   <div className="d-flex flex-wrap gap-1">
                     {COUNTRIES[selected].exams.map(e => <span key={e} className="badge bg-light text-dark border cc-badge">{e}</span>)}
                   </div>
                 </div>
                 <div className="col-md-4">
                   <div className="text-muted small fw-bold text-uppercase mb-1"><i className="bi bi-cash me-1 text-success"></i>Est. Annual Cost</div>
                   <div className="fw-bold text-dark">{COUNTRIES[selected].cost}</div>
                 </div>
                 <div className="col-md-4">
                   <div className="text-muted small fw-bold text-uppercase mb-1"><i className="bi bi-airplane me-1 text-warning"></i>Post Study Work</div>
                   <div className="fw-bold text-dark">{COUNTRIES[selected].stay}</div>
                 </div>
              </div>

              <div className="row g-4 mb-2">
                 <div className="col-md-6">
                    <h6 className="fw-bold text-success"><i className="bi bi-plus-circle me-2"></i>Pros</h6>
                    <ul className="text-muted small mb-0 ps-3">
                      {COUNTRIES[selected].pros.map(p => <li key={p} className="mb-1">{p}</li>)}
                    </ul>
                 </div>
                 <div className="col-md-6">
                    <h6 className="fw-bold text-danger"><i className="bi bi-dash-circle me-2"></i>Cons</h6>
                    <ul className="text-muted small mb-0 ps-3">
                      {COUNTRIES[selected].cons.map(c => <li key={c} className="mb-1">{c}</li>)}
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cc-card card border-0 bg-light p-4 p-md-5">
         <h4 className="fw-bold mb-4 text-center">12-Month Application Timeline</h4>
         <div className="row g-3">
           {STEPS.map(s => (
             <div key={s.step} className="col-md-4 col-sm-6">
                <div className="card h-100 border-0 shadow-sm">
                   <div className="card-body p-3">
                      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                         <span className="badge bg-primary rounded-circle p-2" style={{ width: 30, height: 30 }}>{s.step}</span>
                         <span className="text-primary fw-semibold small"><i className="bi bi-calendar-event me-1"></i>{s.time}</span>
                      </div>
                      <h6 className="fw-bold">{s.title}</h6>
                      <p className="text-muted small mb-0">{s.desc}</p>
                   </div>
                </div>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
};

export default AbroadGuide;
