import { useContext } from "react";
import ThemeContext, {
  type ThemeContextType,
} from "@/hooks/context/themeContext";
import styles from "@/components/button/Button.module.css";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <button className={styles.button} onClick={toggleTheme} data-testid="button">
      Switch to {theme == "dark" ? "light" : "dark"} mode
    </button>
  );
};

export default Button;
