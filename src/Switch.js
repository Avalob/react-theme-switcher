import { useTheme } from "./ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 16px",
        backgroundColor: theme === "light" ? "#ddd" : "#333",
        color: theme === "light" ? "#333" : "#ddd",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default Switch;
