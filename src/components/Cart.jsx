import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCount from './cart/CartCount'
import CartItem from './cart/CartItem'
import CartEmpty from './cart/CartEmpty'
import { selectCartItems, selectCartState, setCloseCart } from '../app/CartSlice'

const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState)
    const cartItems = useSelector(selectCartItems)

    console.log(cartItems)

    const onCartToogle = () => {
        dispatch(setCloseCart({
            cartState: false
        }))
    }

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen z-[250] ${ifCartState
                ? 'opacity-100 visible translate-x-0'
                : 'opacity-0 invisible translate-x-8'}`}>
                <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0 `}>
                    <CartCount onCartToogle={onCartToogle} />
                    {cartItems?.length === 0 ? <CartEmpty /> : <div>
                        <div className='flex justify-start items-start flex-col gap-y-5'>
                            {cartItems?.map((item, i) => (
                                <CartItem key={i} item={item} />
                            ))}
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Cart