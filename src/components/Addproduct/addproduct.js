import Modal from "../Modal/modal";
import "./addproduct.css";
import {useRef} from "react";

function AddProduct({showaddproduct,closeaddproduct,addproduct}){

    const nameval = useRef();

    if(!showaddproduct){
        return null;
    }

    function handlesubmit(event){
        event.preventDefault();

        const name=nameval.current.value;
        addproduct(name);

        closeaddproduct();
    }

    return (
        <Modal show={showaddproduct} onclose={closeaddproduct}>

            <div className="add-product">
                <h2>Add Product</h2>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter Product Name" required ref={nameval}></input>
                    <button className="yellow-button" type="submit">Add</button>
                </form>
            </div>
        </Modal>
    );
}

export default AddProduct;