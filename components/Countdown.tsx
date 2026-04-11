"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-04-25T08:00:00");

  const [timeLeft, setTimeLeft] = useState<any>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-6 justify-center mt-6 text-center text-white">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit}>
          <p className="text-3xl font-light">{timeLeft[unit]}</p>
          <span className="text-xs uppercase tracking-widest text-gray-400">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}