import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CarBrand = ({ car }) => {
  const { title, image_url } = car;

  return (
    <div>
            <Link to={`/products/${title}`}>  <div className="card lg:card bg-base-100 shadow-xl transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-[#ee4747]/30" data-aos="flip-down">
  <div><figure><img src={image_url} className="w-[600px] h-[400px] transition duration-300 ease-in-out hover:scale-110" alt={title}/></figure></div>
  <div className="card-body flex justify-center items-center">
    <h2 className="card-title text-[#ee4747] font-bold text-2xl">{title}</h2>
   </div>
  </div></Link>
    
</div>
  );
};

CarBrand.propTypes = {
  car: PropTypes.object,
};

export default CarBrand;
