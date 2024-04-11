import Header from "./components/Header/header";
import Products from "./components/Products/products";
import { useState } from "react";
import Cart from "./components/Cart/cart";
import AddProduct from "./components/Addproduct/addproduct";
import initialproducts from "./data/MOCK_DATA.json";

function App() {
  const [showcart, setshowcart] = useState(false);
  const [cartitem, setcartitem] = useState([]);
  const [showaddproduct, setshowaddproduct] = useState(false);
  const [products, setproducts] = useState(initialproducts);

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

  function addproduct(name){

    const check = products.find((product)=>product.name===name);
    console.log(check);

    const newproduct = [...products,{
      id:products.length+1,
      name:name,
      image:"sugarcane.png"
    }];

    setproducts(newproduct);

    return;

  }

  function opencart() {
    setshowcart(true);
  }

  function closecart() {
    setshowcart(false);
  }

  function openaddproduct(){
    setshowaddproduct(true);
  }

  function closeaddproduct(){
    setshowaddproduct(false);
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
      <Header opencart={opencart} openaddproduct={openaddproduct}/>
      <Products addtocart={addtocart} products={products}/>
      <Cart showcart={showcart} closecart={closecart} cartitem={cartitem} addtocart={addtocart} incresequentity={incresequentity} decresequentity={decresequentity}/>
      <AddProduct showaddproduct={showaddproduct} closeaddproduct={closeaddproduct} addproduct={addproduct}/>
    </div>
  );
}

export default App;
