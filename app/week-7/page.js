"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import { useState } from 'react';
import ItemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(ItemsData);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <main className="min-h screen flex items center justify-center p-4">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Shopping List
                </h1>
                {/* add new item form */}
                <NewItem onAddItem={handleAddItem} />
                {/* sortable list of items */}
                <ItemList items={items} />
            </div>
        </main>
    );
}