let currentPlayer = "X";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

document.addEventListener("DOMContentLoaded", () => {
  const boardContainer = document.getElementById("board");

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.addEventListener("click", () => makeMove(row, col));
      boardContainer.appendChild(cell);
    }
  }
});

function makeMove(row, col) {
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;
    const cellIndex = row * 3 + col;
    const cell = document.getElementsByClassName("cell")[cellIndex];
    cell.textContent = currentPlayer;
    const gameStatus = checkWinner();
    if (gameStatus === "win") {
      showWinner(currentPlayer);
      return;
    } else if (gameStatus === "draw") {
      showDraw();
      return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner() {
    const winningCombinations = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
      ];
}

function showWinner(player) {
  const winnerIndicator = document.createElement("div");
  winnerIndicator.className = "indicator";
  winnerIndicator.textContent = `${player} wins!`;
  document.body.appendChild(winnerIndicator);
}

function showDraw() {
  const drawIndicator = document.createElement("div");
  drawIndicator.className = "indicator";
  drawIndicator.textContent = "It's a draw!";
  document.body.appendChild(drawIndicator);
}

function resetBoard() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
}
