import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import styles from "./App.module.css";
import SwitchTheme from "@/components/switchTheme/SwitchTheme";

const App = () => {
  return (
    <div className={`${styles.app}`}>
      <SwitchTheme />
    </div>
  );
};

export default App;
