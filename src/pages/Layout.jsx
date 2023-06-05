import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dashboard/');
  }, [navigate]);
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
