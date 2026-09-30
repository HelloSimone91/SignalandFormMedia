const logs = [
  {
    date: "Sep 29, 2026",
    title: "Set up the Gumroad shop",
    blurb: "We kept working the Gumroad shop and pointed thingsgetweird.com's DNS at it, then came up with an amazing storefront design. Got three new digital products added to the shop. Checked App Store Connect incessantly. Values Dictionary has not yet been re-reviewed.",
  },
  {
    date: "Sep 29, 2026",
    title: "Kicked off the Howdy Human Instagram rhythm",
    blurb: "We downloaded the Muse app, committed to posting daily, and planned the first week of Howdy Human posts.",
  },
  {
    date: "Sep 28, 2026",
    title: "Watched the Values Dictionary review status",
    blurb: "We checked the App Store review submissions through the morning and kept the resubmission materials ready.",
  },
  {
    date: "Sep 27, 2026",
    title: "Took a first look at Codexia",
    blurb: "We opened Codexia late in the evening to see if it could help with studio work.",
  },
  {
    date: "Sep 26, 2026",
    title: "Took the App Store rejection and regrouped",
    blurb: "The Values Dictionary App was rejected from the App Store after its first submission. A couple of rookie mistakes needed to be corrected. We sat with it, then started planning the way back in.",
  },
  {
    date: "Sep 26, 2026",
    title: "Wrestled the App Store screenshots into shape",
    blurb: "We fought through the screenshot requirements in Pixelmator Pro and Canva until the review materials looked presentable.",
  },
  {
    date: "Sep 25, 2026",
    title: "Submitted Values Dictionary to the App Store",
    blurb: "We got the app submitted for review. Something we’ve been working toward and afraid of for over a year. Big one.",
  },
  {
    date: "Sep 25, 2026",
    title: "Shipped howdyhuman.com/resources",
    blurb: "We built the resources page with Codex and started sketching what comes next for the studio sites.",
  },
  {
    date: "Sep 24, 2026",
    title: "Pushed the studio's web projects forward",
    blurb: "We spent the afternoon in GitHub keeping the studio's web work moving.",
  },
  {
    date: "Sep 21, 2026",
    title: "Built supplemental lesson materials in Canva",
    blurb: "We made supplemental lesson materials in Canva, grumpy but on a roll.",
  },
  {
    date: "Sep 21, 2026",
    title: "Got on a roll despite the grump",
    blurb: "We worked through a grumpy morning and found our stride with ChatGPT.",
  },
  {
    date: "Sep 19, 2026",
    title: "Clarified Signal + Form for a design concept",
    blurb: "We worked through what Signal + Form means so we could build a design concept in Open Design, and kept working on the app.",
  },
  {
    date: "Sep 18, 2026",
    title: "Ran a design review in Polishory",
    blurb: "We put the designs through a review pass in Polishory.",
  },
  {
    date: "Sep 17, 2026",
    title: "Put in time on the websites and the app",
    blurb: "We worked on the websites and the app, keeping the studio's projects inching forward.",
  },
  {
    date: "Sep 16, 2026",
    title: "Worked on the Howdy Human web and iOS apps",
    blurb: "We pushed on both the web app and the iOS app for Howdy Human, and talked future dreams with Jeepers.",
  },
  {
    date: "Sep 15, 2026",
    title: "Fixed up the websites with Jules",
    blurb: "We worked through website fixes with Jules and Canva, and checked on the app in App Store Connect.",
  },
  {
    date: "Sep 14, 2026",
    title: "Went for a run on no sleep",
    blurb: "Laced up and ran 1 mile anyway, even on an empty tank.Trying to start a new habit", 
  },
  {
    date: "Sep 13, 2026",
    title: "Designed the Values Dictionary app icon",
    blurb: "Spent the early hours in Affinity drawing the dictionary app's icon, then reined in Jules after it overworked howdyhuman.com.",
  },
  {
    date: "Sep 12, 2026",
    title: "Reviewed pull requests for howdyhuman.com",
    blurb: "Worked through website pull requests with Jules, keeping the site's changes moving.",
  },
  {
    date: "Sep 11, 2026",
    title: "Worked on valuesinthewild.com and howdyhuman.com with Jules",
    blurb: "Pushed fixes on the studio's web projects with the Jules coding tool and cleaned up the Notion workspace.",
  },
];


const CaptainsLog = () => {
  return (
    <div id="log" className="md:col-span-1 pl-0 md:pl-8 pt-14 md:pt-0">
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
          The Captain's Log is a collaboration between Simone and Codex. Simone sets the direction, and Codex mostly runs the log by gathering the work, checking the facts, and turning it into quick updates.
        </p>
      </details>

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
