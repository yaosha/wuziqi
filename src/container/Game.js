import React, { Component } from "react";
import Board from "../component/Board";
import Chess from "../component/Chess";
import Engine from "./Engine";
import "./Game.css";

const SIDE = 40,
  ROW_COUNT = 15,
  COL_COUNT = 15;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.engine = new Engine({
      rowCount: ROW_COUNT,
      colCount: COL_COUNT,
      type: "white"
    });
    this.state = {
      chesses: [],
      enable: true
    };
  }

  addChess = ({ x, y }, evt) => {
    const { chesses } = this.state;
    const existChess = chesses.filter(chess => x === chess.x && y === chess.y);
    if (existChess.length === 0) {
      const newChesses = [...chesses, { type: "black", x, y }];
      this.setState(
        {
          chesses: newChesses,
          enable: false
        },
        () => {
          this.engine.next(newChesses, { type: "black", x, y }, chess => {
            this.setState({
              chesses: [...newChesses, chess],
              enable: true
            });
          });
        }
      );
    }
  };

  getChess = ({ side, rowCount, colCount }, chesses) => {
    const res = [];
    chesses.forEach(({ type, x, y }, index) => {
      res.push(<Chess key={index} type={type} side={side} x={x} y={y} />);
    });
    return res;
  };

  render() {
    const boardProps = {
      side: SIDE,
      rowCount: ROW_COUNT,
      colCount: COL_COUNT
    };
    const { chesses, enable } = this.state;
    if (enable) {
      Object.assign(boardProps, { onClick: this.addChess });
    }
    return (
      <div className="game">
        <Board {...boardProps}>{this.getChess(boardProps, chesses)}</Board>
      </div>
    );
  }
}
