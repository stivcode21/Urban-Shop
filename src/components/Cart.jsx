import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCount from './cart/CartCount'
import CartItem from './cart/CartItem'
import CartEmpty from './cart/CartEmpty'
import { selectCartItems, selectCartState, selectTotalAmount, selectTotalQTY, setClearCartItems, setCloseCart, setGetTotals } from '../app/CartSlice'

const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState)
    const cartItems = useSelector(selectCartItems)
    const totalAmount = useSelector(selectTotalAmount)
    const totalQTY = useSelector(selectTotalQTY)
    //console.log(cartItems)

    useEffect(() => {
        dispatch(setGetTotals())
    }, [cartItems, dispatch])

    const onCartToogle = () => {
        dispatch(setCloseCart({
            cartState: false
        }))
    }

    const onClearCart = () => {
        dispatch(setClearCartItems())
    }

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen z-[250] ${ifCartState
                ? 'opacity-100 visible translate-x-0'
                : 'opacity-0 invisible translate-x-8'}`}>
                <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 `}>
                    <CartCount totalQTY={totalQTY} onCartToogle={onCartToogle} onClearCart={onClearCart} />
                    {cartItems?.length === 0 ? <CartEmpty onCartToogle={onCartToogle} /> : <div>
                        <div className='flex justify-start items-start flex-col gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-4'>
                            {cartItems?.map((item, i) => (
                                <CartItem key={i} item={item} />
                            ))}
                        </div>
                        <div>
                            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                                    <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                                        ${totalAmount}.000
                                    </h1>
                                </div>
                                <div className="grid items-center gap-2">
                                    <p className="text-sm font-medium text-center">
                                        Será redirigido a WhatsApp para completar su compra.
                                    </p>
                                    <button
                                        type="button"
                                        className="button-theme bg-theme-cart text-white">
                                        Comprar Ahora
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Cart