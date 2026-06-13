import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
  // custom hook
  return useContext(ThemeContext);
}
