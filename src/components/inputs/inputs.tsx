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

type PropsInput = {
  label: string;
  field: ControllerRenderProps<FieldValues, string>;
  error: string;
  options?: string[];
};

const Input: FunctionComponent<PropsInput> = ({ label, field, error }) => {
  return (
    <>
      <div className={styles.containerInput}>
        <label className={styles.label} htmlFor="input">
          {label}
        </label>
        <input id="input" className={styles.inputText} {...field} />
      </div>
      {error && <p className={styles.inputError}>{error}</p>}
    </>
  );
};

const Select: FunctionComponent<PropsInput> = ({
  label,
  field,
  error,
  options,
}) => (
  <>
    <div className={styles.containerSelect}>
      <label className={styles.label}>{label}</label>
      <select className={styles.selectInput} {...field}>
        <option value="">Seleccione</option>
        {options?.map((option, idx) => (
          <option key={idx} value={option}>{option}</option>
        ))}
      </select>
    </div>
    {error && <p className={styles.inputError}>{error}</p>}
  </>
);

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
      render={({ field }) => (
        <Input field={field} label={label} error={error} />
      )}
    />
  );
};

export const InputSelect: FunctionComponent<Props> = ({
  control,
  name,
  field: { label, rules, options },
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control as Control}
      rules={rules}
      render={({ field }) => (
        <Select field={field} error={error} label={label} options={options} />
      )}
    />
  );
};
