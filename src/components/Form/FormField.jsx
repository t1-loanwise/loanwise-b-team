import React from "react";
import "./form-field.css";

const FormField = ({
  label,
  placeholder,
  name,
  type,
  value,
  maxLength,
  innerRef,
  ...props
}) => {
  return (
    <div className="field-container">
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        className="form-field"
        ref={innerRef}
        {...props}
      />
    </div>
  );
};

export default FormField;
