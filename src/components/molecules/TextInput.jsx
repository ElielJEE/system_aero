import InputValidation from './InputValidation'

function validateText(value) {
  if (!value) return 'Este campo es obligatorio';
  return null;
}

export default function TextInput({ id, label, value, onChange }) {
  return (
    <InputValidation
      id={id}
      label={label}
      type="text"
      value={value}
      onChange={onChange}
      validate={validateText}
    />
  );
}
