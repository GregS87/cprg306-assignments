import NewItem from "./new-item";

export default function Page() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="p-4 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">Week 4 - New Item</h1>

                {/* NewItem Component */}
                <NewItem />
            </div>
        </main>
    );
}