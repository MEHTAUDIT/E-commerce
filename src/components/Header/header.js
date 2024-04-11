import "./header.css";
import "../Modal/modal.css";

function Header({ opencart,openaddproduct}) {

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
