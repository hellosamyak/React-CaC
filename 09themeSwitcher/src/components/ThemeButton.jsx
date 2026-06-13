import useTheme from "../context/themeContext";

export default function ThemeButton() {
  const { themeMode, lightMode, darkMode } = useTheme();

  const onChangeButton = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <label className="relative inline-flex items-center cursor-pointer group">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={onChangeButton}
          checked={themeMode === "dark"}
        />
        <div className="w-14 h-7 bg-gradient-to-r from-gray-300 to-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gradient-to-r dark:from-gray-600 dark:to-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-purple-600 after:shadow-md group-hover:shadow-lg transition-all"></div>
        <span className="ml-3 text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-1">
          {themeMode === "light" ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.121-2.121a1 1 0 00-1.414 1.414l2.121 2.121a1 1 0 001.414-1.414zM15.536 15.536a1 1 0 00-1.414-1.414l-2.121 2.121a1 1 0 101.414 1.414l2.121-2.121z" clipRule="evenodd" />
              </svg>
              Light
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              Dark
            </>
          )}
        </span>
      </label>
    </div>
  );
}
