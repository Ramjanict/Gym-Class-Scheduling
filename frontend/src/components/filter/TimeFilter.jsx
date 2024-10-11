import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const TimeFilter = () => {
  const [isTimeOpen, setIsTimeOpen] = useState(true);
  const timeSchedule = [
    { time: "08:00 AM-10:00 AM", id: 1 },
    { time: "10:00 AM-12:00 PM", id: 2 },
    { time: "12:00 PM-02:00 PM", id: 3 },
    { time: "02:00 PM-04:00 PM", id: 4 },
    { time: "04:00 PM-06:00 PM", id: 5 },
  ];
  return (
    <div className=" flex flex-col ring-1 ring-slate-300 py-2 ">
      <div className="w-full flex items-center justify-between  px-2  ">
        <h2 className=" capitalize  font-medium ">Time Schedule</h2>
        <button
          onClick={() => {
            setIsTimeOpen(!isTimeOpen);
          }}
          type="button"
        >
          <span>{isTimeOpen ? <FaMinus /> : <FaPlus />}</span>
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all  duration-300 ease-in-out ${
          isTimeOpen
            ? "grid-rows-[1fr] opacity-100 py-4"
            : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className=" overflow-hidden px-2">
          {timeSchedule.map((time, index) => {
            return (
              <div className="flex gap-2 items-center " key={index}>
                <input type="radio" name="time" id={time.id} />
                <label htmlFor={time.id}>{time.time}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimeFilter;
