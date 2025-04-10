import { ReactNode } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Outfit, Urbanist, Zilla_Slab } from "next/font/google";

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
    <Image
      className="w-[616px] h-[392.69px] rounded-[24px] object-cover"
      src={image}
      alt={altText}
    ></Image>
  );
};

// Ditto For Buttons
const RoundedButton = ({
  children,
  color,
  borderColor,
  link,
  textColor = "white",
}: RoundedButtonProps) => {
  const btnStyle = `${outfit.className} w-auto px-[16px] py-[16px] pt-[12px] pb-[12px] font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] flex items-center justify-center transition duration-300 ease-out bg-[${color}]`;

  const inlineStyle = {
    color: textColor,
    border: borderColor ? `1.5px solid ${borderColor}` : undefined,
  };

  if (link != "") {
    return (
      <a href={link}>
        <button className={btnStyle} style={inlineStyle}>
          {children}
        </button>
      </a>
    );
  } else {
    return (
      <button className={btnStyle} style={inlineStyle}>
        {children}
      </button>
    );
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
    <div className={tagStyle} style={{ backgroundColor: roundedBgColor }}>
      <p className={textStyle} style={{ color: roundedTextColor }}>
        {roundedText}
      </p>
    </div>
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
  altText,
  bgColor,
  borderColor,
  btnTxt,
  btnColor,
  btnLink,
  btnHoverColor,
  btnTextColor,
}: ImageTextBlockProps) => {
  const bgClass =
    bgColor === "#FEFAF1"
      ? "bg-[#FEFAF1]"
      : bgColor === "#E8E9EB"
      ? "bg-[#E8E9EB]"
      : bgColor === "#FFFFFF"
      ? "bg-[#FFFFFF]"
      : "bg-[#171E34]";
  return (
    <div className={`w-full ${bgClass} h-[592.69px]`}>
      <div
        className={`${bgClass} p-[100px] flex flex-row items-center gap-[80px] w-[1512px] mx-auto`}
      >
        {!inverted && (
          <RoundedImage image={image} altText={altText}></RoundedImage>
        )}
        <div className="w-[616px] flex flex-col gap-[24px]">
          {showTag && (
            <RoundedTag
              roundedText={roundedText}
              roundedBgColor={roundedBgColor}
              roundedTextColor={roundedTextColor}
            />
          )}

          <h2
            className={`${outfit.className} font-bold text-[36px] leading-[120%] tracking-[2%] uppercase`}
            style={{ color: titleColor }}
          >
            {title}
          </h2>
          {miniTitle && (
            <h6 className="font-[outfit] font-bold text-[20px] leading-[120%] tracking-[2%]">
              {miniTitle}
            </h6>
          )}
          <div
            className={`${urbanist.className} text-[${textColor}] font-normal text-[18px] leading-[150%] tracking-[2%] text-[#151B2F]`}
          >
            {children}
          </div>
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

        {inverted && (
          <RoundedImage image={image} altText={altText}></RoundedImage>
        )}
      </div>
    </div>
  );
};

export default ImageTextBlock;
