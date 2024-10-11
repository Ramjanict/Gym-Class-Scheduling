import React from "react";

const ListCard = () => {
  return (
    <div className="w-full flex  items-center gap-4  shadow rounded-md hover:shadow bg-white">
      <div className="w-[50%] h-60">
        <img
          className="rounded-l-md h-full "
          src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="space-y-2">
          <h2 className="text-xl md:text-4xl font-bold uppercase">cardio</h2>
          <p>Get your heart pumping.</p>
        </div>

        <button className="w-max px-4 py-2  text-primaryColor ring-1 ring-primaryColor   rounded-2xl hover:bg-primaryColor hover:text-white text-xs transition-all my-2 ">
          Join Now
        </button>

        <div>
          <button className=" uppercase text-sm font-medium text-primaryColor hover:underline transition-all">
            class schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
