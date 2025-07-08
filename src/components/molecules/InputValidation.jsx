"use client"
import { useState } from 'react';

export default function InputValidation({ id, label, type = 'text', value, onChange, validate, icon, placeholder }) {
  const [error, setError] = useState(null);

  function handleBlur() {
    if (validate) {
      const errorMsg = validate(value);
      setError(errorMsg);
    }
  }

  return (
    <div className="form-group">
      <label htmlFor={id} className="input-container__label">
        {label}
      </label>
      <div className="form-group__input-container">
        <input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            setError(null);
            onChange(e);
          }}
          onBlur={handleBlur}
          className={`input ${error ? 'input-error' : 'input'}`}
        />
        {icon}
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
