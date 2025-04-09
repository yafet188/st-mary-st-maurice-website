import React from "react";
import Image, { StaticImageData } from "next/image";
import { Urbanist, Outfit } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface HeaderProps {
  children: React.ReactNode;
  title: string;
  image: StaticImageData;
  altText: string;
  overlayColor?: string;
  overlayOpacity?: number;
  textPosition?: "Center" | "Left" | "Right";
}

const Hero = ({
  image,
  altText,
  title,
  children,
  textPosition = "Center",
  overlayColor,
  overlayOpacity,
}: HeaderProps) => {
  return (
    <div>
      {/* Header Section with Background Image */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={altText}
            fill
            priority
            className="object-cover object-[center_29%]"
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: `${overlayColor}`,
              opacity: overlayOpacity,
            }}
          />
        </div>

        <div
          className={`relative z-10 w-full max-w-[1512px] mx-auto h-auto px-6 md:px-12 xl:px-[100px] py-40 flex items-center
    ${
      textPosition === "Left"
        ? "justify-start"
        : textPosition === "Right"
        ? "justify-end"
        : "justify-center"
    }`}
        >
          <div
            className={`w-full md:w-[606px] flex flex-col gap-5
      ${
        textPosition === "Left"
          ? "text-left"
          : textPosition === "Right"
          ? "text-right"
          : "text-center"
      }`}
          >
            <h1
              className={`${outfit.className} text-[40px] md:text-[64px] leading-[120%] font-[700] text-black`}
            >
              {title}
            </h1>
            <p
              className={`${urbanist.className} text-[16px] md:text-[18px] text-[#0D11D] leading-[150%]`}
            >
              {children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
