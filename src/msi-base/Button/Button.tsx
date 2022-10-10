import React from "react";
import "./Button.scss";

import { ButtonProps } from "./Button.types";
import { IconContext } from "react-icons/lib";

export const Button: React.FC<ButtonProps> = ({
  icon,
  variant = "primary",
  children,
  className,
  ...props
}) => {
  return (
    <button
      data-testid="msi-button"
      className={`button ${[variant]} ${className}`}
      {...props}
    >
      <IconContext.Provider value={{ className: "react-icons" }}>
        {icon}
      </IconContext.Provider>
      {children}
    </button>
  );
};
