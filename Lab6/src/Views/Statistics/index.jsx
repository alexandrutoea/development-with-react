import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PieChart from '../../Components/PieChart';
import BarChart from '../../Components/BarChart';
import DynamicTable from '../../Components/DynamicTable';

import { loadStatisticsData } from '../../Store/Actions/statisticsActions';

// const MOCK_DATA = [
//   {
//     'id': 'rust',
//     'label': 'rust',
//     'value': 510,
//   },
// ];

const mapStateToProps = (state) => {
  return {
    dataSet: state.statisticsReducer.dataSet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ loadStatisticsData }, dispatch),
  };
};

class Statistics extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    dataSet: PropTypes.array,
  }

  static defaultProps = {
    reducerData: {},
  };

  componentDidMount = () => {
    const { actions } = this.props;
    actions.loadStatisticsData();
  }

  render() {
    const { dataSet } = this.props;
    let chartData = [];

    const creditCards = dataSet.map((dataPoint) => dataPoint.credit_card_type);
    const uniqueCreditCards = creditCards.filter((elem, pos, arr) => arr.indexOf(elem) === pos);

    uniqueCreditCards.forEach((creditCard) => {
      chartData = [
        ...chartData,
        {
          id: creditCard,
          label: creditCard,
          value: dataSet.filter((dataPoint) => dataPoint.credit_card_type === creditCard).length,
        },
      ];
    });

    return (
      <div className='statistics-wrapper'>
        Statistics page
        {!dataSet.length && <p>No data available</p>}
        <div style={{ width: 500, height: 500, margin: 'auto' }}>
          <h2>Pie chart</h2>
          <PieChart data={ chartData } />
        </div>

        <div style={{ width: 1000, height: 500, margin: 'auto', marginTop: 50 }}>
          <h2>Bar chart</h2>
          <BarChart data={ chartData } />
        </div>
        <div style={{ width: 1000, height: 500, margin: 'auto', marginTop: 50 }}>
          <h2>Table</h2>
          <DynamicTable data={ dataSet } />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
