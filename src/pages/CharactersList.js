import React from 'react';
import { Link } from 'react-router-dom';
import useCharacters from '../hooks/useCharacters';
import LoadingSpinner from '../components/LoadingSpinner';

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <LoadingSpinner />;
  if (error) return <div>An error occurred</div>;

  return (
    <>
      <header
        style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#343a40',
          color: 'white',
        }}
      >
        <h1
          style={{
            margin: '0',
            fontSize: '2.5rem',
            fontWeight: '700',
          }}
        >
          Welcome to the Rick and Morty Universe!
        </h1>
      </header>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        {data.characters.results.map((character) => {
          return (
            <Link
              to={`/${character.id}`}
              key={character.id}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseOver={({ currentTarget }) => {
                  currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={({ currentTarget }) => {
                  currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                <h2
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    margin: '0.5rem',
                  }}
                >
                  {character.name}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
