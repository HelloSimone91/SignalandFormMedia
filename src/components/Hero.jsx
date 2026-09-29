import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="py-16 px-8 relative overflow-hidden border-b border-black flex flex-col md:flex-row">
      {/* Decorative stars/crosses background can be added as absolute positioning here */}
      <div className="absolute top-10 left-10 text-xl opacity-20">✧</div>
      <div className="absolute top-32 left-1/4 text-xl opacity-20">✧</div>
      <div className="absolute bottom-20 left-1/3 text-xl opacity-20">✧</div>

      <div className="w-full md:w-3/5 z-10 md:pr-10">
        <h1 className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-serif leading-[0.9] tracking-[-0.055em] mb-8 max-w-4xl">
          Media, tools, and gatherings to navigate the wilderness.
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl font-serif leading-snug">
          A studio for noticing what matters, making useful things, and sharing what we learn along the way.
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
        <div className="hero-orbit relative w-full aspect-square max-w-md overflow-hidden border border-black bg-[#f1edff]" aria-hidden="true">
          <div className="absolute inset-[9%] rounded-full border border-black"></div>
          <div className="absolute inset-[23%] rounded-full border border-black"></div>
          <div className="absolute w-[38%] aspect-square rounded-full bg-[#ff725e] border border-black top-[8%] right-[8%]"></div>
          <div className="absolute w-[28%] aspect-square rounded-full bg-[#ffe66d] border border-black bottom-[10%] left-[8%]"></div>
          <div className="absolute w-[18%] aspect-square rounded-full bg-[#57d6a4] border border-black left-[15%] top-[16%]"></div>
          <div className="absolute inset-x-[-10%] top-1/2 h-px bg-black rotate-[-14deg]"></div>
          <div className="absolute inset-y-[-10%] left-1/2 w-px bg-black rotate-[18deg]"></div>
          <span className="absolute bottom-6 right-6 text-xs uppercase tracking-[0.24em] font-semibold">Signal / Form / Next</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
