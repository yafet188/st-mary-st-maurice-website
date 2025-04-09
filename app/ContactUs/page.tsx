// app/pages/ContactUs.tsx
import React from "react";
import Image from "next/image";
import Hero from "../components/Hero";
import { Urbanist, Outfit, Raleway } from "next/font/google";
import HeroBackground from "../../public/Images/ContactUs/HeroBackground.jpg";

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
  {
    /* ------------------------------------CONTACT US SECTION ------------------------------------- */
  }
  return (
    <div className="min-h-screen">
      <Hero
        image={HeroBackground}
        altText="St.Mary's roof"
        title="CONTACT US"
        textPosition="Left"
      >
        We warmly welcome your questions, feedback, and any inquiries about our
        events, scheduling confessions or retreats and more.
      </Hero>

      {/* Connect With Our Fathers Section */}
      <div className="w-full py-[80px] bg-[#E8E9EB]">
        <h2
          className={`${outfit.className} text-center text-[28px] md:text-[36px] font-bold uppercase tracking-[0.02em] leading-tight text-black mb-20`}
        >
          CONNECT WITH OUR FATHERS
        </h2>

        {/* Fathers Images */}
        <div className="relative flex justify-center items-center">
          {/* Cross image */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-30 px-6">
            {fathers.map((father) => (
              <div
                key={father.name}
                className="w-full max-w-[300px] flex flex-col items-center relative"
              >
                {/* Cross behind */}
                <div className="absolute top-[-20px]">
                  <Image
                    src="/Images/ContactUs/Cross.png"
                    alt="Cross"
                    width={243}
                    height={241}
                    className="object-contain"
                  />
                </div>

                {/* Image */}
                <div className="relative w-[180px] h-[200px] z-10 rounded-full overflow-hidden">
                  <Image
                    src={father.image}
                    alt={father.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <p
                  className={`${outfit.className} font-bold text-[18px] md:text-[20px] text-center text-[#0D111D] mt-7 w-[500px]`}
                >
                  {father.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            className={`${outfit.className} w-[180px] h-[45px] bg-[#7A0C02] text-white font-semibold text-sm leading-[120%] tracking-[0.02em] rounded-[8px] flex items-center justify-center transition duration-300 ease-out hover:bg-red-800`}
          >
            BOOK A CONFESSION
          </button>
        </div>
      </div>

      {/* Connect With Our Fathers Form*/}
      <div className="w-full h-[1006px] bg-[#B7B9C0] py-[100px] md:flex-row flex justify-center">
        {/* Outer Container for Text & Form */}
        <div className="w-full max-w-[1285px] flex gap-[32px] md:gap-[32px] items-center justify-between px-6 md:px-12">
          {/* Left Side - Text Container */}
          <div className="w-full md:w-1/2 flex flex-col gap-[32px]">
            {/* Placeholder for heading and description */}
            <h3
              className={`${urbanist.className} text-[32px] md:text-[52px] font-bold text-[#171E34] leading-[120%] tracking-tight`}
            >
              Connect With Our Fathers
            </h3>

            <p
              className={`${urbanist.className} text-[16px] md:text-[18px] text-[#454B5D] font-semibold leading-[150%] tracking-[0.02rem]`}
            >
              Please use this form to schedule a confession, request a prayer,
              or submit inquiries.
            </p>
          </div>

          {/* Right Side - Form Container */}
          <div className="w-full md:w-1/2 bg-[#0A0D16] text-white p-[32px] md:p-8 rounded-[24px] border border-[#151B2F] shadow-lg">
            {/* Form Placeholder */}
            <div className="w-full max-h-[675px] flex flex-col gap-[24px]">
              {/* Name Section */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  NAME
                </label>

                <input
                  type="text"
                  placeholder="First & Last Name"
                  className={`${raleway.className} w-full h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                />
              </div>

              {/* Email Address Section} */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  EMAIL ADDRESS
                </label>

                <input
                  type="text"
                  placeholder="email@provider.com"
                  className={`${raleway.className} w-full h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                />
              </div>

              {/* Select A Father Section */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  SELECT A FATHER
                </label>

                <input
                  type="text"
                  placeholder="Select Father"
                  className={`${raleway.className} w-full h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                />
              </div>

              {/* Subject Section */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  SUBJECT
                </label>

                <input
                  type="text"
                  placeholder="ex. Confession"
                  className={`${raleway.className} w-full h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                />
              </div>

              {/* Message Section */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  MESSAGE
                </label>

                <textarea
                  placeholder="What is your inquiry..."
                  className={`${raleway.className} w-full h-[120px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                />
              </div>

              {/*Submit Button*/}
              <div className="flex flex-col gap-[48px]">
                <button
                  type="submit"
                  className={`${outfit.className} w-full h-[48px] rounded-[8px] px-[12px] py-[16px] gap-[6px] text-[14px] leading-[150%] tracking-[0.02em] bg-[#E0AE54] text-white`}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Sacred Spaces Section*/}
      <div className="w-full bg-[#171E34] py-20 px-6 md:px-12 flex flex-col gap-20 items-center">
        {/* Our Sacred Spaces Text and Button */}
        <div className="w-full max-w-[1312px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            className={`${outfit.className} text-[28px] md:text-[39px] font-bold text-white`}
          >
            OUR SACRED SPACES
          </p>

          <button
            type="submit"
            className={`${outfit.className} w-full md:w-auto h-[45px] rounded-[8px] border-[1.5px] px-6 py-3 border-[#E0AE54] text-[#E0AE54] flex items-center justify-center text-sm font-semibold`}
          >
            DISCOVER UPCOMING EVENTS
          </button>
        </div>

        {/* Google Maps API */}
        <div className="w-full max-w-[1312px] flex flex-col lg:flex-row gap-12 justify-center">
          {/* St. Mary St. Maurice API */}
          <div className="w-full lg:w-1/2 flex flex-col rounded-[24px] border border-[#454B5D] overflow-hidden">
            {/* Google Maps Image */}
            <div className="w-full h-[679.7px] bg-amber-900 rounded-tl-[24px] rounded-tr-[24px] " />
            {/* Location Card */}
            <div className="w-full h-[166px] p-[24px] gap-[24px] bg-[#171E34] flex flex-col">
              {/* St. Mary and St. Maurice's Church */}
              <div className="w-[500px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-white`}
                >
                  ST. MARY AND ST. MAURICES CHURCH
                </p>
              </div>

              {/* Location & Telephone*/}
              <div className="w-[568px] h-[70px] gap-[16px] flex flex-col">
                {/* Location */}
                <div className="w-[550px] h-[27px] gap-[14px] flex flex-row">
                  <Image
                    src="/Images/Icons/Location.png"
                    alt="Location"
                    width={16.28}
                    height={20.9}
                    className="mt-1"
                  />
                  <p
                    className={`${urbanist.className} font-[400] text-[18px] leading-[150%] tracking-[0.02em] text-[#E8E9EB]`}
                  >
                    388 Ottawa St. South, Kitchener, Ontario, Canada N2M 3P4
                  </p>
                </div>

                {/* Phone */}
                <div className="w-[549px] h-[27px] gap-[12px] flex flex-row">
                  <Image
                    src="/Images/Icons/Phone.png"
                    alt="Phone"
                    width={19.22}
                    height={19.43}
                    className="mt-1"
                  />
                  <p
                    className={`${urbanist.className} font-[400] text-[18px] leading-[150%] tracking-[0.02em] text-[#E8E9EB]`}
                  >
                    +1 519 570 2199
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* St. Mary's Retreat Center and St. Cyril VI's Chapel */}
          <div className="w-full lg:w-1/2 flex flex-col rounded-[24px] border border-[#454B5D] overflow-hidden">
            {/* Google Maps Image */}
            <div className="w-full h-[679.7px] bg-fuchsia-950 rounded-tl-[24px] rounded-tr-[24px] " />
            {/* Location Card */}
            <div className="w-full h-[166px] p-[24px] gap-[24px] bg-[#171E34] flex flex-col">
              {/* ST. MARY'S RETREAT CENTER AND ST. CYRIL VI'S CHAPEL Text */}
              <div className="w-[600px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-white`}
                >
                  ST. MARYS RETREAT CENTER AND ST. CYRIL VIS CHAPEL
                </p>
              </div>

              {/* Location & Telephone*/}
              <div className="w-[568px] h-[70px] gap-[16px] flex flex-col">
                {/* Location */}
                <div className="w-[550px] h-[27px] gap-[14px] flex flex-row">
                  <Image
                    src="/Images/Icons/Location.png"
                    alt="Location"
                    width={16.28}
                    height={20.9}
                    className="mt-1"
                  />
                  <p
                    className={`${urbanist.className} font-[400] text-[18px] leading-[150%] tracking-[0.02em] text-[#E8E9EB]`}
                  >
                    1708 Cheese Factory Rd, Branchton, ON N0B 1L0
                  </p>
                </div>

                {/* Phone */}
                <div className="w-[549px] h-[27px] gap-[12px] flex flex-row">
                  <Image
                    src="/Images/Icons/Phone.png"
                    alt="Phone"
                    width={19.22}
                    height={19.43}
                    className="mt-1"
                  />
                  <p
                    className={`${urbanist.className} font-[400] text-[18px] leading-[150%] tracking-[0.02em] text-[#E8E9EB]`}
                  >
                    +44 16 8765 1098
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
