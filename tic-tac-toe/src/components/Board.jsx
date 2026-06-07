import Square from "./Square";

export default function Board({ squares, handleSquareClick, winnerResult, isGameOver }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleSquareClick(index)}
          isWinning={winnerResult?.line.includes(index) ?? false}
          isGameOver={isGameOver && !value}
        />
      ))}
    </div>
  );
}
