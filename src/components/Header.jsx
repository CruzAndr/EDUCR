import { useState, useRef, useEffect } from 'react';
import SearchBar from "./SearchBar";
import { useAuth } from './context/AuthContext';
export const DEFAULT_THEME = "bg-[#121221]";

const Header = ({ searchTitle, searchTerm, setSearchTerm, toggleDarkMode, darkMode }) => {
  const { user, isAuthenticated } = useAuth();
  const backgroundTheme = user?.config?.theme || DEFAULT_THEME;
  const [navOpen, setNavOpen] = useState(false);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "b") {
        e.preventDefault();
        searchBarRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Sección izquierda */}
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold text-[#121221]">EDUCR</div>
        </div>

        {/* Centro - barra de búsqueda */}
        <div className="flex-1 w-full max-w-md">
          <SearchBar
            searchTerm={searchTerm}
            searchTitle={searchTitle}
            setSearchTerm={setSearchTerm}
            ref={searchBarRef}
          />
        </div>

        {/* Controles de usuario */}
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-full border border-[#c7d2fe] text-indigo-500 text-sm">🔔</button>
          <button className="w-8 h-8 rounded-full border border-[#c7d2fe] text-indigo-500 text-sm">👤</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
