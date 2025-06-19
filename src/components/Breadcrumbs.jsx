import { useLocation, Link } from "react-router-dom";
import { Home } from "lucide-react";

const Breadcrumbs = () => {
  const routeNameMap = {
    home: "Inicio",
    teachers: "Profesores",
    students: "Estudiantes",
    groups: "Grupos",
    subjects: "Asignaturas",
    teacherGroups: "Grupos",
    "sign-in": "Iniciar sesión",
    add: "Agregar",
    edit: "Editar",
    details: "Detalles",
  };

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-6 text-sm text-gray-600 rounded-t-lg">
      <ol className="flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
        <li className="flex items-center space-x-1">
          <Link to="/" className="flex items-center gap-1 text-blue-600 hover:text-blue-800">
            <Home size={16} />
            <span>Inicio</span>
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          const label = routeNameMap[name] || decodeURIComponent(name).replace(/-/g, " ");

          return (
            <li key={routeTo} className="flex items-center space-x-1">
              <span className="text-gray-400">›</span>
              {!isLast ? (
                <Link to={routeTo} className="text-blue-600 hover:text-blue-800 capitalize">
                  {label}
                </Link>
              ) : (
                <span className="text-gray-500 capitalize">{label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
