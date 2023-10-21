import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ( {filteredCar} ) => {


    const{_id, brandName, photo, name, carType, price, rating} = filteredCar;

    return (
        <div>
           {
            brandName?
                (<>
                <div className="card w-full h-screen bg-base-100 shadow-xl my-4">
                <figure>
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-[500px] max-lg:h-[250px]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {name}
                  </h2>
                  <h3 className="font-bold">{brandName}</h3>
                  <div className="card-actions justify-center mb-4 gap-10">
                    <div className="badge badge-secondary badge-outline p-4">{price}$</div>
                    <div className="badge badge-primary badge-outline p-4">{carType}</div>
                    <div className="badge badge-accent badge-outline p-4">{rating} Stars</div>
                  </div>
                  <div className="flex justify-around max-lg:justify-center max-lg:gap-x-2 mb-2">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent"><Link to='/update'>Update</Link></button>
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-outline btn-error"><Link to={`/details/:${_id}`}>Details</Link> </button>
                  </div>
                  <div>
                  <button className="btn btn-block btn-outline btn-info mb-2">Add to Cart</button>
                  </div>
                </div>
              </div>
                </>):
          (
          <>
          
          <div>
            <h1>No Cars Found</h1>
            </div>

          </>
          )
            
        }
     </div>
     );
};

Product.propTypes = {
    filteredCar: PropTypes.object,
  };

export default Product;