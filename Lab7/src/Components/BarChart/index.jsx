import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class BarChartComponent extends PureComponent {
   static propTypes = {
     data: PropTypes.array.isRequired,
   }

   render() {
     const { data } = this.props;

     return (
       <BarChart
         width={ 1000 }
         height={ 300 }
         data={ data }
         margin={{
           top: 5, right: 30, left: 20, bottom: 5,
         }}
       >
         <CartesianGrid strokeDasharray='3 3' />
         <XAxis dataKey='label' />
         <YAxis />
         <Tooltip />
         <Legend />
         <Bar dataKey='value' fill='#ef286b' />
       </BarChart>
     );
   }
}

export default BarChartComponent;
