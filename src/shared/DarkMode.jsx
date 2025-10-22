import styles from "./DarkMode.module.css";
import React, { useState, useEffect } from "react";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedMode = localStorage.getItem("darkmode");
      setDarkMode(storedMode === "active");
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkmode", "active");
    } else {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkmode", "");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button id="theme-switch" className={styles.switch} onClick={toggleTheme}>
      <img
        className={styles.icon}
        src={darkMode ? moonIcon : sunIcon}
        alt={darkMode ? "Moon icon" : "Sun icon"}
      />
    </button>
  );
};

export default DarkMode;
