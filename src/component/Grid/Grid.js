import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { side, rowIndex, colIndex } = this.props;
    const style = {
      width: `${side}px`,
      height: `${side}px`,

    };
    return (
      <div className='grid'></div>
    );
  }

}

Grid.propTypes = {
  side: PropTypes.number,
  rowIndex: PropTypes.number,
  colIndex: PropTypes.number,
}