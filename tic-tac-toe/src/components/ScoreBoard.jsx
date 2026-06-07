function ScoreCard({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center w-32 h-32 rounded-2xl border-3 border-white bg-black/50 backdrop-blur-md hover:bg-black/70 transition-all">
      <span className="text-4xl font-black tabular-nums text-white" style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif', letterSpacing: '-0.02em' }}>{value}</span>
      <span className="text-xs tracking-widest uppercase text-white font-bold mt-2">{label}</span>
    </div>
  );
}

export default function ScoreBoard({ scores }) {
  return (
    <div className="flex items-center justify-center gap-6 animate-fade-in-up">
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
