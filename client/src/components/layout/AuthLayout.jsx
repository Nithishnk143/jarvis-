import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
