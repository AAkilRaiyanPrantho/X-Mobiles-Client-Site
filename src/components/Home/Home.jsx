import Banner from "../Banner/Banner";
import CarBrands from "../CarBrands/CarBrands";


const Home = () => {
    return (
        <div>
            <div><Banner></Banner></div>
            <div><h1>Car Brands</h1></div>
            <div><CarBrands></CarBrands></div>
        </div>
    );
};

export default Home;