import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import CartItem from "../components/cart/CartItem";

const initialState = {
  cartState: false,
  CartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
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

    //borrar item del carrito
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.CartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.CartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.CartItems));

      toast.success(`${action.payload.title} Elimino este producto`);
    },

    //incrementar producto
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.CartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.CartItems[itemIndex].cartQuantity++; // Aumenta la cantidad
        toast.success(`Producto incrementado`); // Notificación de éxito
      }

      localStorage.setItem("cart", JSON.stringify(state.CartItems)); // Actualiza localStorage
    },

    //decrementar producto
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.CartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.CartItems[itemIndex].cartQuantity > 1) {
        state.CartItems[itemIndex].cartQuantity -= 1; // Disminuye la cantidad si es mayor a 1
        toast.success(`Producto restado`); // Notificación de éxito
      }

      localStorage.setItem("cart", JSON.stringify(state.CartItems)); // Actualiza localStorage
    },

    // Limpia todos productos del carrito
    setClearCartItems: (state, action) => {
      state.CartItems = []; // Vacía el carrito
      toast.success(`Carrito vaciado`); // Notificación de éxito
      localStorage.setItem("cart", JSON.stringify(state.CartItems)); // Limpia localStorage
    },

    // Calcula el monto total y la cantidad total de productos en el carrito
    setGetTotals: (state, action) => {
      // Usamos reduce para calcular el total de la cantidad y el total del monto
      let { totalAmount, totalQTY } = state.CartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;

          // Calculamos el total de este producto
          const totalPrice = price * cartQuantity;
          // Sumamos el total de este producto al monto acumulado
          cartTotal.totalAmount += totalPrice;
          // Sumamos la cantidad de este producto a la cantidad total
          cartTotal.totalQTY += cartQuantity;

          // Retornamos el acumulador actualizado para la siguiente iteración
          return cartTotal;
        },
        {
          // Valores iniciales para el acumulador (totalAmount y totalQTY)
          totalAmount: 0,
          totalQTY: 0,
        }
      );
      // Guardamos los totales calculados en el estado
      state.cartTotalAmount = totalAmount.toLocaleString("es-CO");
      state.cartTotalQantity = totalQTY;
    },
  },
});
export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
  setGetTotals,
} = CartSlice.actions;

//exportacion para obtener estados desde cualquier componente
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.CartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;

export default CartSlice.reducer;
