import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Grid from '../Grid';

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = side => evt => {
    const pageX = evt.pageX,
      pageY = evt.pageY;
    const x = Math.floor((pageX - 20 + side / 2) / side),
      y = Math.floor((pageY - 20 + side / 2) / side);
    if (typeof this.props.onClick === 'function') {
      this.props.onClick({ x, y }, evt);
    }
  };

  getGrids = (rowCount, colCount) => {
    const { side } = this.props;
    const grids = [];
    for (let i = 0; i < rowCount; i++) {
      const horizon = [];
      for (let j = 0; j < colCount; j++) {
        horizon.push(
          <div
            key={`${i}_${j}`}
            className="grid"
            style={{ width: `${side}px`, height: `${side}px` }}
          />
        );
      }
      grids.push(horizon);
    }
    return grids;
  };

  render() {
    const { side, rowCount, colCount, children } = this.props;
    const style = {
      width: `${colCount * side}px`,
      height: `${colCount * side}px`
    };
    return (
      <div className="board" style={style} onClick={this.handleClick(side)}>
        {this.getGrids(rowCount, colCount)}
        {children}
      </div>
    );
  }
}

Board.propTypes = {
  side: PropTypes.number,
  rowCount: PropTypes.number,
  colCount: PropTypes.number,
  onClick: PropTypes.func
};
