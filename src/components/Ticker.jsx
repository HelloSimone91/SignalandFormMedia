import React from 'react';

const Ticker = () => {
  return (
    <div className="border-b border-black py-4 px-8 flex items-center justify-between text-sm uppercase tracking-widest font-semibold overflow-x-auto whitespace-nowrap">
      <div className="flex items-center space-x-2 mr-8">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span>What's Moving</span>
      </div>

      <div className="flex items-center space-x-12 opacity-80">
         <span className="italic font-serif normal-case opacity-60">Currently Exploring:</span>
         <span>Values Dictionary</span>
         <span>✦</span>
         <span>Values Like Us</span>
         <span>✦</span>
         <span>Howdy Human</span>
      </div>
    </div>
  );
};

export default Ticker;
