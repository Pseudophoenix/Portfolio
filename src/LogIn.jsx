import React from 'react';

const LoginButton = ({ onClick, disabled = false, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '10px 20px',
        backgroundColor: '#4285f4',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.7 : 1,
      }}
    >
      {children || 'Log In'}
    </button>
  );
};

export default LoginButton;