// app/pages/ContactUs.tsx
import React from "react";
import Image from "next/image";
import { Urbanist, Outfit } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({
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

      {/* We'll add other sections here later */}
    </div>
  );
};

export default ContactUs;

/*{`${outfit.className} w-[180px] h-[45px] bg-[#7A0C02] text-white font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] 
                  flex items-center justify-center transition duration-300 ease-out hover:bg-red-800`} */
