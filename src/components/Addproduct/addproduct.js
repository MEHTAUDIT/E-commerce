import Modal from "../../UI/Modal/modal";
import "./addproduct.css";
import {useState,useContext} from "react";
import AppContext from "../../store/app-context";

function AddProduct(){

    const {showaddproduct,closeaddproduct,addproduct}=useContext(AppContext);
    const [productname, setproductname] = useState("");
    
    if(!showaddproduct){
        return null;
    }

    function handlesubmit(event){
        event.preventDefault();

        // const name=nameval.current.value;
        // addproduct(name);

        // closeaddproduct();
        addproduct(productname);
        closeaddproduct();
    }

    function handlechange(event){
        setproductname(event.target.value);
    }

    return (
        <Modal show={showaddproduct} onclose={closeaddproduct}>

            <div className="add-product">
                <h2>Add Product</h2>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="name">Name:</label>
                    {/* <input type="text" id="name" name="name" placeholder="Enter Product Name" required ref={nameval}></input> */}
                    <input type="text" id="name" name="name" placeholder="Enter Product Name" required value={productname} onChange={handlechange}></input>
                    <button className="yellow-button" type="submit">Add</button>
                </form>
            </div>
        </Modal>
    );
}

export default AddProduct;