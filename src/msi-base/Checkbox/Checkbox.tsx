import { CheckboxProps } from "./Checkbox.types";
import "./Checkbox.scss";

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  ...props
}) => {
  return (
    <div className={`checkbox ${props.checked ? "checked" : ""}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        id={name}
        type="checkbox"
        checked={props.checked}
        {...props}
      />
      <span className={"checkmark"} />
    </div>
  );
};
