import React from "react";
import { ArrowRight } from "lucide-react";

const CustomButton = ({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md transition duration-300 inline-flex items-center";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400",
    secondary: "text-blue-400 hover:text-blue-300 disabled:text-blue-200",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className} ${
    disabled ? "cursor-not-allowed opacity-50" : ""
  }`;

  if (href && !disabled) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
        {variant === "secondary" && <ArrowRight className="ml-1 h-4 w-4" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}>
      {children}
      {variant === "secondary" && <ArrowRight className="ml-1 h-4 w-4" />}
    </button>
  );
};

export default CustomButton;
