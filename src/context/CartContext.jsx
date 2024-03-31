import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {
      if (!isInCart(productToAdd.id)) {
        setCart((prev) => [...prev, productToAdd]);
      } else {
        console.error("El producto ya está en el carrito");
      }
    };

    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id);
    };

    const removeItem = (id) => {
      const cartUpdated = cart.filter((prod) => prod.id !== id);
      setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    }

    const getTotalQuantity = () => {
      return cart.reduce((accu, prod) => accu + prod.quantity, 0);
    }

    const getTotal = () => {
      return cart.reduce((accu, item) => accu + item.quantity * item.price, 0);
    }

    const totalQuantity = getTotalQuantity();

    return (
      <CartContext.Provider
        value={{
          cart,
          isInCart,
          addItem,
          removeItem,
          clearCart,
          totalQuantity,
          getTotal,
        }}
      >
        {children}
      </CartContext.Provider>
    );
}

export const useCart = () => {
  return useContext(CartContext)
}
