
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'checkout';
  className?: string;
  showIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', className = '', showIcon = false }) => {
  const baseStyles = "cta-button w-full max-w-sm px-6 py-4 rounded-2xl font-bold text-xl uppercase shadow-xl transition-all duration-300 flex items-center justify-center text-center gap-3";
  
  const variants = {
    // Green theme button (standard anchor)
    primary: "bg-[#22c55e] text-white hover:bg-[#16a34a] hover:scale-[1.02]",
    // White theme button for dark backgrounds
    secondary: "bg-white text-[#00355b] hover:bg-gray-100 hover:scale-[1.02]",
    // Specific checkout button with icon
    checkout: "bg-[#22c55e] text-white hover:bg-[#16a34a] hover:scale-[1.02] border-b-4 border-[#15803d]"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {showIcon && (
        <svg 
          className="w-7 h-7 flex-shrink-0" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      )}
      <span>{children}</span>
    </button>
  );
};
