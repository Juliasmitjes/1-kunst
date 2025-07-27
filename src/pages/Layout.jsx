import { Outlet, Link } from "react-router-dom";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
};

export default Layout;