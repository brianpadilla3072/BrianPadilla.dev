import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle.astro';
import ButtonCv from './ButtonCv';

const MobileMenu = ({ navItems, id = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón para abrir el menú */}
      <button
        onClick={toggleMenu}
        className={`fixed top-4 right-4 z-20 inline-flex bg-gray-100 text-gray-800 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black text-white p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 ring-blue-300 md:hidden 
        ${isOpen ? 'hidden ' : 'block'}`}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Menú móvil */}
      <nav
        id={`navMovile ${id}`}
        className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-200 bg-opacity-50 dark:bg-opacity-90 bg-white dark:bg-gray-800 shadow-lg ring-1 backdrop-blur ring-white/10 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ animation: 'nav-shadown 1s linear both' }}
      >
        {/* Botón para cerrar el menú */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-200 focus:outline-none"
          aria-label="Cerrar menú"
        >
          &times;
        </button>

        {navItems.map((link, index) => (
          <a
            key={index}
            className="relative flex justify-center block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}

        <div className="flex justify-center items-center mt-4">
          <ButtonCv />
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
