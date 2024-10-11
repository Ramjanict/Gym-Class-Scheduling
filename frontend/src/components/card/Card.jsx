import React from "react";

const Card = () => {
  return (
    <div className="w-[330px] shadow rounded-md bg-white hover:scale-y-105 transition-all  ">
      <div className="w-full flex flex-col items-center  gap-2 px-2 py-8">
        <h1 className="text-2xl capitalize font-medium">
          conventiently curated
        </h1>
        <p className=" text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>

        <div className="w-full h-48  ">
          <img
            src="gym3.jpg"
            alt=""
            className="w-full h-full mix-blend-multiply object-scale-down   "
          />
        </div>

        <button className="w-[80%] px-4 py-2 bg-primaryColor text-white rounded-md">
          View Schedule
        </button>
      </div>
    </div>
  );
};

export default Card;
