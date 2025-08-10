"use client";

// AboutUs/page.tsx
// This file contains the About Us page for the St. Mary & St. Maurice Church website.
// It includes the church's history, images, and information about the fathers of the church.

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Urbanist, Outfit, Raleway } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fathers = [
  {
    name: "HEG. ATHANASIUS ISKANDER",
    image: "/Images/ContactUs/AbounaAthanasius.png",
  },
  {
    name: "FR. JEREMIAH ATTAALLA",
    image: "/Images/ContactUs/AbounaJeremiah.png",
  },
  {
    name: "FR. THEODORE RIZKALLA",
    image: "/Images/ContactUs/FatherTheodore.png",
  },
];

const AboutUs = () => {
  // State to control collapse/expand of each story column
  const [col1Expanded, setCol1Expanded] = useState(false);
  const [col2Expanded, setCol2Expanded] = useState(false);
  // State for auto scroll position
  const [scrollY, setScrollY] = useState(0);
  // Animation state for OUR STORY text and button
  const [storyTextVisible, setStoryTextVisible] = useState(false);
  const [storyBtnVisible, setStoryBtnVisible] = useState(false);
  // For bounce animation
  const [btnBounce, setBtnBounce] = useState(false);

  // Ref to control scrolling state
  const scrollingRef = React.useRef(true);
  // Ref for story section
  const storySectionRef = React.useRef<HTMLDivElement>(null);
  // Auto-scroll effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      const storyDiv = storySectionRef.current;
      if (scrollingRef.current && storyDiv) {
        storyDiv.scrollTop += 0.5; // even slower scroll
        if (
          storyDiv.scrollTop + storyDiv.clientHeight >=
          storyDiv.scrollHeight
        ) {
          storyDiv.scrollTop = 0;
        }
      }
    }, 50); // slower scroll
    return () => clearInterval(interval);
  }, []);

  // Staggered expand after page loads
  React.useEffect(() => {
    const timer1 = setTimeout(() => setCol1Expanded(true), 600);
    const timer2 = setTimeout(() => setCol2Expanded(true), 1600);
    const timer3 = setTimeout(() => setStoryTextVisible(true), 200);
    const timer4 = setTimeout(() => {
      setStoryBtnVisible(true);
      setBtnBounce(true);
    }, 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);
  {
    /* ------------------------------------ABOUT US SECTION ------------------------------------- */
  }
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden pt-[104.26px]">
      {/* Header Section w/ Cross Image */}
      <div className="absolute inset-0 z-5 max-w-[1276px] h-[1276px]">
        <Image
          src="/Images/AboutUs/CircleCross.png"
          alt="Golden Cross"
          fill
          className="object-cover"
        />
      </div>

      {/* 1st Section */}
      <div className="relative z-10 w-full flex flex-row items-start">
        {/* Our Story Component */}
        <div className="w-full md:w-1/3 md:sticky top-0 h-auto md:h-screen flex flex-col items-center pt-[100px] md:pt-[175px] z-20 px-6 md:px-0">
          <div className="w-[228px] h-[327px] flex flex-col justify-between">
            {/* OUR STORY */}
            <div className="w-[228px] h-[160px]">
              <p
                className={`${
                  outfit.className
                } font-[700] text-[64px] leading-[80px] tracking-[-0.02em] text-[#0D111D] mt-8 transition-all duration-1000 ease-out transform ${
                  storyTextVisible
                    ? "opacity-100 scale-100 translate-y-0 drop-shadow-2xl"
                    : "opacity-0 scale-150 -translate-y-10"
                } drop-shadow-lg`}
              >
                OUR STORY
              </p>
            </div>

            {/* Button */}
            <div>
              <motion.button
                type="submit"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={
                  storyBtnVisible
                    ? { opacity: 1, rotateY: 0 }
                    : { opacity: 0, rotateY: 90 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                whileHover={{
                  scale: 1.1,
                  boxShadow:
                    "0 8px 30px rgba(224, 174, 84, 0.4), 0 4px 15px rgba(224, 174, 84, 0.3)",
                  backgroundColor: "#d4a049",
                  transition: { duration: 0.3, type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.98 }}
                className={`${outfit.className} w-[123px] h-[45px] font-[600] rounded-[8px] px-[16px] py-[16px] gap-[6px] text-[14px] leading-[150%] tracking-[0.02em] bg-[#E0AE54] text-white flex items-center relative z-10 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex-shrink-0 whitespace-nowrap ml-6`}
                style={{ perspective: 600 }}
              >
                <span className="relative z-10">LEARN MORE</span>
                {/* Button Shine Effect */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={
                    storyBtnVisible
                      ? { x: "100%", opacity: [0, 1, 0] }
                      : { x: "-100%", opacity: 0 }
                  }
                  transition={{ duration: 2, delay: 1.2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 skew-x-12"
                />
                {/* Hover shine effect */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{
                    x: "100%",
                    opacity: [0, 0.3, 0],
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 skew-x-12"
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Story Text Components */}
        <div
          className="w-full md:w-2/3 h-auto md:h-screen overflow-y-auto flex flex-col md:flex-row gap-[40px] md:gap-[80px] px-6 md:pr-[60px] pt-[60px]"
          ref={storySectionRef}
          onMouseEnter={() => (scrollingRef.current = false)}
          onMouseLeave={() => (scrollingRef.current = true)}
        >
          {/* First Row */}
          <div
            className={`w-full max-w-[462px] flex flex-col gap-[80px] mx-auto transition-all duration-[2000ms] ease-in-out overflow-hidden ${
              col1Expanded ? "h-[2841px]" : "h-0"
            }`}
          >
            {/* Our Beginnings Text */}
            <div className="w-full max-w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Our Beginnings Header */}
              <div className="w-full max-w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Our Beginnings: A Foundation of Faith
                </p>
              </div>

              {/* Our Beginnings Body */}
              <div className="w-full max-w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  In the late 1970s, Father Athanasius, alongside Father Mittias
                  El Souriany (later His Grace Bishop Reweis), began serving the
                  faithful in Kitchener, marking the nascent stages of our
                  church's journey. By 1980, as a deacon and secretary, Father
                  Athanasius laid the groundwork for our first church building
                  in Cambridge, acquired through faith-filled perseverance and a
                  bank loan, ready by Christmas Eve 1981.
                </p>
              </div>
            </div>

            {/* Old Church Image */}
            <div>
              <Image
                src="/Images/AboutUs/OldChurchImage.png"
                alt="Old Church Image"
                width={462}
                height={327}
                className="object-cover object-bottom rounded-[16px] w-full max-w-[462px] h-[327px]"
              />
            </div>

            {/* Renewing Sanctuary Text */}
            <div className="w-full max-w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Renewing Sanctuary Header */}
              <div className="w-full max-w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Renewing Sanctuary: The First Renovation
                </p>
              </div>

              {/* Renewing Sanctuary Body */}
              <div className="w-full max-w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  Our new building underwent extensive renovations to align with
                  Orthodox traditions, including reorientation towards the East
                  and the addition of a sanctuary, enhancing the spiritual
                  ambiance. This transformation, completed in the summer of
                  1996, was inaugurated by His Grace Bishop Reweis, using the
                  same shovel that broke ground for another church twelve years
                  prior, symbolizing continuity and growth.
                </p>
              </div>
            </div>

            {/* Pope Shenouda Image */}
            <div>
              <Image
                src="/Images/AboutUs/PopeShenouda.png"
                alt="Pope Shenouda"
                width={462}
                height={327}
                className="object-cover object-top rounded-[16px] w-full max-w-[462px] h-[327px]"
              />
            </div>

            {/* Evolving With Grace Text */}
            <div className="w-full max-w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Evolving With Grace Header */}
              <div className="w-full max-w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Evolving with Grace: The Second Renovation
                </p>
              </div>

              {/* Evolving With Grace Body */}
              <div className="w-full max-w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  As our community continued to flourish, the need for space
                  became evident again. In 2001, we embarked on another
                  expansion, enhancing our church to include additional Sunday
                  School rooms and accessibility features, ensuring our
                  facilities could welcome everyone, embodying Christ's
                  inclusive love.
                </p>
              </div>
            </div>

            {/* St Mary's Martyrs Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryMartyrs.jpg"
                alt="StMaryMartyrs"
                width={462}
                height={327}
                className="object-cover object-[0_22%] rounded-[16px] w-full max-w-[462px] h-[327px]"
              />
            </div>

            {/* Church Retreat Text */}
            <div className="w-full max-w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Church Retreat Header */}
              <div className="w-full max-w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  The Church Retreat Initiative
                </p>
              </div>

              {/* Church Retreat Body */}
              <div className="w-full max-w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  Embracing a broader mission, in 2005, our church acquired a
                  scenic 90-acre parcel in Cambridge, envisaged as a spiritual
                  retreat for our congregation and sister churches. This
                  ambitious project underlines our commitment to serving not
                  just our local community but the broader Coptic Orthodox
                  community in Southwestern Ontario.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div
            className={`w-full max-w-[462px] flex flex-col gap-[80px] mx-auto transition-all duration-[2000ms] ease-in-out overflow-hidden ${
              col2Expanded ? "h-[2841px]" : "h-0"
            }`}
          >
            {/* Old Church Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryFront.jpg"
                alt="St Mary Front"
                width={462}
                height={327}
                className="object-cover object-center rounded-[16px] w-full max-w-[462px] h-[327px]"
              />
            </div>

            {/* Journey of Expansion Text */}
            <div className="w-full max-w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Journey of Expansion  Header */}
              <div className="w-full max-w-[462px] h-[55px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Journey of Expansion: From Cambridge to Kitchener
                </p>
              </div>

              {/* Journey of Expansion Body */}
              <div className="w-full max-w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  Returning as a priest in 1989, Father Athanasius witnessed the
                  burgeoning of our small congregation into a vibrant community,
                  necessitating a move in 1994 to a larger church in Kitchener
                  to accommodate our growing family. This move heralded a new
                  chapter, with the first Liturgy celebrated in our new home on
                  June 12, 1994, and the hosting of the Coptic Youth East Canada
                  Convention, cementing our church's role in the spiritual life
                  of Eastern Canada's youth.
                </p>
              </div>
            </div>

            {/* Pope Shenouda Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryDarkOutside.jpg"
                alt="St Mary Dark Outside"
                width={462}
                height={327}
                className="object-cover object-center rounded-[16px] w-full max-w-[462px] h-[327px]"
              />
            </div>

            {/* Pope Shenouda Text */}
            <div className="w-full max-w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Pope Shenouda Header */}
              <div className="w-full max-w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Blessing from His Holiness, Pope Shenouda III
                </p>
              </div>

              {/* Pope Shenouda Body */}
              <div className="w-full max-w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  The pinnacle of our early years was the consecration of our
                  church by His Holiness Pope Shenouda in November 1996. This
                  moment marked our church not just as a building but as a
                  consecrated home for our faith, solidified by the imprint of
                  His Holiness' image on our cornerstone.
                </p>
              </div>
            </div>

            {/* St Mary's Martyrs Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryOutsideForecast.jpg"
                alt="St Mary Outside Forecast"
                width={462}
                height={327}
                className="object-cover object-center rounded-[16px] w-full max-w-[462px] h-[327px]"
              />
            </div>

            {/* Boundaries Text */}
            <div className="w-full max-w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Boundaries Header */}
              <div className="w-full max-w-[462px] h-[55px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Extending Our Boundaries: Acquiring Adjacent Properties
                </p>
              </div>

              {/* Boundaries Body */}
              <div className="w-full max-w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  Our church's footprint grew with the acquisition of
                  neighbouring properties in 2002 and 2003, providing space for
                  future development and the potential for a chapel dedicated to
                  Saint Maurice, reflecting our deepening roots in the community
                  and our forward-looking vision.
                </p>
              </div>
            </div>

            {/* St Mary's Martyrs Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryChoir.jpg"
                alt="St Mary Choir"
                width={462}
                height={327}
                className="object-cover object-center rounded-[16px] w-full max-w-[462px] h-[327px]"
              />
            </div>
          </div>

          {/* Gradient Fade */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-white z-30 pointer-events-none" />
        </div>
      </div>

      {/* 2nd Section */}
      <div className="w-full min-h-[900px] py-20 px-6 md:px-[100px] gap-16 bg-[#FEFAF1] flex flex-col z-10">
        {/* Cross Image */}
        <style>{`
          @keyframes crossFadePop {
            0% { opacity: 0; transform: scale(0.4) translateY(-40px); }
            60% { opacity: 1; transform: scale(1.25) translateY(0); }
            80% { transform: scale(0.92) translateY(0); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          .cross-fade-pop {
            animation: crossFadePop 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
        `}</style>
        <div className="flex justify-center items-center">
          <Image
            src="/Images/AboutUs/GoldCross.png"
            alt="Gold Cross"
            width={92}
            height={92}
            className="cross-fade-pop"
          />
        </div>

        {/* Guiding Lights Text */}
        <div className="w-full flex flex-col items-center text-center gap-[16px] z-10">
          {/* Header */}
          <div className="w-[898px] h-[43px]">
            <style>{`
              @keyframes fadeInText {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .fade-in-text {
                animation: fadeInText 1.2s ease-out;
              }
            `}</style>
            <h3
              className={`${outfit.className} fade-in-text font-[700] text-[36px] leading-[120%] tracking[0.02em] text-[#695532]`}
            >
              Guiding Lights: The Fathers of SMSM Church
            </h3>
          </div>

          {/* Body */}
          <style>{`
            @keyframes fadeInBody {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .fade-in-body {
              animation: fadeInBody 1.3s 0.3s ease-out both;
            }
          `}</style>
          <div className="w-[676px] h-[81px]">
            <p
              className={`${urbanist.className} fade-in-body font-[400] text-[18px] leading-[150%] tracking-[0.02em] text-[#896F41]`}
            >
              The spiritual lineage of SMSM Church is adorned with Fathers whose
              dedication and guidance have illuminated our path. With a
              commitment that transcends time, these shepherds have nurtured the
              faith, unity, and growth of our community.
            </p>
          </div>
        </div>

        {/* Fathers Images */}
        <div className="relative flex justify-center items-center">
          {/* Cross image */}
          <style>{`
            @keyframes popUp {
              0% { opacity: 0; transform: scale(0.5); }
              60% { opacity: 1; transform: scale(1.25); }
              80% { transform: scale(0.92); }
              100% { opacity: 1; transform: scale(1); }
            }
            .pop-up {
              animation: popUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
            }
          `}</style>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {fathers.map((father, idx) => (
              <div
                key={father.name}
                className="group w-[291px] flex flex-col items-center relative cursor-pointer"
              >
                {/* Cross image - Positioned behind with pop-up and hover */}
                <div
                  className="absolute top-[-45px] pop-up transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
                  style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
                >
                  <Image
                    src="/Images/AboutUs/BigCircle.png"
                    alt="Cross"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>

                {/* Father's Image - Positioned on top with pop-up and hover */}
                <div
                  className="relative w-[188.54px] h-[200px] z-10 rounded-full overflow-hidden pop-up transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-xl"
                  style={{ animationDelay: `${0.35 + idx * 0.15}s` }}
                >
                  <Image
                    src={father.image}
                    alt={father.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name Text */}
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] mt-[50px] text-center text-[#896F41]`}
                >
                  {father.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Get In Touch Button */}
        <style>{`
          @keyframes buttonPop {
            0% { opacity: 0; transform: scale(0.7); }
            60% { opacity: 1; transform: scale(1.08); }
            80% { transform: scale(0.96); }
            100% { opacity: 1; transform: scale(1); }
          }
          .button-pop {
            animation: buttonPop 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
        `}</style>
        <div className="flex justify-center items-center">
          <style>{`
            @keyframes shine {
              0% { left: -75%; opacity: 0; }
              10% { opacity: 0.2; }
              50% { left: 110%; opacity: 0.6; }
              100% { left: 110%; opacity: 0; }
            }
            .shine-on-appear::before {
              content: '';
              position: absolute;
              top: 0;
              left: -75%;
              width: 60%;
              height: 100%;
              background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%);
              opacity: 0;
              pointer-events: none;
              z-index: 2;
              animation: shine 4s 0.7s cubic-bezier(0.4,0,0.2,1) 1 both;
            }
            .shine-on-appear:hover::before {
              animation: shine 2.7s cubic-bezier(0.4,0,0.2,1) 1 both;
            }
          `}</style>
          <button
            type="submit"
            className={`${outfit.className} button-pop shine-on-appear w-full md:w-[133px] h-[45px] font-[600] rounded-[8px] px-[16px] py-[16px] gap-[6px] text-[14px] leading-[150%] tracking-[0.02em] bg-[#7A0C02] text-white flex items-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl active:scale-95 relative overflow-hidden`}
          >
            <span className="relative z-10">GET IN TOUCH</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
