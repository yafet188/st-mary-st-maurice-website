import React from "react";

interface ImageTextBlockProps {
  text: string; 
  image?: string;
}

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({ text, image }) => {
  return (
    <>
      <h1>{text}</h1>
      <h1>{image}</h1>
    </>
  );
};

export default ImageTextBlock;