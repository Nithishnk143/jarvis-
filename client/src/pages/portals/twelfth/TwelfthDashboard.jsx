import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TwelfthDashboard = () => {
  const { quizResult } = useSelector((s) => s.portal);

  return (
    <div className="animate-fadeInUp portal-twelfth">
      <div className="portal-banner mb-4" style={{ background: 'var(--twelfth-color)' }}>
        <h2 className="fw-bold mb-1">🎓 12th Student Portal</h2>
        <p className="mb-3 opacity-90">Find the best degree, crack entrance exams, and select the right college.</p>
        <div className="d-flex gap-2">
          <NavLink to="/portal/twelfth/quiz" className="btn btn-light btn-sm fw-semibold text-success">
            Take Degree Matcher <i className="bi bi-check-circle-fill ms-1"></i>
          </NavLink>
        </div>
      </div>

      <div className="row g-4 mb-4">
        {/* Recommended Degree Widget */}
        <div className="col-md-6">
          <div className="cc-card card h-100">
            <div className="card-body p-4 text-center d-flex flex-column h-100 align-items-center justify-content-center">
              {quizResult ? (
                <div className="animate-fadeInUp text-center mt-auto mb-auto w-100">
                  <div className={`text-${quizResult.aiRecommendation?.color || 'success'} mb-3`} style={{ fontSize: '3.5rem' }}>
                    <i className={`bi ${quizResult.aiRecommendation?.icon || 'bi-mortarboard-fill'}`}></i>
                  </div>
                  <h6 className="text-muted fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: 1 }}>AI Recommended Degree</h6>
                  <h3 className={`fw-bold text-${quizResult.aiRecommendation?.color || 'success'} mb-2`}>
                    {quizResult.aiRecommendation?.recommendedPath}
                  </h3>
                  <p className="text-muted small px-3 mb-4">{quizResult.aiRecommendation?.description}</p>

                  <div className="d-flex gap-2 justify-content-center mt-3 w-100">
                    <NavLink to="/portal/twelfth/colleges" className={`btn btn-outline-${quizResult.aiRecommendation?.color || 'success'} btn-sm fw-semibold px-3`}>Find Colleges</NavLink>
                    <NavLink to="/portal/twelfth/exams" className={`btn btn-${quizResult.aiRecommendation?.color || 'success'} btn-sm fw-semibold text-white px-3`}>Track Entrance Exams</NavLink>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 80, height: 80, fontSize: '2.5rem', margin: '0 auto' }}>
                    <i className="bi bi-magic"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Unsure what to pursue?</h5>
                  <p className="text-muted small px-4">Take our full AI psychometric assessment to find your perfect degree.</p>
                  <NavLink to="/portal/twelfth/quiz" className="btn btn-success fw-semibold mt-2">Take Degree Matcher</NavLink>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Action Grid */}
        <div className="col-md-6">
          <div className="row g-3 h-100">
            <div className="col-6">
              <NavLink to="/portal/twelfth/colleges" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-column justify-content-center text-center p-3">
                <i className="bi bi-building text-primary mb-2" style={{ fontSize: '2rem' }}></i>
                <span className="fw-bold" style={{ fontSize: '0.9rem' }}>College Finder</span>
                <span className="text-muted" style={{ fontSize: '0.7rem' }}>Search by state & fees</span>
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink to="/portal/twelfth/exams" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-column justify-content-center text-center p-3">
                <i className="bi bi-calendar-event text-danger mb-2" style={{ fontSize: '2rem' }}></i>
                <span className="fw-bold" style={{ fontSize: '0.9rem' }}>Entrance Tracker</span>
                <span className="text-muted" style={{ fontSize: '0.7rem' }}>JEE, NEET, CUET deadlines</span>
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink to="/portal/twelfth/whatif" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-column justify-content-center text-center p-3">
                <i className="bi bi-arrow-left-right text-warning mb-2" style={{ fontSize: '2rem' }}></i>
                <span className="fw-bold" style={{ fontSize: '0.9rem' }}>What-If Simulator</span>
                <span className="text-muted" style={{ fontSize: '0.7rem' }}>Compare 2 degrees</span>
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink to="/scholarships" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-column justify-content-center text-center p-3">
                <i className="bi bi-mortarboard text-success mb-2" style={{ fontSize: '2rem' }}></i>
                <span className="fw-bold" style={{ fontSize: '0.9rem' }}>UG Scholarships</span>
                <span className="text-muted" style={{ fontSize: '0.7rem' }}>Fund your college</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwelfthDashboard;
