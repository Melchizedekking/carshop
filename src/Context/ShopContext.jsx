import { createContext } from "react";
import allProducts from "../constants/all_products";

// we could have called this collection context since we are using it in collection.jsx file



export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

  const contextValue = {allProducts};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )

} 


export default ShopContextProvider;