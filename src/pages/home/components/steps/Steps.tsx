import { ProgressBar } from '../../../../components/progress-bar/ProgressBar'
import { WrapperSteps } from '../../../../components/wrapper-steps/WrapperSteps'

export const Steps = () => {
  return (
    <WrapperSteps>
      <ProgressBar value={90} max={100}/>
    </WrapperSteps>
  )
}