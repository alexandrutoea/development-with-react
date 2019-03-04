import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../MenuItem';

import './SideMenu.css';

const SideMenu = (props) => {
  const { menuItems, opened } = props;
  const cssClasses = opened ? 'side-menu open' : 'side-menu';

  return (
    <nav className={ cssClasses }>
      <ul>
        {menuItems.map((menuItem) => (
          <MenuItem
            key={ menuItem.itemLink }
            label={ menuItem.itemName }
            link={ menuItem.itemLink }
          />
        ))}
      </ul>
    </nav>
  );
};

SideMenu.propTypes = {
  menuItems: PropTypes.array,
  opened: PropTypes.bool,
};

SideMenu.defaultProps = {
  menuItems: [],
  opened: false,
};

export default SideMenu;
