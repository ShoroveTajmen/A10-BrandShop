const Banner = () => {
  return (
    <div>
      <div className="relative w-full h-[700px]">
        {/* background image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/j58hQ1D/393159016-904953577644775-6787729039889707864-n.png')] bg-cover bg-center bg-no-repeat h-[700px] md:h-[700px]"></div>
        {/* white overlay */}
        <div className="absolute top-0 right-0 md:right-0 lg:right-0 bottom-0 left-0 bg-black opacity-30 "></div>
        {/* <div
          className="relative ml-[19px] md:ml-[10px] lg:ml-[40px] p-2"
          data-aos="zoom-in"
        >
          <div className="absolute mt-[100px] md:mt-[140px]  lg:mt-[150px] lg:w-[550px] mx-auto md:ml-[0px] lg:ml-[0px] text-left ">
            <h1 className=" text-white text-5xl md:text-5xl lg:text-4xl font-xl mb-[10px] md:mb-[20px] lg:mb-[30px] font-bold">
              TechDiscover: Unveiling the Latest in Innovation
            </h1>
            <p className="text-sm md:text-xl lg:text-sm font-semibold mb-[10px] md:mb-[20px] md:mt-[10px] lg:mt-[30px] text-gray-300">
              Explore and share the forefront of technology with our platform,
              where users discover and discuss the latest innovations in the
              world of tech products.
            </p>
            <button className="btn bg-[#3a86ff] rounded-none border-none w-[200px] text-white font-bold text-lg">
              GET STARTED
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
