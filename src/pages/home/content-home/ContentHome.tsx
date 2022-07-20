import { FunctionComponent } from "react";
import { GeneralButton } from "../../../components/general-button/GeneralButton";
import styles from "./ContentHome.module.css";
import heroLogo from "../../../assets/superhero.png";

export const ContentHome: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <img className={styles.heroLogo} src={heroLogo} alt="hero logo" />
      <h1 className={styles.title}>Hero App</h1>
      <h2 className={styles.subTitle}>Tu heroe de ventas inmobiliario</h2>
      <div className={styles.wrapperButton}>
        <GeneralButton name="Vender" />
      </div>
    </div>
  );
};
