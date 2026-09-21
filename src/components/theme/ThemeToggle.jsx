import React, { useEffect, useState } from "react";
import { TbMoon, TbSun } from "react-icons/tb";
import "./theme-toggle.css";

const query = "(prefers-color-scheme: light)";

// The theme in effect right now: an explicit choice on <html> (set by the
// inline script in index.html or by this toggle), otherwise the system's.
function currentTheme() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia(query).matches ? "light" : "dark";
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(currentTheme);

  // Until the visitor picks a theme, keep following system changes.
  useEffect(() => {
    const media = window.matchMedia(query);
    const onChange = () => {
      if (!document.documentElement.dataset.theme) setTheme(currentTheme());
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode): the choice lasts for this visit.
    }
    setTheme(next);
  };

  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      className="theme_toggle"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === "dark" ? (
        <TbSun aria-hidden="true" />
      ) : (
        <TbMoon aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeToggle;
