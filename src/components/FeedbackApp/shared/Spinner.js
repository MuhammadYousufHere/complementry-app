import React from 'react';
import loader from '../../../assets/loader.gif';
const Spinner = () => {
  return (
    <img
      src={loader}
      alt='loading..'
      style={{
        width: '100px',
        display: 'block',
        margin: 'auto',
      }}
    />
  );
};

export default Spinner;
