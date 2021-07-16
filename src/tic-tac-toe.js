class TicTacToe {
  constructor() {
    this.count = 0;
    this.currentPlayer = "x";
    this.winner = null;
    this.result = null;

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
    if (this.result === "draw" || this.winner != null) {
      return true;
    }
    return false;
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    for (let arr of this.matrix) {
      if (arr.includes(null)) {
        return false;
      }
    }
    return true;
  }

  isDraw() {
    return this.result === "draw";
  }
  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex];
  }
  matrixSearch() {
    if (
      this.matrix[0][0] === this.matrix[0][1] &&
      this.matrix[0][1] === this.matrix[0][2] &&
      this.matrix[0][0] != null
    ) {
      this.winner = this.matrix[0][0];
    } else if (
      this.matrix[1][0] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[1][2] &&
      this.matrix[1][0] != null
    ) {
      this.winner = this.matrix[1][0];
    } else if (
      this.matrix[2][0] === this.matrix[2][1] &&
      this.matrix[2][1] === this.matrix[2][2] &&
      this.matrix[2][0] != null
    ) {
      this.winner = this.matrix[2][0];
      /*row*/
    } else if (
      this.matrix[0][0] === this.matrix[1][0] &&
      this.matrix[2][0] === this.matrix[0][0] &&
      this.matrix[0][0] != null
    ) {
      this.winner = this.matrix[0][0];
    } else if (
      this.matrix[0][1] === this.matrix[1][1] &&
      this.matrix[2][1] === this.matrix[0][1] &&
      this.matrix[0][1] != null
    ) {
      this.winner = this.matrix[0][1];
    } else if (
      this.matrix[0][2] === this.matrix[1][2] &&
      this.matrix[2][2] === this.matrix[0][2] &&
      this.matrix[0][2] != null
    ) {
      this.winner = this.matrix[0][2];
    } else if (
      this.matrix[0][0] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[2][2] &&
      this.matrix[0][0] != null
    ) {
      this.winner = this.matrix[0][0];
    } else if (
      this.matrix[2][0] === this.matrix[1][1] &&
      this.matrix[1][1] === this.matrix[0][2] &&
      this.matrix[2][0] != null
    ) {
      this.winner = this.matrix[2][0];
    }
    if (this.winner === null) {
      for (let i = 0; i < this.matrix.length; i++) {
        if (this.matrix[i].includes(null)) {
          this.count++;
        }
      }
      if (this.count === 0) {
        this.result = "draw";
        this.turns = true;
      } else {
        this.count = 0;
      }
    }
  }
}

module.exports = TicTacToe;
console.log();
