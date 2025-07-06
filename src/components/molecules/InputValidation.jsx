"use client"
import { useState } from 'react';

export default function InputValidation({ id, label, type = 'text', value, onChange, validate }) {
  const [error, setError] = useState(null);

  function handleBlur() {
    if (validate) {
      const errorMsg = validate(value);
      setError(errorMsg);
    }
  }

  return (
    <div className="input-container">
      <label htmlFor={id} className="input-container__label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => {
          setError(null);
          onChange(e);
        }}
        onBlur={handleBlur}
        className={`input-container__input ${
          error ? 'input-error' : 'focus:ring-2 focus:ring-blue-500'
        }`}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
