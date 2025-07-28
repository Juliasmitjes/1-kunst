'use client' 

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { NavLink, ScrollRestoration  } from 'react-router-dom';



const Footer = ({ setShowContactForm }) => {
  return (
    <footer className="bg-white">
      <div className="bg-peach mx-auto flex flex-col max-w-7xl md:flex-row justify-between p-6 mt-3 mb-3 lg:px-8 rounded-lg">
        <div className="mb-6 md:mb-0">
          <div className="font-nunito text-white mb-4">Site name
          </div>

          <div className="flex gap-4 text-white text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Bezoek Facebook">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Bezoek LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Bezoek Instagram">
              <FaInstagram />
            </a>
          </div>

        </div>
        <div className="mr-20 gap-6">
          <div>
            <ul className="text-sm space-y-1 text-gray-700">

             <li>
                <NavLink 
                  to="/" 
                  end
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={({ isActive }) =>
                    `font-bold font-nunito ${isActive ? 'text-sky' : 'text-white hover:text-sky'}`
                  }
                >
                  Over mij
                </NavLink>
              </li>

              <li>
                <NavLink 
                  to="/bomen" 
                  className="font-nunito text-white hover:text-sky"
                >
                  Winterbomen
                </NavLink>
              </li>

               <li>
                <NavLink 
                  to="/bomen" 
                  className="font-nunito text-white hover:text-sky"
                >
                  Zomerbomen
                </NavLink>
              </li>

              <li><a href="#" className="font-nunito text-white hover:text-sky">Gallerij</a></li>

              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // voorkomt dat de pagina naar boven springt
                    setShowContactForm(true); // opent het formulier
                  }}
                  className="font-nunito text-white hover:text-sky"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;