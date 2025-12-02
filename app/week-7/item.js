export default function Item({ name, quantity, category }) {
  return (
    <li className="border-b border-slate-800 py-2">
      <div className="flex justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-slate-300">x{quantity}</span>
      </div>
      <p className="text-xs text-slate-400 capitalize">{category}</p>
    </li>
  );
}