const DIRECTION = {
  HORIZONTAL: 0,
  VERTICAL: 1,
  LEFT_DIAGONAL: 2,
  RIGHT_DIAGONAL: 3
};

const CHESS_TYPE = {
  WHITE: 'white',
  BLACK: 'black',
  NONE: 'none'
};

const CALC_POSITION = {};
CALC_POSITION[DIRECTION.HORIZONTAL] = {
  prevCalcX: x => x - 1,
  prevCalcY: y => y,
  nextCalcX: x => x + 1,
  nextCalcY: y => y
};
CALC_POSITION[DIRECTION.VERTICAL] = {
  prevCalcX: x => x,
  prevCalcY: y => y - 1,
  nextCalcX: x => x,
  nextCalcY: y => y + 1
};
CALC_POSITION[DIRECTION.LEFT_DIAGONAL] = {
  prevCalcX: x => x - 1,
  prevCalcY: y => y - 1,
  nextCalcX: x => x + 1,
  nextCalcY: y => y + 1
};
CALC_POSITION[DIRECTION.RIGHT_DIAGONAL] = {
  prevCalcX: x => x + 1,
  prevCalcY: y => y - 1,
  nextCalcX: x => x - 1,
  nextCalcY: y => y + 1
};

export {
  DIRECTION,
  CHESS_TYPE,
  CALC_POSITION
};