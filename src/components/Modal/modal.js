function Modal({showcart,closecart,children}) {

    if (!showcart) {
        return null;
    }

  return (
    
    <div className="backdrop" onClick={closecart}>
    <div className="modal" onClick={(event)=>{event.stopPropagation()}}>{children}</div>
  </div>
      
  );
}

export default Modal;
