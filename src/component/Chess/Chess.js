import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Chess extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, side, x, y } = this.props;
    const style = {
      backgroundColor: type,
      left: `${x * side - side / 2}px`,
      top: `${y * side - side / 2}px`,
      width: `${side}px`,
      height: `${side}px`
    };
    return <div className="chess" stype={style} />;
  }
}

Chess.propTypes = {
  type: PropTypes.oneOf(["black", "white"]),
  side: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number
};
