import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const DayFilter = () => {
  const daySchedule = [
    { day: "saturday", id: 1 },
    { day: "sunday", id: 2 },
    { day: "monday", id: 3 },
    { day: "tuesday", id: 4 },
    { day: "wednesday", id: 5 },
    { day: "thursday", id: 6 },
    { day: "friday", id: 7 },
  ];

  const [isDayOpen, setIsDayOpen] = useState(true);
  return (
    <div className=" flex flex-col  ring-1 ring-slate-300 py-2 ">
      <div className="w-full flex items-center justify-between px-2 ">
        <h2 className=" capitalize  font-medium">Day Schedule</h2>
        <button
          onClick={() => {
            setIsDayOpen(!isDayOpen);
          }}
          type="button"
        >
          <span>{isDayOpen ? <FaMinus /> : <FaPlus />}</span>
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all  duration-300 ease-in-out ${
          isDayOpen
            ? "grid-rows-[1fr] opacity-100 py-4"
            : "grid-rows-[0fr] opacity-0 "
        }`}
      >
        <div className="overflow-hidden px-2">
          {daySchedule.map((day, index) => {
            return (
              <div key={index} className="flex gap-2 items-center capitalize  ">
                <input type="checkbox" id={day.day} />
                <label htmlFor={day.day}>{day.day}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DayFilter;
