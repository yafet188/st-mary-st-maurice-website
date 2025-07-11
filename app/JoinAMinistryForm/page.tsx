import React from "react";
import Image from "next/image";
import Link from "next/link";
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

export default function JoinAMinistryForm() {
  return (
    <div>
      {/* Reach Out Form*/}
      <div className="w-full bg-[#E8E9EB] py-[100px] px-6 md:px-12 pt-40 flex border border-[#646877] justify-center">
        {/* Outer Container for Text & Form */}
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Side - Text Container */}
          <div className="flex-1 flex flex-col justify-center gap-6 h-full">
            {/* Heading and description */}
            <h3
              className={`${urbanist.className} text-[32px] md:text-[52px] font-[700] leading-[120%] tracking-[-0.02em] text-[#0D111D]`}
            >
              Join a Ministry at St. Mary and St. Maurice's Church
            </h3>
            <p
              className={`${urbanist.className} text-[18px] md:text-[18px] font-[400] leading-[150%] tracking-[0.02rem] text-[#171E34]`}
            >
              Interested in joining an SMSM Church ministry? Fill out this form,
              and we'll quickly contact you to discuss how you can contribute to
              our community.
            </p>
            <p
              className={`${urbanist.className} text-[18px] md:text-[18px] font-[700] leading-[150%] tracking-[0.02rem] text-[#171E34]`}
            >
              Please use this form to schedule a confession, request a prayer,
              or submit inquiries.
            </p>

            <div className="flex items-start gap-3">
              <Image
                src="/Images/Icons/Location.png"
                alt="Location"
                width={16}
                height={20}
                className="mt-1"
              />
              <Link
                href="https://www.google.com/maps/dir/?api=1&destination=388+Ottawa+St+South,+Kitchener,+Ontario,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className={`${urbanist.className} hover:underline text-lg leading-7 tracking-wide text-[#E8E9EB]`}
              >
                <p className="text-blue hover:underline">
                  388 Ottawa St. South, Kitchener, Ontario, Canada N2M 3P4
                </p>
              </Link>
            </div>

            <div className="flex items-start gap-3">
              <Image
                src="/Images/Icons/Phone.png"
                alt="Phone"
                width={18}
                height={18}
                className="mt-1"
              />
              <a
                href="tel:+15195702199"
                className={`${urbanist.className} text-lg leading-7 tracking-wide text-[#E8E9EB] hover:underline`}
              >
                +1 519 570 2199
              </a>
            </div>
          </div>

          {/* Right Side - Form Container */}
          <div className="flex-1 bg-[#0A0D16] p-6 md:p-8 gap-12 rounded-[24px] border border-[#646877] shadow-lg">
            {/* Form Placeholder */}
            <form className="w-full flex flex-col gap-[24px]">
              {/* Input Fields */}
              {[
                { label: "NAME", placeholder: "First & Last Name" },
                { label: "EMAIL ADDRESS", placeholder: "email@provider.com" },
                { label: "SUBJECT", placeholder: "Type your subject here..." },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-[8px]">
                  <label
                    className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-[white]`}
                  >
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className={`${raleway.className} h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                  />
                </div>
              ))}

              {/* Message Section */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-[white]`}
                >
                  MESSAGE
                </label>
                <textarea
                  placeholder="What is your inquiry..."
                  className={`${raleway.className} h-[120px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#9498A2] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E5A93D]`}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className={`${outfit.className} w-full h-[48px] rounded-[8px] px-[12px] py-[16px] text-[14px] font-semibold bg-[#E0AE54] text-[white]`}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
