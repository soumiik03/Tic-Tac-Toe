export default function GameStatus({ winnerResult, draw, isXTurn }) {
  const { message, sub, indicator } = (() => {
    if (winnerResult) return {
      message: `Player ${winnerResult.winner} wins`,
      sub: "Well played!",
      indicator: null,
    };
    if (draw) return {
      message: "It's a draw",
      sub: "No winner this round",
      indicator: null,
    };
    return {
      message: `Player ${isXTurn ? "X" : "O"}'s turn`,
      sub: "Make your move",
      indicator: isXTurn ? "X" : "O",
    };
  })();

  return (
    <div className="flex flex-col items-center gap-3 animate-status-slide">
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
