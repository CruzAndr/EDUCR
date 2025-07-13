import { useState, useEffect } from "react";
import { useAuth } from "./context/AuthContext";

const CrearAula = () => {
  const { token } = useAuth();
  const API_URL = import.meta.env.VITE_API_URL;
  const [form, setForm] = useState({ nombre: "", capacidad: "" });
  const [message, setMessage] = useState("");
  const [aulas, setAulas] = useState([]);
  const [editAula, setEditAula] = useState(null);
  const [editForm, setEditForm] = useState({ nombre: "", capacidad: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => { fetchAulas(); }, []);

  const fetchAulas = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/aulas/`, {
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });
      if (res.ok) {
        const data = await res.json();
        setAulas(data);
      }
    } catch {
      setMessage("Error al cargar aulas.");
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/aulas/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMessage("Aula creada correctamente.");
        setForm({ nombre: "", capacidad: "" });
        fetchAulas();
      } else {
        const data = await res.json();
        setMessage(data.message || "Error al crear aula.");
      }
    } catch {
      setMessage("Error de red o servidor.");
    }
    setLoading(false);
  };

  const handleEdit = (aula) => {
    setEditAula(aula);
    setEditForm({ nombre: aula.nombre, capacidad: aula.capacidad });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/aulas/${editAula.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(editForm),
      });
      if (res.ok) {
        setMessage("Aula actualizada correctamente.");
        setEditAula(null);
        fetchAulas();
      } else {
        const data = await res.json();
        setMessage(data.message || "Error al actualizar aula.");
      }
    } catch {
      setMessage("Error de red o servidor.");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta aula?")) return;
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/aulas/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });
      if (res.ok) {
        setMessage("Aula eliminada correctamente.");
        fetchAulas();
      } else {
        setMessage("Error al eliminar aula.");
      }
    } catch {
      setMessage("Error de red o servidor.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Gestión de Aulas</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del aula"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-1/2 border rounded p-2 focus:outline-blue-400"
          />
          <input
            type="number"
            name="capacidad"
            placeholder="Capacidad"
            value={form.capacidad}
            onChange={handleChange}
            required
            className="w-1/2 border rounded p-2 focus:outline-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
          disabled={loading}
        >
          {loading ? "Procesando..." : "Crear aula"}
        </button>
      </form>
      {message && <p className="mt-2 text-center text-red-500 font-medium">{message}</p>}
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white border rounded-lg shadow">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 border-b">Nombre</th>
              <th className="py-2 px-4 border-b">Capacidad</th>
              <th className="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {aulas.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-4 text-gray-500">No hay aulas registradas.</td>
              </tr>
            ) : (
              aulas.map((aula) => (
                <tr key={aula.id} className="hover:bg-blue-50">
                  <td className="py-2 px-4 border-b">{aula.nombre}</td>
                  <td className="py-2 px-4 border-b">{aula.capacidad}</td>
                  <td className="py-2 px-4 border-b flex gap-2 justify-center">
                    <button
                      className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                      onClick={() => handleEdit(aula)}
                    >Editar</button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(aula.id)}
                    >Eliminar</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Modal de edición */}
      {editAula && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h3 className="text-lg font-bold mb-4 text-blue-700">Editar Aula</h3>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre del aula"
                value={editForm.nombre}
                onChange={handleEditChange}
                required
                className="w-full border rounded p-2"
              />
              <input
                type="number"
                name="capacidad"
                placeholder="Capacidad"
                value={editForm.capacidad}
                onChange={handleEditChange}
                required
                className="w-full border rounded p-2"
              />
              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                  onClick={() => setEditAula(null)}
                >Cancelar</button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  disabled={loading}
                >{loading ? "Guardando..." : "Guardar cambios"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrearAula;
