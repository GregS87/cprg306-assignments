import ItemList from './item-list';

export default function Page() {
    return (
        <main className="min-h screen flex items center justify-center p-4">
            <div className="w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Shopping List
                </h1>
                <ItemList />
            </div>
        </main>
    );
}