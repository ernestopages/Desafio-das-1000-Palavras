
import React from 'react';

export const Banner: React.FC = () => {
  const getDates = () => {
    const today = new Date();
    const d1 = new Date(); d1.setDate(today.getDate() - 2);
    const d2 = new Date(); d2.setDate(today.getDate() - 1);
    const d3 = today;

    const options: Intl.DateTimeFormatOptions = { day: '2-digit' };
    const day1 = d1.toLocaleDateString('pt-BR', options);
    const day2 = d2.toLocaleDateString('pt-BR', options);
    const day3 = d3.toLocaleDateString('pt-BR', options);

    return `${day1}, ${day2} e ${day3}`;
  };

  return (
    <div className="w-full bg-[#ff9d00] text-[#00355b] py-2 px-4 shadow-md text-center">
      <p className="text-xs md:text-sm font-bold uppercase tracking-tight">
        🔔 OFERTA VÁLIDA APENAS NOS DIAS {getDates()}
      </p>
    </div>
  );
};
