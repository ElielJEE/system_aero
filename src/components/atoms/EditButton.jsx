export default function EditButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
    >
      {children || 'Editar'}
    </button>
  );
}