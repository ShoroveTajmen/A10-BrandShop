import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        // Do something after successful logout
        console.log("Logout successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
      <li>
        <Link to="/">
          <button className="btn">
           <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <li>
          {/* <span>{user?.displayName}</span> */}
          <Link onClick={handleLogOut}>Logout</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    // <div>
    //   <div className="navbar bg-black fixed z-10 opacity-80 max-w-screen-xl text-white">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </label>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    //         >
    //           {navOptions}
    //         </ul>
    //       </div>
    //       <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal px-1">{navOptions}</ul>
    //     </div>
    //     <div className="navbar-end">
    //       <a className="btn">Button</a>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg
"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
