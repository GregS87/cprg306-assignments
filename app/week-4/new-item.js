"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity >= 20) return prevQuantity; // this sets a cap of 20
            return prevQuantity + 1; // Otherwise, increment by 1
        });
    };

    const decrement = () => {
        setQuantity((prevQuantity) => {
            if (prevQuantity <= 1) return prevQuantity; // Min quantity is 1
            return prevQuantity - 1; // Otherwise, decrement by 1
        });
    };

    return (
        <div className="bg-slate-900 text-slate-100 rounded-x1 shadow-lg p-6 flex flex-col items-center gap-4">
            <h2 className="text-x1 font-bold">Item quantity Add/Subtract!</h2>

            <div className="flex items-center gap-4 mt-2">
                {/* Decrement Button */}
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className="w-10 h-10 rounded-lg border border-slate-500 text-2xl leading-none
                    flex items-center justify-center 
                    disabled:opacity-50 disabled:cursor-not-allowed
                    hover:bg-slate-800 transition"
                >
                    -
                </button>

                {/* Current Quantity */}
                <span className="text-3xl font-bold tabular-nums w-10 text-center">
                    {quantity}
                </span>

                {/* Increment Button */}
                <button
                    onClick={increment}
                    disabled={quantity === 20}
                    className="w-10 h-10 rounded-lg border border-slate-500 text-2xl leading-none
                    flex items-center justify-center
                    disabled:opacity-40 disabled:cursor-not-allowed
                    hover:bg-slate-800 transition"
                >
                    +
                </button>
            </div>
        </div>
    );
}