import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../MenuItem';
import DrawerToggle from '../SideMenu/DrawerToggle';

import './ToolBar.css';

class ToolBar extends Component {
  static propTypes = {
    menuItems: PropTypes.array,
    onDrawerToggleClick: PropTypes.func.isRequired,
  }

  render() {
    const { menuItems, onDrawerToggleClick } = this.props;

    return (
      <header className='toolbar-wrapper'>
        <nav className='toolbar-navigation'>
          <div>
            <DrawerToggle onDrawerToggleClick={ onDrawerToggleClick } />
          </div>
          <div className='toolbar-logo'>
            <a href='/'>LOGO</a>
          </div>
          <div className='toolbar-spacer' />
          <div className='toolbar-navigation-items'>
            <ul>
              {menuItems.map((menuItem) => (
                <MenuItem
                  key={ menuItem.itemLink }
                  label={ menuItem.itemName }
                  link={ menuItem.itemLink }
                />
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default ToolBar;
