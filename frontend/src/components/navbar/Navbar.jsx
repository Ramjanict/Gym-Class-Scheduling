import { Link } from "react-router-dom";
import React from "react";
import Menu from "./Menu";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";
import { RiMentalHealthLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-20 px-4 md:px-8 lg:-16 xl:px-32 2xl:px-64  top-0 fixed z-50 bg-white shadow">
        {/**Mobile screen */}
        <Link
          to="/"
          className="h-full flex items-center justify-between md:hidden"
        >
          <div className="text-2xl tracking-wide uppercase">Ramjan</div>
          <Menu />
        </Link>
        {/**Desktop screen */}

        <div className=" hidden md:flex items-center justify-between h-full gap-8 ">
          <div className="w-1/3 xl:w-3/5 flex items-center gap-12">
            <Link to="/" className="flex items-center gap-3">
              <span className="text-4xl">
                <RiMentalHealthLine />
              </span>

              <div className="text-2xl tracking-wide uppercase"> Ramjan</div>
            </Link>
            <div className=" hidden xl:flex gap-4 capitalize">
              <Link>Membership</Link>
              <Link to="/class-category">class</Link>
              <Link to="/trainer-list">trainer</Link>
              <Link>careers</Link>
              <Link to="/admin-panel">dashboard</Link>
            </div>
          </div>

          <div className="w-2/3 xl:w-2/5 flex items-center justify-between gap-8">
            <SearchBar />
            <NavIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
