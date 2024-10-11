import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const TrainerFilter = () => {
  const [isTrainerOpen, setIsTrainerOpen] = useState(false);
  const trainers = [
    { name: "brad schoenfeld", id: 1 },
    { name: "matt roberts", id: 2 },
    { name: "louise parker", id: 3 },
    { name: "shaun stafford", id: 4 },
    { name: "scott laidler", id: 5 },
    { name: "emma chan", id: 6 },
    { name: "recharged ", id: 7 },
    { name: "benjamin stone ", id: 8 },
  ];
  return (
    <div className=" flex flex-col  ring-1 ring-slate-100 py-2 ">
      <div className="w-full flex items-center justify-between px-2 ">
        <h2 className=" capitalize  font-medium">Trainer</h2>
        <button
          onClick={() => {
            setIsTrainerOpen(!isTrainerOpen);
          }}
          type="button"
        >
          <span>{isTrainerOpen ? <FaMinus /> : <FaPlus />}</span>
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all  duration-300 ease-in-out ${
          isTrainerOpen
            ? "grid-rows-[1fr] opacity-100 py-4"
            : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className="overflow-hidden px-2">
          {trainers.map((trainer, index) => {
            return (
              <div className="flex gap-2 items-center capitalize  ">
                <input type="radio" name="sort" id={trainer.name} />
                <label htmlFor={trainer.name}>{trainer.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrainerFilter;
