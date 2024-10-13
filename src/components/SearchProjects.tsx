import React, { useState } from 'react';

interface Tag {
  name: string;
  class: string;
  icon: React.ComponentType;
}

interface Project {
  image: string;
  title: string;
  description: string;
  tags: Tag[];
  link?: string;
  github?: string;
}

interface SearchProjectsProps {
  projects: Project[];
}

const SearchProjects: React.FC<SearchProjectsProps> = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project: { title: string; description: string; tags: any[]; }) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some((tag: { name: string; }) => tag.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <div className="relative w-full sm:w-64 mb-6">
        <input
          type="text"
          placeholder="Buscar proyectos..."
          className="bg-white/10 rounded-full py-2 px-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e: { target: { value: any; }; }) => setSearchTerm(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-3 top-2.5 text-white/50"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      <div className="flex flex-col gap-y-16">
        {filteredProjects.map((project: { title: any; image: any; tags: any[]; description: any; github: any; link: any; }) => (
          <article key={project.title} className="flex flex-col md:flex-row space-y-8 space-x-0 md:space-y-0 md:space-x-8 project">
            <div className="w-full md:w-1/2">
              <div className="relative flex items-center overflow-clip rounded-xl shadow-xl transition duration-500 ease-in-out">
                <img alt={project.title} src={project.image} className="w-full h-56 object-cover md:scale-110 transition md:group-hover:scale-105" />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="flex flex-wrap mt-2">
                <ul className="flex flex-row mb-2 gap-x-2">
                  {project.tags.map((tag: { name: any; class: any; icon: unknown; }) => (
                    <li key={tag.name}>
                      
                      <span className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}>
                        <tag.icon />
                        {tag.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-2">{project.description}</p>
              <footer className="flex items-end mt-4 gap-x-4">
                {project.github && (
                  <a href={project.github} className="flex items-center gap-x-2">
                    <GitHubIcon />
                    Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="flex items-center gap-x-2">
                    <LinkIcon />
                    Preview
                  </a>
                )}
              </footer>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SearchProjects;
