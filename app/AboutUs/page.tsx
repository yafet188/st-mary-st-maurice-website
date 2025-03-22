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

const AboutUs = () => {
  {
    /* ------------------------------------ABOUT US SECTION ------------------------------------- */
  }
  return (
    <div className="min-h-screen bg-white ">
      {/* Header Section w/ Cross Image */}
      <div className="w-full h-[3205.74px] overflow-hidden items-center flex flex-row">
        <div className="relative inset-0 z-0 max-w-[1276px] h-[1276px]">
          <Image
            src="/Images/AboutUs/Circles.png"
            alt="Golden Cross"
            priority
            fill
            className="object-cover"
          />
        </div>

        {/* Our Story Component */}
        <div className="z-10 w-1/3 h-screen sticky top-0 flex flex-col justify-center items-center">
          {/* Our Story Text + Button */}
          <div className="w-[228px] h-[327px] pt-[46px] justify-between flex flex-col">
            {/* Our Story Text */}
            <div className="w-[228px] h-[160px]">
              <p
                className={`${outfit.className} font-[700] text-[64px] leading-[80px] tracking-[-0.02em] text-[#0D111D]`}
              >
                OUR STORY
              </p>
            </div>

            {/* Learn More Button */}
            <div>
              <button
                type="submit"
                className={`${outfit.className} w-[123px] h-[45px] font-[600] rounded-[8px] px-[16px] py-[16px] gap-[6px] text-[14px] leading-[150%] tracking-[0.02em] bg-[#E0AE54] text-white flex items-center`}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Story Text Components */}
        <div className="w-[1004px] h-[2841.74px] gap-[80px] flex flex-row justify-center">
          {/* First Row */}
          <div className="w-[462px] h-[2841.74px] gap[80px] flex flex-col justify-center items-start">
            {/* Our Beginnings Text */}
            <div className="w-[462px] h-[327px] gap-16px justify-center flex flex-col items-center">
              {/* Header */}
              <div className="w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Our Beginnnings: A Foundation of Faith
                </p>
              </div>

              {/* Body */}
              <div className="w-[462px] h-[192px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
