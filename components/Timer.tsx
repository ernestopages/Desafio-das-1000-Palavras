
import React, { useState, useEffect } from 'react';

export const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(16 * 60);

  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-red-50 p-4 rounded-2xl border-2 border-red-200 max-w-xs mx-auto shadow-sm">
      <p className="text-xs font-bold uppercase mb-2 text-red-600 tracking-wider">ESSA OFERTA EXPIRA EM:</p>
      <p className="text-4xl font-bold font-mono tracking-widest text-red-600">{formatTime(seconds)}</p>
    </div>
  );
};
