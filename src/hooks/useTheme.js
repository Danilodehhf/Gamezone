import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme, getOppositeTheme } from "../utils/theme";

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  const isDark = theme === "dark";

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => getOppositeTheme(currentTheme));
  }

  function setLightTheme() {
    setTheme("light");
  }

  function setDarkTheme() {
    setTheme("dark");
  }

  return {
    theme,
    isDark,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
  };
}
