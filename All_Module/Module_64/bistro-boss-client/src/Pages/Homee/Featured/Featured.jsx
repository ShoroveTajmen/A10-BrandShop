import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check It Out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            distinctio, accusamus non nesciunt laudantium ab consectetur tenetur
            aut, velit, eum assumenda voluptate? Officia quasi nam error?
            Placeat, quod dolores. Enim expedita perspiciatis, laudantium ullam
            maiores molestias quidem earum laborum quas autem esse rerum magni
            blanditiis, non impedit inventore voluptates nisi.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
