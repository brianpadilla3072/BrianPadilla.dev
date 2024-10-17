// ButtonCv.jsx
import React from 'react';
import  CvSvg  from 'public/CvSvg.jsx'; // Ajusta la ruta al archivo SVG si es necesario

const ButtonCv = () => {
  const cvUrl = "curriculumvitae"; // Ruta al archivo PDF del CV

  return (
    <div className="relative ml-1 mr-1">
      <a
        href={cvUrl}
        className="appearance-none border-none flex hover:scale-125 transition"
      >
        <span className="sr-only">Descargar CV</span>
        <CvSvg className="size-5" />
      </a>
    </div>
  );
};

export default ButtonCv;
