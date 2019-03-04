import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import ToolBar from './Components/ToolBar';
import SideMenu from './Components/SideMenu';
import Backdrop from './Components/Backdrop';

import Home from './Views/Home';
import UserDetails from './Views/UserDetails';
import Statistics from './Views/Statistics';
import Settings from './Views/Settings';

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
      <div className='app-container'>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/user-details' component={ UserDetails } />
          <Route path='/statistics' component={ Statistics } />
          <Route path='/settings' component={ Settings } />
          <Route path='*' component={ Home } />
        </Switch>
      </div>
    </div>
  );
}
}

export default App;
