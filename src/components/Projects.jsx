import React from 'react';

const ProjectCard = ({ title, description, status, href, accent = "bg-[#f1edff]", mark = "✦", graphic, statusColor = "bg-green-500" }) => (
  <a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="flex flex-col h-full border border-black group cursor-pointer hover:-translate-y-1 hover:shadow-[8px_8px_0_#1f1f1f] transition-all no-underline text-inherit overflow-hidden"
  >
    <div className={`h-28 md:h-36 border-b border-black ${accent} relative overflow-hidden`} aria-hidden="true">
      {graphic === "weird" ? (
        <>
          <div className="absolute -right-8 -top-12 w-36 h-36 rounded-full bg-[#5d4a82] opacity-95 transition-transform duration-500 group-hover:scale-110"></div>
          <span className="absolute right-7 top-3 text-5xl text-[#ff725e] transition-transform duration-500 group-hover:rotate-12">✦</span>
          <span className="absolute left-4 top-3 font-serif text-3xl md:text-4xl leading-[0.82] tracking-[-0.055em]">things get<br />weird</span>
          <svg className="absolute left-3 bottom-2 w-36 h-7 text-[#f4b942]" viewBox="0 0 150 28" fill="none">
            <path d="M4 21C42 9 83 8 144 14" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </>
      ) : (
        <>
          <span className="absolute -right-3 -bottom-10 font-serif text-[9rem] md:text-[11rem] leading-none tracking-tighter opacity-90 transition-transform duration-500 group-hover:-translate-x-3 group-hover:-translate-y-2">{mark}</span>
          <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.28em] font-semibold">Signal + Form</span>
        </>
      )}
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-3xl md:text-4xl font-serif font-bold leading-[0.95] tracking-[-0.04em] mb-4">{title}</h3>
      <p className="text-sm flex-grow mb-6">{description}</p>

      <div className="flex items-center text-xs uppercase tracking-widest font-semibold mt-auto pt-4 border-t border-gray-300">
        <span className={`w-2 h-2 rounded-full ${statusColor} mr-2`}></span>
        {status}
      </div>
    </div>
  </a>
);

const Projects = () => {
  const projects = [
    {
      title: "Values Dictionary",
      description: "A community-sourced dictionary of human values, mapping the territories of what matters.",
      href: "https://apps.apple.com/us/app/values-dictionary/id6816215526",
      accent: "bg-[#ffe66d]",
      mark: "Aa",
      status: "NOW",
      statusColor: "bg-green-500"
    },
    {
      title: "Values for Life",
      description: "Essays and field notes about turning values into everyday practice.",
      href: "https://valuesforlife.substack.com/",
      accent: "bg-[#f1edff]",
      mark: "✦",
      status: "GROWING",
      statusColor: "bg-blue-500"
    },
    {
      title: "Howdy Human",
      description: "An experimental social interface for authentic connection in the digital age.",
      href: "https://www.howdyhuman.com/",
      accent: "bg-[#c9f4e2]",
      mark: ":)",
      status: "GROWING",
      statusColor: "bg-blue-500"
    },
    {
      title: "Things Get Weird",
      description: "Workbooks and creative tools for becoming more yourself.",
      href: "https://thingsgetweird.com/",
      accent: "bg-[#dce7ff]",
      graphic: "weird",
      status: "NOW",
      statusColor: "bg-green-500"
    },
    {
      title: "The Long View",
      description: "A quarterly publication on long-term thinking and ecological awareness.",
      accent: "bg-[#dce9ff]",
      mark: "∞",
      status: "IN THE ARCHIVE",
      statusColor: "bg-gray-400"
    }
  ];

  return (
    <div id="projects" className="md:col-span-2 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-black pb-12 md:pb-0">
      <h2 className="text-sm font-semibold uppercase tracking-widest mb-8 flex items-center">
        <span className="mr-2">■</span> Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
