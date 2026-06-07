import { useEffect, useState } from "react";

export default function GameStatus({ winnerResult, draw, isXTurn }) {
  // Key changes so the slide animation re-triggers on state change
  const [key, setKey] = useState(0);
  useEffect(() => { setKey(k => k + 1); }, [winnerResult?.winner, draw, isXTurn]);

  const { message, sub, msgColor, indicator } = (() => {
    if (winnerResult) return {
      message: `Player ${winnerResult.winner} wins`,
      sub: "Well played!",
      msgColor: "text-white",
      indicator: null,
    };
    if (draw) return {
      message: "It's a draw",
      sub: "No winner this round",
      msgColor: "text-white",
      indicator: null,
    };
    return {
      message: `Player ${isXTurn ? "X" : "O"}'s turn`,
      sub: "Make your move",
      msgColor: "text-white",
      indicator: isXTurn ? "X" : "O",
    };
  })();

  return (
    <div key={key} className="flex flex-col items-center gap-3 animate-status-slide">
      <div className="flex items-center justify-center gap-2">
        {indicator && (
          <span className="text-3xl font-black text-white px-3 py-1 bg-white/10 rounded-lg" style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif', letterSpacing: '-0.02em' }}>
            {indicator}
          </span>
        )}
        <p className="text-2xl font-black text-white" style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif', letterSpacing: '-0.02em' }}>
          {message}
        </p>
      </div>
      <p className="text-base text-white/80 font-semibold tracking-wide" style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif' }}>{sub}</p>
    </div>
  );
}
