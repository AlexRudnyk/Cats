import { AppBar } from 'components/appBar';
import { Outlet } from 'react-router-dom';
// import { LayoutContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      {/* <LayoutContainer> */}
      <AppBar />
      <Outlet />
      {/* </LayoutContainer> */}
    </>
  );
};
