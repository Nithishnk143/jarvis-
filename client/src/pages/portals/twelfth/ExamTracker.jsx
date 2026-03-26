import { useState } from 'react';

const EXAMS = [
  { id: 'jee', name: 'JEE Main (Session 1)', fullForm: 'Joint Entrance Examination', date: 'Jan 24 - Feb 1, 2026', daysLeft: 45, status: 'Registration Open', type: 'Engineering', applied: false },
  { id: 'neet', name: 'NEET UG', fullForm: 'National Eligibility cum Entrance Test', date: 'May 5, 2026', daysLeft: 135, status: 'Upcoming', type: 'Medical', applied: false },
  { id: 'cuet', name: 'CUET UG', fullForm: 'Common University Entrance Test', date: 'May 15 - 31, 2026', daysLeft: 145, status: 'Upcoming', type: 'General Degree', applied: false },
  { id: 'bitsat', name: 'BITSAT', fullForm: 'BITS Admission Test', date: 'May 20 - 24, 2026', daysLeft: 150, status: 'Upcoming', type: 'Engineering', applied: false },
  { id: 'clat', name: 'CLAT', fullForm: 'Common Law Admission Test', date: 'Dec 1, 2025', daysLeft: 0, status: 'Exam Over', type: 'Law', applied: true },
  { id: 'nata', name: 'NATA', fullForm: 'National Aptitude Test in Architecture', date: 'April 6, 2026', daysLeft: 105, status: 'Registration Soon', type: 'Architecture', applied: false },
];

const ExamTracker = () => {
  const [exams, setExams] = useState(EXAMS);

  const toggleApplied = (id) => {
    setExams(exams.map(e => e.id === id ? { ...e, applied: !e.applied } : e));
  };

  return (
    <div className="animate-fadeInUp portal-twelfth">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-calendar-event me-2 text-danger"></i>Entrance Exam Tracker</h4>
          <p className="text-muted small mb-0">Never miss a registration deadline or exam date.</p>
        </div>
        <div className="text-end">
          <div className="fs-5 fw-bold text-primary">{exams.filter(e => e.applied).length}</div>
          <div style={{ fontSize: '0.7rem' }} className="text-muted text-uppercase fw-bold">Exams Tracked</div>
        </div>
      </div>

      <div className="row g-4">
        {exams.map((exam) => (
          <div key={exam.id} className="col-12 col-md-6 col-xl-4">
            <div className={`cc-card card h-100 ${exam.applied ? 'border-primary shadow-sm' : 'border-0'}`}>
              <div className="card-body p-4 position-relative">
                {exam.applied && (
                  <div className="position-absolute top-0 end-0 mt-3 me-3">
                    <i className="bi bi-bookmark-check-fill text-primary fs-4"></i>
                  </div>
                )}
                
                <span className="badge bg-light text-dark border cc-badge mb-2">{exam.type}</span>
                <h5 className="fw-bold mb-0">{exam.name}</h5>
                <p className="text-muted small mb-3 lh-sm" style={{ minHeight: 40 }}>{exam.fullForm}</p>
                
                <div className="d-flex align-items-center gap-3 mb-4 p-3 bg-light rounded-3">
                  <div className="text-center border-end pe-3">
                    <div className="fw-bold text-danger fs-5">{exam.daysLeft > 0 ? exam.daysLeft : '-'}</div>
                    <div className="text-muted text-uppercase" style={{ fontSize: '0.65rem' }}>Days Left</div>
                  </div>
                  <div>
                    <div className="fw-semibold" style={{ fontSize: '0.9rem' }}><i className="bi bi-calendar3 me-2 text-muted"></i>{exam.date}</div>
                    <div className={`small fw-semibold mt-1 ${exam.status.includes('Open') ? 'text-success' : exam.status.includes('Over') ? 'text-danger' : 'text-warning'}`}>
                      <i className="bi bi-info-circle me-1"></i>{exam.status}
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button className={`btn w-100 fw-semibold ${exam.applied ? 'btn-outline-primary' : 'btn-primary'}`}
                          onClick={() => toggleApplied(exam.id)}>
                    {exam.applied ? 'Tracking' : 'Track Event'}
                  </button>
                  <button className="btn btn-outline-secondary" title="View Syllabus/Pattern">
                    <i className="bi bi-file-earmark-text"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamTracker;
