import { createContext } from "react";

const AppContext = createContext({
    showcart: false,
    cartitem: false,
    showaddproduct: [],
    products: [],
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