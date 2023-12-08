// CharacterItem.js
import React from 'react';

function CharacterItem({ character, showAlive }) {
  // Realiza el renderizado condicional según el estado del personaje
  if ((showAlive && character.status === 'Alive') || (!showAlive && character.status === 'Dead')) {
    return (
      <div className='container-card-gral'>
        <li className='card card-container'>
          <h3 className='card-title'>{character.name}</h3>
          <img src={character.image} alt="foto" />
          <p className='card-parrafo'>Especie: {character.species}</p>
          <p className='card-parrafo'>Origen: {character.origin.name}</p>
          <p className='card-parrafo'>Location: {character.location.name}</p>
        </li>
      </div>
    );
  } else {
    return null; // No renderizar el componente si no cumple con el filtro
  }
}

export default CharacterItem;