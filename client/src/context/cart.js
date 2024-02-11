import { useState, useContext, createContext, useEffect } from "react";
// create context variable using createContext
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //local storage cart
  useEffect(() => {
    let existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) setCart(JSON.parse(existingCartItem));
  }, []);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider> 
  );
};

//custom hook
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };

// now, configure it into index.js file
