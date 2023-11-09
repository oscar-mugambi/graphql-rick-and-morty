import React from 'react';

const LoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          border: '6px solid #f3f3f3', // Light grey border for the spinner
          borderTop: '6px solid #3498db', // Blue color for the spinner
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          animation: 'spin 2s linear infinite',
        }}
      />
    </div>
  );
};
export default LoadingSpinner;
