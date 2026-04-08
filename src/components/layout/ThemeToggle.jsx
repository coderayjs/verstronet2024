import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="shrink-0 rounded-sm border border-zinc-300/90 bg-white/80 p-2 text-zinc-800 shadow-sm transition-colors hover:bg-zinc-100 dark:border-white/20 dark:bg-transparent dark:text-zinc-200 dark:shadow-none dark:hover:bg-white/10">
      {isDark ? (
        <Sun className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      ) : (
        <Moon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
      )}
    </button>
  );
};

export default ThemeToggle;
