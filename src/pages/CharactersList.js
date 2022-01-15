import React from 'react';
import { Link } from 'react-router-dom';
import useCharacters from '../hooks/useCharacters';

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>Spinner...</div>;
  if (error) return <div>Error bruh..</div>;

  return (
    <div className='character-list'>
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <img src={character.image} alt='character' />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
