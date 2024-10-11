import React, { useState } from "react";
import Card from "../trainer/Card";
import ListCard from "../trainer/ListCard";
import Pagination from "../pagination/Pagination";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
const TrainerList = () => {
  const [card, setCard] = useState(true);
  const arrayList = Array(4).fill(null);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-10 bg-gray-200 mt-20">
      <center className="text-4xl pb-4 font-bold  ">
        Our Gyming Trainer
        <hr className="w-[20%] h-1  bg-primaryColor my-3" />
      </center>
      <div className=" flex items-center justify-between bg-white p-4 rounded-md py-4">
        <h2 className="text-xs md:text-xl">Choose your gym trainer</h2>
        <div className="flex items-center gap-2 text-xl cursor-pointer">
          <span
            onClick={() => setCard(true)}
            className={`text-lg cursor-pointer ${
              card ? "opacity-100" : "opacity-10"
            }`}
          >
            <IoGridSharp />
          </span>

          <FaThList
            onClick={() => setCard(false)}
            className={`text-lg cursor-pointer  ${
              card ? "opacity-10" : "opacity-100"
            }`}
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center lg:justify-between gap-y-8 pt-8 ">
        {card
          ? arrayList.map((item, index) => {
              return <Card key={index} />;
            })
          : arrayList.map((item, index) => {
              return <ListCard key={index} />;
            })}
      </div>
      <Pagination />
    </div>
  );
};

export default TrainerList;
