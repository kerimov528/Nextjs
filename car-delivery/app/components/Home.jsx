'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchVehicles } from '../api/fetchVehicles';

function Home() {
    const currentYear = new Date().getFullYear();

    const [makes, setMakes] = useState([]);
    const [makeId, setMakeId] = useState('');
    const [year, setYear] = useState('');

    const fetchMakes = async () => {
        const response = await fetchVehicles();
        setMakes(response);
    };

    useEffect(() => {
        fetchMakes();
    }, []);

    return (
        <>
            <div className="flex flex-wrap gap-4 items-end">
                {/* Vehicle Make Filter */}
                <div className="flex-1 min-w-[150px]">
                    <label
                        htmlFor="makeId"
                        className="block text-white font-medium mb-2"
                    >
                        Vehicle Make
                    </label>
                    <select
                        id="makeId"
                        name="makeId"
                        value={makeId}
                        onChange={(e) => setMakeId(e.target.value)}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 h-9  text-black"
                    >
                        <option value="">Select a make</option>
                        {makes.map((make) => (
                            <option key={make.id} value={make.id}>
                                {make?.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Model Year Filter */}
                <div className="flex-1 min-w-[150px]">
                    <label
                        htmlFor="year"
                        className="block text-white font-medium mb-2"
                    >
                        Model Year
                    </label>
                    <select
                        id="year"
                        name="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500  h-9 text-black"
                    >
                        <option value="">Select a year</option>
                        {Array.from(
                            { length: currentYear - 2015 + 1 },
                            (_, i) => 2015 + i
                        ).map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Apply Filters Button */}
                <div className="flex items-end">
                    <Link
                        href={
                            !makeId || !year ? '#' : `/result/${makeId}/${year}`
                        }
                        className={`p-2 bg-blue-500 text-white rounded ${
                            !makeId || !year
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                        }`}
                    >
                        Next
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Home;
