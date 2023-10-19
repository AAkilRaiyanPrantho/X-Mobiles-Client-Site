import { useEffect, useState } from "react";
import CarBrand from "../CarBrand/CarBrand";


const CarBrands = () => {
    const[cars, setCars] = useState([]);

    useEffect( () => {
        fetch('carBrands.json')
        .then(res => res.json())
        .then(data => setCars(data));
    })

    return (
        <div className="grid grid-cols-1 w-full max-lg:px-5 md:max-lg:px-48 lg:grid-cols-2 px-20 gap-20 my-4">
            {
                cars.map(car => <CarBrand key={car.id} car={car}></CarBrand>)
            }
        </div>
    );
};

export default CarBrands;
