import React from 'react'
import emptybag from '../../assets/emtybag.png';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CartEmpty = ({ onCartToogle }) => {
    return (
        <>
            <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
                <img
                    src={emptybag}
                    alt="emptybag/img"
                    className='w-40 lg:w-36 mr-2 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110'
                />
                <button type='button'
                    className='button-theme bg-gradient-to-b from-slate-800 to-black shadow-lg shadow-slate-900 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'
                    onClick={onCartToogle}>
                    <ArrowLeftIcon className='w-5 h-5 text-slate-100' />
                    <span className='text-slate-100'>Volver A La Tienda</span>
                </button>
            </div>
        </>
    )
}

export default CartEmpty