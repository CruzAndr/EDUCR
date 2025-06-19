import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-20">
      {/* Parte superior blanca con enlaces y datos */}
      <div className="bg-white p-8 rounded-t-3xl shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e iconos */}
          <div className="flex flex-col justify-between">
            <div className="text-2xl font-bold">EDUCR</div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="p-2 border rounded-full hover:bg-gray-100 transition">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a href="#" className="p-2 border rounded-full hover:bg-gray-100 transition">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Sede del Sur-UCR, Golfito, Puntarenas, Costa Rica
            </p>
          </div>

          {/* Columnas de información */}
          <div>
            <h4 className="font-semibold uppercase text-sm mb-2">Información</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Pagos y certificados</a></li>
              <li><a href="#">Convenios</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase text-sm mb-2">Menú</h4>
            <ul className="text-sm space-y-1 text-gray-700">
              <li><a href="#">Estudiantes</a></li>
              <li><a href="#">Docentes</a></li>
              <li><a href="#">Gestión Académica</a></li>
            </ul>
          </div>

          {/* Solicitud y contacto */}
          <div className="text-right space-y-2">
            <button className="bg-black text-white px-4 py-2 rounded-full hover:opacity-80 transition">
              Solicitar llamada
            </button>
            <div className="text-sm text-gray-700">
              <p>+506 8706-1657</p>
              <p>info@educr.ac.cr</p>
            </div>
            <div className="text-xs text-gray-400 mt-2">Software exclusivo para la designación de horarios</div>
          </div>
        </div>
      </div>

      {/* Parte inferior con gradiente y suscripción */}
      <div className="bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300 p-10 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2 leading-snug">
              ¿No encuentras lo que buscas<br />o tienes dudas?
            </h3>
          </div>
          <form className="flex flex-col sm:flex-row items-center bg-white rounded-lg overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-2 text-gray-800 outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 text-sm flex items-center gap-2"
            >
              Enviar <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </div>
        <p className="text-xs text-white mt-8 text-center">© 2025 EDUCR — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
