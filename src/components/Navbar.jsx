import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import logo from '/urbanShop.png';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice';

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY)

    const onCartToogle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true)
        } else {
            setNavState(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll)

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);

    return (
        <>
            <header className={
                !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
                    : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-100 blur-effect-theme'
            }>
                <nav className='flex items-center justify-between nike-container'>
                    <div>
                        <img src={logo}
                            alt="logo/img"
                            className={`w-16 h-8 object-cover ${navState && "filter brightness-0"}`} />
                    </div>
                    <ul className='flex items-center justify-center gap-4'>
                        <li className='items-center'>
                            <button type='button'>
                                <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"} `} />
                            </button>
                        </li>
                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToogle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                <ShoppingCartIcon className={`icon-style mb-1 ${navState && "text-slate-900 transition-all duration-300"} `} />
                                <div className={`absolute top-3.5 -right-1.5 w-4 h-4 text-[0.65rem] leading-tight font-semibold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300
                                    ${navState ? 'bg-slate-900 text-slate-100 shadow shadow-slate-900' : 'bg-white text-slate-900 shadow shadow-slate-100'}`}>
                                    {totalQTY}
                                </div>
                            </button>

                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar