import React from 'react'
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

const CartItem = ({ item: { id, title, img, color, shadow, price, cartQuantity } }) => {
    return (
        <>
            {/* Contenedor del artículo del carrito */}
            <div className="flex items-center justify-between w-full px-5">
                <div className="flex items-center gap-5">
                    {/* Imagen del producto con estilos y sombreado */}
                    <div
                        className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
                        <img
                            src={img}
                            alt={`img/cart-item/${id}`} // Imagen del producto
                            className="w-[112px] h-[60px] object-fill object-center lg:w-28" />
                        {/* Precio mostrado encima de la imagen */}
                        <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
                            ${price}
                        </div>
                    </div>
                    <div className="grid items-center gap-4">
                        {/* Título del artículo */}
                        <div className="grid items-center leading-none">
                            <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                                {title}
                            </h1>
                        </div>

                        {/* Controles para aumentar/disminuir cantidad y eliminar artículo */}
                        <div className="flex items-center justify-between w-[110px] lg:w-[90px]">
                            {/* Botón para disminuir la cantidad */}
                            <button type="button"
                                className="bg-theme-cart rounded text-white active:scale-90 p-1 lg:p-0.5">
                                <MinusIcon className="w-4 h-4" />
                            </button>
                            {/* Cantidad del artículo en el carrito */}
                            <div className="bg-theme-cart rounded text-white font-semibold lg:text-sm px-2 lg:px-2 py-0.5">
                                {cartQuantity}
                            </div>
                            {/* Botón para aumentar la cantidad */}
                            <button type="button"
                                className="bg-theme-cart rounded text-white active:scale-90 p-1 lg:p-0.5">
                                <PlusIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Botón para eliminar el artículo del carrito */}
                <div className="grid items-center gap-5">
                    <div className="grid items-center justify-center">
                        <h1 className="text-lg lg:text-base text-slate-900 font-medium">{`$${price * cartQuantity}.000`}</h1>
                    </div>
                    <div className="grid items-center justify-end">
                        <button type="button" className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer">
                            <TrashIcon className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem