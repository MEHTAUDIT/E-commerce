import Header from "./components/Header/header";
import Products from "./components/Products/products";
import { useState } from "react";
import Cart from "./components/Cart/cart";

function App() {
  const [showcart, setshowcart] = useState(false);
  const [cartitem, setcartitem] = useState([]);

  function addtocart(name,id,image){

    const index=cartitem.findIndex((item)=>item.id===id);

    if(index===-1)
    {
      const newcartitem = [...cartitem,{name:name,id:id,image:image,quentity:1}];
      setcartitem(newcartitem);
    }
    else
    {
      const newcartitem = [...cartitem];
      newcartitem[index].quentity++;
      setcartitem(newcartitem);
    }
    
  }

  function opencart() {
    setshowcart(true);
  }

  function closecart() {
    setshowcart(false);
  }

  function incresequentity(id){
    const index=cartitem.findIndex((item)=>item.id===id);
    const newcartitem = [...cartitem];
    newcartitem[index].quentity++;
    setcartitem(newcartitem);
    console.log("incresequentity");
  }

  function decresequentity(id){
    const index=cartitem.findIndex((item)=>item.id===id);
    const newcartitem = [...cartitem];
    if(newcartitem[index].quentity>1)
    {
      newcartitem[index].quentity--;
      setcartitem(newcartitem);
    }
    else
    {
      newcartitem.splice(index,1);
      setcartitem(newcartitem);
    }

    console.log("decresequentity");
  }

  return (
    <div>
      <Header opencart={opencart} />
      <Products addtocart={addtocart}/>
      <Cart showcart={showcart} closecart={closecart} cartitem={cartitem} addtocart={addtocart} incresequentity={incresequentity} decresequentity={decresequentity}/>
    </div>
  );
}

export default App;
