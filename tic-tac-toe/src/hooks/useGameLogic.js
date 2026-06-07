import { useState, useEffect } from "react";
import { calculateWinner, isDraw } from "../utils/gameUtils";

export function useGameLogic() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const winnerResult = calculateWinner(squares);
  const draw = isDraw(squares, winnerResult);

  // Update scores whenever the game ends
  useEffect(() => {
    if (winnerResult) {
      setScores(prev => ({ ...prev, [winnerResult.winner]: prev[winnerResult.winner] + 1 }));
    } else if (draw) {
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
    }
  }, [winnerResult?.winner, draw]); // only fires when these change

  function handleSquareClick(index) {
    if (squares[index] || winnerResult || draw) return; // guard: filled, won, or drawn
    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  }
  
  function resetGame() {
    setSquares(Array(9).fill(null)); // resets squares → winnerResult + draw auto-recompute
    setIsXTurn(true);
    // scores intentionally NOT reset here
  }
  return { squares, isXTurn, winnerResult, draw, scores, handleSquareClick, resetGame };
}