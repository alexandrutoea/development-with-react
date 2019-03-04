import React, { Component } from 'react';
import MenuItem from './MenuItem';

import './ToolBar.css';

class ToolBar extends Component {
  render() {
    return (
      <header className='toolbar-wrapper'>
        <nav className='toolbar-navigation'>
          <div />
          <div className='toolbar-logo'>
            <a href='/'>LOGO</a>
          </div>
          <div className='toolbar-spacer' />
          <div className='toolbar-navigation-items'>
            <ul>
              <MenuItem label='Home page' link='/' />
              <MenuItem label='User Details' link='/' />
              <MenuItem label='Statistics' link='/' />
              <MenuItem label='Settings' link='/' />
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default ToolBar;
