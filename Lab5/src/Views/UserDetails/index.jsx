import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadUserDetailsData } from '../../Store/Actions/userDetailsActions';

const mapStateToProps = (state) => {
  return {
    reducerData: state.userDetailsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ loadUserDetailsData }, dispatch),
  };
};

class UserDetails extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    reducerData: PropTypes.object,
  }

  static defaultProps = {
    reducerData: {},
  };

  componentDidMount = () => {
    const { actions } = this.props;
    actions.loadUserDetailsData();
  }

  render() {
    const { reducerData } = this.props;

    return (
      <div className='user-details-wrapper'>
        <h2>User details:</h2>
        <p>Username: {reducerData.userName}</p>
        <p>First name: {reducerData.firstName}</p>
        <p>Last name: {reducerData.lastName}</p>
        <p>Visits: {reducerData.visits}</p>
        <p>Postcode: {reducerData.postcode}</p>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
