import { ReactNode, useState } from "react";
import DarkModeContext from "./DarkModeContext";
interface Props {
  children: ReactNode;
}

const DarkModeContextProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (): void => {
    setDarkMode((prev) => !prev);
  };
  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
