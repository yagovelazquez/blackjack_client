import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex justify-center items-center min-w-screen min-h-screen bg-gray">
      <Outlet />
    </div>
  );
}
export default Layout;
