import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`p-4 flex justify-between items-center transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      } shadow-lg`}
    >
      <div className="text-2xl font-bold">Emotion AI</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline hover:text-purple-500 transition-colors duration-300">
          Home
        </Link>
        <Link to="/motion-ai" className="hover:underline hover:text-purple-500 transition-colors duration-300">
          Coba
        </Link>
        <a href="/about" className="hover:underline hover:text-purple-500 transition-colors duration-300">
          About Us
        </a>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </nav>
  );
}

export default Navbar;
