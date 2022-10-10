import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "info"
    | "danger"
    | "outlined";
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}
