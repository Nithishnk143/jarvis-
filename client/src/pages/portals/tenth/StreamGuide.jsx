// StreamGuide Component
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const StreamGuide = () => {
  const { quizResult } = useSelector((s) => s.portal);
  const navigate = useNavigate();

  if (!quizResult) {
    return (
      <div className="text-center py-5 mt-5">
        <i className="bi bi-exclamation-circle text-muted" style={{ fontSize: '3rem' }}></i>
        <h4 className="fw-bold mt-3">Please take the quiz first</h4>
        <p className="text-muted">We need to understand your aptitude to recommend a stream.</p>
        <NavLink to="/portal/tenth/quiz" className="btn btn-primary fw-semibold mt-2">Take Stream Quiz</NavLink>
      </div>
    );
  }

  const { recommended, scores, alternatives } = quizResult;

  return (
    <div className="animate-fadeInUp portal-tenth">
      <div className="d-flex align-items-center mb-4">
        <button className="btn btn-light btn-sm me-3" onClick={() => navigate(-1)}><i className="bi bi-arrow-left"></i></button>
        <div>
          <h4 className="fw-bold mb-0">Your Stream Recommendation</h4>
          <p className="text-muted small mb-0">Based on your aptitude and interests.</p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className={`cc-card card border-0 shadow-sm mb-4 border-start border-5 border-${recommended.color}`}>
            <div className={`card-header bg-${recommended.color} bg-opacity-10 border-0 pt-4 pb-3 px-4`}>
              <div className="d-flex align-items-center gap-3">
                <div style={{ fontSize: '3.5rem', lineHeight: 1 }}>{recommended.icon}</div>
                <div>
                  <span className={`badge bg-${recommended.color} mb-1 cc-badge`}>Best Match (Primary Recommendation)</span>
                  <h2 className={`fw-bold text-${recommended.color} mb-0`}>{recommended.name}</h2>
                </div>
              </div>
            </div>
            <div className="card-body p-4">
              <p className="lead" style={{ fontSize: '1.1rem' }}>{recommended.description}</p>
              
              <div className="row mt-4 g-4">
                <div className="col-md-6">
                  <h6 className="fw-bold"><i className="bi bi-book-half text-primary me-2"></i>Core Subjects</h6>
                  <ul className="list-group list-group-flush border-0">
                    {recommended.subjects.map((s, i) => (
                      <li key={i} className="list-group-item border-0 py-1 px-0 text-muted"><i className="bi bi-check2 text-success me-2"></i>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="fw-bold"><i className="bi bi-briefcase text-info me-2"></i>Future Careers</h6>
                  <ul className="list-group list-group-flush border-0">
                    {recommended.careers.map((c, i) => (
                      <li key={i} className="list-group-item border-0 py-1 px-0 text-muted"><i className="bi bi-star-fill text-warning me-2" style={{ fontSize: '0.7rem' }}></i>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-light rounded-3 d-flex align-items-center">
                <i className="bi bi-graph-up-arrow text-success fs-4 me-3"></i>
                <div>
                  <h6 className="fw-bold mb-0">Average Salary Expectation</h6>
                  <span className="text-muted small">{recommended.avgSalary}</span>
                </div>
              </div>
            </div>
          </div>

          <h5 className="fw-bold mb-3 mt-5">Alternative Options</h5>
          <div className="row g-3">
            {alternatives.map((alt) => (
              <div key={alt.name} className="col-md-6">
                <div className="cc-card card h-100 bg-light border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                       <span className="fs-3 me-2">{alt.icon}</span>
                       <h6 className="fw-bold mb-0">{alt.name}</h6>
                    </div>
                    <p className="text-muted small mb-2" style={{ fontSize: '0.8rem' }}>{alt.description}</p>
                    <div className="d-flex flex-wrap gap-1">
                      {alt.careers.slice(0,3).map(c => <span key={c} className="badge bg-white text-dark border" style={{ fontSize: '0.65rem' }}>{c}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="cc-card card">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-3"><i className="bi bi-pie-chart text-primary me-2"></i>Score Breakdown</h5>
              <p className="text-muted small mb-4">How your answers mapped to different streams.</p>
              
              {Object.entries(scores).map(([key, max]) => {
                const total = scores.science + scores.commerce + scores.arts;
                const percentage = total === 0 ? 0 : Math.round((max / total) * 100);
                const colors = { science: 'success', commerce: 'warning', arts: 'info' };
                const titles = { science: 'Science Aptitude', commerce: 'Commerce Aptitude', arts: 'Arts / Creative' };
                return (
                  <div key={key} className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="fw-semibold small">{titles[key]}</span>
                      <span className="text-muted small fw-bold">{percentage}%</span>
                    </div>
                    <div className="progress" style={{ height: 8 }}>
                      <div className={`progress-bar bg-${colors[key]}`} style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                );
              })}
              
              <hr className="my-4" />
              <h6 className="fw-bold mb-2">Next Steps</h6>
              <p className="text-muted small">View your personalized 2-year preparation roadmap based on this recommendation.</p>
              <NavLink to="/portal/tenth/roadmap" className={`btn btn-${recommended.color} text-white w-100 fw-semibold`}>
                View My Roadmap <i className="bi bi-arrow-right ms-1"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamGuide;
