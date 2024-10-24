import React, { useEffect } from 'react';
import TagsComponent from './TagsComponents';
import GitHub from './icons/GitHub';
import Link from './icons/Link';
import LinkButton from './LinkButton.jsx';

const ItemProjectDetails = ({ project, isVisibleItemProyectDetails, functionChangeVisivility }) => {
  // Usar useEffect para ajustar la visibilidad del primer section cuando se monta el componente
  useEffect(() => {
    if (isVisibleItemProyectDetails) {
      const focusDiv = document.getElementById('focus');
      if (focusDiv) {
        focusDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [isVisibleItemProyectDetails]);

  if (!project || !isVisibleItemProyectDetails) {
    return null;
  }

  return (
    <div id="focus" className="fixed  inset-0 z-50  overflow-auto flex dark:bg-custom-blue-background justify-center bg-opacity-90 dark:bg-opacity-90 bg-white dark:bg-gray-800">
      <article
        className="relative bg-white hide-scrollbar overflow-auto dark:bg-custom-blue-background p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col space-y-8 animate-fadeInUp"
      >
        {/* Botón para cerrar el modal */}
        <button
          style={{
            backgroundColor: "rgb(3 7 18)",
            borderRadius: "50%",
            padding: "0.5rem",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
            color: "#fff",
            cursor: "pointer",
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
          }}
          onClick={() => functionChangeVisivility(!isVisibleItemProyectDetails)}
        >
          &times;
        </button>

        {/* Primer section */}
        <section className="md:flex md:space-x-8 animate-fadeInUp">
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
        </section>

        {/* Segundo section */}
        <section className="w-full mx-1  lg:max-w-4xl md:max-w-2xl">
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <rect x="3" y="3" width="18" height="4" rx="1" ry="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
              <rect x="3" y="9" width="18" height="4" rx="1" ry="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
              <rect x="3" y="15" width="18" height="4" rx="1" ry="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
              <circle cx="8" cy="5" r="0.75" fill="currentColor"></circle>
              <circle cx="8" cy="11" r="0.75" fill="currentColor"></circle>
              <circle cx="8" cy="17" r="0.75" fill="currentColor"></circle>
              <path d="M16 5h2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M16 11h2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M16 17h2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>

            Backend
          </h2>
          <TagsComponent className="my-3" tags={project.backend.tags.map(tag => tag.replace('TAGS.', ''))} max={3} />

          <p>{project.backend.description}</p>
        </section>
        <section className="w-full mx-1  lg:max-w-4xl md:max-w-2xl">
          <h2 className="flex items-center mb-3 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <rect x="3" y="4" width="18" height="14" rx="2" ry="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>

              <rect x="3" y="4" width="18" height="3" rx="1" ry="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>

              <circle cx="6" cy="5.5" r="0.75" fill="currentColor"></circle>
              <circle cx="9" cy="5.5" r="0.75" fill="currentColor"></circle>
              <circle cx="12" cy="5.5" r="0.75" fill="currentColor"></circle>

              <rect x="5" y="10" width="14" height="7" rx="1" ry="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect>
            </svg>

            Frontend
          </h2>
          <TagsComponent className="mb-3" tags={project.frontend.tags.map(tag => tag.replace('TAGS.', ''))} max={3} />

          <p>{project.frontend.description}</p>
          </section>
      </article>
    </div>
  );
};

export default ItemProjectDetails;
