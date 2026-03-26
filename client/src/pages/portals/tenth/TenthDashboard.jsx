import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TenthDashboard = () => {
  const { quizResult } = useSelector((s) => s.portal);

  return (
    <div className="animate-fadeInUp portal-tenth">
      {/* Hero */}
      <div className="portal-banner mb-4" style={{ background: 'var(--tenth-color)' }}>
        <h2 className="fw-bold mb-1">📚 10th Student Portal</h2>
        <p className="mb-3 opacity-90">Discover the right stream for 11th & 12th based on your interests.</p>
        <div className="d-flex gap-2">
          <NavLink to="/portal/tenth/quiz" className="btn btn-light btn-sm fw-semibold">
            Take Stream Quiz <i className="bi bi-arrow-right ms-1"></i>
          </NavLink>
        </div>
      </div>

      <div className="row g-4 mb-4">
        {/* Quiz Result Widget */}
        <div className="col-md-6">
          <div className="cc-card card h-100">
            <div className="card-body p-4 d-flex flex-column">
              <h5 className="fw-bold mb-3"><i className="bi bi-clipboard-data-fill text-primary me-2"></i>Aptitude Match</h5>
              {quizResult ? (
                <div className="text-center mt-auto mb-auto animate-fadeInUp">
                  <div className={`text-${quizResult.aiRecommendation?.color || 'primary'} mb-3`} style={{ fontSize: '3.5rem' }}>
                    <i className={`bi ${quizResult.aiRecommendation?.icon || 'bi-star-fill'}`}></i>
                  </div>
                  <h6 className="text-muted fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: 1 }}>AI Recommended Stream</h6>
                  <h3 className={`fw-bold text-${quizResult.aiRecommendation?.color || 'primary'} mb-2`}>
                    {quizResult.aiRecommendation?.recommendedPath}
                  </h3>
                  <p className="text-muted small px-3 mb-4">{quizResult.aiRecommendation?.description}</p>
                  
                  <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                    {quizResult.aiRecommendation?.topTraits?.map(t => (
                      <span key={t} className="badge bg-light text-dark border cc-badge">{t}</span>
                    ))}
                  </div>

                  <NavLink to="/portal/tenth/stream" className="btn btn-outline-primary btn-sm rounded-pill px-4 fw-semibold">
                    View Complete Roadmap
                  </NavLink>
                </div>
              ) : (
                <div className="text-center py-4 mt-auto mb-auto bg-light rounded-3 border border-dashed">
                  <i className="bi bi-question-circle text-muted mb-2" style={{ fontSize: '2rem' }}></i>
                  <p className="text-muted small mb-3 px-3">Take the quiz to find out which stream is best for you.</p>
                  <NavLink to="/portal/tenth/quiz" className="btn btn-primary btn-sm fw-semibold">Take Quiz</NavLink>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Links Widget */}
        <div className="col-md-6">
          <div className="cc-card card h-100 border-top border-4 border-primary">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3"><i className="bi bi-compass text-primary me-2"></i>Explore</h5>
              
              <div className="list-group list-group-flush mb-0">
                <NavLink to="/portal/tenth/stream" className="list-group-item list-group-item-action border-0 px-0 d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 text-primary rounded d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                      <i className="bi bi-book"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-semibold" style={{ fontSize: '0.9rem' }}>Stream Guide</h6>
                      <small className="text-muted">Science vs Commerce vs Arts</small>
                    </div>
                  </div>
                  <i className="bi bi-chevron-right text-muted"></i>
                </NavLink>

                <NavLink to="/portal/tenth/roadmap" className="list-group-item list-group-item-action border-0 px-0 d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-success bg-opacity-10 text-success rounded d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                      <i className="bi bi-signpost-split"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-semibold" style={{ fontSize: '0.9rem' }}>Preparation Roadmap</h6>
                      <small className="text-muted">Step-by-step path for 11th & 12th</small>
                    </div>
                  </div>
                  <i className="bi bi-chevron-right text-muted"></i>
                </NavLink>

                <NavLink to="/scholarships" className="list-group-item list-group-item-action border-0 px-0 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-warning bg-opacity-10 text-warning rounded d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
                      <i className="bi bi-mortarboard"></i>
                    </div>
                    <div>
                      <h6 className="mb-0 fw-semibold" style={{ fontSize: '0.9rem' }}>11th/12th Scholarships</h6>
                      <small className="text-muted">Funding for higher secondary</small>
                    </div>
                  </div>
                  <i className="bi bi-chevron-right text-muted"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenthDashboard;
