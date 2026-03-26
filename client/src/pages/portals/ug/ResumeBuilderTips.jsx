const ResumeBuilderTips = () => {
  const tips = [
    { title: 'Use a Standard ATS-Friendly Format', desc: 'Avoid complex graphics, images, or multi-column layouts. Use standard fonts like Arial or Calibri.', icon: 'bi-file-person', color: 'primary' },
    { title: 'Quantify Your Achievements', desc: 'Instead of "Improved performance", use "Improved performance by 25% through codebase refactoring".', icon: 'bi-graph-up', color: 'success' },
    { title: 'Tailor Keywords', desc: 'Include keywords from the job description directly in your skills and experience sections.', icon: 'bi-key', color: 'warning' },
    { title: 'Keep it to One Page', desc: 'For students and entry-level professionals, a single page is standard and highly preferred.', icon: 'bi-file-earmark', color: 'danger' },
  ];

  const sections = [
    { name: 'Header', req: 'Name, Phone, Email, LinkedIn, GitHub', status: 'critical' },
    { name: 'Education', req: 'Degree, University, Expected Grad, GPA (if > 8.0)', status: 'critical' },
    { name: 'Projects', req: '3 strong projects with tech stack and quantifiable impact', status: 'critical' },
    { name: 'Experience', req: 'Internships or relevant part-time roles', status: 'optional' },
    { name: 'Skills', req: 'Grouped by Languages, Frameworks, Tools', status: 'critical' },
  ];

  return (
    <div className="animate-fadeInUp portal-ug pb-5">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-file-earmark-person-fill me-2 text-primary"></i>Resume Builder Guide</h4>
          <p className="text-muted small mb-0">Craft an ATS-friendly resume that stands out to recruiters.</p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-8">
          <div className="cc-card card border-0 h-100">
             <div className="card-body p-4 p-md-5">
               <h5 className="fw-bold mb-4">Core ATS Rules</h5>
               <div className="row g-4">
                 {tips.map(t => (
                   <div key={t.title} className="col-md-6">
                     <div className="d-flex gap-3">
                       <div className={`text-${t.color} bg-${t.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0`} style={{ width: 48, height: 48, fontSize: '1.5rem' }}>
                         <i className={`bi ${t.icon}`}></i>
                       </div>
                       <div>
                         <h6 className="fw-bold mb-1">{t.title}</h6>
                         <p className="text-muted small mb-0 lh-sm">{t.desc}</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>

               <hr className="my-5" />
               <h5 className="fw-bold mb-4">Structure Checklist</h5>
               <ul className="list-group list-group-flush border-0">
                 {sections.map(s => (
                   <li key={s.name} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-3 border-bottom">
                     <div className="d-flex align-items-center gap-3">
                       <input className="form-check-input mt-0 shadow-sm border-2" type="checkbox" style={{ width: 20, height: 20 }} />
                       <div>
                         <div className="fw-semibold">{s.name}</div>
                         <div className="text-muted small">{s.req}</div>
                       </div>
                     </div>
                     <span className={`badge bg-${s.status === 'critical' ? 'danger' : 'secondary'} rounded-pill cc-badge`}>{s.status}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="cc-card card border-0 bg-primary text-white text-center p-4 p-lg-5 position-relative overflow-hidden h-100 d-flex flex-column justify-content-center">
             <i className="bi bi-robot text-white opacity-25 position-absolute top-0 end-0 mt-3 me-3" style={{ fontSize: '10rem', transform: 'translate(30%, -30%)' }}></i>
             <div className="position-relative z-1 mb-4 pt-4">
                <i className="bi bi-filetype-pdf display-1"></i>
                <h4 className="fw-bold mt-3">ATS Score Checker</h4>
                <p className="opacity-75 small">Upload your current resume to get an instant AI score and feedback.</p>
             </div>
             <button className="btn btn-light text-primary fw-bold w-100 py-3 shadow mt-auto position-relative z-1 rounded-3">
               <i className="bi bi-cloud-arrow-up-fill me-2"></i>Upload Resume
             </button>
             <button className="btn btn-outline-light btn-sm fw-bold w-100 mt-2 position-relative z-1 rounded-3 opacity-75 border-0">
               View Templates Instead
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderTips;
