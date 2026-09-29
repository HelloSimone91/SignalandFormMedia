import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-6 px-8 border-b border-black gap-4 md:gap-0">
      <div className="font-serif text-xl tracking-wide uppercase font-bold">
        Signal + Form
      </div>
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm uppercase tracking-widest font-semibold">
        <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
        <a href="#log" className="hover:opacity-70 transition-opacity">Captain's Log</a>
        <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
        <a href="/signup.html" className="hover:opacity-70 transition-opacity">Follow</a>
      </nav>
    </header>
  );
};

export default Header;
