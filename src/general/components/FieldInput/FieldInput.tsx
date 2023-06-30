import type { Entity } from "../../models";
import styles from "./FieldInput.module.scss";
import type { FC } from "react";

interface Input extends Entity<string> {
  label?: string;
  type: string;
  disabled: boolean;
  name: string;
  placeholder?: string;
  ariaLabel: string;
  handleSearchChange: (value: string) => void;
}

const FieldInput: FC<Input> = (props) => (
  <div className={styles.field}>
    {props.label ? <label htmlFor={props.name}>{props.label}</label> : null}
    <input
      className={styles.input}
      id={props.id}
      type={props.type}
      disabled={props.disabled}
      name={props.name}
      placeholder={props.placeholder}
      aria-label={props.ariaLabel}
      autoComplete={"off"}
      onChange={(e) => props.handleSearchChange(e.target.value)}
    />
  </div>
);

export default FieldInput;
