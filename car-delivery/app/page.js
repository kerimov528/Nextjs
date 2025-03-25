'use-client';

import Home from './components/Home';

export default function MainPage() {
    return (
        <div className="min-h-screen bg-slate-900 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Filter Page</h1>

                <Home />
            </div>
        </div>
    );
}
