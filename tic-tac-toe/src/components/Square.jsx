import { useEffect, useState } from "react";

export default function Square({ value, onClick, isWinning, isGameOver }) {
  const [popped, setPopped] = useState(false);

  // Trigger pop animation whenever value appears
  useEffect(() => {
    if (value) {
      setPopped(false);
      const t = requestAnimationFrame(() => setPopped(true));
      return () => cancelAnimationFrame(t);
    }
  }, [value]);

  const isX = value === "X";
  const isO = value === "O";
  const isEmpty = !value;

  return (
    <button
      onClick={onClick}
      disabled={!!value || isGameOver}
      aria-label={value ? `${value}` : "Empty"}
      className={[
        // base
        "relative w-24 h-24 rounded-xl flex items-center justify-center",
        "text-4xl font-black select-none transition-all duration-200",
        "border-2 focus:outline-none",

        // winning state
        isWinning
          ? "border-white bg-white/15 animate-win-pulse scale-105"
          : isEmpty && !isGameOver
          ? "border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 hover:scale-105 cursor-pointer active:scale-95"
          : "border-white/25 bg-white/5 cursor-default",

        // dimmed when game over and empty
        isEmpty && isGameOver ? "opacity-20" : "",
      ].join(" ")}
    >
      {value && (
        <span
          className={[
            "inline-block",
            popped ? "animate-pop-in" : "opacity-0",
            "text-white font-black",
            isWinning ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]" : "",
          ].join(" ")}
          style={{ fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif' }}
        >
          {value}
        </span>
      )}
    </button>
  );
}
