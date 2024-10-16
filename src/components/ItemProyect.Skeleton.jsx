import React from 'react';
import '../components/style/ItemProyectSkeleton.css'; // Importa el archivo CSS

const ItemProyectSkeleton = () => {
  return (
    <article className="containerWrapper">
      <div className="imageWrapper">
        <div className="skeleton skeleton-rect" />
      </div>
      <div className="contentWrapper">
        <div className="skeleton skeleton-text" style={{ width: '90%', height: '2rem' }} />
        <div className="tagsWrapper">
          <div className="skeleton skeleton-tag" />
          <div className="skeleton skeleton-tag" />
          <div className="skeleton skeleton-tag" />
        </div>
        <div className="textWrapper">
          <div className="skeleton skeleton-text" style={{ width: '100%' }} />
          <div className="skeleton skeleton-text" style={{ width: '100%' }} />
          <div className="skeleton skeleton-text" style={{ width: '85%' }} />
        </div>
        <div className="buttonWrapper">
          <div className="skeleton skeleton-button" />
          <div className="skeleton skeleton-button" />
        </div>
      </div>
    </article>
  );
};

export default ItemProyectSkeleton;
