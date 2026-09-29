import React from 'react';

const CaptainsLog = () => {
  const logs = [
    { date: "Sep 29, 2026", title: "Opened the doors to Signal + Form" },
    { date: "Sep 28, 2026", title: "Prepared Values Dictionary for App Store review" },
    { date: "Sep 27, 2026", title: "Mapped the studio into one living index" },
  ];

  return (
    <div id="log" className="md:col-span-1 pl-0 md:pl-8 pt-12 md:pt-0">
      <h2 className="text-sm font-semibold uppercase tracking-widest mb-8 flex items-center">
        <span className="mr-2">■</span> Captain's Log
      </h2>

      {/* Featured Log Post */}
      <div className="border border-black bg-accent-yellow p-6 mb-8 cursor-pointer hover:bg-yellow-100 transition-colors">
        <div className="text-xs font-semibold uppercase tracking-widest mb-3">Studio Now</div>
        <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">
          Signal + Form is live.
        </h3>
        <p className="text-sm mb-6">
          We brought the studio home, connected the project paths, and opened an email list for the work ahead.
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

      <a
        href="/signup.html"
        className="block w-full mt-8 border border-black py-3 font-semibold uppercase text-xs tracking-widest text-center hover:bg-black hover:text-cream transition-colors"
      >
        Follow the work
      </a>
    </div>
  );
};

export default CaptainsLog;
