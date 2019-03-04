import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  const { label, link } = props;
  return (
    <li>
      <Link to={ link }>{label}</Link>
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
