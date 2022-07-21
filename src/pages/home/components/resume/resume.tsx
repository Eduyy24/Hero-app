import { useSelector } from "react-redux"
import { WrapperSteps } from "../../../../components/wrapper-steps/WrapperSteps"
import usePagesData from "../../../../hooks/usePagesData"
import { GeneralState } from "../../../../redux/slices/generalSlice"
import { formatMoney } from "../../../../utils/utils"
import styles from './Resume.module.css'

type DataProcess = {
  key: string;
  value: string;
}

export const Resume = () => {
  const dataSell = useSelector((state: {general: GeneralState}) => state.general.dataSell)
  const {getFieldForKey} = usePagesData()
  const dataResume = Object.entries(dataSell)

  const processData = () => {
    const dataArr:DataProcess[] = [];
    for (const data of dataResume) {
      const field = getFieldForKey(data[0]);
      if(field) {
        let value = ''

        if(field.type === 'string') {
          value = data[1] as string;
          dataArr.push({
            key: field.label,
            value
          })
        };

        if(field.type === 'money') {
          value = formatMoney(data[1] as string);
          dataArr.push({
            key: field.label,
            value
          })
        };

        if(field.type === 'bool') {
          value = (data[1] as boolean) ? 'SI' : 'NO';
          dataArr.push({
            key: field.label,
            value
          })
        };
      }
    }
    return dataArr;
  }

  return (
    <WrapperSteps>
      <>
        <h3 className={styles.title}>Resumen de venta</h3>
        {
          processData().map((data, idx) => {
            return (
              <div className={styles.row} key={idx}>
                <span>{data.key}:</span>
                <span>{data.value}</span>
              </div>
            )
          })
        }
      </>
    </WrapperSteps>
  );
}