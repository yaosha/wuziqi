const orientations = {
  horizontal: {
    prevCalcX: x => x - 1,
    prevCalcY: y => y,
    nextCalcX: x => x + 1,
    nextCalcY: y => y
  },
  vertical: {
    prevCalcX: x => x,
    prevCalcY: y => y - 1,
    nextCalcX: x => x,
    nextCalcY: y => y + 1
  },
  leftDiagonal: {
    prevCalcX: x => x - 1,
    prevCalcY: y => y - 1,
    nextCalcX: x => x + 1,
    nextCalcY: y => y + 1
  },
  rightDiagonal: {
    prevCalcX: x => x + 1,
    prevCalcY: y => y - 1,
    nextCalcX: x => x - 1,
    nextCalcY: y => y + 1
  }
};
export default class Engine {
  constructor({ rowCount, colCount, type }) {
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.type = type;
    this.chesses = [];
    this.groups = {
      white: {
        horizontal: { 1: [], 2: [], 3: [], 4: [], 5: [] },
        vertical: { 1: [], 2: [], 3: [], 4: [], 5: [] },
        leftDiagonal: { 1: [], 2: [], 3: [], 4: [], 5: [] },
        rightDiagonal: { 1: [], 2: [], 3: [], 4: [], 5: [] }
      },
      black: {
        horizontal: { 1: [], 2: [], 3: [], 4: [], 5: [] },
        vertical: { 1: [], 2: [], 3: [], 4: [], 5: [] },
        leftDiagonal: { 1: [], 2: [], 3: [], 4: [], 5: [] },
        rightDiagonal: { 1: [], 2: [], 3: [], 4: [], 5: [] }
      }
    };
  }

  findSuccessiveGroup = (chess, xCalc, yCalc) => {
    let { type, x, y } = chess;
    let isSame,
      group = [];
    do {
      x = xCalc(x);
      y = yCalc(y);
      isSame = this.exist(x, y, type);
      if (isSame) {
        group.push({ x: moveX, y, type });
      }
    } while (isSame);
    group = group.sort(this.sort);
    return group;
  };

  deleteGroup = (groups, group) => {
    const index = this.findIndex(groups, group);
    groups.splice(index, 1);
  };

  refreshGroup = (
    orientationGroup,
    currentGroup,
    currentChess,
    prevCalcX,
    prevCalcY,
    nextCalcX,
    nextCalcY
  ) => {
    const prevGroup = this.findSuccessiveGroup(
      currentChess,
      prevCalcX,
      prevCalcY
    );
    const nextGroup = this.findSuccessiveGroup(
      currentChess,
      nextCalcX,
      nextCalcY
    );
    if (prevGroup.length > 0) {
      this.deleteGroup(orientationGroup[prevGroup.length], prevGroup);
    }
    if (nextGroup.length > 0) {
      this.deleteGroup(orientationGroup[nextGroup.length], nextGroup);
    }
    currentGroup = prevGroup.concat(currentGroup).concat(nextGroup);
    orientationGroup[currentGroup.length].push(currentGroup);
  };

  next = (chesses, currentChess, callback) => {
    this.chesses = chesses.sort(this.sort);
    const { type, x, y } = currentChess;
    const group = this.groups[type];
    Object.keys(group).forEach(orientation => {
      const orientationGroup = group[orientation];
      const currentGroup = [];
      currentGroup.push(currentChess);
      const { prevCalcX, prevCalcY, nextCalcX, nextCalcY } = orientations[
        orientation
      ];
      this.refreshGroup(
        orientationGroup,
        currentGroup,
        currentChess,
        prevCalcX,
        prevCalcY,
        nextCalcX,
        nextCalcY
      );
      if (currentGroup.length === 5) {
        callback(null, type === "white" ? "白子赢" : "黑子赢");
        return;
      }
    });

    const mergeGroups = { 1: [], 2: [], 3: [], 4: [], 5: [] };

    Object.keys(this.groups[this.type]).forEach(orientation => {
      const orientationGroup = this.groups[this.type][orientation];

      for (let i = 4; i <= 1; i++) {}
    });

    for (
      let i = 0, horizontalGroup = this.groups[this.type]["horizontal"][4];
      i < horizontalGroup.length;
      i++
    ) {
      let { type, x, y } = horizontalGroup[i][0];
      let isContain = this.contain(x - 1, y);
      if (!isContain) {
        callback({ type, x: x - 1, y }, type === "white" ? "白子赢" : "黑子赢");
        return;
      }
      type = horizontalGroup[i][3].type;
      x = horizontalGroup[i][3].x;
      y = horizontalGroup[i][3].y;
      isContain = this.contain(x + 1, y);
      if (!isContain) {
        callback({ type, x: x + 1, y }, type === "white" ? "白子赢" : "黑子赢");
        return;
      }
    }
  };

  findIndex = (groups, group) => {
    return groups.findIndex(item => {
      item = item.sort(this.sort);
      group = group.sort(this.sort);
      let res = true;
      for (let i = 0; i < group.length; i++) {
        res = res && (item[i].x == group[i].x && item[i].y == group[i].y);
      }
      return res;
    });
  };

  next = (chesses, currentChess, callback) => {
    let msg = "";
    this.chesses = chesses.sort(this.sort);
    this.chesses.forEach(chess => {
      this.divide(chess);
    });

    // const { type, x, y } = currentChess;

    const mergeGroups = {
      white: { 1: [], 2: [], 3: [], 4: [], 5: [] },
      black: { 1: [], 2: [], 3: [], 4: [], 5: [] }
    };
    Object.keys(this.groups).forEach(type => {
      Object.keys(this.groups[type]).forEach(key => {
        for (let i = 1; i <= 5; i++) {
          mergeGroups[type][i].push(...this.groups[type][key][i]);
        }
      });
    });
    if (mergeGroups.white[5].length === 1) {
      callback(null, "白子赢");
    } else if (mergeGroups.white[5].length === 1) {
      callback(null, "黑子赢");
    } else {
    }

    callback({
      type: this.type,
      x: 0,
      y: 0
    });
  };

  divide = chess => {
    let { type, x, y } = chess;
    Object.keys(orientations).forEach(key => {
      const orientGroup = this.groups[type][key];
      const addedChesses = Object.keys(orientGroup).reduce(
        (accu, current) => [].concat(accu).concat(orientGroup[current]),
        []
      );
      if (
        // addedChesses.filter(item => item.x === x && item.y == y).length === 0
        !addedChesses.find(item => item.x === x && item.y == y)
      ) {
        let successive = true,
          group = [];
        group.push(chess);
        const { xCalc, yCalc } = orientations[key];
        while (successive) {
          x = xCalc(x);
          y = yCalc(y);
          const state = this.exist(x, y, type);
          if (state) {
            group.push({ x, y, type });
          } else {
            successive = false;
          }
        }

        orientGroup[group.length].push({ group, dead: false });
      }
    });
  };

  sort = (a, b) => {
    reurn(a.y - b.y) === 0 ? a.x - b.x : a.y - b.y;
  };

  exist = (x, y, type) => {
    return this.chesses.some(
      chess => chess.x === x && chess.y == y && chess.type === type
    );
  };

  contain = (x, y) => {
    return this.chesses.some(chess => chess.x === x && chess.y == y);
  };
}
