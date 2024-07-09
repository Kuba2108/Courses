import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isNotFoundPage = location.pathname === '/404' || location.pathname === '*';

  return (
    <>
      {!isNotFoundPage && <Header />}
      <Outlet />
      {!isNotFoundPage && <Footer />}
    </>
  );
};

export default Layout;
