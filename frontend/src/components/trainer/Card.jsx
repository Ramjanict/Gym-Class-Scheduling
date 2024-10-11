import React from "react";

const Card = () => {
  return (
    <div className="w-[520px] flex  shadow">
      <div className="w-1/2 flex flex-col items-center justify-around bg-white">
        <div className="text-center space-y-2 ">
          <h2 className="text-xl md:text-4xl font-bold uppercase">cardio</h2>
          <p>Get your heart pumping.</p>
        </div>
        <div>
          <button className=" uppercase text-sm font-medium text-primaryColor hover:underline transition-all">
            class schedule
          </button>
        </div>
      </div>
      <div className="w-1/2 h-80">
        <img
          className="w-full h-full"
          src="https://www.goodlifefitness.com/home/_jcr_content/root/responsivegrid/responsivegrid/responsivegrid/teaser.coreimg.90.512.jpeg/1700498867984/-dsc1897.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
