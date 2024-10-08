// Importación de la función para configurar la tienda
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";

// Configuración de la tienda con el reducer del carrito
const Store = configureStore({
  reducer: {
    cart: CartSlice, // Añade el slice del carrito como parte del estado
  },
});

// Exportar la tienda configurada
export default Store;
