function ScoreCard({ label, value }) {
  return (
    <div className="score-card rounded-2xl border-white bg-black/50 backdrop-blur-md hover:bg-black/70 transition-all">
      <span className="text-4xl font-black tabular-nums text-white" style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif', letterSpacing: '-0.02em' }}>{value}</span>
      <span className="text-xs tracking-widest uppercase text-white font-bold mt-2">{label}</span>
    </div>
  );
}

export default function ScoreBoard({ scores }) {
  return (
    <div className="score-board animate-fade-in-up">
      <ScoreCard
        label="X"
        value={scores.X}
      />
      <ScoreCard
        label="Draws"
        value={scores.draws}
      />
      <ScoreCard
        label="O"
        value={scores.O}
      />
    </div>
  );
}
