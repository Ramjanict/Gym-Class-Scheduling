import { Link } from "react-router-dom";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Card from "../card/Card";
import ListCard from "../card/ListCard";
import { useState } from "react";
import Pagination from "../pagination/Pagination";

const ClassList = () => {
  const [card, setCard] = useState(true);
  const arrayList = Array(6).fill(null);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-5 pb-10 bg-[#F2F2F2]">
      <center className="text-4xl font-bold pb-4 ">
        Our Gyming Class
        <hr className="w-[20%] h-1  bg-primaryColor my-3" />
      </center>
      <div className=" flex items-center justify-between bg-white p-4 rounded-md">
        <h2 className="text-xs md:text-xl">Choose your gym class</h2>
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

      <div className="w-full flex justify-center   md:justify-between flex-wrap gap-x-4 gap-y-4 md:gap-y-8 pt-8 ">
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

export default ClassList;
