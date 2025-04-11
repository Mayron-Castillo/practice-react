import { useEffect, useState } from "react"
import './Contador.css'

function Contador() {
    const [contador, setContador] = useState(0);
    
    useEffect(()=>{
        console.log(`El contador es: ${contador}`);
    },[contador]);

    const mas = () => setContador(contador + 1) 

    const menos = () => {
        if(contador > 0){
            setContador(contador - 1);
        }
    }
    
    const reiniciar = () => setContador(0);

    return (
        <section className="contador">
            <h2>Contador: {contador}</h2>
            <div className="contador-btn">
                <button className="btn" onClick={mas}>Aumentar</button>
                <button className="btn" onClick={menos}>decrementar</button>
                <button className="btn" onClick={reiniciar}>Reiniciar</button>
            </div>
        </section>
    )
}

export default Contador