import React from "react";
import './Button.scss';

export interface ButtonProps {
  label: string;
  className?: string;
}

const Button = (props: ButtonProps) => {
  return <button className={`btn ${props.className}`}>{props.label}</button>;
};

export default Button;