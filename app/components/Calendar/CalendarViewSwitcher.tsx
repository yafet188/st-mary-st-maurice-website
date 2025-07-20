"use client";

import DayView from "./DayView";
import WeekView from "./WeekView";
import MonthView from "./MonthView";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";

const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });

interface Props {
  calendarView: "day" | "week" | "month";
  setCalendarView: React.Dispatch<
    React.SetStateAction<"day" | "week" | "month">
  >;
}

const CalendarViewSwitcher = ({ calendarView, setCalendarView }: Props) => {
  const handleViewChange = (view: "day" | "week" | "month") => {
    setCalendarView(view);
  };

  return (
    <div className="space-y-8 pt-4">
      <div className="flex justify-center gap-4">
        {["day", "week", "month"].map((view) => (
          <motion.button
            key={view}
            onClick={() => handleViewChange(view as "day" | "week" | "month")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              outfit.className
            } font-[700] px-4 py-2 rounded-[8px] border border-white transition 
              ${
                calendarView === view
                  ? "bg-white text-[#570901]"
                  : "bg-[#570901] text-white"
              }`}
          >
            {view.toUpperCase()}
          </motion.button>
        ))}
      </div>

      <motion.div
        key={calendarView}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {calendarView === "day" && <DayView />}
        {calendarView === "week" && <WeekView />}
        {calendarView === "month" && <MonthView />}
      </motion.div>
    </div>
  );
};

export default CalendarViewSwitcher;
