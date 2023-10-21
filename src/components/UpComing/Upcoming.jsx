const Upcoming = () => {
  return (
    <div>
      <div className="carousel w-full h-[500px] lg:h-[1000px]">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/2vbmfVg/tesla-ads-1.webp"
            className="w-full lg:p-12"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/t3w9QG6/Toyota-Ads-2.jpg"
            className="w-full lg:p-12"
          />
        </div>
        <div id="item3" className="carousel-item w-full lg:p-12">
          <img
            src="https://i.ibb.co/BNtB35C/chevrolet-ads-2.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        
      </div>
    </div>
  );
};

export default Upcoming;
