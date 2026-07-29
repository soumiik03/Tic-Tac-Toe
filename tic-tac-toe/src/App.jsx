import { useGameLogic } from "./hooks/useGameLogic";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import ScoreBoard from "./components/ScoreBoard";
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";

export default function App() {
  const {
    squares, isXTurn, winnerResult, draw, scores, handleSquareClick, resetGame,
  } = useGameLogic();

  const isGameOver = !!winnerResult || draw;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* Aceternity-style ripple background */}
      <BackgroundRippleEffect />

      {/* Foreground game UI */}
      <div className="relative z-10 flex flex-col items-center gap-7">

        {/* Title */}
        <div className="text-center animate-fade-in-up px-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-1" style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif', letterSpacing: '-0.03em' }}>
            🎮 Tic Tac Toe
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white/70 font-bold">
            Two Player Game
          </p>
        </div>

        {/* Score */}
        <ScoreBoard scores={scores} />

        {/* Status */}
        <GameStatus key={`${winnerResult?.winner || ""}-${draw}-${isXTurn}`} winnerResult={winnerResult} draw={draw} isXTurn={isXTurn} />

        {/* Board */}
        <Board
          squares={squares}
          handleSquareClick={handleSquareClick}
          winnerResult={winnerResult}
          isGameOver={isGameOver}
        />

        {/* Reset button */}
        <button
          onClick={resetGame}
          className="mt-4 px-12 py-3 rounded-xl text-base font-black tracking-widest uppercase
            text-black bg-white border-2 border-white
            hover:bg-white/90 hover:scale-110
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black
            transition-all duration-200 active:scale-95 cursor-pointer shadow-lg"
          style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif', letterSpacing: '0.08em' }}
        >
          {isGameOver ? "Play Again" : "Reset"}
        </button>
      </div>
    </div>
  );
}
