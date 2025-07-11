"use client";

import React from "react";
import { Outfit, Raleway } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600"] });

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface Event {
  time: string;
  name: string;
}

interface CalendarDay {
  day: number;
  events: Event[];
}

const mockMonth: CalendarDay[][] = [
  // Week 1
  [
    {
      day: 1,
      events: [
        { time: "11:30 AM", name: "Event Name" },
        { time: "01:30 AM", name: "Event Name" },
        { time: "12:30 AM", name: "Event Name" },
      ],
    },
    { day: 2, events: [{ time: "11:30 AM", name: "Event Name" }] },
    { day: 3, events: [] },
    { day: 4, events: [] },
    { day: 5, events: [] },
    { day: 6, events: [] },
    { day: 7, events: [] },
  ],
  // Week 2
  [
    { day: 8, events: [] },
    { day: 9, events: [] },
    { day: 10, events: [] },
    { day: 11, events: [] },
    { day: 12, events: [] },
    { day: 13, events: [] },
    { day: 14, events: [] },
  ],
  // Week 3 – Add more weeks as needed
  [
    { day: 15, events: [] },
    { day: 16, events: [] },
    { day: 17, events: [] },
    { day: 18, events: [] },
    { day: 19, events: [] },
    { day: 20, events: [] },
    { day: 21, events: [] },
  ],

  [
    { day: 22, events: [] },
    { day: 23, events: [] },
    { day: 24, events: [] },
    { day: 25, events: [] },
    { day: 26, events: [] },
    { day: 27, events: [] },
    { day: 28, events: [] },
  ],
  [
    { day: 29, events: [] },
    { day: 30, events: [] },
    { day: 31, events: [] },
  ],
];

const MonthView = () => {
  return (
    <div className="pt-8 space-y-4 text-white">
      {/* Month Label */}
      <div className="text-center">
        <h2 className={`${outfit.className} text-[20px] font-bold`}>
          September 2024
        </h2>
      </div>

      {/* Days of the Week Header */}
      <div className="grid grid-cols-7 text-center text-white border-b border-[#570901] pb-2">
        {daysOfWeek.map((day, idx) => (
          <div
            key={idx}
            className={`${raleway.className} text-[18px] font-semibold`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {mockMonth.flat().map((calendarDay, index) => (
          <div
            key={index}
            className="h-[205px] px-2 py-2 border border-[#570901] rounded-[8px] flex flex-col gap-2"
          >
            {/* Day Number */}
            <div
              className={`${raleway.className} text-[18px] font-semibold text-white`}
            >
              {calendarDay.day}
            </div>

            {/* Events */}
            <div className="flex flex-col gap-2">
              {calendarDay.events.map((event, eIndex) => (
                <div
                  key={eIndex}
                  className="bg-[#570901] text-[#F2E7E6] text-[12px] font-normal rounded-md px-3 py-1"
                >
                  {event.time} {event.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
