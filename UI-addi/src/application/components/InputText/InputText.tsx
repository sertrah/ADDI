import React, { FunctionComponent } from "react"; // importing FunctionComponent
import { Controller } from "react-hook-form";
import "./InputText.scss";
import cn from "classnames";

type InputTextProps = {
  id: string;
  errors: any;
  control: any;
  defaultValue?: string;
  label: string;
  type?: string;
};
const InputText: FunctionComponent<
  InputTextProps & React.RefAttributes<HTMLInputElement>
> = ({ id, control, errors, defaultValue, label, ...props }) => {
  return (
    <Controller
      name={id}
      control={control}
      defaultValue={defaultValue}
      render={({ onChange, onBlur, value }) => (
        <div className="form__group field">
          <input
            type="text"
            className={cn("form__field", errors[id] && `form__field--error`)}
            name={id}
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            aria-label={id}
          />
          <label htmlFor={id} className="form__label">
            {label}
          </label>
          <span className="message--error">{errors[id]?.message}</span>
        </div>
      )}
    />
  );
};

export default InputText;

