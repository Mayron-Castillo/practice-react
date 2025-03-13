import { useState } from "react";
import './Contador.css'

function InputTexto() {
    const [texto, setTexto] = useState("");

    return (
        <div className="contador">
        <input 
            type="text" 
            value={texto} 
            onChange={(e) => setTexto(e.target.value)} 
        />
        <p>Has escrito: {texto}</p>
        </div>
    );
}

export default InputTexto