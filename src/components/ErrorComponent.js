import React from 'react';
const ErrorState = ({ errorMessage }) => {
  console.log(errorMessage);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#dc3545', // Bootstrap danger color for errors
        }}
      >
        Oops! Something went wrong.
      </h1>
      <p
        style={{
          fontSize: '1rem',
          color: '#666',
        }}
      >
        {errorMessage || 'Unable to fetch data. Please try again later.'}
      </p>
    </div>
  );
};

export default ErrorState;
