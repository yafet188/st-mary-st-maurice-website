import React from "react";
import Image from "next/image";
import { Urbanist, Outfit, Raleway, Zilla_Slab } from "next/font/google";

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

const YouthKidsServices = () => {
  return (
    <div className="w-full h-[4534.44px] p-[100px] gap-[80px] flex flex-col bg-[#171E34]">
      {/* Youth & Kids Minitstries */}
      <div className="h-[62px] pt-8 text-center">
        <h1
          className={`${urbanist.className} font-[700] text-[52px] leading-[120%] tracking-[-0.02em] text-white`}
        >
          Youth & Kids Ministries
        </h1>
      </div>

      {/* Cards PlaceHolder */}
      <div className="w-[632px] h-[811px] bg-[#E8E9EB] rounded-2xl p-6 flex flex-col gap-6">
        <div className="w-full h-[250px] relative rounded-2xl overflow-hidden">
          <Image
            src="/Images/AboutUs/StMaryMartyrs.jpg"
            alt="StMaryMartyrs"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2
            className={`${urbanist.className} text-[24px] font-bold text-[#0D111D]`}
          >
            Sunday School
          </h2>
          <h3 className={`${raleway.className} text-xl text-[#0D111D]`}>
            Building Foundations in Faith
          </h3>
          <p className="text-sm text-[#151B2F]">
            Our curriculum at St. Mary and St. Maurice is tailored to each age
            and educates children and youth about Orthodox faith, Biblical
            stories, Christian values, and community service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YouthKidsServices;

{
  /* <div className="w-md bg-[#E8E9EB] rounded-2xl p-6 justify-between flex flex-col">
      <Image src={product.image} alt={product.title} width={568} height={367.8145751953125} className="rounded-3xl object-cover w-full h-64"/>
      <div className="space-y-4">
        <div className='text-left mt-4'>
          <p className={${urbanist.className} font-bold text-[#0D111D] text-[28px] leading-[120%] tracking-[0.02em]}>{product.title}</p>
          <p className={${raleway.className} text-xl text-[#0D111D]}>{product.subheading}</p>
        </div>
        <div className='text-left space-y-3 text-sm text-[#151B2F] mb-4'>
          <p>{product.description}</p>
        </div>
        </div>
            <button className='w-full bg-white hover:bg-gray-200 text-black font-semibold py-3 rounded-md'>{product.buttontext}</button>
    </div> 
  */
}
