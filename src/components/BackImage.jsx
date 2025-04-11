import fondo from '../assets/asds.jpg'

function BackImage() {
    return (
        <div class="relative bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage: `url(${fondo})`}}>
            <div class="text-white text-4xl font-bold z-10">
                ¡Texto encima de la imagen!
            </div>
        </div>
    )
}

export default BackImage