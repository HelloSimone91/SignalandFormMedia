import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-8 border-b border-black">
      <div className="font-serif text-xl tracking-wide uppercase font-bold">
        Signal + Form
      </div>
      <nav className="flex space-x-8 text-sm uppercase tracking-widest font-semibold">
        <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
        <a href="#log" className="hover:opacity-70 transition-opacity">Captain's Log</a>
        <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        <a href="#follow" className="hover:opacity-70 transition-opacity">Follow</a>
      </nav>
    </header>
  );
};

export default Header;
