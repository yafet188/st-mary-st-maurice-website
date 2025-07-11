"use client";

import DayView from "./DayView";
import WeekView from "./WeekView";
import MonthView from "./MonthView";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });

interface Props {
  calendarView: "day" | "week" | "month";
  setCalendarView: React.Dispatch<
    React.SetStateAction<"day" | "week" | "month">
  >;
}

const CalendarViewSwitcher = ({ calendarView, setCalendarView }: Props) => {
  return (
    <div className="space-y-8 pt-4">
      <div className="flex justify-center gap-4">
        {["day", "week", "month"].map((view) => (
          <button
            key={view}
            onClick={() => setCalendarView(view as "day" | "week" | "month")}
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
          </button>
        ))}
      </div>

      {calendarView === "day" && <DayView />}
      {calendarView === "week" && <WeekView />}
      {calendarView === "month" && <MonthView />}
    </div>
  );
};

export default CalendarViewSwitcher;
