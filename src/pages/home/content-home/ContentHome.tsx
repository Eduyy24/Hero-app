import { FunctionComponent } from "react";
import { GeneralButton } from "../../../components/general-button/GeneralButton";
import styles from "./ContentHome.module.css";
import heroLogo from "../../../assets/superhero.png";
import {useNavigate} from 'react-router-dom';

export const ContentHome: FunctionComponent = () => {
  let navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img className={styles.heroLogo} src={heroLogo} alt="hero logo" />
      <h1 className={styles.title}>Hero App</h1>
      <h2 className={styles.subTitle}>Tu heroe de ventas inmobiliario</h2>
      <div className={styles.wrapperButton}>
        <GeneralButton name="Vender" onClick={() => {
          navigate('/user')
        }} />
      </div>
    </div>
  );
};
