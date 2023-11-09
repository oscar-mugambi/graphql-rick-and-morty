import React from 'react';
import { useParams } from 'react-router';
import useCharacter from '../hooks/useCharacter';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorState from '../components/ErrorComponent';

const paragraphStyle = { margin: '0.25em 0', fontSize: '1.25em' };

export default function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (error) return <ErrorState errorMessage={error.message} />;
  if (loading) return <LoadingSpinner />;

  return (
    <div
      className='container'
      style={{
        margin: '0 auto',
        padding: '20px',
        overflow: 'hidden',
        backgroundColor: '#e9ecef',
        minHeight: '100vh',
      }}
    >
      <div
        className='character'
        style={{
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'flex',
          marginBottom: '20px',
        }}
      >
        <img
          src={data.character.image}
          alt={data.character.name}
          className='character-image'
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}
        />
        <div
          className='character-content'
          style={{
            padding: '20px',
            backgroundColor: '#fff',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ marginBottom: '0.5em', color: '#333', fontSize: '2em' }}>
            {data.character.name}
          </h1>
          <p style={paragraphStyle}>
            <strong>Status:</strong> {data.character.status}
          </p>
          <p style={paragraphStyle}>
            <strong>Species:</strong> {data.character.species}
          </p>
          <p style={paragraphStyle}>
            <strong>Gender:</strong> {data.character.gender}
          </p>
          <p style={paragraphStyle}>
            <strong>Location:</strong> {data.character.location.name}
          </p>
        </div>
      </div>
    </div>
  );
}
