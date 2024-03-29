"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outlined";
  maxWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, variant = "default", maxWidth = false, onClick} : ButtonProps) => {
  // Classes applied for all buttons
  let className = "p-2 rounded transition-colors flex justify-center items-center" + " ";

  // Set the button to full width if maxWidth is true
  if (maxWidth) {
    className += "w-full ";
  }

  // Set the button variant
  switch (variant) {
    case "default":
      className += "bg-slate-50 hover:bg-slate-50/80 text-slate-950";
      break;
    case "outlined":
      className += "border border-slate-50 hover:bg-slate-50 text-slate-50 hover:text-slate-950";
      break;
  }

  return <button className={className} onClick={onClick}>
    {children}
  </button>;

};

export default Button;