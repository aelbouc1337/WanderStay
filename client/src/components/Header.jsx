import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { FaBed } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosWoman } from "react-icons/io";
import { format } from "date-fns";
const Header = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <header className="bg-primary w-full h-96 px-4 md:px-8 lg:px-20 flex flex-col gap-8 text-white py-4 md:py-6 lg:py-8">
      <h1 className="text-xl lg:text-4xl text-center">
        Discover Your Next Stay, Wherever You Wander
      </h1>
      <div className="px-4 lg:px-10 lg:mx-28 border-4 flex py-7  rounded-full bg-slate-200">
        <span className="w-full flex gap-2 items-center">
          <FaBed className="text-slate-600 text-2xl" />
          <input
            type="text"
            className="outline-none bg-transparent text-slate-400 text-lg placeholder:text-slate-400"
            placeholder="Where Are You Going ?"
          />
        </span>
        <span className=" w-full flex gap-2 relative items-center">
          <FaCalendarAlt className="text-slate-600 text-2xl" />
          <span
            className="text-slate-400 cursor-pointer"
            onClick={() => setOpenCalendar(!openCalendar)}
          >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
            dates[0].endDate,
            "MM/dd/yyyy"
          )}`}</span>
          {openCalendar && (
            <DateRange
              className="absolute top-10"
              editableDateInputs={true}
              onChange={(item) => setDates([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dates}
            />
          )}
        </span>
        <span className="w-full flex gap-2 items-center relative">
          <IoIosWoman className="text-slate-600 text-2xl" />
          <span
            onClick={() => setOpenOptions(!openOptions)}
            className="text-slate-400 cursor-pointer"
          >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
          {openOptions && (
            <div className="absolute px-8 py-8 rounded-3xl bg-slate-300 top-10 left-10">
              <div className="flex flex-col w-full h-full gap-4">
                <div className="w-full h-full items-center flex gap-5 text-black">
                  <span className="font-semibold">Adults:</span>
                  <div className="flex gap-3 py-2 rounded-lg bg-slate-200">
                    <button
                      disabled={options.adult <= 1}
                      className=" px-4 font-bold text-2xl "
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span className="text-xl">{options.adult}</span>
                    <button
                      className="px-4 font-bold text-2xl"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-full h-full items-center flex gap-2 text-black">
                  <span className="font-semibold">Children:</span>
                  <div className="flex gap-3 py-2 rounded-lg bg-slate-200">
                    <button
                      disabled={options.children <= 1}
                      className=" px-4 font-bold text-2xl "
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="text-xl">{options.children}</span>
                    <button
                      className="px-4 font-bold text-2xl"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="w-full h-full items-center flex gap-5 text-black">
                  <span className="font-semibold">Rooms:</span>
                  <div className="flex gap-3 py-2 rounded-lg bg-slate-200">
                    <button
                      disabled={options.room <= 1}
                      className=" px-4 font-bold text-2xl "
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span className="text-xl">{options.room}</span>
                    <button
                      className="px-4 font-bold text-2xl"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </span>
        <button className="bg-primary text-white rounded-full px-11 tracking-wider py-3 text-xl font-semibold">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
