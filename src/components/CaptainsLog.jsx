import React from 'react';

const CaptainsLog = () => {
  const logs = [
    { date: "Oct 12, 2023", title: "Designing the new Values Dictionary" },
    { date: "Sep 28, 2023", title: "Reflections on our first gathering" },
    { date: "Aug 15, 2023", title: "Why we're building Howdy Human" },
    { date: "Jul 02, 2023", title: "The importance of slow media" },
    { date: "Jun 14, 2023", title: "Archiving old projects to make space" },
  ];

  return (
    <div className="md:col-span-1 pl-0 md:pl-8 pt-12 md:pt-0">
      <h2 className="text-sm font-semibold uppercase tracking-widest mb-8 flex items-center">
        <span className="mr-2">■</span> Captain's Log
      </h2>

      {/* Featured Log Post */}
      <div className="border border-black bg-accent-yellow p-6 mb-8 cursor-pointer hover:bg-yellow-100 transition-colors">
        <div className="text-xs font-semibold uppercase tracking-widest mb-3">Studio Now</div>
        <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">
          We're looking for early beta testers for Howdy Human.
        </h3>
        <p className="text-sm mb-6">
          If you're interested in helping us shape the future of digital connection, we'd love to hear from you.
        </p>
        <div className="flex justify-end">
          <span className="text-2xl">→</span>
        </div>
      </div>

      {/* Log List */}
      <div className="flex flex-col">
        {logs.map((log, i) => (
          <div key={i} className="flex flex-col py-4 border-b border-black last:border-b-0 cursor-pointer group">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{log.date}</div>
            <div className="flex justify-between items-center">
              <h4 className="font-serif font-bold text-lg group-hover:underline decoration-1 underline-offset-4">{log.title}</h4>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 border border-black py-3 font-semibold uppercase text-xs tracking-widest hover:bg-black hover:text-cream transition-colors">
        View All Logs
      </button>
    </div>
  );
};

export default CaptainsLog;
