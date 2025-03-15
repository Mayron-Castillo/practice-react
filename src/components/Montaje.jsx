import { useEffect } from "react"

function Montaje() {
    useEffect(()=>{
        console.log('Se ejecuto el componente Montaje')
    }, []);
    
    return (
        <div>Hola</div>
    )
}

export default Montaje