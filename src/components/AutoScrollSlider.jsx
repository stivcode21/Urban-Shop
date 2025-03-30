import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // Importar los estilos de Splide

const AutoScrollSlider = ({ data: { items } }) => {
    const splideOptions = {
        type: 'loop',           // Carrusel en bucle
        arrows: false,          // Ocultar las flechas de navegación
        pagination: true,      // Ocultar indicadores de paginación
        perPage: 1,             // Mostrar solo 1 slide a la vez
        autoplay: true,         // Activar desplazamiento automático
        interval: 2500,         // Intervalo de 3 segundos entre imágenes
        speed: 1000,            // Velocidad de transición suave entre imágenes (1 segundo)
        pauseOnHover: true,     // Pausar al hacer hover
        pauseOnFocus: true,     // Pausar al enfocar
        gap: '0px',             // Eliminar el espacio entre las imágenes
        breakpoints: {
            1200: { perPage: 1 },  // En todas las pantallas muestra 1 imagen a la vez
            991: { perPage: 1 },
            768: { perPage: 1 },
            500: { perPage: 1 },
            425: { perPage: 1 },
        },
    };

    return (
        <div className="mt-10 nike-container z-10 shadow-lg shadow-gray-600 blur-effect-theme overflow-hidden rounded-xl">
            <Splide options={splideOptions}>
                {items.map((img, i) => (
                    <SplideSlide key={i}>
                        <div className="flex items-center justify-center">
                            <img
                                src={img.img}
                                alt={`Slider ${i}`}
                                className="w-full h-[150px] object-cover rounded-xl"  // Ocupa todo el ancho
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default AutoScrollSlider;
