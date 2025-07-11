"use client";

import React from "react";
import { Outfit, Raleway } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["600"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500"] });

interface Event {
  time: string;
  name: string;
  description: string;
}

const mockEvents: Event[] = [
  {
    time: "10:30AM–12PM",
    name: "Divine Liturgy",
    description: "Join us for the Divine Liturgy led by our priests.",
  },
  {
    time: "12:30PM–1:30PM",
    name: "Youth Meeting",
    description: "Weekly youth gathering with discussion and prayer.",
  },
  {
    time: "2:00PM–3:00PM",
    name: "Choir Practice",
    description: "Practice hymns and praises with the church choir.",
  },
];

const DayView = () => {
  return (
    <div className="flex flex-col gap-6 pt-8">
      {mockEvents.map((event, index) => (
        <div
          key={index}
          className="w-full max-w-[1280px] h-[132px] px-6 py-4 rounded-[10px] bg-[#570901] mx-auto flex flex-col justify-between"
        >
          <div className="flex flex-col">
            <p
              className={`${outfit.className} text-[14px] font-[600] uppercase text-[#F2E7E6]`}
            >
              {event.time}
            </p>
            <h3
              className={`${raleway.className} text-[16px] font-[500] text-white mt-1`}
            >
              {event.name}
            </h3>
            <p
              className={`${raleway.className} text-[14px] font-[400] text-[#F2E7E6] mt-1`}
            >
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayView;
