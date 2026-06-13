import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { ThemeContextProvider } from "./context/themeContext";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };

  // actual theme change
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
        {/* Navbar */}
        <nav className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg"></div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                ModernKnow
              </h2>
            </div>
            <ThemeButton />
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold text-sm mb-4 uppercase tracking-widest">
              Tech Visionary
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Steve Jobs
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The Revolutionary who changed technology forever
            </p>
          </div>

          {/* Card Section */}
          <div className="flex items-center justify-center">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
