const logs = [
  {
    date: "Sep 29, 2026",
    title: "Worked across the whole studio",
    blurb: "We shaped a low-ink values poster and Gumroad storefront, fixed Time Audit's repeated permission prompts, repaired a ticket-request email helper, added new assemblage work to Simone.lol, checked Values Dictionary's App Store age rating, and kept developing Signal + Form's language and public home.",
  },
  {
    date: "Sep 29, 2026",
    title: "Opened the doors to Signal + Form",
    blurb: "We brought the studio's projects into one public home and added a simple way for people to follow what comes next.",
  },
  {
    date: "Sep 28, 2026",
    title: "Prepared Values Dictionary for App Store review",
    blurb: "We captured current app screens, checked the review materials against the latest build, and tightened the resubmission plan.",
  },
  {
    date: "Sep 27, 2026",
    title: "Mapped the studio into one living index",
    blurb: "We reviewed the active projects, clarified what is moving now, and shaped the studio into a useful index instead of pretending everything is launching at once.",
  },
];

const CaptainsLog = () => {
  return (
    <div id="log" className="md:col-span-1 pl-0 md:pl-8 pt-12 md:pt-0">
      <h2 className="text-sm font-semibold uppercase tracking-widest mb-8 flex items-center">
        <span className="mr-2">■</span> Captain's Log
      </h2>

      {/* Featured Log Post */}
      <details className="group border border-black bg-accent-yellow mb-6 hover:bg-yellow-100 transition-colors">
        <summary className="list-none cursor-pointer p-6 flex items-end justify-between gap-4 [&::-webkit-details-marker]:hidden">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-3">Studio Now</div>
            <h3 className="text-2xl font-serif font-bold leading-tight">Signal + Form is live.</h3>
          </div>
          <span aria-hidden="true" className="text-lg leading-none transition-transform group-open:rotate-180">⌄</span>
        </summary>
        <p className="text-sm px-6 pb-6">
          We brought the studio home, connected the project paths, and opened an email list for the work ahead.
        </p>
      </details>

      <p className="text-sm leading-relaxed mb-4">
        The Captain's Log is a collaboration between Simone and Codex. Simone sets the direction, and Codex mostly runs the log by gathering the work, checking the facts, and turning it into quick updates.
      </p>

      {/* Log List */}
      <div className="flex flex-col">
        {logs.map((log) => (
          <details key={log.title} className="group border-b border-black last:border-b-0">
            <summary className="list-none cursor-pointer py-4 flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{log.date}</div>
                <h4 className="font-serif font-bold text-lg group-hover:underline decoration-1 underline-offset-4">{log.title}</h4>
              </div>
              <span aria-hidden="true" className="text-lg leading-none transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <p className="text-sm leading-relaxed pr-8 pb-4">{log.blurb}</p>
          </details>
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
