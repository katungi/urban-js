import React, { forwardRef } from "react";

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = "", ...props }, ref) => {
  return <button ref={ref} className={`button ${className}`} {...props} />;
});

Button.displayName = "Button";

export default Button;
