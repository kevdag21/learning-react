import { WINNERS_COMBO } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  // Check all posibilities to win
  for (const combo of WINNERS_COMBO) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //if there isn't a winner
  return null;
};

export const checkEndGame = (newBoard) => {
  // check a draw if the board is full 
  return newBoard.every((square) => square !== null);
};
