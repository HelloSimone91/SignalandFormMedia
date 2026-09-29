import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Projects from './components/Projects';
import CaptainsLog from './components/CaptainsLog';

function App() {
  return (
    <div className="min-h-screen border-x-0 md:border-x-8 lg:border-x-[16px] border-black">
      <div className="max-w-[1600px] mx-auto border-x border-black min-h-screen bg-cream flex flex-col">
        <Header />
        <Hero />
        <Ticker />

        <main className="flex-grow grid grid-cols-1 md:grid-cols-3 p-8">
          <Projects />
          <CaptainsLog />
        </main>

        <footer className="border-t border-black p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest font-semibold text-center md:text-left">
          <div>© 2025 Signal + Form Media</div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="https://www.valuesinthewild.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Values in the Wild</a>
            <a href="https://www.howdyhuman.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Howdy Human</a>
            <a href="https://signalandformmedia.gumroad.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Signal + Form Shop</a>
            <a href="/signup.html" className="hover:underline">Email List</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
