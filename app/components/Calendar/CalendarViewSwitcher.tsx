"use client";

import DayView from "./DayView";
import WeekView from "./WeekView";
import MonthView from "./MonthView";
import { Outfit } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });

interface Props {
  calendarView: "day" | "week" | "month";
  setCalendarView: React.Dispatch<
    React.SetStateAction<"day" | "week" | "month">
  >;
}

const CalendarViewSwitcher = ({ calendarView, setCalendarView }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleViewChange = async (view: "day" | "week" | "month") => {
    setIsLoading(true);
    setCalendarView(view);
    // Simulate loading time
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsLoading(false);
  };

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
    },
  };

  return (
    <div className={`space-y-8 pt-4 ${
      calendarView === "day" ? "pb-4" : 
      calendarView === "week" ? "pb-8" : 
      "pb-12"
    }`}>
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

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center py-20"
          >
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-16 h-16 border-4 border-[#E0AE54] border-t-transparent rounded-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key={calendarView}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            {calendarView === "day" && <DayView />}
            {calendarView === "week" && <WeekView />}
            {calendarView === "month" && <MonthView />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CalendarViewSwitcher;
