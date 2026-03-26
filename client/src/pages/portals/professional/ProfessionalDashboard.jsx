import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProfessionalDashboard = () => {
  const { quizResult } = useSelector((s) => s.portal);
  return (
    <div className="animate-fadeInUp portal-professional">
      <div className="portal-banner mb-4" style={{ background: 'var(--professional-color)' }}>
        <h2 className="fw-bold mb-1">💼 Professional Portal</h2>
        <p className="mb-3 opacity-90">Upskill, pivot careers, and benchmark your salary for accelerated growth.</p>
        <div className="d-flex gap-2">
          <NavLink to="/portal/professional/skills" className="btn btn-light btn-sm fw-semibold text-danger">
            Analyze Skills <i className="bi bi-graph-up-arrow ms-1"></i>
          </NavLink>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-8">
           <div className="cc-card card h-100 border-0">
             <div className="card-header bg-transparent border-0 pt-4 pb-0 px-4">
               <h5 className="fw-bold"><i className="bi bi-lightning-charge-fill text-danger me-2"></i>AI Career Strategy</h5>
             </div>
             <div className="card-body p-4 pt-2">
                {quizResult ? (
                  <div className="animate-fadeInUp">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className={`bg-${quizResult.aiRecommendation?.color || 'danger'} bg-opacity-10 text-${quizResult.aiRecommendation?.color || 'danger'} rounded p-3`}>
                        <i className={`bi ${quizResult.aiRecommendation?.icon || 'bi-arrow-up-right-circle'} fs-2`}></i>
                      </div>
                      <div>
                        <h6 className="text-muted fw-bold text-uppercase mb-1" style={{ fontSize: '0.75rem', letterSpacing: 1 }}>Recommended Target</h6>
                        <h4 className={`fw-bold text-${quizResult.aiRecommendation?.color || 'danger'} mb-0`}>{quizResult.aiRecommendation?.recommendedPath}</h4>
                      </div>
                    </div>
                    <p className="text-muted small mb-4">{quizResult.aiRecommendation?.description}</p>
                    <h6 className="fw-bold fs-6 mb-3">Next Steps Checklist</h6>
                    <div className="d-flex flex-column gap-3 position-relative ps-4 py-2" style={{ borderLeft: '3px solid #e2e8f0' }}>
                      {quizResult.aiRecommendation?.nextSteps?.map((step, idx) => (
                        <div key={idx} className="position-relative">
                          <span className={`position-absolute bg-${idx === 0 ? 'success' : 'secondary'} rounded-circle`} style={{ width: 15, height: 15, left: -29, top: 4, border: '3px solid white' }}></span>
                          <span className="text-dark small d-block mb-1 fw-semibold">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex align-items-center justify-content-center mb-3 mx-auto" style={{ width: 64, height: 64, fontSize: '2rem' }}>
                      <i className="bi bi-compass"></i>
                    </div>
                    <h6 className="fw-bold mb-2">Ready for a pivot?</h6>
                    <p className="text-muted small px-3 mb-4">Complete your AI psychometric assessment to generate a personalized career switch timeline and upskilling roadmap.</p>
                    <NavLink to="/portal/professional/switch" className="btn btn-danger btn-sm fw-semibold mt-2 px-4 rounded-pill">Take Assessment</NavLink>
                  </div>
                )}
             </div>
           </div>
        </div>

        <div className="col-md-4">
          <div className="row g-3 h-100">
            <div className="col-12">
              <NavLink to="/portal/professional/switch" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-row align-items-center p-3 border-0 shadow-sm">
                <div className="bg-primary bg-opacity-10 text-primary rounded p-3 me-3"><i className="bi bi-arrow-repeat fs-3"></i></div>
                <div>
                  <span className="fw-bold d-block">Career Pivot</span>
                  <span className="text-muted small">Switch domains</span>
                </div>
              </NavLink>
            </div>
            <div className="col-12">
              <NavLink to="/portal/professional/salary" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-row align-items-center p-3 border-0 shadow-sm">
                <div className="bg-success bg-opacity-10 text-success rounded p-3 me-3"><i className="bi bi-cash-stack fs-3"></i></div>
                <div>
                  <span className="fw-bold d-block">Salary Benchmarking</span>
                  <span className="text-muted small">Check market rates</span>
                </div>
              </NavLink>
            </div>
            <div className="col-12">
              <NavLink to="/mentors" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-row align-items-center p-3 border-0 shadow-sm">
                <div className="bg-warning bg-opacity-10 text-warning rounded p-3 me-3"><i className="bi bi-shield-check fs-3"></i></div>
                <div>
                  <span className="fw-bold d-block">Executive Coach</span>
                  <span className="text-muted small">1-on-1 industry mentors</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
