import React, { useState } from "react";
import TimeFilter from "../components/filter/TimeFilter.jsx";
import DayFilter from "../components/filter/DayFilter.jsx";
import FilterMenu from "../components/filter/FilterMenu.jsx";
import Card from "../components/card/Card.jsx";
import ListCard from "../components/card/ListCard.jsx";
import Pagination from "../components/pagination/Pagination.jsx";
import TrainerFilter from "../components/filter/TrainerFilter.jsx";

const ClassCategory = () => {
  const [card, setCard] = useState(false);
  const arrayList = Array(6).fill(null);
  return (
    <div className="px-4 pb-10 bg-[#F2F2F2] mt-20">
      <div className="hidden md:grid grid-cols-[220px,1fr] gap-4 pb-10">
        <div className="bg-white ring-1 ring-slate-300 my-4 space-y-4  h-fit  font-Google">
          <div className="w-full bg-slate-400  py-2 text-white flex items-center justify-between font-medium px-2 ">
            <h2>Filter by</h2>
            <button>Reset</button>
          </div>
          <DayFilter />
          <TimeFilter />
          <TrainerFilter />
        </div>

        <div>
          <FilterMenu card={card} setCard={setCard} />
          <div className="w-full flex flex-wrap justify-center lg:justify-between gap-x-6 gap-y-8 pt-4 ">
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
      </div>
    </div>
  );
};
export default ClassCategory;
