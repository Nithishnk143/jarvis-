import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PGDashboard = () => {
  const { quizResult } = useSelector((s) => s.portal);
  return (
    <div className="animate-fadeInUp portal-pg">
      <div className="portal-banner mb-4" style={{ background: 'var(--pg-color)' }}>
        <h2 className="fw-bold mb-1">🔬 PG Student Portal</h2>
        <p className="mb-3 opacity-90">Navigate PhD, MBA, or global study options with expert guidance.</p>
        <div className="d-flex gap-2">
          <NavLink to="/portal/pg/path" className="btn btn-light btn-sm fw-semibold text-warning">
            Find My Path <i className="bi bi-signpost-split-fill ms-1"></i>
          </NavLink>
        </div>
      </div>

      <div className="row g-4 mb-4">
        {/* Path Recommender CTA Widget */}
        <div className="col-md-5">
           <div className="cc-card card h-100 p-4 border-0 d-flex flex-column justify-content-center text-center">
             {quizResult ? (
               <div className="animate-fadeInUp mt-auto mb-auto w-100">
                 <div className={`text-${quizResult.aiRecommendation?.color || 'warning'} mb-3`} style={{ fontSize: '3rem' }}>
                   <i className={`bi ${quizResult.aiRecommendation?.icon || 'bi-signpost-split-fill'}`}></i>
                 </div>
                 <h6 className="text-muted fw-bold text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: 1 }}>AI Recommended Path</h6>
                 <h3 className={`fw-bold text-${quizResult.aiRecommendation?.color || 'warning'} mb-2`}>
                   {quizResult.aiRecommendation?.recommendedPath}
                 </h3>
                 <p className="text-muted small px-3 mb-4">{quizResult.aiRecommendation?.description}</p>
                 <NavLink to="/portal/pg/research" className="btn btn-outline-warning text-dark fw-semibold w-100">Explore Grants</NavLink>
               </div>
             ) : (
               <div className="bg-warning bg-opacity-10 text-dark rounded-3 p-4">
                 <div className="mb-3 text-warning"><i className="bi bi-compass-fill" style={{ fontSize: '3rem' }}></i></div>
                 <h5 className="fw-bold mb-2 text-dark">Confused about your next step?</h5>
                 <p className="text-muted small">M.Tech vs MS vs MBA vs PhD? Take our specialized AI psychometric assessment based on your career goals.</p>
                 <NavLink to="/portal/pg/path" className="btn btn-warning text-dark fw-semibold w-100 mt-2">
                   Find My Path <i className="bi bi-arrow-right ms-1"></i>
                 </NavLink>
               </div>
             )}
           </div>
        </div>

        {/* Action Grid */}
        <div className="col-md-7">
          <div className="row g-3 h-100">
            <div className="col-6">
              <NavLink to="/portal/pg/research" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-column justify-content-center text-center p-3 border-0 shadow-sm">
                <i className="bi bi-journal-check text-info mb-2" style={{ fontSize: '2rem' }}></i>
                <span className="fw-bold" style={{ fontSize: '0.9rem' }}>Research Grants</span>
                <span className="text-muted lh-sm mt-1" style={{ fontSize: '0.7rem' }}>Discover funding & labs</span>
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink to="/portal/pg/abroad" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-column justify-content-center text-center p-3 border-0 shadow-sm">
                <i className="bi bi-globe-americas text-primary mb-2" style={{ fontSize: '2rem' }}></i>
                <span className="fw-bold" style={{ fontSize: '0.9rem' }}>Study Abroad</span>
                <span className="text-muted lh-sm mt-1" style={{ fontSize: '0.7rem' }}>GRE/TOEFL & Admits</span>
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink to="/mentors" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-column justify-content-center text-center p-3 border-0 shadow-sm">
                <i className="bi bi-people-fill text-success mb-2" style={{ fontSize: '2rem' }}></i>
                <span className="fw-bold" style={{ fontSize: '0.9rem' }}>Connect w/ PhDs</span>
                <span className="text-muted lh-sm mt-1" style={{ fontSize: '0.7rem' }}>1-on-1 mentorship</span>
              </NavLink>
            </div>
            <div className="col-6">
               <NavLink to="/scholarships" className="cc-card card h-100 text-decoration-none text-dark d-flex flex-column justify-content-center text-center p-3 border-0 shadow-sm">
                 <i className="bi bi-mortarboard-fill text-danger mb-2" style={{ fontSize: '2rem' }}></i>
                 <span className="fw-bold" style={{ fontSize: '0.9rem' }}>Fellowships</span>
                 <span className="text-muted lh-sm mt-1" style={{ fontSize: '0.7rem' }}>JRF & Global Grants</span>
               </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PGDashboard;
