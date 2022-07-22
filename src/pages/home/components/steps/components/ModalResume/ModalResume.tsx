import useDataResume from "../../../../../../hooks/useDataResume"
import styles from './ModalResume.module.css'
export const ModalResume = () => {
  const {processData} = useDataResume()
  return (
    <div>
      <h4>Resumen</h4>
      {processData().map((data, idx) => {
          if(data.value) {
            return (
              <div data-testid='list-resume' className={styles.rowData}  key={idx}>
                <strong>{data.key}:</strong>
                <span>{data.value}</span>
              </div>
            );
          }
          return null
        })}
    </div>
  )
}