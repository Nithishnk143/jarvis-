import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const PortalLayout = () => {
  return (
    <>
      <Navbar />
      <div className="cc-layout">
        <Sidebar />
        <main className="cc-main">
          <div className="container-fluid p-3 p-md-4">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default PortalLayout;
