import React from 'react';

const ProjectCard = ({ title, description, status, href, statusColor = "bg-green-500" }) => (
  <a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="flex flex-col h-full border border-black group cursor-pointer hover:bg-cream-dark transition-colors no-underline text-inherit"
  >
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-2xl font-serif font-bold mb-3">{title}</h3>
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
      status: "NOW",
      statusColor: "bg-green-500"
    },
    {
      title: "Values for Life",
      description: "Essays and field notes about turning values into everyday practice.",
      href: "https://valuesforlife.substack.com/",
      status: "GROWING",
      statusColor: "bg-blue-500"
    },
    {
      title: "Howdy Human",
      description: "An experimental social interface for authentic connection in the digital age.",
      href: "https://www.howdyhuman.com/",
      status: "GROWING",
      statusColor: "bg-blue-500"
    },
    {
      title: "Campfire Media",
      description: "Tools for hosting better conversations, both online and off.",
      status: "IN THE ARCHIVE",
      statusColor: "bg-gray-400"
    },
    {
      title: "The Long View",
      description: "A quarterly publication on long-term thinking and ecological awareness.",
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
