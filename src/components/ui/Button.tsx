import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  color?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href, 
  color = 'primary', 
  className = '',
  onClick
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const colorClasses = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white focus:ring-amber-500",
    secondary: "bg-stone-800 hover:bg-stone-900 text-white focus:ring-stone-500",
    outline: "bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-50 focus:ring-amber-500"
  };
  
  const classes = `${baseClasses} ${colorClasses[color]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;