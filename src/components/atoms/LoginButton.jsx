export default function LoginButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="login-button"
    >
      {children || 'Iniciar sesión'}
    </button>
  );
}