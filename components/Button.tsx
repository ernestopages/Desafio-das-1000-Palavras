
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'checkout';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', className = '' }) => {
  const baseStyles = "cta-button w-full max-w-sm px-8 py-5 rounded-2xl font-bold text-xl uppercase shadow-xl transition-all duration-300 flex items-center justify-center text-center";
  
  const variants = {
    // Green theme button
    primary: "bg-[#22c55e] text-white hover:bg-[#16a34a] hover:scale-[1.02]",
    // White theme button for dark backgrounds
    secondary: "bg-white text-[#00355b] hover:bg-gray-100 hover:scale-[1.02]",
    // Specific checkout button
    checkout: "bg-[#10b981] text-white hover:bg-[#059669] hover:scale-[1.02]"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
