"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-04-25T08:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      // 🛑 STOP when time is up
      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / 1000 / 60) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
  return <p className="mt-6 text-xl font-serif">💍 It's Our Wedding Day!</p>;
}

  return (
    <div className="flex gap-6 justify-center mt-6 text-center text-white">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit}>
          <p className="text-3xl font-light">
            {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, "0")}
          </p>
          <span className="text-xs uppercase tracking-widest text-gray-400">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}