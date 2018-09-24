import {
  CHESS_TYPE
} from './Constants';

export default class Group {
  constructor(direction, group = []) {
    this.realCount = 0;
    this.direction = direction;
    this.group = group;
  }

  add = (chess) => {
    this.group.push(chess);
    if (chess.type !== CHESS_TYPE.NONE) {
      this.realCount++;
    }
  }
}