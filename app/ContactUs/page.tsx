// app/pages/ContactUs.tsx
import React from "react";
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

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section with Background Image */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/ContactUs/HeaderBackground.jpg"
            alt="St.Mary's roof"
            fill
            priority
            className="object-cover object-[center_29%]"
          />
        </div>
        <div className="relative z-10 max-w-[1512px] mx-auto h-[458.26px] px-[100px] flex items-center">
          {/* Text component */}
          <div className="w-[606px]  flex flex-col gap-[20px]">
            <h1
              className={`${outfit.className} w-[606px] h-[80px] leading-[80px] tracking-[-0.02em] text-[64px] font-[700] text-black`}
            >
              CONTACT US
            </h1>
            <p
              className={`${urbanist.className} text-[18px] font-[400] leading-[150%] tracking-[0.02em] text-[#0D11D]`}
            >
              We warmly welcome your questions, feedback, and any inquiries
              about our events, scheduling confessions or retreats and more.
            </p>
          </div>
        </div>
      </div>

      {/* Connect With Our Fathers Section */}
      <div className="w-full h-[696px] py-[80px] bg-[#E8E9EB]">
        <h2
          className={`${outfit.className} text-center text-[36px] font-bold uppercase tracking-[0.02em] leading-[43.2px] text-black mb-[100px]`}
        >
          CONNECT WITH OUR FATHERS
        </h2>

        {/* Fathers Images */}
        <div className="relative flex justify-center items-center">
          {/* Cross image */}
          <div className="flex justify-center items-center space-x-[24px] relative z-10 gap-[108px]">
            {fathers.map((father) => (
              <div
                key={father.name}
                className="w-[291px] h-[248px] flex flex-col items-center relative"
              >
                {/* Cross image - Positioned behind */}
                <div className="absolute top-[-20px]">
                  <Image
                    src="/Images/ContactUs/Cross.png"
                    alt="Cross"
                    width={243.38}
                    height={241.26}
                    className="object-contain"
                  />
                </div>

                {/* Father's Image - Positioned on top */}
                <div className="relative w-[188.54px] h-[200px] z-10 rounded-full overflow-hidden">
                  <Image
                    src={father.image}
                    alt={father.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name Text */}
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] mt-[28px] text-center text-[#0D111D]`}
                >
                  {father.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[100px] flex justify-center">
          <button
            className={`${outfit.className} w-[180px] h-[45px] bg-[#7A0C02] text-white font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] 
                  flex items-center justify-center transition duration-300 ease-out hover:bg-red-800`}
          >
            BOOK A CONFESSION
          </button>
        </div>
      </div>

      {/* Connect With Our Fathers Form*/}
      <div className="w-full h-[1006px] bg-[#B7B9C0] py-[100px] flex justify-center">
        {/* Outer Container for Text & Form */}
        <div className="w-[1285.96px] h-[806px] pt-[32px] pb-[32px] gap-[32px] flex justify-between items-center">
          {/* Left Side - Text Container */}
          <div className="w-[626.98px] h-[148px] gap-[32px] flex flex-col">
            {/* Placeholder for heading and description */}
            <h3
              className={`${urbanist.className} w-[667px] h-[62px] font-[700] text-[52px] leading-[120%] tracking-[-0.02em] text-[#171E34] `}
            >
              Connect With Our Fathers
            </h3>

            <p
              className={`${urbanist.className} w-[447.61px] h-[54px] font-[700] text-[18px] leading-[150%] tracking-[0.02rem] text-[#454B5D] `}
            >
              Please use this form to schedule a confession, request a prayer,
              or submit inquiries.
            </p>
          </div>

          {/* Right Side - Form Container */}
          <div className="w-[626.98px] h-[760px] bg-[#0A0D16] text-white p-[32px] gap-[48px] rounded-[24px] border border-[#151B2F] shadow-lg">
            {/* Form Placeholder */}
            <div className="w-[562.98px] h-[585px] flex flex-col gap-[24px]">
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
                  className={`${raleway.className} w-[562.98px] h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
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
                  className={`${raleway.className} w-[562.98px] h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
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
                  className={`${raleway.className} w-[562.98px] h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
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
                  className={`${raleway.className} w-[562.98px] h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
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
                  className={`${raleway.className} w-[562.98px] h-[120px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] font-[400] text-[14px] leading-[120%] tracking-[0.02em] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                />
              </div>

              {/*Submit Button*/}
              <div className="flex flex-col gap-[48px]">
                <button
                  type="submit"
                  className={`${outfit.className} w-[562.98px] h-[48px] rounded-[8px] px-[12px] py-[16px] gap-[6px] text-[14px] leading-[150%] tracking-[0.02em] bg-[#E0AE54] text-white`}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We'll add other sections here later */}
    </div>
  );
};

export default ContactUs;

/*{`${outfit.className} w-[180px] h-[45px] bg-[#7A0C02] text-white font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] 
                  flex items-center justify-center transition duration-300 ease-out hover:bg-red-800`} */
