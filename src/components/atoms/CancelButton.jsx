export default function CancelButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-500 transition"
    >
      {children || 'Cancelar'}
    </button>
  );
}