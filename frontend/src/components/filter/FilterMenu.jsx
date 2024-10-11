import React from "react";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
const FilterMenu = ({ card, setCard }) => {
  return (
    <div className="flex items-center justify-between bg-white ring-1 ring-slate-300  my-4 py-2 px-6">
      <div>
        <h2 className="text-xl font-medium ">category</h2>
      </div>
      <div className="flex items-center gap-10">
        <div className="space-x-2">
          <span>Sort By:</span>
          <select
            name="sort"
            id=""
            className="p-1 bg-gray-50 outline-none rounded-md"
          >
            <option value="">Default</option>
            <option value="atoz">sort (a to z)</option>
            <option value="ztoa">sort (z to a)</option>
          </select>
        </div>

        <div className="flex items-center gap-2 ">
          View:
          <span
            onClick={() => {
              setCard(true);
            }}
            className={`text-lg cursor-pointer ${
              card ? "opacity-100" : "opacity-10"
            }`}
          >
            <IoGridSharp />
          </span>
          <span
            onClick={() => {
              setCard(false);
            }}
            className={`text-lg cursor-pointer  ${
              card ? "opacity-10" : "opacity-100"
            }`}
          >
            <FaThList />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
