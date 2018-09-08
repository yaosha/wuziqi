import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Chess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, side, x, y } = this.props;
    const style = {
      left: `${x * side - side / 2}px`,
      top: `${y * side - side / 2}px`,
      width: `${side}px`,
      height: `${side}px`
    };
    return (
      <div className="chess" style={style}>
        <div className="chess_inner" style={{ backgroundColor: type }} />
      </div>
    );
  }
}

Chess.propTypes = {
  type: PropTypes.oneOf(["black", "white"]),
  side: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
};
