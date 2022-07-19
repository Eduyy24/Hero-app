import { FunctionComponent } from 'react'
import styles from './WrapperHero.module.css'

type Props = {
  children: JSX.Element
}
export const WrapperHero: FunctionComponent<Props> = ({children}) => {
  return <div className={styles.container}> {children}</div>
}