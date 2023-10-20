import Banner from "../Banner/Banner";
import CarBrands from "../CarBrands/CarBrands";


const Home = () => {
    return (
        <div>
            <div><Banner></Banner></div>
            <div className="flex justify-center items-center"><h1 className="my-8 text-3xl font-bold text-[#ee4747]">Car Brands</h1></div>
            <div><CarBrands></CarBrands></div>
        </div>
    );
};

export default Home;