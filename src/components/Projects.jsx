import React from 'react';

const ProjectCard = ({ title, description, status, statusColor = "bg-green-500", imageUrl }) => (
  <div className="flex flex-col h-full border border-black group cursor-pointer hover:bg-cream-dark transition-colors">
    <div className="border-b border-black aspect-video flex items-center justify-center overflow-hidden bg-white/50">
       {/* Placeholder for project image */}
       <div className="text-gray-400 font-serif italic text-sm">Image Placeholder</div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-2xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-sm flex-grow mb-6">{description}</p>

      <div className="flex items-center text-xs uppercase tracking-widest font-semibold mt-auto pt-4 border-t border-gray-300">
        <span className={`w-2 h-2 rounded-full ${statusColor} mr-2`}></span>
        {status}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Values Dictionary",
      description: "A community-sourced dictionary of human values, mapping the territories of what matters.",
      status: "NOW",
      statusColor: "bg-green-500"
    },
    {
      title: "Values Like Us",
      description: "Podcast exploring how different people and cultures define and live their values.",
      status: "GROWING",
      statusColor: "bg-blue-500"
    },
    {
      title: "Howdy Human",
      description: "An experimental social interface for authentic connection in the digital age.",
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
    <div className="md:col-span-2 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-black pb-12 md:pb-0">
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
