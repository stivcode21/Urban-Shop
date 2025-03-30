import { useEffect, useState } from 'react'

const Footer = ({ footerAPI: { titles, links } }) => {
    const [Year, setYear] = useState(); // Hook useState para guardar el año actual

    useEffect(() => {
        // Hook useEffect para ejecutar una función al montar el componente
        const getYear = () => setYear(new Date().getFullYear()); // Función que obtiene el año actual
        getYear(); // Llamamos a la función para establecer el año al cargar
    }, []); // Dependencias vacías, lo que significa que se ejecuta una sola vez al montar

    return (
        <>
            <footer className='bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black pt-7 pb-5'>
                <div className='nike-container text-slate-200'>
                    <div className='grid items-start grid-cols-3 max-w-3xl w-full m-auto md:max-w-none md:gap-5'>
                        {/* Mapeamos los títulos del footerAPI y renderizamos un título por cada valor */}
                        {titles.map((val, i) => (
                            <div key={i} className="grid items-center">
                                <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
                            </div>
                        ))}
                        {/* Mapeamos los enlaces del footerAPI y renderizamos una lista de enlaces */}
                        {links.map((list, i) => (
                            <ul key={i} className="grid items-center gap-1">
                                {list.map((link, i) => (
                                    <li key={i} className="text-sm sm:text-xs">{link.link}</li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div className='mt-5 text-center'>
                        {/* Mostramos el año actual y el nombre de la compañía */}
                        <p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup> All Reserved Rights <span className='font-semibold'>StivCode {Year}</span></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
