const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-6 px-6 md:px-12">
      <div className="font-semibold text-gray-700">Site name</div>
      <nav className="hidden md:flex gap-6 items-center">
        <a href="#" className="text-gray-700 hover:text-gray-900">Page</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Page</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">Page</a>
        <button className="bg-[#e4a79c] text-white px-4 py-2 rounded">Button</button>
      </nav>
    </header>
  );
};

export default Navbar;