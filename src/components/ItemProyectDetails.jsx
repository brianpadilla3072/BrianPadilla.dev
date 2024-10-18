import React from 'react';
import TagsComponent from './TagsComponents';
import GitHub from './icons/GitHub';
import Link from './icons/Link';
import LinkButton from './LinkButton.jsx';

const ItemProjectDetails = ({ project }) => {
  if (!project) {
    return <p>No se encontró el proyecto.</p>;
  }

  return (
    <article className="flex flex-col space-y-8 md:flex-row md:space-x-8 project">
      <div className="w-full md:w-1/2">
        <img src={project.image} alt={project.title} className="object-cover w-full h-56 rounded-xl" />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <TagsComponent tags={project.tags.map(tag => tag.replace('TAGS.', ''))} max={3} />
        <p className="mt-2 text-gray-700 dark:text-gray-400">{project.description}</p>
        <footer className="flex gap-4 mt-4">
          {project.github && (
            <LinkButton href={project.github}>
              <GitHub className="w-5 h-5" /> Código
            </LinkButton>
          )}
          {project.link && (
            <LinkButton href={project.link}>
              <Link className="w-5 h-5" /> Vista previa
            </LinkButton>
          )}
        </footer>
      </div>
    </article>
  );
};

export default ItemProjectDetails;
