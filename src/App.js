import Header from "./components/Header/header";
import Products from "./components/Products/products";
import { useState } from "react";
import Cart from "./components/Cart/cart";

function App() {
  const [showcart, setshowcart] = useState(false);
  const [cartitem, setcartitem] = useState([]);

  function addtocart(name){

    const newcartitem = [...cartitem,{name:name}];
    setcartitem(newcartitem);
  }

  function opencart() {
    setshowcart(true);
  }

  function closecart() {
    setshowcart(false);
  }

  return (
    <div>
      <Header opencart={opencart} />
      <Products addtocart={addtocart}/>
      <Cart showcart={showcart} closecart={closecart} cartitem={cartitem} addtocart={addtocart}/>
    </div>
  );
}

export default App;
