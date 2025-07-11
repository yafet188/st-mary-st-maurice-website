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
      <div className="w-full relative overflow-hidden pt-50">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/ContactUs/HeaderBackground.jpg"
            alt="St.Mary's roof"
            fill
            priority
            className="object-cover object-[center_29%]"
          />
        </div>
        <div className="relative z-10 w-full max-w-[1512px] mx-auto min-h-[300px] px-6 md:px-12 xl:px-[100px] flex items-start pt-5">
          {/* Text component */}
          <div className="w-full md:w-[606px] flex flex-col gap-5">
            <h1
              className={`${outfit.className} text-[40px] md:text-[64px] leading-[120%] font-[700] text-black`}
            >
              CONTACT US
            </h1>
            <p
              className={`${urbanist.className} text-[16px] md:text-[18px] text-[#0D11D] leading-[150%]`}
            >
              We warmly welcome your questions, feedback, and any inquiries
              about our events, scheduling confessions or retreats and more.
            </p>
          </div>
        </div>
      </div>

      {/* Connect With Our Fathers Section */}
      <div className="w-full py-20 bg-[#E8E9EB]">
        <h2
          className={`${outfit.className} text-center text-[28px] md:text-[36px] font-bold uppercase tracking-[0.02em] leading-tight text-black mb-20`}
        >
          CONNECT WITH OUR FATHERS
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 px-6">
          {fathers.map((father) => (
            <div
              key={father.name}
              className="w-[90%] max-w-[300px] flex flex-col items-center relative"
            >
              <div className="absolute top-[-20px]">
                <Image
                  src="/Images/ContactUs/Cross.png"
                  alt="Cross"
                  width={243}
                  height={241}
                  className="object-contain"
                />
              </div>
              <div className="relative w-[180px] h-[200px] z-10 rounded-full overflow-hidden">
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
            className={`${outfit.className} w-[180px] h-[45px] bg-[#7A0C02] text-white font-semibold text-sm leading-[120%] tracking-[0.02em] rounded-[8px] flex items-center justify-center transition duration-300 ease-out hover:bg-red-800`}
          >
            BOOK A CONFESSION
          </button>
        </div>
      </div>

      {/* Connect With Our Fathers Form*/}
      <div className="w-full bg-[#B7B9C0] py-[100px] px-6 md:px-12 flex justify-center">
        {/* Outer Container for Text & Form */}
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Side - Text Container */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6 h-full">
            {/* Heading and description */}
            <h3
              className={`${urbanist.className} text-[32px] md:text-[52px] font-[700] leading-[120%] tracking-[-0.02em] text-[#171E34]`}
            >
              Connect With Our Fathers
            </h3>
            <p
              className={`${urbanist.className} text-[16px] md:text-[18px] font-[700] leading-[150%] tracking-[0.02rem] text-[#454B5D]`}
            >
              Please use this form to schedule a confession, request a prayer,
              or submit inquiries.
            </p>
          </div>

          {/* Right Side - Form Container */}
          <div className="flex-1 bg-[#0A0D16] text-white p-6 md:p-8 gap-12 rounded-[24px] border border-[#151B2F] shadow-lg">
            {/* Form Placeholder */}
            <form className="w-full flex flex-col gap-[24px]">
              {/* Input Fields */}
              {[
                { label: "NAME", placeholder: "First & Last Name" },
                { label: "EMAIL ADDRESS", placeholder: "email@provider.com" },
                { label: "SELECT A FATHER", placeholder: "Select Father" },
                { label: "SUBJECT", placeholder: "ex. Confession" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-[8px]">
                  <label
                    className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                  >
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className={`${raleway.className} h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                  />
                </div>
              ))}

              {/* Message Section */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  MESSAGE
                </label>
                <textarea
                  placeholder="What is your inquiry..."
                  className={`${raleway.className} h-[120px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className={`${outfit.className} w-full h-[48px] rounded-[8px] px-[12px] py-[16px] text-[14px] font-semibold bg-[#E0AE54] text-white`}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
