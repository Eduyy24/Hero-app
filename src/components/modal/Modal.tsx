import { FunctionComponent } from "react";
import styles from "./Modal.module.css";

type Props = {
  children: JSX.Element,
  open: boolean,
  onCloseModal: EmptyFunction,
}
export const Modal: FunctionComponent<Props> = ({children, open, onCloseModal}) => {
  if(!open) return <></>

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p onClick={onCloseModal} className={styles.btnClose}>CERRAR</p>
        {children}
      </div>
    </div>
  );
};
