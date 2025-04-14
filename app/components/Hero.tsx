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

interface HeroProps {
  children?: React.ReactNode;
  height?: string;
  title: React.ReactNode;
  titleSize?: string;
  textColor?: string;
  textWidth?: string;
  image: StaticImageData;
  imagePlacement?: string;
  altText: string;
  overlayColor?: string;
  overlayOpacity?: number;
  textPosition?: "Center" | "Left" | "Right";
  descriptionText?: string;
  descriptionColor?: string;
  descriptionSize?: string;
}

const Hero = ({
  image,
  altText,
  title,
  titleSize,
  children,
  textPosition = "Center",
  overlayColor,
  textColor = "black",
  textWidth = "616px",
  height = "460px",
  imagePlacement = "29%",
  descriptionText = "",
  descriptionColor = "#0D111D",
  descriptionSize = "18px",
}: HeroProps) => {
  return (
    <div>
      {/* Header Section with Background Image */}
      <div
        className="w-full relative overflow-hidden"
        style={{ height: height }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={altText}
            fill
            priority
            className={`object-cover object-[center_${imagePlacement}]`}
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              backgroundColor: overlayColor || "transparent",
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
            className={`w-full md:w-[${textWidth}] flex flex-col gap-5 
      ${
        textPosition === "Left"
          ? "text-left"
          : textPosition === "Right"
          ? "text-right"
          : "text-center"
      }`}
          >
            <h1
              className={`${outfit.className} text-[40px] md:text-[64px] leading-[120%] font-[700]`}
              style={{ color: textColor }}
            >
              <div className="uppercase">{title}</div>
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
