import React from "react";

const Input = ({ name, label, value, onChange, placeholder, type, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="label">
        {label}{" "}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        placeholder={placeholder}
      />
      {error && <div className="alert alert-primary">{error}</div>}
    </div>
  );
};

export default Input;
