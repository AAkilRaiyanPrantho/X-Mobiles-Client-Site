import Banner from "../Banner/Banner";
import CarBrands from "../CarBrands/CarBrands";
import Stats from "../Stats/Stats";
import Upcoming from "../UpComing/Upcoming";


const Home = () => {
    return (
        <div>
            <div><Banner></Banner></div>
            <div className="flex justify-center items-center mt-8"><h2 className="text-3xl font-bold"><span className="text-[#ee4747] font-extrabold text-4xl">S</span>ummery <span className="text-[#ee4747] font-extrabold text-1xl">O</span>f <span className="text-[#ee4747] font-extrabold text-1xl">L</span>ast <span className="text-[#ee4747] font-extrabold text-1xl">M</span>onth</h2></div>
            <div className="flex justify-center items-center" >
                <Stats></Stats>
            </div>

            <div className="flex justify-center items-center mt-8"><h2 className="text-3xl font-bold"><span className="text-[#ee4747] font-extrabold text-4xl">C</span>ar <span className="text-[#ee4747] font-extrabold text-1xl">B</span>rands</h2></div>
            <div><CarBrands></CarBrands></div>
            <div className="flex justify-center items-center mt-8"><h2 className="text-3xl font-bold"><span className="text-[#ee4747] font-extrabold text-4xl">U</span>pcoming <span className="text-[#ee4747] font-extrabold text-1xl">C</span>ars</h2></div>
            <div><Upcoming></Upcoming></div>
        </div>
    );
};

export default Home;