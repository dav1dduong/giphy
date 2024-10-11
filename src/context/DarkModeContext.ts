import { createContext } from "react";
interface DarkModeContextModel {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const defaultValues: DarkModeContextModel = {
  darkMode: false,
  toggleDarkMode: () => {},
};
const DarkModeContext = createContext(defaultValues);
export default DarkModeContext;
