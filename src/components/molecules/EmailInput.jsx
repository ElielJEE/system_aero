import { TfiEmail } from "react-icons/tfi";
import InputValidation from './InputValidation';


function validateEmail(value) {
  if (!value) return 'El email es obligatorio';
  if (!/\S+@\S+\.\S+/.test(value)) return 'El email no es válido';
  return null;
}

export default function EmailInput({ value, onChange }) {
  return (
    <InputValidation
      id="email"
      label="Correo electrónico"
      type="email"
      value={value}
      onChange={onChange}
      validate={validateEmail}
      icon={<TfiEmail className="input-icon"/>}
      placeholder={'ejemplo@ejemplo.com'}
    />
  );
}
