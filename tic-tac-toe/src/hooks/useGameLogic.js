import { useState } from "react";
import { calculateWinner, isDraw } from "../utils/gameUtils";

export function useGameLogic() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const winnerResult = calculateWinner(squares);
  const draw = isDraw(squares, winnerResult);

  function handleSquareClick(index) {
    if (squares[index] || winnerResult || draw) return; // guard: filled, won, or drawn
    const newSquares = [...squares];
    const player = isXTurn ? "X" : "O";
    newSquares[index] = player;
    setSquares(newSquares);
    setIsXTurn(!isXTurn);

    // Calculate immediately to update scores without side effects
    const nextWinner = calculateWinner(newSquares);
    if (nextWinner) {
      setScores(prev => ({ ...prev, [nextWinner.winner]: prev[nextWinner.winner] + 1 }));
    } else if (isDraw(newSquares, nextWinner)) {
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
    }
  }
  
  function resetGame() {
    setSquares(Array(9).fill(null)); // resets squares → winnerResult + draw auto-recompute
    setIsXTurn(true);
    // scores intentionally NOT reset here
  }
  return { squares, isXTurn, winnerResult, draw, scores, handleSquareClick, resetGame };
}