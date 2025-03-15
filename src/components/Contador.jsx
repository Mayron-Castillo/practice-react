import { useEffect, useState } from "react"
import './Contador.css'

function Contador() {
    const [contador, setContador] = useState(0);
    
    useEffect(()=>{
        console.log(`El contador es: ${contador}`);
    },[contador]);

    return (
        <section className="contador">
            <h2>Contador: {contador}</h2>
            <div className="contador-btn">
                <button className="btn" onClick={()=> setContador(contador+1)}>Aumentar</button>
                <button className="btn" onClick={()=> setContador(contador-1)}>decrementar</button>
                <button className="btn" onClick={()=> setContador(0)}>Reiniciar</button>
            </div>
        </section>
    )
}

export default Contador