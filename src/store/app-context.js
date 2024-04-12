import { createContext } from "react";

const AppContext = createContext({
    showcart: false,
    cartitem: [],
    showaddproduct: false,
    products: [],
    loadding: false,
    addtocart: () => {},
    addproduct: () => {},
    opencart: () => {},
    closecart: () => {},
    openaddproduct: () => {},
    closeaddproduct: () => {},
    incresequentity: () => {},
    decresequentity: () => {}
});

export default AppContext;