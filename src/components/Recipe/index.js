// == Import npm
import React from 'react';

// == Import
import data from 'src/data/recipe';
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';
// import reactLogo from './react-logo.svg';
import './styles.css';

// Container component - le composant qui reçoit et manipule les données
// == Composant
const Recipe = () => (
  <div className="app">
    {/* React.createElement(Header, {image: 'http://', alt: ''}, null) */}
    <Header
      image={data.thumbnail}
      author={data.author}
      title={data.title}
      level={data.difficulty}
    />
    <Ingredients ingredients={data.ingredients} />
    <Instructions instructions={data.instructions} />
  </div>
);

// == Export
export default Recipe;
