const SkillGapTracker = () => {
  const targetRole = 'Frontend Developer (React)';
  
  const categories = [
    {
      name: 'Core Frontend',
      skills: [
        { name: 'HTML/CSS Details', current: 80, target: 90 },
        { name: 'JavaScript (ES6+)', current: 60, target: 90 },
        { name: 'React Hooks', current: 40, target: 85 }
      ]
    },
    {
      name: 'State & APIs',
      skills: [
        { name: 'Redux Toolkit', current: 20, target: 80 },
        { name: 'REST APIs & Fetch', current: 70, target: 90 }
      ]
    },
    {
      name: 'Tooling & Deployment',
      skills: [
        { name: 'Git / GitHub', current: 50, target: 80 },
        { name: 'Vite / Webpack', current: 10, target: 70 }
      ]
    }
  ];

  return (
    <div className="animate-fadeInUp portal-ug">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-bar-chart-steps me-2 text-primary"></i>Skill Gap Tracker</h4>
          <p className="text-muted small mb-0">Track your progress toward your target role.</p>
        </div>
      </div>

      <div className="cc-card card mb-4 border-0">
         <div className="card-body p-4 bg-primary bg-opacity-10 rounded">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div>
                <div className="text-muted small fw-bold text-uppercase">Target Role</div>
                <h4 className="fw-bold text-primary mb-0">{targetRole}</h4>
              </div>
              <button className="btn btn-primary btn-sm fw-semibold"><i className="bi bi-pencil me-1"></i>Change Role</button>
            </div>
         </div>
      </div>

      <div className="row g-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="col-lg-4">
            <div className="cc-card card h-100 border-0">
              <div className="card-body p-4">
                <h6 className="fw-bold mb-4">{cat.name}</h6>
                
                {cat.skills.map((s, i) => (
                  <div key={i} className="mb-4">
                    <div className="d-flex justify-content-between align-items-end mb-1">
                      <span className="skill-bar-label fw-semibold">{s.name}</span>
                      <span className="text-muted" style={{ fontSize: '0.7rem' }}>Current {s.current}% / Target {s.target}%</span>
                    </div>
                    <div className="progress position-relative" style={{ height: 10, background: '#f1f5f9' }}>
                      {/* Target Indicator Line */}
                      <div className="position-absolute bg-dark h-100" style={{ left: `${s.target}%`, width: 2, zIndex: 10 }}></div>
                      {/* Current Progress */}
                      <div className={`progress-bar ${s.current >= s.target ? 'bg-success' : 'bg-info'}`} style={{ width: `${s.current}%` }}></div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGapTracker;
