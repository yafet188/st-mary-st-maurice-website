"use client";

import { useState, useEffect } from "react";
import CalendarViewSwitcher from "./CalendarViewSwitcher";

interface Props {
  onViewChange?: (view: "day" | "week" | "month") => void;
}

export default function CalendarViewSwitcherWrapper({ onViewChange }: Props) {
  const [calendarView, setCalendarView] = useState<"day" | "week" | "month">(
    "day"
  );

  useEffect(() => {
    if (onViewChange) {
      onViewChange(calendarView);
    }
  }, [calendarView, onViewChange]);

  return (
    <div className="min-h-fit">
      <CalendarViewSwitcher
        calendarView={calendarView}
        setCalendarView={setCalendarView}
      />
    </div>
  );
}
