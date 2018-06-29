import React, { Component, Fragment } from 'react';

import GraphCreator from './GraphCreator/GraphCreator'

const original_data = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 3], [13, 1], [14, 7],
[15, 0], [16, 0], [17, 0], [18, 12], [19, 0], [20, 9], [21, 0], [22, 0], [23, 0]]
const remy = original_data.slice(0, 7).map(el => el[1]);
const rem1y = original_data.slice(8, 23).map(el => el[1]);
const y_axis = ['data1', ...rem1y.concat(remy)]
const removed = original_data.splice(0, 8).map(el => el[0] + 24);
const removed1 = original_data.map(el => el[0]);
const x_axis = ['x1', ...removed1.concat(removed)]

const data = [x_axis, y_axis]
class App extends Component {
  render() {
    return (
      <Fragment>
        <GraphCreator data={data} />
      </Fragment>
    );
  }
}

export default App;