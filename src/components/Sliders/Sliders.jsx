import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";


const Sliders = () => {
    const[sliders, setSliders] = useState([]);

    useEffect( () => {
        fetch('../carBrands.json')
        .then(res => res.json())
        .then(data => setSliders(data));
    },[])
    return (
        <div>
            {
                sliders.map(slider => <Slider key={slider.id} slider={slider}></Slider>)
            }
        </div>
    );
};

export default Sliders;