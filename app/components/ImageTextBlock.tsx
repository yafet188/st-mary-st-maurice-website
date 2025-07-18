"use client";

import { ReactNode } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Outfit, Urbanist, Zilla_Slab } from "next/font/google";
import { motion } from "framer-motion";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface ImageTextBlockProps {
  children: ReactNode;
  showTag?: boolean;
  roundedText: string;
  roundedBgColor?: string;
  roundedTextColor?: string;
  image: StaticImageData;
  inverted: boolean;
  title: string;
  titleColor: string;
  textColor: string;
  altText: string;
  bgColor: "#FEFAF1" | "#E8E9EB" | "#FFFFFF" | "#171E34";
  miniTitle?: string;
  bottomMiniTitle?: string | React.ReactNode;
  btnTxt?: string;
  btnColor?: string;
  btnHoverColor?: string;
  btnLink?: string;
  btnTextColor?: string;
  borderColor?: string;
}

interface RoundedImageProps {
  image: StaticImageData;
  altText: string;
}

interface RoundedButtonProps {
  children: string;
  color: string;
  hovercolor?: string;
  textColor?: string;
  borderColor?: string;
  link?: string;
}

interface RoundedTagProps {
  roundedText: string;
  roundedBgColor?: string;
  roundedTextColor?: string;
}

// Special component specifically to deal with image styling, reassess if necessary
const RoundedImage = ({ image, altText }: RoundedImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3, y: 100 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: [100, -20, 0],
        rotate: [0, -5, 5, 0],
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        ease: "easeOut",
        y: {
          duration: 0.8,
          times: [0, 0.6, 1],
          ease: "easeOut",
        },
        rotate: {
          duration: 0.8,
          times: [0, 0.3, 0.6, 1],
          ease: "easeOut",
        },
      }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="relative w-[616px] h-[392.69px] rounded-[24px] shadow-[0_10px_20px_rgba(0,0,0,0.15),_0_5px_10px_rgba(0,0,0,0.10)] transition-all duration-500"
        style={{
          perspective: "10000px",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease-out",
        }}
        whileHover={{
          boxShadow:
            "0 50px 70px rgba(0,0,0,0.2), 0 10px 15px rgba(0,0,0,0.15)",
        }}
        onHoverStart={(e) => {
          const element = e.target as HTMLElement;
          element.onmousemove = (mouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = mouseEvent.clientX - rect.left;
            const y = mouseEvent.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          };
        }}
        onHoverEnd={(e) => {
          const element = e.target as HTMLElement;
          element.onmousemove = null;
          element.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }}
      >
        <motion.div
          className="w-full h-full"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            className="w-full h-full rounded-[24px] object-cover"
            src={image}
            alt={altText}
            style={{
              transformStyle: "preserve-3d",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Ditto For Buttons
const RoundedButton = ({
  children,
  borderColor,
  link,
  textColor = "white",
}: RoundedButtonProps) => {
  const btnStyle = `${outfit.className} w-auto px-[16px] py-[16px] pt-[12px] pb-[12px] font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] flex items-center justify-center`;

  const inlineStyle = {
    color: textColor,
    border: borderColor ? `1.5px solid ${borderColor}` : undefined,
  };

  const MotionButton = () => (
    <motion.button
      className={btnStyle}
      style={inlineStyle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );

  if (link != "") {
    return (
      <a href={link}>
        <MotionButton />
      </a>
    );
  } else {
    return <MotionButton />;
  }
};

const RoundedTag = ({
  roundedText,
  roundedBgColor,
  roundedTextColor,
}: RoundedTagProps) => {
  const tagStyle = `w-fit h-fit rounded-[25px] py-[6px] px-[14px]`;
  const textStyle = `${zillaSlab.className} font-[600] text-[20px] md:text-[24px] leading-[120%] tracking-[0.02em] uppercase`;

  return (
    <motion.div
      className={tagStyle}
      style={{ backgroundColor: roundedBgColor }}
      initial={{ opacity: 0, scale: 0.5, x: -20 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
        scale: { duration: 0.6 },
      }}
      whileHover={{
        scale: 1.05,
        rotate: [0, -2, 2, 0],
        transition: { duration: 0.3 },
      }}
    >
      <p className={textStyle} style={{ color: roundedTextColor }}>
        {roundedText}
      </p>
    </motion.div>
  );
};
//Ditto For Rounded Tags
const ImageTextBlock = ({
  children,
  showTag,
  roundedText,
  roundedBgColor,
  roundedTextColor,
  image,
  inverted,
  title,
  titleColor,
  textColor,
  miniTitle,
  bottomMiniTitle,
  altText,
  bgColor,
  borderColor,
  btnTxt,
  btnColor,
  btnLink,
  btnHoverColor,
  btnTextColor,
}: ImageTextBlockProps) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-full min-h-[592.69px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="p-[100px] flex flex-row items-center gap-[80px] max-w-[1512px] w-full mx-auto"
      >
        {!inverted && <RoundedImage image={image} altText={altText} />}
        <div className="w-[616px] flex flex-col gap-[24px]">
          {showTag && (
            <RoundedTag
              roundedText={roundedText}
              roundedBgColor={roundedBgColor}
              roundedTextColor={roundedTextColor}
            />
          )}

          <motion.h2
            className={`${outfit.className} font-bold text-[36px] leading-[120%] tracking-[2%] uppercase`}
            style={{ color: titleColor }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>

          {miniTitle && (
            <motion.h6
              className="font-[outfit] font-bold text-[20px] leading-[120%] tracking-[2%]"
              initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {miniTitle}
            </motion.h6>
          )}

          <motion.div
            className={`${urbanist.className} font-normal text-[18px] leading-[150%] tracking-[2%] overflow-hidden`}
            style={{ color: textColor }}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "auto", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {children}
            </motion.div>
          </motion.div>

          {bottomMiniTitle && (
            <motion.p
              className={`${outfit.className} font-bold text-[18px] leading-[150%] tracking-[2%]`}
              initial={{ x: -20, opacity: 0, skewX: 10 }}
              whileInView={{ x: 0, opacity: 1, skewX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {bottomMiniTitle}
            </motion.p>
          )}

          {btnTxt && btnColor && (
            <RoundedButton
              link={btnLink}
              hovercolor={btnHoverColor}
              color={btnColor}
              textColor={btnTextColor}
              borderColor={borderColor}
            >
              {btnTxt}
            </RoundedButton>
          )}
        </div>

        {inverted && <RoundedImage image={image} altText={altText} />}
      </motion.div>
    </div>
  );
};

export default ImageTextBlock;
