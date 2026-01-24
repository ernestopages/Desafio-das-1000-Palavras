
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden transition-all bg-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-white/10 transition-colors"
      >
        <span className="font-bold text-lg leading-tight text-white pr-4">{question}</span>
        <span className={`text-2xl transition-transform duration-300 text-yellow-400 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      {isOpen && (
        <div className="p-6 bg-black/20 border-t border-white/5 text-base text-white/90 leading-relaxed font-normal">
          {children}
        </div>
      )}
    </div>
  );
};
