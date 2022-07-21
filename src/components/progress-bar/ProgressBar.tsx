import { FunctionComponent } from "react";
import styles from './ProgressBar.module.css'
type Props = {
  max:number;
  value: number;
}
export const ProgressBar: FunctionComponent<Props> = ({max, value}) => {
  return (
    <div>
      <progress data-testid='progress' className={styles.progressBar} value={value} max={max} />
      <p className={styles.count}>{value} / {max}</p>
    </div>
  )

}