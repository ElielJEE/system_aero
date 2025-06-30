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
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-1 font-semibold">
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
        className={`border rounded px-3 py-2 focus:outline-none ${
          error ? 'border-red-500' : 'focus:ring-2 focus:ring-blue-500'
        }`}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
