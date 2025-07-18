"use client";

import React from "react";
import { Outfit, Raleway } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"], weight: ["600"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600"] });

interface Event {
  time: string;
  name: string;
  description: string;
}

interface WeekData {
  date: string;
  label: string;
  events: Event[];
}

const mockWeekData: WeekData[] = [
  {
    date: "Sun 17.09",
    label: "Sun",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Sunday Liturgy",
        description: "Weekly Holy Mass celebration.",
      },
      {
        time: "10.30AM–12PM",
        name: "Service Debrief",
        description: "Volunteer team wrap-up.",
      },
    ],
  },
  {
    date: "Mon 11.09",
    label: "Mon",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Divine Liturgy",
        description: "Join us for the Divine Liturgy.",
      },
      {
        time: "12.00AM–12PM",
        name: "Youth Meeting",
        description: "Discussion and Q&A.",
      },
    ],
  },
  {
    date: "Tue 12.09",
    label: "Tue",
    events: [
      {
        time: "12.00AM–12PM",
        name: "Choir Practice",
        description: "Weekly hymn rehearsal.",
      },
    ],
  },
  {
    date: "Wed 13.09",
    label: "Wed",
    events: [
      {
        time: "12.00AM–12PM",
        name: "Bible Study",
        description: "Scripture reading and reflection.",
      },
    ],
  },
  {
    date: "Thu 14.09",
    label: "Thu",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Seniors Fellowship",
        description: "Lunch & talk for elders.",
      },
      {
        time: "10.30AM–12PM",
        name: "Teen Workshop",
        description: "Building healthy habits.",
      },
    ],
  },
  {
    date: "Fri 15.09",
    label: "Fri",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Akathist Hymns",
        description: "Evening praises in English.",
      },
    ],
  },
  {
    date: "Sat 16.09",
    label: "Sat",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Kids Camp",
        description: "Outdoor activities and prayer.",
      },
      {
        time: "10.30AM–12PM",
        name: "Young Adults",
        description: "Talk: Faith in Uni Life.",
      },
    ],
  },
];

const DayColumn = ({ day, index }: { day: WeekData; index: number }) => {
  const columnRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: columnRef,
    offset: ["start end", "center center"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <motion.div
      ref={columnRef}
      style={{
        opacity,
        scale,
        x,
        transformOrigin: "left center",
      }}
      className="flex flex-col gap-4"
    >
      {/* Day Header */}
      <div className="text-center text-white">
        <h4
          className={`${raleway.className} font-semibold text-[18px] leading-[120%]`}
        >
          {day.date}
        </h4>
      </div>

      {/* Events Column */}
      <div className="flex flex-col gap-4">
        {day.events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            className="bg-[#570901] rounded-[10px] px-4 py-3 w-full"
          >
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const WeekView = () => {
  return (
    <div className="pt-4 pb-4 w-full">
      <div className="grid grid-cols-7 gap-6 w-full">
        {mockWeekData.map((day, index) => (
          <DayColumn key={index} day={day} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WeekView;
