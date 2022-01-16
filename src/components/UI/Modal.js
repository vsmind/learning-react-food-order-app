import classes from './Modal.module.css'
import ReactDOM from "react-dom";

const Backdrop = props => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
};

const portal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </>
  );
};

export default Modal;