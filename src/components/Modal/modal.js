function Modal({showcart,closecart,children}) {

    if (!showcart) {
        return null;
    }

  return (
    
    <div className="backdrop" onClick={closecart}>
    <div className="modal">{children}</div>
  </div>
      
  );
}

export default Modal;
