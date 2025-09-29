
export default function Item({ name, quantity, category }){

    return (
        <li className="flex border p-10 shadow-sm rounded-lg">
            <div className="min-w-0">
                <p className="truncate text-base font-bold text-white-500">{name}</p>
                <p className="text-sm text-blue-500">Category: {category}</p>
            </div>
            <div className="ml-4 flex-shrink-0">
                <p className="text-sm font-medium text-orange-600">Qty: {quantity}</p>
            </div>
            </li>
    );
}