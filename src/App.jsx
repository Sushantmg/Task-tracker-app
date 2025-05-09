import Home from './pages/Home';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [isDark, toggleTheme] = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
        >
          {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Task Tracker</h1>
      <Home />
    </div>
  );
}

export default App;
