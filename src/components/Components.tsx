import React from "react";
import { InputEmail, InputText } from "./inputs/inputs";

const ComponentsList = {
  inputText: InputText,
  inputEmail: InputEmail,
};

const Components = (field: Field, control: unknown) => {
    if (typeof ComponentsList[field.component] !== "undefined") {
      return React.createElement(ComponentsList[field.component], {
        key: field.key,
        field: field,
        control,
        name: field.key,
      });
    }
    return React.createElement(
      () => <div>The component {field.component} not exist.</div>,
      { key: field.key }
    );
}

export default Components;