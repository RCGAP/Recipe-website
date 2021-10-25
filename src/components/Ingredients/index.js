import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Ingredients = ({ ingredients }) => {
  // Forme d'un object du tableau
  // {
  //   id: 1,
  //   quantity: 375,
  //   unit: 'g',
  //   name: 'de farine tamisée',
  // }
  const listIngredients = ingredients.map(({ id, quantity, unit, name }) => {
    return (
      <li key={id}>{quantity} {unit} {name}</li>
    );
  });

  return (
    <ul>
      {listIngredients}
    </ul>
  );
};

Ingredients.propTypes = {
  // validation basique d'array
  // ingredients: PropTypes.array.isRequired,

  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};


export default Ingredients;
