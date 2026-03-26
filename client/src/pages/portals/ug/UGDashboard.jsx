import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UGDashboard = () => {
  const { quizResult } = useSelector((s) => s.portal);
  return (
    <div className="animate-fadeInUp portal-ug">
      <div className="portal-banner mb-4" style={{ background: 'var(--ug-color)' }}>
        <h2 className="fw-bold mb-1">🏛️ UG Student Portal</h2>
        <p className="mb-3 opacity-90">Find internships, bridge skill gaps, and land your first job.</p>
        <div className="d-flex gap-2">
          <NavLink to="/portal/ug/jobs" className="btn btn-light btn-sm fw-semibold text-info">
            Find Job Matches <i className="bi bi-briefcase-fill ms-1"></i>
          </NavLink>
        </div>
      </div>

      <div className="row g-4 mb-4">
        {/* Profile Completion Widget */}
        <div className="col-md-5">
          <div className="cc-card card h-100 text-center p-4 d-flex flex-column justify-content-center">
            {quizResult ? (
              <div className="animate-fadeInUp mt-auto mb-auto w-100">
                <div className={`text-${quizResult.aiRecommendation?.color || 'info'} mb-3`} style={{ fontSize: '3rem' }}>
                  <i className={`bi ${quizResult.aiRecommendation?.icon || 'bi-briefcase-fill'}`}></i>
                </div>
                <h6 className="text-muted fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: 1 }}>AI Recommended Role</h6>
                <h3 className={`fw-bold text-${quizResult.aiRecommendation?.color || 'info'} mb-2`}>
                  {quizResult.aiRecommendation?.recommendedPath}
                </h3>
                <p className="text-muted small px-3 mb-4">{quizResult.aiRecommendation?.description}</p>
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                  {quizResult.aiRecommendation?.recommendedCareers?.map(c => (
                    <span key={c} className="badge bg-light text-dark border cc-badge">{c}</span>
                  ))}
                </div>
                <NavLink to="/portal/ug/skills" className="btn btn-outline-info btn-sm fw-semibold w-100">Check Skill Gap</NavLink>
              </div>
            ) : (
              <>
                <div className="bg-info bg-opacity-10 text-info rounded-circle d-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: 80, height: 80, fontSize: '2.5rem' }}>
                  <i className="bi bi-briefcase"></i>
                </div>
                <h5 className="fw-bold mb-2">Find Your Ideal Job</h5>
                <p className="text-muted small px-3">Complete our AI psychometric assessment to get personalized entry-level role recommendations.</p>
                <NavLink to="/portal/ug/jobs" className="btn btn-info text-white fw-semibold mt-2">Take Assessment</NavLink>
              </>
            )}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="col-md-7">
          <div className="row g-3 h-100">
            <div className="col-6">
               <NavLink to="/portal/ug/skills" className="cc-card card h-100 text-decoration-none text-dark p-3 d-flex flex-column justify-content-center">
                 <div className="d-flex align-items-center mb-2">
                   <div style={{ width: 40, height: 40 }} className="bg-primary bg-opacity-10 text-primary rounded d-flex align-items-center justify-content-center me-2">
                     <i className="bi bi-bar-chart-steps fs-5"></i>
                   </div>
                   <span className="fw-bold">Skill Gap</span>
                 </div>
                 <span className="text-muted small">Track technical skills</span>
               </NavLink>
            </div>
            <div className="col-6">
               <NavLink to="/portal/ug/resume" className="cc-card card h-100 text-decoration-none text-dark p-3 d-flex flex-column justify-content-center">
                 <div className="d-flex align-items-center mb-2">
                   <div style={{ width: 40, height: 40 }} className="bg-success bg-opacity-10 text-success rounded d-flex align-items-center justify-content-center me-2">
                     <i className="bi bi-file-earmark-person fs-5"></i>
                   </div>
                   <span className="fw-bold">Resume Tips</span>
                 </div>
                 <span className="text-muted small">ATS scanner & templates</span>
               </NavLink>
            </div>
            <div className="col-6">
               <NavLink to="/portal/ug/internships" className="cc-card card h-100 text-decoration-none text-dark p-3 d-flex flex-column justify-content-center">
                 <div className="d-flex align-items-center mb-2">
                   <div style={{ width: 40, height: 40 }} className="bg-warning bg-opacity-10 text-warning rounded d-flex align-items-center justify-content-center me-2">
                     <i className="bi bi-laptop fs-5"></i>
                   </div>
                   <span className="fw-bold">Internships</span>
                 </div>
                 <span className="text-muted small">Curated entry-level roles</span>
               </NavLink>
            </div>
            <div className="col-6">
               <NavLink to="/portal/ug/interview" className="cc-card card h-100 text-decoration-none text-dark p-3 d-flex flex-column justify-content-center">
                 <div className="d-flex align-items-center mb-2">
                   <div style={{ width: 40, height: 40 }} className="bg-danger bg-opacity-10 text-danger rounded d-flex align-items-center justify-content-center me-2">
                     <i className="bi bi-chat-quote fs-5"></i>
                   </div>
                   <span className="fw-bold">Interview Prep</span>
                 </div>
                 <span className="text-muted small">Role-specific questions</span>
               </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UGDashboard;
