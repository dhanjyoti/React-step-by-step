import { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
    };

    const themeClass = isDarkMode ? "dark-mode" : "light-mode";

    return (
        <div id="main" className={themeClass}>
            <h1>{isDarkMode ? "Dark Mode Activated" : "Light Mode Activated"}</h1>
            <button onClick={toggleTheme}>
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
        </div>
    )
}

export default ThemeToggle;