import React, { useState } from 'react';
import TagsComponent from './TagsComponents';
import GitHub from 'components/icons/GitHub.astro';
import Link from 'components/icons/Link.astro';
import data from 'public/cv.json';

const ProjectsComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filtra los proyectos en base al término de búsqueda
  const filteredProjects = data.PROJECTS.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section-container" id="proyectos">
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold">Proyectos</h2>
        <input
          type="text"
          placeholder="Buscar proyectos..."
          className="bg-white/10 rounded-full py-2 px-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-16">
        {filteredProjects.map((project, index) => (
          <article key={index} className="flex flex-col space-y-8 md:flex-row md:space-x-8 project">
            <div className="w-full md:w-1/2">
              <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-xl" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <TagsComponent tags={project.tags.map(tag => tag.replace('TAGS.', ''))} />
              <p className="mt-2 text-gray-700 dark:text-gray-400">{project.description}</p>
              <footer className="flex gap-4 mt-4">
                {project.github && (
                  <a href={project.github} className="flex items-center text-blue-500">
                    <GitHub className="w-5 h-5" /> Código
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="flex items-center text-blue-500">
                    <Link className="w-5 h-5" /> Vista previa
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

export default ProjectsComponent;
