import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Instructions = ({ instructions }) => {
  // il faut ajouter une prop key dans les listes
  // pour aider React lors du rendu
  // const listeInstructionsJSX = instructions.map((instruction) => <li key={instruction}>{instruction}</li>);

  return (
    <ul className="instructions">
      {instructions.map(
        (instruction) => <li key={instruction}>{instruction}</li>,
      )}
      {/* tableau préparer dans une variable et réinjecté */}
      {/* {listeInstructionsJSX} */}
    </ul>
  );
};

Instructions.propTypes = {
  // validation basique de tableau
  // instructions: PropTypes.array.isRequired,
  instructions: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Instructions;
