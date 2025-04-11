import React, { useState } from 'react';

function ToggleTema() {
    // Estado para controlar si el tema es oscuro o claro
    const [temaOscuro, setTemaOscuro] = useState(false);

    // Función para cambiar el tema
    const cambiarTema = () => {
    setTemaOscuro(!temaOscuro);
    };

    return (
    <div className={`p-6 rounded-lg transition-all duration-300 ${
        temaOscuro 
        ? 'bg-gray-800 text-white' 
        : 'bg-gray-100 text-gray-800'
    }`}>
        <h2 className="text-2xl font-bold mb-4">
        {temaOscuro ? 'Tema Oscuro Activado' : 'Tema Claro Activado'}
        </h2>
        
        <p className="mb-6">
        Este es un ejemplo de cómo cambiar entre temas claro y oscuro usando useState en React con Tailwind CSS.
        </p>
        
        <button 
        className={`px-4 py-2 rounded transition-colors duration-300 ${
            temaOscuro 
            ? 'bg-white text-gray-800 hover:bg-gray-200' 
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
        onClick={cambiarTema}
        >
        Cambiar a modo {temaOscuro ? 'claro' : 'oscuro'}
        </button>
    </div>
    );
    }

export default ToggleTema;