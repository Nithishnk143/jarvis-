import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import api from '../../../utils/api';

const TenthRoadmap = () => {
  const { quizResult } = useSelector((s) => s.portal);
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const { data } = await api.get('/roadmaps/tenth');
        setRoadmaps(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRoadmaps();
  }, []);

  // Show default science if no quiz result for display purposes
  let targetCategory = quizResult?.recommended?.name.includes('Science') ? 'Science' : 
                       quizResult?.recommended?.name.includes('Commerce') ? 'Commerce' : 'Science';

  const myRoadmap = roadmaps.find((r) => r.category === targetCategory);

  const toggleComplete = (stepId) => setCompleted((prev) => ({ ...prev, [stepId]: !prev[stepId] }));
  const progress = myRoadmap ? Math.round((Object.values(completed).filter(Boolean).length / myRoadmap.steps.length) * 100) : 0;

  if (loading) return <div className="text-center py-5"><div className="spinner-border text-primary"></div></div>;

  return (
    <div className="animate-fadeInUp portal-tenth container" style={{ maxWidth: 800 }}>
      {quizResult ? (
        <div className="alert alert-primary bg-primary bg-opacity-10 border-0 d-flex align-items-center gap-3 mb-4">
          <i className="bi bi-info-circle-fill text-primary mt-1"></i>
          <div><span className="fw-semibold">Personalized for you:</span> This roadmap is tailored for the <strong>{quizResult.recommended.name}</strong> stream based on your quiz results.</div>
        </div>
      ) : (
        <div className="alert alert-warning border-0 mb-4">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          <strong>Take the quiz!</strong> Showing sample Science roadmap. <NavLink to="/portal/tenth/quiz" className="alert-link">Take the quiz</NavLink> for a personalized path.
        </div>
      )}

      {myRoadmap && (
        <>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
              <h3 className="fw-bold mb-1">{myRoadmap.title}</h3>
              <p className="text-muted">A step-by-step guide to navigating 11th & 12th standard.</p>
            </div>
            <div className="text-end">
              <div className="fs-5 fw-bold text-success">{progress}%</div>
              <small className="text-muted text-uppercase fw-semibold" style={{ fontSize: '0.7rem' }}>Completed</small>
            </div>
          </div>
          
          <div className="progress mb-5" style={{ height: 6 }}>
            <div className="progress-bar bg-success" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="roadmap-container position-relative ps-3">
            {myRoadmap.steps.map((step, idx) => (
              <div key={idx} className="roadmap-step">
                <div className={`roadmap-step-icon shadow-sm text-white ${completed[step.stepNumber] ? 'bg-success' : 'bg-secondary'}`}>
                  {completed[step.stepNumber] ? <i className="bi bi-check-lg"></i> : step.stepNumber}
                </div>
                <div className="roadmap-step-body cc-card card border-0 ms-3 w-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                       <h5 className={`fw-bold mb-0 ${completed[step.stepNumber] ? 'text-decoration-line-through text-muted' : ''}`}>{step.title}</h5>
                       <span className="badge bg-light text-dark border cc-badge"><i className="bi bi-clock me-1"></i>{step.duration}</span>
                    </div>
                    <p className={`text-muted ${completed[step.stepNumber] ? 'text-decoration-line-through opacity-75' : ''}`}>{step.description}</p>
                    
                    {step.resources?.length > 0 && !completed[step.stepNumber] && (
                      <div className="mt-3 p-3 bg-light rounded-3 border-start border-4 border-info">
                        <h6 className="fw-bold" style={{ fontSize: '0.8rem', textTransform: 'uppercase' }}><i className="bi bi-link-45deg me-1"></i>Recommended Resources</h6>
                        <ul className="list-unstyled mb-0 d-flex flex-wrap gap-2">
                          {step.resources.map((res, i) => (
                            <li key={i} className="badge bg-white text-dark border px-2 py-1"><i className="bi bi-bookmark text-primary me-1"></i>{res}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-3 text-end">
                      <button className={`btn btn-sm fw-semibold rounded-pill px-3 ${completed[step.stepNumber] ? 'btn-outline-secondary' : 'btn-success'}`}
                              onClick={() => toggleComplete(step.stepNumber)}>
                        {completed[step.stepNumber] ? 'Undo' : 'Mark as Done'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TenthRoadmap;
