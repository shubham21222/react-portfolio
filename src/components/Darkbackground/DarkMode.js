import React, { useState, useEffect } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const getInitialMode = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (e) {
    return false;
  }
};

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  useEffect(() => {
    // The theme CSS targets :root (the <html> element), so toggle the class there.
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-mode-active");
    } else {
      root.classList.remove("dark-mode-active");
    }
    try {
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    } catch (e) {
      /* storage unavailable — ignore */
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
