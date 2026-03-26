const Notifications = () => {
  const notifs = [
    { id:1, icon:'bi-mortarboard-fill', color:'#6366f1', title:'New Scholarship Available', msg:'INSPIRE Scholarship deadline is Nov 30, 2025. Apply now!', time:'2 hours ago', read:false },
    { id:2, icon:'bi-calendar-event-fill', color:'#dc2626', title:'Exam Reminder', msg:'JEE Main registration closes in 7 days!', time:'Yesterday', read:false },
    { id:3, icon:'bi-people-fill', color:'#0891b2', title:'Mentor Connected', msg:'Dr. Priya Sharma accepted your connection request.', time:'2 days ago', read:true },
    { id:4, icon:'bi-award-fill', color:'#16a34a', title:'Roadmap Updated', msg:'New steps added to your Software Engineer roadmap.', time:'3 days ago', read:true },
    { id:5, icon:'bi-bell-fill', color:'#d97706', title:'Profile Incomplete', msg:'Complete your profile to get better recommendations.', time:'1 week ago', read:true },
  ];

  return (
    <div className="animate-fadeInUp">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 className="fw-bold mb-0"><i className="bi bi-bell-fill me-2 text-warning"></i>Notifications</h4>
          <p className="text-muted small mb-0">Stay updated on deadlines, mentors, and more</p>
        </div>
        <span className="badge bg-danger rounded-pill">{notifs.filter((n) => !n.read).length} New</span>
      </div>

      <div className="cc-card card">
        <div className="list-group list-group-flush">
          {notifs.map((n) => (
            <div key={n.id} className={`list-group-item list-group-item-action ${!n.read ? 'bg-primary bg-opacity-10' : ''}`}
                 style={{ borderRadius: 8, marginBottom: 4 }}>
              <div className="d-flex gap-3 align-items-start">
                <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                     style={{ width: 40, height: 40, background: n.color, color: '#fff' }}>
                  <i className={`bi ${n.icon}`}></i>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start">
                    <h6 className="fw-semibold mb-1" style={{ fontSize: '0.9rem' }}>{n.title}</h6>
                    {!n.read && <span className="notif-dot flex-shrink-0 mt-1 ms-2"></span>}
                  </div>
                  <p className="text-muted small mb-1">{n.msg}</p>
                  <small className="text-muted">{n.time}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
