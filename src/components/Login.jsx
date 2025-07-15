import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const usuariosValidos = [
  {
    usuario: "juan@correo.com",
    password: "12345",
    rol: "Docente",
    id: 1,
    nombre: "Juan Pérez",
  },
  {
    usuario: "ana@correo.com",
    password: "admin123",
    rol: "Coordinador Académico",
    id: 2,
    nombre: "Ana López",
  },
  {
    usuario: "carla@correo.com",
    password: "direccion",
    rol: "Dirección",
    id: 3,
    nombre: "Carla Ramírez",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ usuario: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    const usuario = usuariosValidos.find(
      (u) => u.usuario === form.usuario && u.password === form.password
    );

    if (!usuario) {
      setError("Usuario o contraseña incorrecta.");
      return;
    }

    const perfil = {
      id: usuario.id,
      nombre: usuario.nombre,
      correo: usuario.usuario,
      rol: usuario.rol,
    };

    const fakeToken = "fake-jwt-token";
    const pageSize = 10;

    login(perfil, fakeToken, null, pageSize, form.password);
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#001F3F] to-black animate-gradient-x">
      <div className="backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-white drop-shadow-lg">
          Iniciar sesión en EDUCR
        </h1>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="text"
            name="usuario"
            placeholder="Correo electrónico"
            value={form.usuario}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none backdrop-blur-sm"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none backdrop-blur-sm"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
          >
            Entrar
          </button>
        </form>
        <p className="text-center text-sm text-gray-300">
          © 2025 Plataforma EDUCR
        </p>
      </div>
    </div>
  );
};

export default Login;
