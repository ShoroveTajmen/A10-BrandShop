import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-[1600px] mx-auto ">
        <Navbar></Navbar>
        <div>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
