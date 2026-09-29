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

        <footer className="border-t border-black p-8 flex justify-between items-center text-xs uppercase tracking-widest font-semibold">
          <div>© {new Date().getFullYear()} Signal + Form Media</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Are.na</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
