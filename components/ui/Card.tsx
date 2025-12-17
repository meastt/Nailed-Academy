import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-matte-black border border-champagne-gold/20 rounded-lg p-6 ${
        hover ? "hover:border-champagne-gold/40 hover:shadow-lg transition-all duration-300" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

