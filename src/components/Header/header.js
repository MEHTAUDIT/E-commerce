import "./header.css";
import "../../UI/Modal/modal.css";
import React,{useContext} from "react";
import AppContext from "../../store/app-context";

function Header() {

  const {opencart,openaddproduct}=useContext(AppContext);

  return (
    <div className="header">
      <h1>My React Store</h1>
      <div className="header-cart">
      <button className="yellow-button" onClick={openaddproduct} style={{marginRight:"20px"}}>
          AddProduct
        </button>
        <button className="yellow-button" onClick={opencart}>
          Cart
        </button>
      </div>
    </div>
  );
}

export default Header;
