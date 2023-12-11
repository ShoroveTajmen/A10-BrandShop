import {  NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 md:ml-0 bg-black">
        <div className="flex">
          <h1 className="btn btn-ghost text-[30px] text-[#3a86ff] ml-[120px] md:ml-[0px] lg:ml-[0px] font-extrabold">
            S /<span className="text-[#ff006e]">T</span>
          </h1>
        </div>
        {/* navbar link page route */}
        <div className="">
          <ul className="flex gap-5 font-bold  flex-row md:flex-row md:justify-center md:items-center text-white text-sm ">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3a86ff] underline"
                    : ""
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3a86ff] underline"
                    : ""
                }
              >
                ABOUT ME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3a86ff] underline"
                    : ""
                }
              >
                SKILLS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experiences"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3a86ff] underline"
                    : ""
                }
              >
                EXPERIENCES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3a86ff] underline"
                    : ""
                }
              >
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#3a86ff] underline"
                    : ""
                }
              >
                CONTACT ME
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
