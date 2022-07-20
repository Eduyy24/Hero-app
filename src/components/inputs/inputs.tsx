import { FunctionComponent } from "react"
import { Control, Controller } from "react-hook-form"

type Props = {
  control: unknown;
  name: string;
  field: Field
}

export const InputText: FunctionComponent<Props> = ({control, name}) => {
  return (
    <Controller
        name={name}
        control={control as Control}
        rules={{ required: true }}
        render={({ field }) => <input {...field} />}
      />
  )
}