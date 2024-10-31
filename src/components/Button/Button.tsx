import React from 'react';

export default function Button({ ...props }) {
  return (
    <>
      <button style={{ width: '80px', height: '40px' }} {...props}>
        {props.children}
      </button>
    </>
  );
}
