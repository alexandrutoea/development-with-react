import React, { Component, Fragment } from 'react';

import ToolBar from './Components/ToolBar';
import SideMenu from './Components/SideMenu';
import Backdrop from './Components/Backdrop';

import './App.css';

const NAV_ITEMS = [
  {
    itemName: 'Home Page',
    itemLink: '/',
  }, {
    itemName: 'User details',
    itemLink: '/user-details',
  }, {
    itemName: 'Statistics',
    itemLink: '/statistics',
  }, {
    itemName: 'Settings',
    itemLink: '/settings',
  },
];

class App extends Component {
  state = {
    sideDrawerVisible: false,
  }

handleDrawerToggleClick = () => {
  this.setState(prevState => ({
    sideDrawerVisible: !prevState.sideDrawerVisible,
  }));
}

handleBackdropClick = () => {
  this.setState({
    sideDrawerVisible: false,
  });
}

render() {
  const { sideDrawerVisible } = this.state;

  return (
    <div className='App'>
      <ToolBar
        menuItems={ NAV_ITEMS }
        onDrawerToggleClick={ this.handleDrawerToggleClick }
      />

      {sideDrawerVisible
        ? (
          <Fragment>
            <SideMenu menuItems={ NAV_ITEMS } opened={ sideDrawerVisible } />
            <Backdrop onBackdropClick={ this.handleBackdropClick } />
          </Fragment>
        ) : null
      }

      <header className='App-header'>
        <p>Hello Course.</p>
      </header>
    </div>
  );
}
}

export default App;
