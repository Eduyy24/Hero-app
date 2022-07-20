import { FunctionComponent } from "react";
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import styles from "./inputs.module.css";

type Props = {
  control: unknown;
  name: string;
  field: Field;
  error: string;
};

const Input = ({
  label,
  field,
  error,
}: {
  label: string;
  field: ControllerRenderProps<FieldValues, string>;
  error: string;
}) => {
  return (
    <>
      <div className={styles.containerInput}>
        <label className={styles.label} htmlFor="input">{label}</label>
        <input id="input" className={styles.inputText} {...field} />
      </div>
      {error && <p className={styles.inputError}>{error}</p>}
    </>
  );
};

export const InputText: FunctionComponent<Props> = ({
  control,
  name,
  field: { label, rules },
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control as Control}
      rules={rules}
      render={({ field }) => <Input field={field} label={label} error={error} />}
    />
  );
};
