import React from 'react';

const Hero = () => {
  return (
    <section className="px-6 md:px-12 py-12 text-center md:text-left">
      <h1 className="text-4xl md:text-5xl font-bold text-[#e69286] mb-4">Landing page title</h1>
      <p className="text-gray-700 mb-6 max-w-xl">Subheading that sets up context, shares more info about the website, or generally gets people psyched to keep scrolling.</p>
      <button className="bg-[#e4a79c] text-white px-6 py-3 rounded">Button</button>
      <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" alt="Hero" className="w-full rounded-md mt-12"/>
    </section>
  );
};

export default Hero;