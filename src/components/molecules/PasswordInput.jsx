import InputValidation from './InputValidation';

function validatePassword(value) {
  if (!value) return 'La contraseña es obligatoria';
  if (value.length < 6) return 'La contraseña debe tener al menos 6 caracteres';
  return null;
}

export default function PasswordInput({ value, onChange }) {
  return (
    <InputValidation
      id="password"
      label="Contraseña"
      type="password"
      value={value}
      onChange={onChange}
      validate={validatePassword}
    />
  );
}
