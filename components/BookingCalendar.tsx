"use client";
import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const popularDestinations = [
  "Paris, France",
  "Tokyo, Japan",
  "New York, USA",
  "Rome, Italy",
  "Bali, Indonesia",
  "London, UK",
  "Sydney, Australia",
  "Rio de Janeiro, Brazil",
];

const BookingCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSelect = (date: Date, isStart: boolean) => {
    if (isStart) {
      setStartDate(date);
      setShowStartCalendar(false);
    } else {
      setEndDate(date);
      setShowEndCalendar(false);
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocation(value);
    if (value.length > 0) {
      const filtered = popularDestinations.filter((dest) =>
        dest.toLowerCase().includes(value.toLowerCase()),
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <section
      id="booking"
      className="bg-gradient-to-r from-slate-800 to-gray-500 py-12"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-4xl font-extrabold text-white">
          Book Your Dream Vacation
        </h2>
        <div className="rounded-lg bg-white/20 p-8 shadow-xl">
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative">
              <label
                htmlFor="location"
                className="mb-1 block text-sm font-medium text-white/80"
              >
                Where to?
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={handleLocationChange}
                  className="border- w-full rounded-md border-none border-black bg-white/20 py-2 pl-10 pr-4 text-green-500 focus:outline-none focus:ring-2"
                  placeholder="Enter destination"
                />
                <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 transform text-pink-500" />
              </div>
              {suggestions.length > 0 && (
                <ul className="absolute z-10 mt-1 max-h-60 overflow-auto rounded-md border border-green-300 bg-white">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="hover:bg-gray-10 cursor-pointer px-4 py-2 text-green-500"
                      onClick={() => {
                        setLocation(suggestion);
                        setSuggestions([]);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                When?
              </label>
              <div className="flex flex-col gap-10 xl:flex-row">
                <div className="relative">
                  <input
                    type="text"
                    value={startDate.toLocaleDateString()}
                    onClick={() => setShowStartCalendar(true)}
                    className="border- w-full rounded-md border-none border-black bg-white/20 py-2 pl-10 pr-4 text-green-500 focus:outline-none focus:ring-2"
                    readOnly
                  />
                  <FaCalendarAlt className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-400" />
                  {showStartCalendar && (
                    <div className="absolute z-10 ml-[-30px] mt-1 xl:ml-[-150px]">
                      <Calendar
                        date={startDate}
                        onChange={(date) => handleSelect(date, true)}
                        className="rounded-md"
                      />
                    </div>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={endDate.toLocaleDateString()}
                    onClick={() => setShowEndCalendar(true)}
                    className="border- w-full rounded-md border-none border-black bg-white/20 py-2 pl-10 pr-4 text-green-500 focus:outline-none focus:ring-2"
                    readOnly
                  />
                  <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
                  {showEndCalendar && (
                    <div className="absolute z-10 ml-[-30px] mt-[-80px] xl:ml-2 xl:mt-1">
                      <Calendar
                        date={endDate}
                        onChange={(date) => handleSelect(date, false)}
                        className="rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-md border-2 border-white/10 px-4 py-3 font-bold text-white transition-all duration-500 ease-in-out hover:border-white">
            <FaSearch className="mr-2" />
            Search Availability
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
