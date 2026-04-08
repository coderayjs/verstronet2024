import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

export const THEME_STORAGE_KEY = "verstronet-theme";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    try {
      const s = localStorage.getItem(THEME_STORAGE_KEY);
      if (s === "light" || s === "dark") return s;
    } catch (_) {}
    return "dark";
  });

  const apply = useCallback((t) => {
    const root = document.documentElement;
    if (t === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem(THEME_STORAGE_KEY, t);
    } catch (_) {}
  }, []);

  useLayoutEffect(() => {
    apply(theme);
  }, [theme, apply]);

  const setTheme = useCallback((t) => {
    if (t === "light" || t === "dark") setThemeState(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
};
