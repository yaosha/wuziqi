export default class Engine {
  constructor({ rowCount, colCount, type }) {
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.type = type;
  }

  next = (chesses, callback) => {
    callback({
      type: this.type,
      x: 0,
      y: 0
    });
  };
}
