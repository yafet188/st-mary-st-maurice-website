import React from "react";
import Image from "next/image";

import { Urbanist, Outfit, Raleway } from "next/font/google";

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

interface Product {
  id: number;
  image: string;
  title: string;
  subheading: string;
  description: string;
  buttontext: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-[632px] h-[811px] bg-[#E8E9EB] rounded-[16px] p-[32px] gap-[32px] flex flex-col justify-between">
      {/* Image (Taller) */}
      <Image
        src={product.image}
        alt={product.title}
        width={568}
        height={367.81}
        className="rounded-[24px] object-cover"
      />

      {/* Content */}
      <div className="flex flex-col gap-6 flex-grow">
        {/* Title & Subheading */}
        <div className="flex flex-col gap-[12px] justify-between">
          <p
            className={`${urbanist.className} font-[700] text-[#0D111D] text-[28px] leading-[120%] tracking-[0.02em]`}
          >
            {product.title}
          </p>
          <p
            className={`${raleway.className} font-[600] text-[#0D111D] text-[18px] leading-[120%] tracking-[0.02em]`}
          >
            {product.subheading}
          </p>
        </div>

        {/* Description */}
        <p
          className={`${urbanist.className} font-[400] text-[#151B2F] text-[18px] leading-[150%] tracking-[0.02em]`}
        >
          {product.description}
        </p>
      </div>

      {/* Button at bottom */}
      <div className="mt-6">
        <button
          className={`${outfit.className} w-full h-[45px] bg-white border border-[#E8E9EB] rounded-[8px] text-[#0D111D] text-sm font-semibold tracking-[0.02em] hover:bg-gray-100 transition`}
        >
          {product.buttontext}
        </button>
      </div>
    </div>
  );
}
