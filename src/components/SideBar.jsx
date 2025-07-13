import { useLocation, Link, useNavigate } from 'react-router-dom';
import EDUCRLogo from '../assets/logto2.png';
import {
  LayoutGrid,
  BookOpen,
  Users,
  GraduationCap,
  LogOut,
  Menu,
  HelpCircle
} from "lucide-react";
import { useEffect, useRef } from "react";

const Sidebar = ({ isMinimized, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const previousWidth = useRef(window.innerWidth);

  const menuItems = [
    { name: "Inicio", path: "/home", icon: LayoutGrid },
    //{ name: "Profesores", path: "/teachers", icon: GraduationCap },
    { name: "Crear Profesor", path: "/CrearUsuario", icon: GraduationCap   },
    { name: "Crear Aula", path: "/CrearAula", icon: GraduationCap },
    { name: "Crear Curso", path: "/CrearCurso", icon: GraduationCap },
    { name: "Sugerencias", path: "./calendarSuggestions", icon: BookOpen },
    { name: "Asignaciones", path: "./calendarAssignments", icon: BookOpen },
    { name: "Eventos", path: "./horarios", icon: Users },
    { name: "Salir", path: "/logout", icon: LogOut },
  ];

  const handleLinkClick = (path) => navigate(path);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const wasMinimized = isMinimized;
      if (currentWidth < 768 && !wasMinimized) {
        toggleSidebar();
      } else if (currentWidth >= 768 && wasMinimized) {
        toggleSidebar();
      }
      previousWidth.current = currentWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMinimized, toggleSidebar]);

  return (
    <aside
      className={`fixed md:static z-30 h-screen flex flex-col justify-between
        ${isMinimized ? "w-20" : "w-64"}
        bg-white text-gray-700 shadow-md transition-all duration-300`}
    >
      <div className="flex flex-col items-center px-3 py-6 gap-6">
        <Link to="/" className="flex items-center justify-center mb-6">
          <img
            src={EDUCRLogo}
            alt="Logo EDUCR"
            className={`transition-all duration-300 ${isMinimized ? "w-10" : "w-24"}`}
          />
        </Link>

        <nav className="flex flex-col gap-2 w-full">
          {menuItems.map(({ name, path, icon: Icon }) => {
            const isActive = location.pathname.startsWith(path);
            return (
              <button
                key={path}
                onClick={() => handleLinkClick(path)}
                title={name}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium
                  ${isActive ? "bg-indigo-100 text-indigo-600 font-semibold" : "hover:bg-gray-100"}
                  transition-all duration-200 w-full`}
              >
                <Icon size={20} className="shrink-0" />
                {!isMinimized && <span>{name}</span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bloque de ayuda y botón de colapsar juntos */}
      <div className="px-4 pb-6 space-y-4">
        {!isMinimized && (
          <div className="bg-indigo-100 rounded-xl p-4 text-center shadow-sm">
            <div className="w-10 h-10 mx-auto rounded-full bg-white shadow flex items-center justify-center mb-2">
              <HelpCircle className="text-indigo-500" size={20} />
            </div>
            <h4 className="text-sm font-semibold text-indigo-700">Centro de ayuda</h4>
            <p className="text-xs text-gray-500 mt-1 mb-3">¿Tienes dudas? Contacta al soporte técnico.</p>
            <button className="bg-indigo-600 text-white text-xs py-1 px-3 rounded-full hover:bg-indigo-700">
              Ir al centro
            </button>
          </div>
        )}
        <div className="flex justify-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-400 hover:text-gray-700 transition"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
