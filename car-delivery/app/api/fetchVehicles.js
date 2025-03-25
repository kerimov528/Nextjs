import axios from 'axios';

export async function fetchVehicles() {
    try {
        const response = await fetch(
            'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
        );
        if (!response.ok) {
            throw new Error('Failed to fetch!');
        }

        const data = await response.json();

        const Maker = data.Results.map((item) => ({
            name: item?.MakeName,
            id: item?.MakeId,
        }));

        return Maker;
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        throw error;
    }
}

export async function fetchVehiclesWithYear({ makeId, year }) {
    try {
        const response = await axios.get(
            `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );

        return response.data.Results;
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        throw error; // Rethrow the error after logging
    }
}
