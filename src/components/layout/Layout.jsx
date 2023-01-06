import { AppBar } from 'components/appBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
