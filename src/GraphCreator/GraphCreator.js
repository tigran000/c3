import React from 'react'
import c3 from 'c3'
import 'c3/c3.css';
class GraphCreator extends React.Component {

  componentDidMount() {
    this.generateChart();
  }

  generateChart() {
    c3.generate({
      bindto: '#chart',
      title: {
        show: false,
        text: 'Most active hours (Sessions)',
        position: 'top-left',
        padding: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 50
        }
      },
      data: {
        xs: { 'data1': 'x1' },
        columns: this.props.data,
        type: 'spline',
      },
      axis: {
        x: {
          tick: {
            format: function (x) {
              console.log(x)
              if (x < 12) return x + 'am'
              if (x === 12) return x + 'pm'
              if (x > 12 && x < 24) return x % 12 + 'pm'
              if (x > 24) return x % 12 + 'am'
              if (x === 24) return 12 + 'am'
            },
            culling: {
              max: 12
            }

          }
        },
        y: { tick: { values: [1, 3, 5, 7, 9, 11, 13] } }
      },
      tooltip: {
        format: {
          title: function (d) { return 'Time at ' + d % 12 + ' o\'clock'; },
        }
      }
    });
  }
  render() {
    return <div id="chart"> </div>;
  }
}
export default GraphCreator;