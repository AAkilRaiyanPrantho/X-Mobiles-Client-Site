import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    const {id} = useParams();
    console.log(id)
    // const idInt = parseInt(id);
    // console.log(idInt)
    const detail = details.find((detail) => detail._id == id);
    const {name, photo,description, brandName} = detail;
    console.log(name,photo,description)
  return (
    <div>
      <div className="flex flex-col justify-center items-center max-lg:p-4 lg:p-20">
        <div className="mb-4">
          <figure>
            <img src={photo} className="w-[1500px] h-[850px]" alt={name} />
          </figure>
        </div>
        <div className="flex flex-col items-center mb-4 max-lg:p-4 lg:px-36">
          <h1 className="my-6 text-[#ee4747] font-bold text-2xl">"{name}"</h1>
          <p className="font-semibold">{description}</p>
        </div>
        <div className="mb-4">
            <Link to={`/products/${brandName}`}><button className="btn btn-ghost outline outline-[#ee4747] text-[#ee4747]">
            Go Back
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
