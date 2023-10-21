import Swal from 'sweetalert2'



const AddProducts = () => {
  const handleAddProducts = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const brandName = form.carBrands.value;
    const carType = form.carType.value;
    const price = form.price.value;
    const description = form.shortDescription.value;
    const rating = form.rating.value;

    const newProduct = {name,photo,brandName,carType,price,description,rating}
    console.log(newProduct);

    // Sending data to the server
    fetch('http://localhost:5000/product',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Congratulations',
          text: 'Data Entry Successful!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })

      }
    })

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              {" "}
              <span className="text-[#ee4747]">Add </span>Items!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddProducts} className="card-body w-96 backdrop-blur-lg">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <select id="carBrands" name="carBrands" className="p-4 border-2 rounded-lg" required>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Ford">Ford</option>
                  <option value="Chevrolet">Chevrolet</option>
                  <option value="BMW">BMW</option>
                  <option value="Tesla">Tesla</option>
                 </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Car Type</span>
                </label>
                <select id="carType" name="carType" className="p-4 border-2 rounded-lg" required>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV (Sport Utility Vehicle)">SUV (Sport Utility Vehicle)</option>
                  <option value="Sports Car">Sports Car</option>
                  <option value="Hatchback">Hatchback</option>
                 </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered" required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  name="shortDescription"
                  placeholder="Short Description"
                  className="input input-bordered" required
                />
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <select id="rating" name="rating" className="p-4 border-2 rounded-lg" required>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                 </select>
              </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn outline outline-[#ee4747] text-[#ee4747]">
                  Add Product
                </button>
              </div>
            </form>
            {/* <ToastContainer /> */}
            {/* {signUpError && <p className="text-red-800">{signUpError}</p>} */}
            {/* {signUpSuccess && <p className="text-green-800">{signUpSuccess}</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
