import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle.astro';
import ButtonCv from './ButtonCv';

const MobileMenu = ({ navItems, id = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0; // Añadido para verificar el movimiento vertical
  let touchEndY = 0;

  // Maneja la apertura del menú
  const openMenu = () => {
    setIsOpen(true);
  };

  // Maneja el cierre del menú
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Detecta el inicio del gesto de deslizamiento
  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY; // Captura la posición vertical inicial
  };

  // Detecta el final del gesto de deslizamiento
  const handleTouchEnd = () => {
    const windowWidth = window.innerWidth;
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY; // Diferencia vertical

    // Verificar si el toque comenzó en la mitad izquierda (primer 50%) para abrir
    if (touchStartX < windowWidth / 2 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 50) {
        openMenu(); // Abre el menú si se desliza hacia la derecha desde la mitad izquierda
      }
    }

    // Verificar si el toque comenzó en la mitad derecha (último 50%) para cerrar
    if (touchStartX > windowWidth / 2 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < -50) {
        closeMenu(); // Cierra el menú si se desliza hacia la izquierda desde la mitad derecha
      }
    }
  };

  const handleTouchMove = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY; // Captura la posición vertical en movimiento
  };

  // Agrega los listeners para los eventos táctiles
  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <>
      {/* Botón para abrir el menú */}
      <button
        onClick={openMenu}
        className={`fixed top-4 right-4 z-20 inline-flex bg-gray-100 text-sm text-gray-950 border-gray-300 items-center justify-center gap-2 px-3 py-2 space-x-2 text-base transition dark:text-white dark:bg-gray-800 border dark:border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 ring-blue-300 md:hidden 
        ${isOpen ? 'hidden' : 'block'}`}
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
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
