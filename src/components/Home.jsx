import React from "react";
import imgSugerencias from "../assets/uno.svg";
import imgSugerencias1 from "../assets/dos.svg";
import imgSugerencias2 from "../assets/tres.svg";
import imgSugerencias3 from "../assets/cuatro.png";
const Home = () => {



  const noticias = [
    {
      titulo: "Personal docente de nuevo ingreso recibió inducción a la UCR",
      fecha: "7 mar 2025",
      resumen: "77 personas participaron en la primera sesión de inducción organizada por la Vicerrectoría de Docencia y RIFED.",
      img: "https://www.ucr.ac.cr/medios/fotos/2025/induccion-docente.jpg"
    },
    {
      titulo: "Consejo discute eliminar autorización del profesor para matrícula",
      fecha: "14 feb 2024",
      resumen: "El Consejo Universitario evalúa eliminar la autorización manual del profesor consejero en el trámite de matrícula.",
      img: "https://www.ucr.ac.cr/medios/fotos/2024/consejo.jpg"
    },
    {
      titulo: "Profesores de cursos libres trabajan ad honorem en la UCR",
      fecha: "8 ene 2025",
      resumen: "Los docentes de cursos libres no reciben remuneración; ofrecen lecciones ad honorem.",
      img: "https://www.ucr.ac.cr/medios/fotos/2025/profesores.jpg"
    }
  ];

  const gestion = [
    {
      titulo: "Sugerencias",
      descripcion: "Envía recomendaciones para mejorar horarios y asignaciones.",
      img: imgSugerencias
    },
    {
      titulo: "Asignaciones",
      descripcion: "Visualiza y asigna horarios a docentes disponibles.",
      img: imgSugerencias1
    },
    {
      titulo: "Eventos",
      descripcion: "Consulta sesiones de coordinación y capacitaciones.",
      img: imgSugerencias2
    }
  ];

  return (
    <div className="p-10 bg-[#f9fafb] min-h-screen space-y-10">

      {/* Noticias */}

        {/* Banner de bienvenida */}
  {/* Banner de bienvenida */}
<section className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center shadow mb-6">
  <div className="max-w-lg text-center md:text-left">
    <h2 className="text-2xl font-bold text-gray-800 leading-tight">¡Bienvenido, Profesor!</h2>
    <p className="mt-2 text-sm text-gray-600">
      Nos alegra tenerte en la plataforma EDUCR. Aquí puedes organizar tu horario, registrar asignaciones y consultar eventos con facilidad.
    </p>
    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md text-sm transition">
      Ir al Panel
    </button>
  </div>
  <img
    src={imgSugerencias3}
    alt="Ilustración bienvenida"
    className="w-40 h-40 object-contain mt-6 md:mt-0"
  />
</section>


      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Noticias importantes.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {noticias.map((n, i) => (
            <div
              key={i}
             className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="h-40 w-full bg-gray-200">
                <img
                  src={n.img}
                  alt={n.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-bold text-gray-800 mb-1">{n.titulo}</h3>
                <p className="text-xs text-gray-500 mb-2">{n.fecha}</p>
                <p className="text-sm text-gray-700">{n.resumen}</p>
                <a href="#" className="mt-auto text-blue-600 hover:underline text-sm">Leer más...</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gestión académica */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Gestión académica</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gestion.map((g, i) => (
            <div
              key={i}
className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition space-y-4 flex flex-col items-center text-center"


            >
              <img src={g.img} alt={g.titulo} className="w-28 h-28 object-contain" />
              <div className="text-lg font-bold text-gray-800">{g.titulo}</div>
              <p className="text-sm text-gray-700">{g.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

                {/* Guías técnicas */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Guías técnicas de matrícula</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              titulo: "Guía para registro de asignaturas",
              descripcion: "Aprende paso a paso cómo registrar asignaturas en la plataforma.",
              img: "https://undraw.co/api/illustrations/343a6c67-7c50-4682-bb52-4eb9486e85f8" // puedes reemplazar
            },
            {
              titulo: "Manual de asignación docente",
              descripcion: "Instrucciones detalladas para asignar cursos a profesores.",
              img: "https://undraw.co/api/illustrations/70f0ecb1-36ed-4740-831f-f6d6df170d85" // puedes reemplazar
            },
            {
              titulo: "Resolución de conflictos de horario",
              descripcion: "Guía para resolver traslapes, choques y errores comunes.",
              img: "https://undraw.co/api/illustrations/04e0e11c-163d-4e18-8920-efcf61fa6cb0" // puedes reemplazar
            },
          ].map((g, i) => (
            <div
              key={i}
             className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition space-y-4 flex flex-col items-center text-center"

            >
              <img src={g.img} alt={g.titulo} className="w-28 h-28 object-contain" />
              <div className="text-lg font-bold text-gray-800">{g.titulo}</div>
              <p className="text-sm text-gray-700">{g.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
