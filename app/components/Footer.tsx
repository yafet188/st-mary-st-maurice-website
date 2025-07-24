"use client";
// Helper to get emoji flag from country code
function getFlagEmoji(countryCode: string) {
  if (!countryCode) return "";
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

import Link from "next/link";
import Image from "next/image";
import { Urbanist, Outfit } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

import Select, { components } from "react-select";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";
import { getCountryCallingCode } from "libphonenumber-js";

// Load fonts with correct weights
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  const [sweepDone, setSweepDone] = useState(false);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, margin: "-100px" });
  const shineRef = useRef<HTMLSpanElement>(null);
  return (
    <motion.footer
      ref={footerRef}
      initial={{ y: 200, opacity: 0, rotate: -6, scale: 0.8 }}
      animate={
        isInView
          ? { y: 0, opacity: 1, rotate: 0, scale: 1 }
          : { y: 200, opacity: 0, rotate: -6, scale: 0.8 }
      }
      transition={{ type: "spring", stiffness: 90, damping: 12, mass: 0.7 }}
      className="w-full bg-[#0c101f] text-white py-16 px-6 md:px-12"
    >
      {/* Main content container */}
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* Top section with logo, navigation, and form */}
        <div className="w-full flex flex-col lg:flex-row justify-between ">
          {/* Left section - Logo, address & contact */}
          <div className="w-full lg:max-w-[358px] flex flex-col gap-6">
            {/* Logo with hover effect */}
            <Link href="/Home">
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                animate={
                  isInView
                    ? { rotate: [0, 10, 0], scale: [1, 1.08, 1] }
                    : { rotate: 0, scale: 1 }
                }
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 1, ease: "easeInOut", type: "tween" }}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src="/Images/Logos/Logo.png"
                  alt="St. Mary and St. Maurice Coptic Orthodox Church"
                  width={192}
                  height={144}
                  priority
                />
              </motion.div>
            </Link>

            {/* Address with hover effect */}
            <motion.div
              className="flex items-start gap-3 group"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
            >
              <Image
                src="/Images/Icons/Location.png"
                alt="Location"
                width={16}
                height={20}
                className="mt-1"
              />
              <Link
                href="https://www.google.com/maps/dir/?api=1&destination=388+Ottawa+St+South,+Kitchener,+Ontario,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className={`${urbanist.className} text-lg leading-7 tracking-wide text-[#E8E9EB] group-hover:underline transition-colors`}
                style={{ transition: "color 0.3s" }}
              >
                <motion.p
                  className="text-blue"
                  whileHover={{ color: "#FFD700" }}
                  transition={{ duration: 0.3 }}
                >
                  388 Ottawa St. South
                </motion.p>
                <motion.p
                  className="text-blue"
                  whileHover={{ color: "#FFD700" }}
                  transition={{ duration: 0.3 }}
                >
                  Kitchener, Ontario, Canada
                </motion.p>
                <motion.p
                  className="text-blue"
                  whileHover={{ color: "#FFD700" }}
                  transition={{ duration: 0.3 }}
                >
                  N2M 3P4
                </motion.p>
              </Link>
            </motion.div>

            {/* Phone with hover effect */}
            <motion.div
              className="flex items-start gap-3 group"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 180, damping: 16 }}
            >
              <Image
                src="/Images/Icons/Phone.png"
                alt="Phone"
                width={18}
                height={18}
                className="mt-1"
              />
              <motion.a
                href="tel:+15195702199"
                className={`${urbanist.className} text-lg leading-7 tracking-wide text-[#E8E9EB] group-hover:underline transition-colors`}
                whileHover={{ color: "#FFD700" }}
                transition={{ duration: 0.3 }}
                style={{ transition: "color 0.3s" }}
              >
                +1 519 570 2199
              </motion.a>
            </motion.div>
          </div>

          {/* Right section - Navigation links & form */}
          <div className="w-full lg:max-w-[786px] flex flex-col gap-12">
            {/* Navigation links in three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
              {/* Column 1 - SMSM CHURCH */}
              <motion.div
                className="flex flex-col gap-4 origin-top"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { scaleY: 1, opacity: 1 }
                    : { scaleY: 0, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                  delay: 0.2,
                }}
              >
                <h6
                  className={`${outfit.className} hover:underline font-bold text-base tracking-wide`}
                >
                  SMSM CHURCH
                </h6>
                <nav className="flex flex-col gap-3">
                  <Link href="/Home" className="group">
                    <motion.p
                      className={`${outfit.className} text-sm font-medium leading-tight tracking-wide opacity-80 group-hover:opacity-100 group-hover:underline transition-all`}
                      whileHover={{
                        color: "#FFD700",
                        scale: 1.08,
                        textShadow: "0px 2px 16px #FFD70088",
                      }}
                      transition={{
                        duration: 0.32,
                        type: "spring",
                        stiffness: 220,
                      }}
                    >
                      HOME
                    </motion.p>
                  </Link>
                  <Link href="/AboutUs" className="group">
                    <motion.p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 group-hover:opacity-100 transition-all`}
                      whileHover={{
                        color: "#FFD700",
                        scale: 1.08,
                        textShadow: "0px 2px 16px #FFD70088",
                      }}
                      transition={{
                        duration: 0.32,
                        type: "spring",
                        stiffness: 220,
                      }}
                    >
                      ABOUT
                    </motion.p>
                  </Link>
                  <Link href="/Ministries" className="group">
                    <motion.p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 group-hover:opacity-100 transition-all`}
                      whileHover={{
                        color: "#FFD700",
                        scale: 1.08,
                        textShadow: "0px 2px 16px #FFD70088",
                      }}
                      transition={{
                        duration: 0.32,
                        type: "spring",
                        stiffness: 220,
                      }}
                    >
                      MINISTRIES
                    </motion.p>
                  </Link>
                  <Link href="/YouthKidsServices" className="group">
                    <motion.p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 group-hover:opacity-100 transition-all`}
                      whileHover={{
                        color: "#FFD700",
                        scale: 1.08,
                        textShadow: "0px 2px 16px #FFD70088",
                      }}
                      transition={{
                        duration: 0.32,
                        type: "spring",
                        stiffness: 220,
                      }}
                    >
                      SUNDAY SCHOOL
                    </motion.p>
                  </Link>
                </nav>
              </motion.div>

              {/* Column 2 - ENGAGEMENT & RESOURCES */}
              <motion.div
                className="flex flex-col gap-4 origin-top"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { scaleY: 1, opacity: 1 }
                    : { scaleY: 0, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                  delay: 0.45,
                }}
              >
                <h6
                  className={`${outfit.className} hover:underline font-bold text-base tracking-wide`}
                >
                  CONNECT & GIVE
                </h6>
                <nav className="flex flex-col gap-3">
                  <Link href="/schedule" className="group">
                    <motion.p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 group-hover:opacity-100 transition-all`}
                      whileHover={{
                        color: "#FFD700",
                        scale: 1.08,
                        textShadow: "0px 2px 16px #FFD70088",
                      }}
                      transition={{
                        duration: 0.32,
                        type: "spring",
                        stiffness: 220,
                      }}
                    >
                      DONATE
                    </motion.p>
                  </Link>
                  <Link href="/media" className="group">
                    <motion.p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 group-hover:opacity-100 transition-all`}
                      whileHover={{
                        color: "#FFD700",
                        scale: 1.08,
                        textShadow: "0px 2px 16px #FFD70088",
                      }}
                      transition={{
                        duration: 0.32,
                        type: "spring",
                        stiffness: 220,
                      }}
                    >
                      CONTACT US
                    </motion.p>
                  </Link>
                </nav>
              </motion.div>

              {/* Column 3 - CONNECT & GIVE */}
              <motion.div
                className="flex flex-col gap-4 origin-top"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { scaleY: 1, opacity: 1 }
                    : { scaleY: 0, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 14,
                  delay: 0.7,
                }}
              >
                <h6
                  className={`${outfit.className} hover:underline font-bold text-base tracking-wide`}
                >
                  RESOURCES
                </h6>
                <nav className="flex flex-col gap-3">
                  <Link href="/donation" className="group">
                    <motion.p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 group-hover:opacity-100 transition-all`}
                      whileHover={{
                        color: "#FFD700",
                        scale: 1.08,
                        textShadow: "0px 2px 16px #FFD70088",
                      }}
                      transition={{
                        duration: 0.32,
                        type: "spring",
                        stiffness: 220,
                      }}
                    >
                      ABOUNA A&apos;S RESOURCES
                    </motion.p>
                  </Link>
                  <Link href="/contact" className="group">
                    <motion.p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 group-hover:opacity-100 transition-all`}
                      whileHover={{
                        color: "#FFD700",
                        scale: 1.08,
                        textShadow: "0px 2px 16px #FFD70088",
                      }}
                      transition={{
                        duration: 0.32,
                        type: "spring",
                        stiffness: 220,
                      }}
                    >
                      SUNDAY SCHOOL WIKI
                    </motion.p>
                  </Link>
                </nav>
              </motion.div>
            </div>

            {/* Subscription form */}
            <motion.div
              className="p-6 rounded-[16px] border border-[#454B5D] bg-[#0A0D16]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }
              }
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 10,
                delay: 0.7,
              }}
            >
              <motion.h6
                className={`${outfit.className} font-bold text-base mb-5 tracking-wide`}
                initial={{ y: 40, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 12,
                  delay: 0.9,
                }}
              >
                STAY CONNECTED WITH OUR CHURCH FAMILY
              </motion.h6>

              <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-5 justify-between">
                {/* Email field for newsletter subscription */}
                <div className="flex flex-col gap-2">
                  <label
                    className={`${outfit.className} text-sm font-semibold`}
                  >
                    EMAIL
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Image
                        src="/Images/Icons/Email.png"
                        alt="Email"
                        width={18}
                        height={14}
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className={`${outfit.className} w-full h-14 pl-11 pr-4 py-3 bg-[#151B2F] rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 font-normal`}
                    />
                  </div>
                </div>

                {/* Phone field with custom country dropdown and phone input for international support */}
                <div className="flex flex-col gap-2">
                  <label
                    className={`${outfit.className} text-sm font-semibold`}
                  >
                    PHONE NUMBER
                  </label>
                  <div className="flex w-full">
                    <div className="w-56 min-w-[135px]">
                      {/* Country dropdown for selecting country code, uses react-select-country-list and ReactCountryFlag for internationalization */}
                      <Select
                        options={countryList().getData()}
                        defaultValue={countryList()
                          .getData()
                          .find((c: { value: string; label: string }) => c.value === "CA")}
                        classNamePrefix="country-select"
                        styles={{
                          control: (base) => ({
                            ...base,
                            backgroundColor: "#454B5D",
                            border: "none",
                            borderRadius: "1rem 0 0 1rem",
                            minHeight: "56px",
                            color: "#fff",
                            boxShadow: "none",
                          }),
                          singleValue: (base) => ({
                            ...base,
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }),
                          menu: (base) => ({
                            ...base,
                            backgroundColor: "#151B2F",
                            color: "#fff",
                            zIndex: 20,
                          }),
                          option: (base, state) => ({
                            ...base,
                            backgroundColor:
                              state.isSelected || state.isFocused
                                ? "#FFD700"
                                : "#151B2F",
                            color:
                              state.isSelected || state.isFocused
                                ? "#151B2F"
                                : "#fff",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }),
                          input: (base) => ({ ...base, color: "#fff" }),
                        }}
                        isSearchable={false}
                        formatOptionLabel={(option: { value: string; label: string }) => {
                          let code = "";
                          try {
                            code = getCountryCallingCode(option.value as import('libphonenumber-js').CountryCode);
                          } catch {
                            code = "";
                          }
                          return (
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100%",
                                gap: "0.5em",
                              }}
                            >
                              <ReactCountryFlag
                                countryCode={option.value}
                                svg
                                style={{ width: "2em", height: "2em" }}
                              />
                              {code && (
                                <span
                                  style={{ fontWeight: 600, color: "#FFD700" }}
                                >
                                  +{code}
                                </span>
                              )}
                            </span>
                          );
                        }}
                        components={{
                          SingleValue: (props) => {
                            const country = props.data;
                            let code = "";
                            try {
                              code = getCountryCallingCode(country.value as import('libphonenumber-js').CountryCode);
                            } catch {
                              code = "";
                            }
                            return (
                              <components.SingleValue {...props}>
                                <span
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5em",
                                  }}
                                >
                                  <ReactCountryFlag
                                    countryCode={country.value}
                                    svg
                                    style={{ width: "2em", height: "2em" }}
                                  />
                                  {code && (
                                    <span
                                      style={{
                                        fontWeight: 600,
                                        color: "#FFD700",
                                      }}
                                    >
                                      +{code}
                                    </span>
                                  )}
                                </span>
                              </components.SingleValue>
                            );
                          },
                        }}
                      />
                    </div>

                    <input
                      // Phone number input for user to enter their contact number
                      type="tel"
                      placeholder="000-000-0000"
                      className={`${outfit.className} w-full h-14 px-4 py-3 bg-[#151B2F] text-white rounded-r-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 font-normal border-none z-1`}
                    />
                  </div>
                </div>

                {/* Subscribe button to submit the form */}
                {/* Container for the subscribe button, aligns button to the bottom */}
                <div className="hover:underline flex items-end">
                  {/* Button to submit the subscription form */}
                  <button
                    type="submit"
                    className={`${outfit.className} h-14 px-3 py-4 bg-white text-black text-sm font-semibold rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-100 w-30`}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Copyright and developer credit section - bottom part of the footer */}
        <div className="mt-16 pt-6 border-t border-[#454B5D] flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className={`${outfit.className} text-[#9498A2] text-[14px] font-[400] mb-4 md:mb-0`}
          >
            © Copyright 2024 St.Mary and St.Maurice Coptic Orthodox Church - All
            rights reserved.
          </p>
          <motion.span
            ref={shineRef}
            className={`${outfit.className} text-[14px] font-[400] relative inline-block transition-colors`}
            style={{
              color: sweepDone ? "#9498A2" : "#fff",
              background: sweepDone
                ? "none"
                : "linear-gradient(90deg, #FFD700 60%, #fff 100%)",
              backgroundSize: sweepDone ? "0% 100%" : "0% 100%",
              backgroundPosition: sweepDone ? "100% 0" : "0 0",
              WebkitBackgroundClip: sweepDone ? "unset" : "text",
              WebkitTextFillColor: sweepDone ? "unset" : "transparent",
              transition: sweepDone
                ? "color 0.7s cubic-bezier(.4,0,.2,1), background 0.7s"
                : "background-size 4s cubic-bezier(.4,0,.2,1)",
            }}
            animate={
              isInView && !sweepDone
                ? { backgroundSize: "100% 100%" }
                : sweepDone
                ? {
                    color: "#9498A2",
                    background: "none",
                    backgroundSize: "0% 100%",
                  }
                : {}
            }
            onAnimationComplete={() =>
              setTimeout(() => setSweepDone(true), 4000)
            }
            // No hover effect
          >
            Designed and Developed by Yafet Tegbaru
          </motion.span>
        </div>
      </div>
    </motion.footer>
  );
}
