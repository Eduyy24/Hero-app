import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GeneralButton } from "../../../../components/general-button/GeneralButton";
import { WrapperSteps } from "../../../../components/wrapper-steps/WrapperSteps";
import useDataResume from "../../../../hooks/useDataResume";
import { clearDataSell } from "../../../../redux/slices/generalSlice";
import styles from "./Resume.module.css";



export const Resume = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {processData} = useDataResume()


  const onClickFinalize = () => {
    alert("Proceso finalizado");
    dispatch(clearDataSell())
    navigate('/')
  };

  return (
    <WrapperSteps>
      <div data-testid='container-resume'>
        <h3 className={styles.title}>Resumen de venta</h3>
        {processData().map((data, idx) => {
          return (
            <div data-testid='list-resume' className={styles.row} key={idx}>
              <strong>{data.key}:</strong>
              <span>{data.value}</span>
            </div>
          );
        })}
        <div className={styles.containerButton}>
          <GeneralButton name="Finalizar" onClick={onClickFinalize} />
        </div>
      </div>
    </WrapperSteps>
  );
};
