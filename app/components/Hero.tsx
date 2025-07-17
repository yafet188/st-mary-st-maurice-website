"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Urbanist, Outfit, Zilla_Slab } from "next/font/google";
import { useInView } from "react-intersection-observer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const zilla_slab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface HeroProps {
  backgroundColor?: string;
  height?: string;
  title: React.ReactNode;
  titleSize?: string;
  subtitle?: string;
  textColor?: string;
  textWidth?: string;
  image?: StaticImageData;
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

// Custom typewriter hook
const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);
    setShowCursor(true);

    const timer = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
          // Hide cursor after completion
          setTimeout(() => setShowCursor(false), 500);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return { displayText, isComplete, showCursor };
};

const Hero = ({
  backgroundColor,
  image,
  altText,
  title,
  titleSize,
  subtitle,
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const extractTextFromNode = (node: React.ReactNode): React.ReactNode[] => {
    if (typeof node === "string") return [node];
    if (Array.isArray(node)) return node.flatMap(extractTextFromNode);
    if (React.isValidElement(node)) {
      if (node.type === "br") return ["\n"];
      const props = node.props as { children?: React.ReactNode };
      return extractTextFromNode(props.children || "");
    }
    return [];
  };

  const getTitleText = () => {
    const nodes = extractTextFromNode(title);
    return nodes.join("");
  };

  // Use custom typewriter hooks
  const titleTypewriter = useTypewriter(inView ? getTitleText() : "", 100, 250);

  const descriptionTypewriter = useTypewriter(
    inView && titleTypewriter.isComplete ? descriptionText : "",
    30,
    500
  );

  return (
    <div>
      {/* Header Section with Background Image */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          height: height,
          backgroundColor:
            !image && backgroundColor ? backgroundColor : undefined,
        }}
      >
        {image && (
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
        )}

        <div
          className={`relative z-10 w-full max-w-[1512px] mx-auto h-full px-6 md:px-12 xl:px-[100px] flex items-center
    ${
      textPosition === "Left"
        ? "justify-start"
        : textPosition === "Right"
        ? "justify-end"
        : "justify-center"
    }`}
        >
          <div
            ref={ref}
            className={`w-full flex flex-col gap-5 ${
              contentAlignment === "left"
                ? "items-start"
                : contentAlignment === "right"
                ? "items-end"
                : "items-center"
            }`}
          >
            {subtitle && (
              <h2
                className={`${zilla_slab.className} font-[500] text-[36px] leading-[120%] tracking-[-0.02em] text-black`}
                style={{ textAlign: textAlignment }}
              >
                {subtitle}
              </h2>
            )}

            {title && (
              <h1
                className={`${outfit.className} font-[700] uppercase items-center text-center justify-center leading-[120%] whitespace-pre-line`}
                style={{
                  color: textColor,
                  fontSize: titleSize,
                  textAlign: textAlignment,
                  width: "100%",
                }}
              >
                {titleTypewriter.displayText}
                {titleTypewriter.showCursor && (
                  <span className="animate-pulse">|</span>
                )}
              </h1>
            )}

            {descriptionText && (
              <p
                className={`${urbanist.className} leading-[150%]`}
                style={{
                  color: descriptionColor,
                  fontSize: descriptionSize,
                  maxWidth: textWidth,
                  textAlign: textAlignment,
                  width: "100%",
                }}
              >
                {descriptionTypewriter.displayText}
                {descriptionTypewriter.showCursor && (
                  <span className="animate-pulse">|</span>
                )}
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
