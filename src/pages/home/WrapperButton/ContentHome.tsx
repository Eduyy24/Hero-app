import { FunctionComponent } from "react";
import { GeneralButton } from "../../../components/general-button/GeneralButton";
import styles from "./ContentHome.module.css";

export const ContentHome: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <GeneralButton name="Comprar" />
    </div>
  );
};
