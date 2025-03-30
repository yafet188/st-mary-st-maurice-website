import React from "react";
import Image from "next/image";
import {
  Urbanist,
  Outfit,
  Raleway,
  Zilla_Slab,
  Zilla_Slab,
} from "next/font/google";

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
const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Home = () => {
  {
    /* ------------------------------------HOME PAGE------------------------------------- */
  }

  return (
    <>
      <div className="w-full h-[650px] bg-[#171E34] pt-[100px] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/StMaryChurchBackground.png"
            alt="Home Church"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* 1st Header Section */}
        <div className="w-[1512px] h-[548px] mx-auto relative z-10 px-[100px] flex justify-center items-center gap-[24px]">
          {/* Text Components Frame*/}
          <div className="w-[1124px] h-[411px] gap-[26px] flex flex-col items-center justify-center">
            {/* Text Components */}
            <div className="flex flex-col items-center">
              {/* Living Orthodoxy */}
              <div className="w-[267px] h-[41px] rounded-[25px] py-[6px] px-[14px] gap-[8px] bg-[#FDEFD5]">
                <p
                  className={`${zillaSlab.className} w-[239px] h-[29px] font-[600] text-[24px] leading-[120%] tracking-[0.02em] text-[#896F41]`}
                >
                  LIVING ORTHODOXY
                </p>
              </div>

              {/* Faith, Family, Fellowship */}
              <div className="w-full h-[80px]">
                <h3
                  className={`${outfit.className} font-[700] text-[64px] tracking-[0.02em] text-white`}
                >
                  FAITH, FAMILY, FELLOWSHIP
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Text Section */}
      <div className="w-full bg-[#3C0000]">
        <div className="w-full h-[380px] mx-auto px-[100px] rounded-[64px] gap-[24px] flex items-center justify-between bg-[rgba(177,143,84,0.8)]">
          {/* Text and Button Section */}
          <div className="w-full h-[144px] gap-[158px] flex justify-between items-center">
            {/* Text */}
            <p
              className={`${outfit.className} w-[969px] h-[144px] font-[700] text-[40px] leading-[120%] tracking-[0.02em] text-white`}
            >
              Join us at St. Mary and St. Maurice's Coptic Orthodox Church,
              where ancient traditions meet modern hearts in Kitchener.
            </p>

            {/* Button */}
            <div>
              <button
                className={`${outfit.className} w-[185px] h-[45px] bg-[#171E34] text-white font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] 
                    flex items-center justify-center transition duration-300 ease-out hover:bg-red-800`}
              >
                VISIT US THIS SUNDAY
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CALENDAR SECTION */}
      <section
        className="relative w-full h-[1638px] bg-[#3C0000] text-white"
        style={{
          clipPath: "polygon(50% 30%, 100% 0, 100% 100%, 0 100%, 0 0)",
        }}
      >
        <div className="max-w-[1512px] px-[100px] pt-[263px] pb-[74px] mx-auto"></div>
      </section>
    </>
  );
};

export default Home;
