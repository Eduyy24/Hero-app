import { FunctionComponent } from "react";
import { GeneralButton } from "../../../components/general-button/GeneralButton";
import styles from "./ContentHome.module.css";
import heroLogo from "../../../assets/superhero.png";
import {useNavigate} from 'react-router-dom';
import { DESCRIPTION_APP, NAME_APP, NAME_BUTTON_HOME } from "../../../utils/strings";
import usePagesData from "../../../hooks/usePagesData";

export const ContentHome: FunctionComponent = () => {
  let navigate = useNavigate();
  const {getPageForOrder} = usePagesData()
  const nextPage = getPageForOrder(1);

  return (
    <div className={styles.container}>
      <img className={styles.heroLogo} src={heroLogo} alt="hero logo" />
      <h1 className={styles.title}>{NAME_APP}</h1>
      <h2 className={styles.subTitle}>{DESCRIPTION_APP}</h2>
      <div className={styles.wrapperButton}>
        <GeneralButton name={NAME_BUTTON_HOME} onClick={() => {
          navigate(`/${nextPage?.key}`)
        }} />
      </div>
    </div>
  );
};
