import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#bae3ff] py-12 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <div className="font-bold mb-4">Site name</div>
          <div className="flex gap-4 text-gray-700">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <div className="font-medium mb-2">Topic</div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">Topic</div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">Topic</div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;