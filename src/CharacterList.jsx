import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [showAlive, setShowAlive] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setShowAlive(true)}>Mostrar Personajes Vivos</button>
        
        <button onClick={() => setShowAlive(false)}>Mostrar 
          Personajes Muertos</button>
      </div>
      <ul>
        {characters.map((character) => (
          <CharacterItem key={character.id} character={character} showAlive={showAlive} />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
