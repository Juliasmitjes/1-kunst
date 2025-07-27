import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};

export default Layout;