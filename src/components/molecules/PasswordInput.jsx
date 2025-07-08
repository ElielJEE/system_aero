import { useState } from 'react';
import InputValidation from './InputValidation';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function validatePassword(value) {
  if (!value) return 'La contraseña es obligatoria';
  if (value.length < 6) return 'La contraseña debe tener al menos 6 caracteres';
  return null;
}

export default function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState();
  const togglePasswordShown = (e) => {
    e.preventDefault();
    setShow(!show);
  }

  return (
    <InputValidation
      id="password"
      label="Contraseña"
      type={show ? "password" : "text"}
      value={value}
      onChange={onChange}
      validate={validatePassword}
      icon={
        <>
          <FaLock className='input-icon'/>
          <button className="password-show" onClick={e => togglePasswordShown(e)}>
            {show ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </>
      }
    />
  );
}
