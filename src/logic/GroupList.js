import {
  DIRECTION,
  CHESS_TYPE,
  CALC_POSITION
} from './Constants';
import Group from './Group';
import Chess from './Chess';

export default class GroupList {
  constructor(type, rowCount, colCount) {
    this.type = type;
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.groups = [];
  }

  isWin = ({
    x,
    y
  }) => {
    return this.groups.some(({
      realCount,
      group
    }) => realCount == 4 && group.some((chess =>
      chess.x === x && chess.y === y && chess.type === CHESS_TYPE.NONE
    )));
  };

  deleteGroupByPosition = ({
    x,
    y
  }) => {
    this.groups = this.groups.filter(({
      group
    }) => group.filter(chess => chess.type === CHESS_TYPE.NONE).reduce(((accu, chess) =>
      accu && chess.x !== x && chess.y !== y
    ), true));
  }

  addGroupByPosition = (chesses, {
    x,
    y,
    type
  }) => {
    Object.keys(DIRECTION).forEach(key => {
      const {
        prevCalcX,
        prevCalcY,
        nextCalcX,
        nextCalcY
      } = CALC_POSITION[DIRECTION[key]];
      this.addGroupsByDirection(chesses, {
        x,
        y,
        type
      },
        prevCalcX,
        prevCalcY,
        nextCalcX,
        nextCalcY,
        key
      );
    });
  }

  addGroupsByDirection = (chesses, {
    x,
    y,
    type
  },
    prevCalcX,
    prevCalcY,
    nextCalcX,
    nextCalcY,
    direction
  ) => {
    const combinableChesses = [new Chess(type, x, y)];
    this.addCombinableChesses(combinableChesses, chesses, {
      x,
      y,
      type
    }, prevCalcX, prevCalcY, true);
    this.addCombinableChesses(combinableChesses, chesses, {
      x,
      y,
      type
    }, nextCalcX, nextCalcY, false);
    let length = combinableChesses.length;
    if (length >= 5) {
      for (let i = 0, groupCount = length - 4; i < groupCount; i++) {
        let group = new Group(direction);
        for (let j = i; j < i + 5; j++) {
          group.add(combinableChesses[j]);
        }
        this.groups.push(group);
      }
    }
  }

  addCombinableChesses = (combinableChesses, chesses, {
    x,
    y,
    type
  },
    xCalc, yCalc, isBefore
  ) => {
    let canContain = true;
    while (canContain) {
      x = xCalc(x);
      y = yCalc(y);
      canContain = this.canContain(chesses, {
        x,
        y,
        type
      });
      if (canContain) {
        let exist = chesses.some(chess => chess.x === x && chess.y === y);
        const chessObj = new Chess(exist ? type : CHESS_TYPE.NONE, x, y);
        isBefore ? combinableChesses.splice(0, 0, chessObj) : combinableChesses.push(chessObj);
      }
    }
  };

  canContain = (chesses, {
    x,
    y,
    type
  }) => {
    if (x < 0 || x > this.colCount || y < 0 || y > this.rowCount) {
      return false;
    }
    let exist = chesses.some(chess => chess.x === x && chess.y === y);
    if (!exist) {
      return true;
    }
    exist = chesses.some(chess => chess.x === x && chess.y === y && chess.type === type);
    return exist;
  }

  sort = (a, b) => (a.y - b.y) === 0 ? a.x - b.x : a.y - b.y;

  getNextChess = (oppositeGroups, type) => {
    let chess = null;

    for (let i = 4; i > 0; i--) {
      chess = this.getPossibleChessInGroup(oppositeGroups, i, type);
      if (chess) {
        break;
      }
    }
    if (!chess) {
      let x = Math.round(Math.random() * this.colCount);
      let y = Math.round(Math.random() * this.rowCount);
      chess = {
        x,
        y,
        type
      };
    }

    return chess;
  }

  getPossibleChessInGroup = (oppositeGroups, realCount, type) => {
    let chess = null;

    let subGroup = this.groups.find(group => group.realCount === realCount);
    if (subGroup) {
      chess = subGroup.group.find(chess => chess.type === CHESS_TYPE.NONE);
    }

    let oppositeSubGroup = oppositeGroups.groups.find(group => group.realCount === realCount);
    if (oppositeSubGroup) {
      chess = oppositeSubGroup.group.find(chess => chess.type === CHESS_TYPE.NONE);
    }
    if (chess) { chess.type = type; }
    return chess;
  }
}