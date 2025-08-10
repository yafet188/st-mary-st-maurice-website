// app/pages/ContactUs.tsx
import React from "react";
// import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "../components/Hero";

import { Urbanist, Outfit, Raleway } from "next/font/google";
import ConnectWithFathersForm from "../components/ConnectWithFathersForm";
import SacredSpacesSection from "../components/SacredSpacesSection";

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

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title={
          <span className={`${outfit.className} font-[700] text-black`}>
            CONTACT US
          </span>
        }
        titleSize="64px"
        subtitle={""}
        descriptionText={
          "We warmly welcome your questions, feedback, and any inquiries about our events,\nscheduling confessions or retreats and more."
        }
        descriptionColor="#0D11D"
        descriptionSize="18px"
        image={"/Images/ContactUs/HeaderBackground.jpg" as any}
        altText="St.Mary's roof"
        height="458.26px"
        textAlignment="left"
        contentAlignment="left"
        imagePlacement="30%"
      />

      {/* Connect With Our Fathers Section */}
      <div className="w-full py-20 bg-[#E8E9EB]">
        {/* Fade-in animation for heading */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 1.2s ease-out;
          }
          @keyframes popUp {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            55% {
              opacity: 1;
              transform: scale(1.18);
            }
            75% {
              transform: scale(0.97);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .pop-up {
            animation: popUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          @keyframes buttonPop {
            0% {
              opacity: 0;
              transform: scale(0.7);
            }
            60% {
              opacity: 1;
              transform: scale(1.08);
            }
            80% {
              transform: scale(0.96);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .button-pop {
            animation: buttonPop 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          @keyframes shine {
            0% {
              left: -60%;
              opacity: 0.3;
            }
            40% {
              opacity: 0.7;
            }
            60% {
              opacity: 1;
            }
            100% {
              left: 110%;
              opacity: 0.3;
            }
          }
          .shine-effect {
            position: relative;
            overflow: hidden;
          }
          .shine-effect::after {
            content: '';
            position: absolute;
            top: 0;
            left: -60%;
            width: 60%;
            height: 100%;
            background: linear-gradient(120deg, rgba(255,255,0,0) 0%, rgba(255,255,0,0.7) 50%, rgba(255,255,0,0) 100%);
            opacity: 0.4;
            pointer-events: none;
            animation: shine 2.5s ease-in-out 0.1s both;
          }
          .shine-effect:hover::after {
            animation: shine 1.5s ease-in-out 0s both;
          }
        `}</style>
        <h2
          className={`${outfit.className} fade-in text-center text-[28px] md:text-[36px] font-bold uppercase tracking-[0.02em] leading-tight text-black mb-20`}
        >
          CONNECT WITH OUR FATHERS
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 px-6">
          {fathers.map((father, idx) => (
            <div
              key={father.name}
              className="group w-[90%] max-w-[300px] flex flex-col items-center relative cursor-pointer"
            >
              {/* Cross background with pop-up animation and hover effect */}
              <div
                className="absolute top-[-20px] pop-up transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
                style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
              >
                <Image
                  src="/Images/ContactUs/Cross.png"
                  alt="Cross"
                  width={243}
                  height={241}
                  className="object-contain"
                />
              </div>
              {/* Priest image with pop-up animation and hover effect */}
              <div
                className="relative w-[180px] h-[200px] z-10 rounded-full overflow-hidden pop-up transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-xl"
                style={{ animationDelay: `${0.35 + idx * 0.15}s` }}
              >
                <Image
                  src={father.image}
                  alt={father.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p
                className={`${outfit.className} font-bold text-[18px] md:text-[20px] text-center text-[#0D111D] mt-7`}
              >
                {father.name}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button
            className={`${outfit.className} button-pop shine-effect w-[180px] h-[45px] bg-[#7A0C02] text-white font-semibold text-sm leading-[120%] tracking-[0.02em] rounded-[8px] flex items-center justify-center transition-all duration-300 ease-out hover:bg-red-800 hover:scale-105 hover:shadow-xl active:scale-95`}
          >
            BOOK A CONFESSION
          </button>
        </div>
      </div>

      {/* Connect With Our Fathers Form*/}
      <ConnectWithFathersForm />

      {/* Sacred Spaces Section */}
      <SacredSpacesSection />
    </div>
  );
};

export default ContactUs;
