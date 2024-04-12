import Header from "./components/Header/header";
import Products from "./components/Products/products";

import Cart from "./components/Cart/cart";
import AddProduct from "./components/Addproduct/addproduct";

import React from "react";

import AppContextProvider from "./store/AppContextProvider";

function App() {

  // React Fragment <>
  return (
    <AppContextProvider> 
      <Header />
      <Products />
      <Cart/>
      <AddProduct/>
    </AppContextProvider>
  );
}

export default App;
