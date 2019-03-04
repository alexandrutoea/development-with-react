import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.css';

const Backdrop = (props) => {
  const { onBackdropClick } = props;
  return (
    <div className='backdrop' onClick={ () => onBackdropClick() } />
  );
};

Backdrop.propTypes = {
  onBackdropClick: PropTypes.func.isRequired,
};

export default Backdrop;
