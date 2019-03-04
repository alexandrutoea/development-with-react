import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DynamicTable extends PureComponent {
    static propTypes = {
      data: PropTypes.array,
    }

    static defaultProps = {
      data: [],
    }

    render() {
      const { data } = this.props;
      let tableHeaders = [];

      data.forEach((dataPoint) => {
        tableHeaders = [...tableHeaders, ...Object.keys(dataPoint)];
      });
      tableHeaders = tableHeaders.filter((elem, pos, arr) => arr.indexOf(elem) === pos);

      return (
        <div className='dynamic-table'>
          <table>
            <tbody>
              <tr>
                {tableHeaders.map((t) => (
                  <th key={ t }>{t}</th>
                ))}
              </tr>
              {data.map((d, index) => (
                <tr key={ index }>
                  {tableHeaders.map((t) => (
                    <td key={ index + t }>{data[index][t]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
}

export default DynamicTable;
