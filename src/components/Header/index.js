import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
// Stateless component / dumb component - composant sans état
// parametré depuis l'extérieur, reçoit des props
// ne prend pas de décision par rapport aux données, il ne 
// fait que les afficher
const Header = ({
  image,
  title,
  author,
  level,
}) => (
  <header className="header">
    <img
      src={image}
      alt="Recette de crêpe"
      className="header-image"
    />
    <div className="header-content">
      <h1 className="header-title">{title}</h1>
      <p className="header-infos">{author} - {level}</p>
    </div>
  </header>
);

// Les proptypes sont là pour valider les types de données
// qu'on va passer aux props du composant
Header.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default Header;
