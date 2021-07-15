class TicTacToe {
  constructor() {
    this.currentPlayer = "x";
    this.winner = null;
    this.result = null;
    this.turns = false;
    this.matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.matrix[rowIndex][columnIndex] === null) {
      this.matrix[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer === "x"
        ? (this.currentPlayer = "o")
        : (this.currentPlayer = "x");
    }
    this.matrixSearch();
  }

  isFinished() {
    if (this.winner === null) return false;
    else return true;
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    return this.turns;
  }

  isDraw() {
    if (this.result === "draw") {
      return this.result;
    } else {
      return false;
    }
  }
  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
  matrixSearch() {
    if (
      this.matrix[0][0] === this.matrix[0][1] &&
      this.matrix[0][1] === this.matrix[0][2]
    ) {
      this.winner = this.matrix[0][0];
    } else if (
      this.matrix[1][0] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[1][2]
    ) {
      this.winner = this.matrix[1][0];
    } else if (
      this.matrix[2][0] === this.matrix[2][1] &&
      this.matrix[2][1] === this.matrix[2][2]
    ) {
      this.winner = this.matrix[2][0];
      /*row*/
    } else if (
      this.matrix[0][0] === this.matrix[1][0] &&
      this.matrix[2][0] === this.matrix[0][0]
    ) {
      this.winner = this.matrix[0][0];
    } else if (
      this.matrix[0][1] === this.matrix[1][1] &&
      this.matrix[2][1] === this.matrix[0][1]
    ) {
      this.winner = this.matrix[0][1];
    } else if (
      this.matrix[0][2] === this.matrix[1][2] &&
      this.matrix[2][2] === this.matrix[0][2]
    ) {
      this.winner = this.matrix[0][2];
    } else if (
      this.matrix[0][0] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[2][2]
    ) {
      this.winner = this.matrix[0][0];
    } else if (
      this.matrix[2][0] === this.matrix[1][1] &&
      this.matrix[2][2] === this.matrix[0][2]
    ) {
      this.winner = this.matrix[2][0];
    }
  }
}
// let game;

// game = new TicTacToe();
// game.nextTurn(2, 1);
// console.log(game.isFinished());
// console.log(game.getWinner());
// console.log(game.noMoreTurns());
// console.log(game.isDraw());
// console.log(game.getFieldValue(2, 1));
// console.log(game.getCurrentPlayerSymbol());
// game.nextTurn(2, 1);
// console.log(game.isFinished());
// console.log(game.getWinner());
// console.log(game.noMoreTurns());
// console.log(game.isDraw());
// console.log(game.getFieldValue(2, 1));
// console.log(game.getCurrentPlayerSymbol());
// game.nextTurn(2, 2);
// console.log(game.isFinished());
// console.log(game.getWinner());
// console.log(game.noMoreTurns());
// console.log(game.isDraw());
// console.log(game.getFieldValue(2, 2));
// console.log(game.getCurrentPlayerSymbol());

// console.log(game);
module.exports = TicTacToe;
console.log();
