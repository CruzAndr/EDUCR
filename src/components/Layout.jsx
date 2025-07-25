import { useState, useEffect } from 'react';
import { useAuth } from "./context/AuthContext";
import Header from './Header';
import SideBar from './SideBar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { SearchContext } from './context/SearchContext';
import { Menu } from "lucide-react";

export const DEFAULT_THEME = "bg-white";

const Layout = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(window.innerWidth < 768);
  const [darkMode, setDarkMode] = useState(false);
  const backgroundTheme = user?.conf_tema || DEFAULT_THEME;

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleSidebar = () => setIsSidebarMinimized((prev) => !prev);

  useEffect(() => {
    const resetSidebarOnResize = () => {
      if (window.innerWidth >= 768 && isSidebarMinimized) {
        setIsSidebarMinimized(false);
      } else if (window.innerWidth < 768 && !isSidebarMinimized) {
        setIsSidebarMinimized(true);
      }
    };

    window.addEventListener("resize", resetSidebarOnResize);
    return () => window.removeEventListener("resize", resetSidebarOnResize);
  }, [isSidebarMinimized]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchTitle, setSearchTitle }}>
      <div className="flex min-h-screen bg-[#f9fafb] text-gray-800">
        <SideBar isMinimized={isSidebarMinimized} toggleSidebar={toggleSidebar} />

        {/* Contenido principal */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarMinimized ? 'ml-20' : 'ml-64'} md:ml-0`}>
          <div className="md:hidden bg-white shadow-sm p-2 border-b border-gray-200">
            <button onClick={toggleSidebar} className="text-gray-700">
              <Menu size={24} />
            </button>
          </div>

          <Header
            searchTerm={searchTerm}
            searchTitle=""
            setSearchTerm={setSearchTerm}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />

          <Breadcrumbs />

          <main className="flex-grow p-6 bg-[#f9fafb]">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </SearchContext.Provider>
  );
};

export default Layout;

