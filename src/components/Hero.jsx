import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="py-16 px-8 relative overflow-hidden border-b border-black flex flex-col md:flex-row">
      {/* Decorative stars/crosses background can be added as absolute positioning here */}
      <div className="absolute top-10 left-10 text-xl opacity-20">✧</div>
      <div className="absolute top-32 left-1/4 text-xl opacity-20">✧</div>
      <div className="absolute bottom-20 left-1/3 text-xl opacity-20">✧</div>

      <div className="w-full md:w-3/5 z-10 pr-8">
        <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
          Media, tools, and gatherings to navigate the wilderness.
        </h1>
        <p className="text-xl mb-10 max-w-xl font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex space-x-4">
          <a href="#projects" className="border border-black rounded-full px-6 py-3 font-semibold uppercase text-sm tracking-widest hover:bg-black hover:text-cream transition-colors inline-block text-center">
            Explore Projects
          </a>
          <a href="/signup.html" className="border border-black rounded-full px-6 py-3 font-semibold uppercase text-sm tracking-widest hover:bg-black hover:text-cream transition-colors inline-block text-center">
            Subscribe
          </a>
        </div>
      </div>

      <div className="w-full md:w-2/5 mt-12 md:mt-0 relative flex justify-center items-center">
        {/* Placeholder for the illustration */}
        <div className="relative w-full aspect-square max-w-md border border-dashed border-gray-400 flex flex-col items-center justify-center bg-cream-dark opacity-50">
           <span className="font-serif italic mb-2">Sun & Mountain Illustration</span>
           <span className="text-xs uppercase tracking-widest">Placeholder</span>

           {/* Simple CSS shape approximations */}
           <div className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full border border-black border-dashed"></div>
           <svg className="absolute bottom-10 left-10 w-full opacity-30" viewBox="0 0 100 50">
             <path d="M0 50 L30 20 L50 40 L80 10 L100 30" fill="none" stroke="black" strokeWidth="1" strokeDasharray="2,2"/>
           </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
