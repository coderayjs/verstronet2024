import React from "react";
import { ArrowRight } from "lucide-react";

const CustomButton = ({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md transition duration-300 inline-flex items-center";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "text-blue-400 hover:text-blue-300",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
        {variant === "secondary" && <ArrowRight className="ml-1 h-4 w-4" />}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick}>
      {children}
      {variant === "secondary" && <ArrowRight className="ml-1 h-4 w-4" />}
    </button>
  );
};

export default CustomButton;
