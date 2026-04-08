import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CustomButton = ({
  children,
  to,
  href,
  variant = "primary",
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseClasses =
    "px-6 py-2.5 text-xs tracking-[0.18em] uppercase rounded-sm transition duration-300 inline-flex items-center justify-center border";
  const variants = {
    primary:
      "bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-black dark:border-white dark:hover:bg-zinc-200 disabled:bg-zinc-400 disabled:text-zinc-700 dark:disabled:bg-zinc-400 dark:disabled:text-zinc-700",
    secondary:
      "bg-transparent text-zinc-800 border-zinc-300 hover:border-zinc-900 hover:bg-zinc-100 disabled:border-zinc-300 disabled:text-zinc-400 dark:text-white dark:border-white/60 dark:hover:border-white dark:hover:bg-white/10 dark:disabled:border-zinc-500 dark:disabled:text-zinc-500",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className} ${
    disabled ? "cursor-not-allowed opacity-50" : ""
  }`;

  if (to && !disabled) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
        {variant === "secondary" && <ArrowRight className="ml-1 h-4 w-4" />}
      </Link>
    );
  }

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
