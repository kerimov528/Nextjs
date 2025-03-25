import { fetchVehiclesWithYear } from '@/app/api/fetchVehicles';
import ClientResult from '@/app/components/ClientResult';
import axios from 'axios';

export default async function Result({ params }) {
    const { makeId, year } = params;
    const models = await fetchVehiclesWithYear(makeId, year);
    return <ClientResult models={models} year={year} />;
}

export async function generateStaticParams() {
    const response = await axios.get(
        'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
    );
    const makes = response.data.Results;

    const paths = [];

    for (const make of makes) {
        for (let year = 2000; year <= new Date().getFullYear(); year++) {
            paths.push({
                makeId: make.MakeId.toString(),
                year: year.toString(),
            });
        }
    }

    return paths;
}
