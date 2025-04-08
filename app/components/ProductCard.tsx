import React from 'react';
import Image from 'next/image';

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
    id: number
    image: string
    title: string
    subheading: string
    description: string
    buttontext: string
}
  
interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="w-[568px] bg-[#E8E9EB] rounded-[32px] p-8 flex flex-col justify-between" style={{ height: '100%' }}>
        {/* Image (Taller) */}
            <Image 
                src={product.image} 
                alt={product.title} 
                width={568} 
                height={368} 
                className="rounded-[24px] object-cover w-full h-[300px]" 
            />

        {/* Content */}
            <div className="flex flex-col gap-6 flex-grow mt-6">
                {/* Title & Subheading */}
                <div className="flex flex-col gap-2">
                    <p className={`${urbanist.className} font-bold text-[#0D111D] text-[28px] leading-[120%] tracking-[0.56px]`}>
                        {product.title}
                    </p>
                    <p className={`${raleway.className} font-semibold text-[#0D111D] text-[18px] leading-[120%] tracking-[0.56px]`}>
                        {product.subheading}
                    </p>
                </div>

                {/* Description */}
                <p className={`${urbanist.className} font-normal text-[#151B2F] text-[18px] leading-[150%] tracking-[0.56px]`}>
                {product.description}
                </p>
            </div>

            {/* Button at bottom */}
            <div className="mt-6">
                <button className="w-full h-[45px] bg-white border border-[#E8E9EB] rounded-[8px] text-[#0D111D] text-sm font-semibold tracking-[0.5px] hover:bg-gray-100 transition">
                {product.buttontext}
                </button>
            </div>
        </div>
    );
};
