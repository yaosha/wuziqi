import React, { Component } from "react";
import Board from "../component/Board";
import Chess from "../component/Chess";

export default class Game extends Component {
  constructor(props) {
    super(props);
  }

  // getChess = () => {};

  render() {
    const boardProps = {
      side: 40,
      rowCount: 15,
      colCOunt: 15
    };
    return <Board {...boardProps} />;
  }
}
