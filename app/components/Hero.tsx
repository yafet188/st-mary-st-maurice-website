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
  buttonText?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonLink?: string;
  textAlignment?: "left" | "center" | "right";
  contentAlignment?: "left" | "center" | "right";
}

const Hero = ({
  image,
  altText,
  title,
  titleSize,
  textPosition = "Center",
  overlayColor,
  textColor = "black",
  textWidth,
  height = "460px",
  imagePlacement = "29%",
  descriptionText = "",
  descriptionColor = "#0D111D",
  descriptionSize = "18px",
  buttonText,
  buttonColor = "#7A0C02",
  buttonTextColor = "#ffffff",
  buttonLink = "#",
  textAlignment = "center",
  contentAlignment = "center",
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
            className={`w-full flex flex-col gap-5 ${
              contentAlignment === "left"
                ? "items-start"
                : contentAlignment === "right"
                ? "items-end"
                : "items-center"
            }`}
            style={{
              textAlign: textAlignment,
            }}
          >
            <h1
              className={`${outfit.className} font-[700] uppercase leading-[120%]`}
              style={{ color: textColor, fontSize: titleSize }}
            >
              {title}
            </h1>

            {descriptionText && (
              <p
                className={`${urbanist.className} leading-[150%]`}
                style={{
                  color: descriptionColor,
                  fontSize: descriptionSize,
                  maxWidth: textWidth,
                }}
              >
                {descriptionText}
              </p>
            )}

            {buttonText && (
              <a href={buttonLink}>
                <button
                  className={`${outfit.className} px-6 py-3 mt-4 rounded-[8px] font-semibold transition duration-200`}
                  style={{
                    backgroundColor: buttonColor,
                    color: buttonTextColor,
                  }}
                >
                  {buttonText}
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
