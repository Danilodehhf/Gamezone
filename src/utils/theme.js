const THEME_KEY = "@E-Farmacia:theme";

export function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

export function applyTheme(theme) {
  const root = document.documentElement;

  root.classList.remove("light", "dark");
  root.classList.add(theme);

  localStorage.setItem(THEME_KEY, theme);
}

export function getOppositeTheme(theme) {
  return theme === "dark" ? "light" : "dark";
}
