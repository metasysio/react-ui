import React, { InputHTMLAttributes } from "react";
import "./TextField.scss";

import { TextFieldProps } from "./TextField.types";

export const TextField: React.FC<TextFieldProps> = ({ name, error, ...props }) => {
  return (
    <div className={'container'}>
      <div className={'inputWrapper'}>
        <input id={name} name={name} placeholder={" "} {...props} />
        <label htmlFor={name}>{props.label || name}</label>
      </div>
      {!!error && <span className={'error'}>{error}</span>}
    </div>
  );
};
