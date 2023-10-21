import { useLoaderData, useParams } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Product from "../Product/Product";

const Products = () => {
  const cars = useLoaderData();
  const { title } = useParams();
  const filteredCars = cars.filter((car) => car.brandName === title);
  const length = filteredCars.length;
  console.log(filteredCars);
  console.log(length);

  return (
    <div className="flex flex-col">
      <div className="max-lg:p-4">
        <Carousel></Carousel>
      </div>
      <div className="flex justify-center mt-4">
        <h2 className="text-3xl font-bold"><span className="text-[#ee4747] font-extrabold text-4xl">A</span>vailable <span className="text-[#ee4747] font-extrabold text-1xl">C</span>ars</h2>
      </div>
      <div className="grid grid-cols-1 justify-center items-center  lg:grid-cols-2 p-4 lg:p-10 lg:gap-10">
        {filteredCars.map((filteredCar) => (
          <Product key={filteredCar._id} filteredCar={filteredCar}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
