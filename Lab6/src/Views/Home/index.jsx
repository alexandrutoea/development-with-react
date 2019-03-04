import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadHomePageData } from '../../Store/Actions/homeActions';

const mapStateToProps = (state) => {
  return {
    reducerData: state.homeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ loadHomePageData }, dispatch),
  };
};

class Home extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    reducerData: PropTypes.object,
  }

  static defaultProps = {
    reducerData: {},
  };

  componentDidMount = () => {
    const { actions } = this.props;
    actions.loadHomePageData();
  }

  render() {
    const { reducerData } = this.props;

    return (
      <div className='homepage-wrapper'>
        <p>Homepage for {reducerData.userName}</p>
        <p>Last visit {reducerData.lastVisited}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
