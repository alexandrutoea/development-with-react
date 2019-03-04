import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const { label, link } = props;
  return (
    <li>
      <a href={ link }>{label}</a>
    </li>
  );
};

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
};

MenuItem.defaultProps = {
  label: 'Label',
  link: '/',
};

export default MenuItem;
