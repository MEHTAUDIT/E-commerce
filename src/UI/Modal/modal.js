import {createPortal} from "react-dom";
//for insert into body tag
function Modal({show,onclose,children}) {

    if (!show) {
        return null;
    }

  return (
    
    createPortal(<div className="backdrop" onClick={onclose}>
    <div className="modal" onClick={(event)=>{event.stopPropagation()}}>{children}</div>
    </div>,document.body)
      
  );
}

export default Modal;
