'use client'
import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import ContactPanel from '../pages/ContactPanel.jsx'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Layout = () => {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <>
      <Header setShowContactForm={setShowContactForm}/>
      <Outlet context={{ setShowContactForm }} />
      {showContactForm && (
        <ContactPanel onClose={() => setShowContactForm(false)} />
      )}
    </>
  )
};

export default Layout;