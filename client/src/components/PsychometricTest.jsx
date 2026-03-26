import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../utils/api';
import { setQuizResult } from '../redux/slices/portalSlice';
import { PSYCHOMETRIC_QUESTIONS } from '../data/psychometricQuestions';

const LIKERT_OPTIONS = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' }
];

const PsychometricTest = ({ onComplete }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth);
  
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user?.userType) {
      setQuestions(PSYCHOMETRIC_QUESTIONS[user.userType] || []);
    }
  }, [user]);

  const handleSelect = (qId, val) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const isComplete = questions.length > 0 && Object.keys(answers).length === questions.length;

  const handleSubmit = async () => {
    if (!isComplete) return;
    setLoading(true);
    setError('');

    // Format for AI
    const formattedAnswers = questions.map((q) => {
      const val = answers[q.id];
      const opt = LIKERT_OPTIONS.find(o => o.value === val);
      return { questionId: q.id, question: q.text, selectedOption: opt.label };
    });

    try {
      const { data } = await api.post('/ai/psychometric', {
        userType: user.userType,
        answers: formattedAnswers
      });
      
      if (data.success) {
        dispatch(setQuizResult({ aiRecommendation: data.data }));
        if (onComplete) onComplete();
      } else {
        setError('Failed to get recommendation from AI.');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'AI Evaluation failed. Make sure Ollama is running.');
    } finally {
      setLoading(false);
    }
  };

  if (!questions.length) return <div className="text-center p-5">Loading assessment...</div>;

  const progress = Math.round((Object.keys(answers).length / questions.length) * 100);

  return (
    <div className="psychometric-test animate-fadeInUp">
      <div className="text-center mb-5">
        <h3 className="fw-bold"><i className="bi bi-brain text-primary me-2"></i>Comprehensive Psychometric Analysis</h3>
        <p className="text-muted mb-4">Answer honestly to get the most accurate AI-driven career recommendation.</p>
        
        <div className="progress mb-2" style={{ height: 8, maxWidth: 400, margin: '0 auto' }}>
          <div className="progress-bar bg-primary" style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}></div>
        </div>
        <small className="text-muted fw-semibold">{progress}% Completed</small>
      </div>

      {error && (
        <div className="alert alert-danger mb-4 d-flex align-items-center">
          <i className="bi bi-exclamation-triangle-fill me-2"></i> {error}
        </div>
      )}

      <div className="row g-4 mb-5">
        {questions.map((q, idx) => (
          <div key={q.id} className="col-12">
            <div className="cc-card card border-0 shadow-sm">
              <div className="card-body p-4">
                <h6 className="fw-semibold mb-4 text-dark" style={{ lineHeight: 1.5 }}>
                  <span className="text-primary me-2">Q{idx + 1}.</span> {q.text}
                </h6>
                <div className="d-flex flex-wrap justify-content-between gap-2">
                  {LIKERT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(q.id, opt.value)}
                      className={`btn flex-grow-1 border fw-semibold ${
                        answers[q.id] === opt.value
                          ? 'btn-primary shadow-sm text-white'
                          : 'btn-light text-muted'
                      }`}
                      style={{ fontSize: '0.85rem', transition: 'all 0.15s' }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cc-card card border-0 bg-primary bg-opacity-10 text-center p-4 p-md-5">
        <h5 className="fw-bold mb-3">Ready for your AI Analysis?</h5>
        <p className="text-muted small mb-4">Our Local AI will process your responses and generate a tailored roadmap.</p>
        <button
          className="btn btn-primary btn-lg fw-bold px-5"
          disabled={!isComplete || loading}
          onClick={handleSubmit}
        >
          {loading ? (
            <><span className="spinner-border spinner-border-sm me-2"></span> Analyzing Profile...</>
          ) : (
            <><i className="bi bi-stars me-2"></i> Generate AI Recommendation</>
          )}
        </button>
      </div>
    </div>
  );
};

export default PsychometricTest;
