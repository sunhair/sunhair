import React, {createContext, useState} from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {
   const [productAdded, setProductAdded] = useState([]);

   return (
      <CartContext.Provider value={{productAdded,setProductAdded}}>
         {children}
      </CartContext.Provider>
   )
}

export default CartContext;