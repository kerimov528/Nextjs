'use client';

export default function ResultComponent({ models, year }) {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">
                Vehicle Models for {year}
            </h1>

            {/* Vehicle List Section */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ml-6">
                {models.map((model) => (
                    <div
                        key={model.Model_ID}
                        className="bg-white rounded-lg shadow-md p-4"
                    >
                        <h3 className="text-lg font-bold text-gray-800">
                            {model.Make_Name}
                        </h3>
                        <p className="text-gray-600">
                            Vehicle Type: {model.Model_Name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
