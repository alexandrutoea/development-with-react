import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

import SettingsForm from './SettingsForm';

import { loadSettingsData, submitSettingsData } from '../../Store/Actions/settingsActions';

const SettingsFormWrapped = reduxForm({
  form: 'settings-form', // a unique identifier for this form
  enableReinitialize: true,
})(SettingsForm);

const mapStateToProps = (state) => {
  return {
    reducerData: state.settingsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ loadSettingsData, submitSettingsData }, dispatch),
  };
};

class Settings extends PureComponent {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    reducerData: PropTypes.object,
  }

  static defaultProps = {
    reducerData: {},
  };

  componentDidMount = () => {
    const { actions } = this.props;
    actions.loadSettingsData();
  }

  render() {
    const { actions, reducerData } = this.props;

    return (
      <div className='settings-wrapper'>
        Settings page
        <hr />
        <SettingsFormWrapped
          enableReinitialize
          onSubmit={ (values) => actions.submitSettingsData(values) }
          initialValues={ reducerData.values }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
