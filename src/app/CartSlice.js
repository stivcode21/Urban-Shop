import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  CartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    // Abre el carrito
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState; // Actualiza el estado para abrir el carrito
    },
    // Cierra el carrito
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState; // Actualiza el estado para cerrar el carrito
    },
    // Agrega un artículo al carrito
    setAddItemToCart: (state, action) => {
      const itemIndex = state.CartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.CartItems[itemIndex].cartQuantity++;
        toast.success(`Cantidad de articulo aumentada`);
      } else {
        const itemQuantity = { ...action.payload, cartQuantity: 1 };
        state.CartItems.push(itemQuantity);

        toast.success(`${action.payload.title} añadido al carrito`);
      }

      localStorage.setItem("cart", JSON.stringify(state.CartItems));
    },
  },
});
export const { setOpenCart, setCloseCart, setAddItemToCart } =
  CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.CartItems;

export default CartSlice.reducer;
