import React, {
  Component
} from 'react';
import Board from '../component/Board';
import Chess from '../component/Chess';
import Engine from '../logic/Engine';
import {
  CHESS_TYPE
} from '../logic/Constants';
import './Game.css';

const SIDE = 40,
  ROW_COUNT = 15,
  COL_COUNT = 15;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.engine = new Engine({
      rowCount: ROW_COUNT,
      colCount: COL_COUNT,
      engineType: CHESS_TYPE.WHITE
    });
    this.state = {
      chesses: [],
      enable: true,
      isWin: false,
      winnerType: null
    };
  }

  addChess = ({
    x,
    y
  }) => {
    const {
      chesses
    } = this.state;
    const existChess = chesses.filter(chess => x === chess.x && y === chess.y);
    if (existChess.length === 0) {
      const newChesses = [...chesses, {
        type: CHESS_TYPE.BLACK,
        x,
        y
      }];
      this.setState({
        chesses: newChesses,
        enable: false
      }, () => {
        const {
          isWin,
          winnerType,
          nextChess
        } = this.engine.next(newChesses, {
          type: CHESS_TYPE.BLACK,
          x,
          y
        });
        if (isWin) {

          this.setState({
            isWin,
            enable: false,
            winnerType
          });
          if (nextChess) {
            this.setState({
              chesses: [...newChesses, nextChess]
            });
          }
        } else {
          this.setState({
            chesses: [...newChesses, nextChess],
            enable: true
          });
        }
      }
      );
    }
  };

  getChess = ({
    side,
    rowCount,
    colCount
  }, chesses) => {
    const res = [];
    chesses.forEach(({
      type,
      x,
      y
    }, index) => {
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
    const {
      chesses,
      enable,
      isWin,
      winnerType
    } = this.state;
    if (enable) {
      Object.assign(boardProps, {
        onClick: this.addChess
      });
    }
    return (
      <div className="game" >
        {isWin ? `winner:${winnerType === CHESS_TYPE.BLACK ? 'black' : 'white'}` : null}
        <Board {...boardProps} >
          {this.getChess(boardProps, chesses)}
        </Board>
      </div>
    );
  }
}