import React from "react";
import { Link } from "react-router-dom";

const ListCard = () => {
  return (
    <div className="w-full flex items-center gap-2 md:gap-4 rounded-md bg-white  hover:drop-shadow ">
      <div className="w-52 h-48 ">
        <img
          src="gym3.jpg"
          alt=""
          className="w-full h-full mix-blend-multiply object-scale-down   "
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl capitalize font-medium">
          conventiently curated
        </h1>
        <p className=" text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>
        <div className="flex items-center gap-4">
          <button className="w-max px-4 py-2  text-primaryColor ring-1 ring-primaryColor    rounded-2xl hover:bg-primaryColor hover:text-white text-xs transition-all my-2 ">
            View Schedule
          </button>
          <Link
            to="/signup"
            className="w-max px-4 py-2  text-primaryColor ring-1 ring-primaryColor    rounded-2xl hover:bg-primaryColor hover:text-white text-xs transition-all my-2 "
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
