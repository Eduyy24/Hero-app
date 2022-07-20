import { FunctionComponent } from 'react'
import styles from './WrapperSteps.module.css'

type Props = {
  children: JSX.Element
}
export const WrapperSteps: FunctionComponent<Props> = ({children}) => {
  return <div className={styles.container}> {children}</div>
}