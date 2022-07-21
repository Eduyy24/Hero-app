import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GeneralButton } from "../../../../components/general-button/GeneralButton";
import { WrapperSteps } from "../../../../components/wrapper-steps/WrapperSteps";
import usePagesData from "../../../../hooks/usePagesData";
import { clearDataSell, GeneralState } from "../../../../redux/slices/generalSlice";
import { formatMoney } from "../../../../utils/utils";
import styles from "./Resume.module.css";

type DataProcess = {
  key: string;
  value: string;
};

export const Resume = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataSell = useSelector(
    (state: { general: GeneralState }) => state.general.dataSell
  );
  const { getFieldForKey } = usePagesData();
  const dataResume = Object.entries(dataSell);

  const processData = () => {
    const dataArr: DataProcess[] = [];
    for (const data of dataResume) {
      const field = getFieldForKey(data[0]);
      if (field) {
        let value = "";

        if (field.type === "string") {
          value = data[1] as string;
          dataArr.push({
            key: field.label,
            value,
          });
        }

        if (field.type === "money") {
          value = formatMoney(data[1] as string);
          dataArr.push({
            key: field.label,
            value,
          });
        }

        if (field.type === "bool") {
          value = (data[1] as boolean) ? "SI" : "NO";
          dataArr.push({
            key: field.label,
            value,
          });
        }
      }
    }
    return dataArr;
  };

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
