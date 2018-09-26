import {
  CHESS_TYPE
} from './Constants';
import GroupList from './GroupList';

export default class Engine {
  constructor({
    rowCount,
    colCount,
    engineType
  }) {
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.engineType = engineType;
    this.oppositeType = engineType === CHESS_TYPE.WHITE ? CHESS_TYPE.BLACK : CHESS_TYPE.WHITE;
    this.groups = {};
    this.groups[CHESS_TYPE.WHITE] = new GroupList(CHESS_TYPE.WHITE, rowCount, colCount);
    this.groups[CHESS_TYPE.BLACK] = new GroupList(CHESS_TYPE.BLACK, rowCount, colCount);
  }

  next = (chesses, currentChess) => {
    const result = {
      isWin: false,
      winnerType: CHESS_TYPE.NONE,
      nextChess: null
    };

    this.operationAfterChessPlayed(result, chesses, currentChess);
    if (result.isWin) {
      return result;
    }

    const nextChess = this.groups[this.engineType].getNextChess(this.groups[this.oppositeType], this.engineType);

    result.nextChess = nextChess;
    this.operationAfterChessPlayed(result, chesses, nextChess);
    if (result.isWin) {
      return result;
    }

    return result;
  }

  operationAfterChessPlayed = (result, chesses, chess) => {
    if (this.groups[chess.type].isWin(chess)) {
      result.isWin = true;
      result.winnerType = chess.type;
      return result;
    }
    this.groups[CHESS_TYPE.WHITE].deleteGroupByPosition(chess);
    this.groups[CHESS_TYPE.BLACK].deleteGroupByPosition(chess);
    this.groups[chess.type].addGroupByPosition(chesses, chess);
  }

}