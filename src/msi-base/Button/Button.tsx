import React from "react";
import "./Button.scss";

import { ButtonProps } from "./Button.types";
import { MdMenu, Md10K } from "react-icons/md";

export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return (
    <button data-testid="msi-button" className={`btn btn-${variant}`}>
      <MdMenu />
      {children}
    </button>
  );
};
