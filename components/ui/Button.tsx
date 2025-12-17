import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  className = "",
  type = "button"
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded font-medium transition-all duration-300 inline-block text-center";
  
  const variants = {
    primary: "bg-champagne-gold text-matte-black hover:bg-champagne-gold-light hover:shadow-lg",
    secondary: "bg-matte-black text-champagne-gold border-2 border-champagne-gold hover:bg-champagne-gold hover:text-matte-black",
    outline: "bg-transparent text-champagne-gold border-2 border-champagne-gold hover:bg-champagne-gold hover:text-matte-black"
  };

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

