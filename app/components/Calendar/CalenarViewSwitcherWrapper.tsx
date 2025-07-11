"use client";

import { useState } from "react";
import CalendarViewSwitcher from "./CalendarViewSwitcher";

export default function CalendarViewSwitcherWrapper() {
  const [calendarView, setCalendarView] = useState<"day" | "week" | "month">(
    "day"
  );

  return (
    <CalendarViewSwitcher
      calendarView={calendarView}
      setCalendarView={setCalendarView}
    />
  );
}
