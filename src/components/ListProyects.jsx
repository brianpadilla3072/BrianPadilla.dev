
import { useState, useEffect } from 'react';
import TagsComponent from './TagsComponents';
import GitHub from './icons/GitHub';
import Link from './icons/Link';
const ListProyects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState([]);

  // Carga el archivo JSON de manera dinámica
  useEffect(() => {
    fetch('/cv.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProjects(data.PROJECTS);
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="section-container" id="proyectos">
      <input
        type="text"
        placeholder="Buscar proyectos..."
        className="bg-white/10 rounded-full py-2 px-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex mt-3 flex-col gap-y-16">
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

export default ListProyects;
