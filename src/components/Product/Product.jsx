import PropTypes from "prop-types";

const Product = ( {filteredCar} ) => {


    const{ brandName, photo, name, carType, price, description, rating} = filteredCar;

    return (
        <div>
           {
            brandName?
                (<>
                <div className="card w-full h-screen bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={photo}
                    alt={name}
                    className="w-full max-lg:h-[500px]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {name}
                  </h2>
                  <h3 className="font-bold">{brandName}</h3>
                  <p>{description}</p>
                  
                  <div className="card-actions justify-around mb-4">
                    <div className="badge badge-outline">{price}$</div>
                    <div className="badge badge-outline">{carType}</div>
                    <div className="badge badge-outline">{rating} Stars</div>
                  </div>
                  <div className="flex justify-around max-lg:justify-center max-lg:gap-x-2 mb-2">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent">Update</button>
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-outline btn-error">Details</button>
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