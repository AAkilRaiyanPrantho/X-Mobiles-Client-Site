import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const CarBrand = ({car}) => {
    const {id,title,image_url} = car;

    return (
        <div>
            <Link to={`/products/${id}`}>  <div className="card lg:card-side bg-base-100 shadow-xl" data-aos="flip-down">
  <div><figure><img src={image_url} className="w-[500px] h-[250px]" alt={title}/></figure></div>
  <div className="card-body">
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