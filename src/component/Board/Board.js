import React, { Component } from "react";
import PropTypes from "prop-types";
// import Grid from '../Grid';

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  getGrids = (rowCount, colCount) => {
    const { side } = this.props;
    const grids = [];
    for (let i = 0; i < rowCount; i++) {
      const horizon = [];
      for (let j = 0; j < colCount; j++) {
        const side = `${side}px`;
        horizon.push(
          <div clssName="grid" style={{ width: side, height: side }} />
        );
      }
      grids.push(horizon);
    }
    return grids;
  };

  render() {
    const { rowCount, colCount, children } = this.props;
    return (
      <div className="board">
        {this.getGrids(rowCount, colCount)}
        {children}
      </div>
    );
  }
}

Board.propTypes = {
  side: PropTypes.number,
  rowCount: PropTypes.number,
  colCount: PropTypes.number
};
