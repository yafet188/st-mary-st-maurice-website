import { ReactNode } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface ImageTextBlockProps {
  children: ReactNode;
  image: StaticImageData;
  inverted: boolean;
  title: string;
  altText: string;
  bgColor: "#FEFAF1" | "#E8E9EB";
  miniTitle?: string;
  btnTxt?: string;
  btnColor?: string;
  btnHoverColor?: string;
  btnLink?: string;
}

interface RoundedImageProps {
  image: StaticImageData;
  altText: string;
}

interface RoundedButtonProps {
  children: string;
  color: string;
  hovercolor?: string;
  link?: string;
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

// ditto for buttons
const RoundedButton = ({ children, color, link }: RoundedButtonProps) => {
  const btnStyle = `w-auto px-[16px] py-[16px]  pt-[12px] pb-[12px]  text-white font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] flex items-center justify-center transition duration-300 ease-out bg-[${color}]`;

  if (link != "") {
    return (
      <a href={link}>
        <button className={btnStyle}>{children}</button>
      </a>
    );
  } else {
    return <button className={btnStyle}>{children}</button>;
  }
};

const ImageTextBlock = ({
  children,
  image,
  inverted,
  title,
  miniTitle,
  altText,
  bgColor,
  btnTxt,
  btnColor,
  btnLink,
  btnHoverColor,
}: ImageTextBlockProps) => {
  return (
    <div className={`w-full bg-[${bgColor}] h-[592.69px]`}>
      <div
        className={`bg-[${bgColor}] p-[100px] flex flex-row items-center gap-[80px] w-[1512px] mx-auto`}
      >
        {!inverted && (
          <RoundedImage image={image} altText={altText}></RoundedImage>
        )}
        <div className="w-[616px] flex flex-col gap-[24px]">
          <h2 className="font-[outfit] font-bold text-[36px] leading-[120%] tracking-[2%] uppercase">
            {title}
          </h2>
          {miniTitle && (
            <h6 className="font-[outfit] font-bold text-[20px] leading-[120%] tracking-[2%]">
              {miniTitle}
            </h6>
          )}
          <div className="font-[urbanist] font-normal text-[18px] leading-[150%] tracking-[2%] text-[#151B2F]">
            {children}
          </div>
          {btnTxt && btnColor && (
            <RoundedButton
              link={btnLink}
              hovercolor={btnHoverColor}
              color={btnColor}
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
