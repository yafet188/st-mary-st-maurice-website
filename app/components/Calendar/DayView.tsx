"use client";

import React from "react";
import { Outfit, Raleway } from "next/font/google";
import { motion } from "framer-motion";

interface Event {
  time: string;
  name: string;
  description: string;
}

const outfit = Outfit({ subsets: ["latin"], weight: ["600"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500"] });

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

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.5 + index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="w-full max-w-[1280px] h-[132px] px-6 py-4 rounded-[10px] mx-auto flex flex-col justify-between relative overflow-hidden
                 backdrop-blur-sm bg-gradient-to-br from-[#570901]/80 via-[#570901]/60 to-black/20
                 border border-white/10 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40
                 hover:bg-[#570901]/85 transition-all duration-200"
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background:
          "linear-gradient(135deg, rgba(87,9,1,0.8) 0%, rgba(87,9,1,0.6) 50%, rgba(0,0,0,0.3) 100%)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.2)",
      }}
    >
      <div className="flex flex-col relative z-10">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2 + index * 0.15,
          }}
          className={`${outfit.className} text-[14px] font-[600] uppercase text-[#F2E7E6] drop-shadow-sm`}
        >
          {event.time}
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.7 + index * 0.15,
          }}
          className={`${raleway.className} text-[16px] font-[500] text-white mt-1 drop-shadow-sm`}
        >
          {event.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8 + index * 0.15,
          }}
          className={`${raleway.className} text-[14px] font-[400] text-[#F2E7E6] mt-1 drop-shadow-sm`}
        >
          {event.description}
        </motion.p>
      </div>

      {/* Glass shine effect */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "100%", opacity: [0, 0.3, 0] }}
        transition={{
          duration: 1.5,
          delay: 1.0 + index * 0.15,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 skew-x-12"
      />
    </motion.div>
  );
};

const DayView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="flex flex-col gap-6 pt-8 pb-16"
    >
      {mockEvents.map((event, index) => (
        <EventCard key={index} event={event} index={index} />
      ))}
    </motion.div>
  );
};

export default DayView;
