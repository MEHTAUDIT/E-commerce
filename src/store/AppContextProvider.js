import React, { useEffect } from "react";
import Notify from 'notifyjs';
import { useState } from "react";
import AppContext from "./app-context";

function AppContextProvider({children}){

    const [showcart, setshowcart] = useState(false);
  const [cartitem, setcartitem] = useState([]);
  const [showaddproduct, setshowaddproduct] = useState(false);
  const [products, setproducts] = useState({});
  const [loadding, setloadding] = useState(false);

  function addtocart(name,id,image){

    const index=cartitem.findIndex((item)=>item.id===id);

    if(index===-1)
    {
        new Notify('Product added to cart', {
          body: name,
          notifyShow: onNotifyShow
      }).show();
      const newcartitem = [...cartitem,{name:name,id:id,image:image,quentity:1}];
      setcartitem(newcartitem);
    }
    else
    {
      new Notify('Product quentity incrase to cart', {
          body: name,
          notifyShow: onNotifyShow
      }).show();
      const newcartitem = [...cartitem];
      newcartitem[index].quentity++;
      setcartitem(newcartitem);
    }
    
  }

  function onNotifyShow() {
    console.log('Notification shown!');
}

  function addproduct(name){

    const check = [Object.keys(products).find((product)=>product.name===name)];
    console.log(check);

    const newproduct = {
      id:products.length+1,
      name:name,
      image:"sugarcane.png"
    };

    sendproductdata(newproduct);
    setproducts((state)=>{
        return {...state,[Object.keys(state).length+1]:newproduct};
    });

    return;

  }

  const sendproductdata = async (newproduct) => {
    try{
        const response = await fetch('https://react-store-f7773-default-rtdb.firebaseio.com/products.json',{
            method: 'POST',
            body: JSON.stringify(newproduct),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
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

  useEffect(() => {
        
    const fetchProducts = async () => {
        setloadding(true);
        try{
            const response = await fetch('https://react-store-f7773-default-rtdb.firebaseio.com/products.json');
            const data = await response.json();
            setproducts(data);
            console.log(data);
            setloadding(false);
        }catch(error){
            console.log(error);
            setloadding(false);
        }
        
    }

    fetchProducts();
},[]);

    const appcontextvalue = {
        showcart: showcart,
        cartitem: cartitem,
        showaddproduct: showaddproduct,
        products: products,
        addtocart: addtocart,
        addproduct: addproduct,
        opencart: opencart,
        loadding: loadding,
        closecart: closecart,
        openaddproduct: openaddproduct,
        closeaddproduct: closeaddproduct,
        incresequentity: incresequentity,
        decresequentity: decresequentity
    };



    return (
        <AppContext.Provider value={appcontextvalue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;