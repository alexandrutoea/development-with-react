import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie';

const PieChart = (props) => {
  const { data } = props;

  return (
    <ResponsivePie
      data={ data }
      margin={{
        'top': 40,
        'right': 80,
        'bottom': 80,
        'left': 80,
      }}
      innerRadius={ 0.5 }
      padAngle={ 0.7 }
      cornerRadius={ 3 }
      colors='nivo'
      colorBy='id'
      borderWidth={ 1 }
      borderColor='inherit:darker(0.2)'
      radialLabelsSkipAngle={ 10 }
      radialLabelsTextXOffset={ 6 }
      radialLabelsTextColor='#333333'
      radialLabelsLinkOffset={ 0 }
      radialLabelsLinkDiagonalLength={ 16 }
      radialLabelsLinkHorizontalLength={ 24 }
      radialLabelsLinkStrokeWidth={ 1 }
      radialLabelsLinkColor='inherit'
      slicesLabelsSkipAngle={ 10 }
      slicesLabelsTextColor='#333333'
      animate
      motionStiffness={ 90 }
      motionDamping={ 15 }
      legends={ [
        {
          'anchor': 'bottom',
          'direction': 'row',
          'translateY': 56,
          'itemWidth': 100,
          'itemHeight': 18,
          'itemTextColor': '#999',
          'symbolSize': 18,
          'symbolShape': 'circle',
          'effects': [
            {
              'on': 'hover',
              'style': {
                'itemTextColor': '#000',
              },
            },
          ],
        },
      ] }
    />
  );
};

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PieChart;
