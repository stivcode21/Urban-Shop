import React from 'react'
import Title from './utils/Title'
import StarRating from './utils/StarRating';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Splide, SplideSlide } from '@splidejs/react-splide'; //libreria de sliders
import '@splidejs/react-splide/css';



const Slider = ({ data: { title, news } }) => {
    const splideOptions = {
        perPage: 4,            // Número de elementos visibles por página.
        perMove: 1,            // Número de elementos que se desplazan por movimiento.
        type: 'loop',          // Tipo de carrusel, en este caso 'loop' para que los slides se repitan en bucle.
        rewind: true,          // Permite que el carrusel vuelva al principio cuando se llega al final.
        keyboard: 'global',    // Habilita el control con teclado de manera global.
        gap: '1rem',           // Espacio entre cada slide (1 rem).
        pagination: false,     // Oculta los indicadores de paginación (puntos debajo del carrusel).
        padding: '2rem',       // Añade espacio de relleno (padding) a los extremos izquierdo y derecho del carrusel.
        breakpoints: {         // Configuración de diseño adaptable (responsive) para diferentes tamaños de pantalla.
            1200: { perPage: 3 },  // A partir de 1200px, muestra 3 elementos por página.
            991: { perPage: 2.3 }, // A partir de 991px, muestra 2.3 elementos por página.
            768: { perPage: 2 },   // A partir de 768px, muestra 2 elementos por página.
            500: { perPage: 1.3 }, // A partir de 500px, muestra 1.3 elementos por página.
            425: { perPage: 1 },   // A partir de 425px, muestra 1 elemento por página.
        },
    };

    return (
        <>
            <div className="nike-container mb-11">
                <Title title={title} />
                <div className="mt-7">
                    <Splide options={splideOptions}>
                        {news.map((val, i) => (
                            <SplideSlide key={i} className="mb-0.5">
                                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                                    <div className="flex items-center justify-center">
                                        <img
                                            src={val.img}
                                            alt={`img/story/${i}`}
                                            className="w-full h-52 object-contain shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between w-full px-4">
                                        <StarRating rating={val.like} />
                                        <div className='flex items-center bg-white/80 px-1 rounded shadow shadow-gray-500 blur-effect-theme'>
                                            <h1 className='text-black text-sm font-medium'>
                                                ${val.price}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="grid items-center justify-items-start px-4">
                                        <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                                        <p className="text-sm text-justify lg:text-xs">{val.text}</p>
                                    </div>
                                    <div className="flex items-center justify-between px-4 w-full">
                                        <button className="w-[80%] bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme">
                                            <a href={val.url} target="_blank" role={"button"} >{val.btn}</a>
                                        </button>
                                        <button type='button' className='bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center px-2 text-slate-100 py-1.5 button-theme'>
                                            <ShoppingCartIcon className='icon-style' />
                                        </button>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    )
}

export default Slider