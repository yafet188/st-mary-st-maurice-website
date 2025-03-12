import Link from "next/link";
import Image from "next/image";
import { Urbanist, Outfit } from "next/font/google";

// Load fonts with correct weights
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Footer() {
  return (
    <footer className="bg-[#0c101f] text-base-content py-[80px] px-[80px] w-full min-h-[396px] border-t border-[#454B5D] grid grid-cols-2 gap-[48px]">
      {/* Left Section - Logo, Address & Contact */}
      <div className="flex flex-col gap-[24px]">
        <Link href="/">
          <Image
            src="/Images/Logos/Logo.png"
            alt="logo"
            width={206.97}
            height={154.03}
          />
        </Link>
        <div
          className={`${urbanist.className} text-[18px] font-[400] leading-[27px] tracking-[0.02em] text-[#E8E9EB]`}
        >
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=388+Ottawa+St+South,+Kitchener,+Ontario,+Canada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-blue underline">388 Ottawa St. South</p>
            <p className="text-blue underline">Kitchener, Ontario, Canada</p>
            <p className="text-blue underline">N2M 3P4</p>
          </Link>
        </div>
        <div
          className={`${urbanist.className} text-[18px] font-[400] leading-[27px] tracking-[0.02em] text-[#E8E9EB]`}
        >
          <a href="tel:+15195702199">+1 519 570 2199</a>
        </div>
      </div>

      {/* Right Section - Navigation Links & Subscription Form */}
      <div className="flex flex-col gap-[48px]">
        {/* Navigation Links */}
        <div className="grid grid-cols-3 gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <h6
              className={`${outfit.className} text-white font-[700] text-[16px] leading-[24px] tracking-[0.02em]`}
            >
              SMSM CHURCH
            </h6>
            <Link href="/Home">
              <p
                className={`${outfit.className} text-[14px] font-[500] leading-[21px] tracking-[0.02em] text-white opacity-[80%]`}
              >
                HOME
              </p>
            </Link>
            <Link href="/AboutUs">
              <p
                className={`${outfit.className} text-[14px] font-[500] leading-[21px] tracking-[0.02em] text-white opacity-[80%]`}
              >
                ABOUT
              </p>
            </Link>
            <Link href="/Ministries">
              <p
                className={`${outfit.className} text-[14px] font-[500] leading-[21px] tracking-[0.02em] text-white opacity-[80%]`}
              >
                MINISTRIES
              </p>
            </Link>
            <Link href="/YouthKidsServices">
              <p
                className={`${outfit.className} text-[14px] font-[500] leading-[21px] tracking-[0.02em] text-white opacity-[80%]`}
              >
                SUNDAY SCHOOL
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h6
              className={`${outfit.className} text-white font-[700] text-[16px]`}
            >
              ENGAGEMENT & RESOURCES
            </h6>
            <Link href="/schedule">
              <p
                className={`${outfit.className} text-[14px] font-[500] leading-[21px] tracking-[0.02em] text-white opacity-[80%]`}
              >
                SCHEDULE
              </p>
            </Link>
            <Link href="/media">
              <p
                className={`${outfit.className} text-[14px] font-[500] leading-[21px] tracking-[0.02em] text-white opacity-[80%]`}
              >
                MEDIA
              </p>
            </Link>
            <Link href="/resources">
              <p
                className={`${outfit.className} text-[14px] font-[500] leading-[21px] tracking-[0.02em] text-white opacity-[80%]`}
              >
                RESOURCES
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h6
              className={`${outfit.className} text-white font-[700] text-[16px]`}
            >
              CONNECT & GIVE
            </h6>
            <Link href="/donation">
              <p
                className={`${outfit.className} text-[14px] font-[500] leading-[21px] tracking-[0.02em] text-white opacity-[80%]`}
              >
                DONATE
              </p>
            </Link>
            <Link href="/contact">
              <p
                className={`${outfit.className} text-[14px] font-[500] leading-[21px] tracking-[0.02em] text-white opacity-[80%]`}
              >
                CONTACT US
              </p>
            </Link>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="p-6 bg-[#0A0D16] border-[1px] border-[#454B5D] rounded-lg flex flex-col gap-[16px]">
          <h6
            className={`${outfit.className} text-white font-[700] text-[16px] leading-[24px] tracking-[0.02em]`}
          >
            STAY CONNECTED WITH OUR CHURCH FAMILY
          </h6>
          <form className="grid grid-cols-[1fr_1fr_auto] gap-[24px] items-end">
            {/* EMAIL Field */}
            <div className="flex flex-col gap-[8px]">
              <label className={`${outfit.className} text-white text-sm`}>
                EMAIL
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className={`${outfit.className} w-full p-3 bg-[#151B2F] text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 font-[400]`}
              />
            </div>
            {/* PHONE Field with Canada Dropdown */}
            <div className="flex flex-col gap-[8px]">
              <label className={`${outfit.className} text-white text-sm`}>
                PHONE NUMBER
              </label>
              <div className="flex w-full">
                <select className="bg-[#454B5D] text-white p-3 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <option value="+1">Canada (+1)</option>
                  {/* Add additional options if needed */}
                </select>
                <input
                  type="tel"
                  placeholder="000-000-0000"
                  className="w-full p-3 bg-[#151B2F] text-white rounded-r-md border-t border-b border-r border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 font-[400]"
                />
              </div>
            </div>
            {/* Subscribe Button */}
            <button
              type="submit"
              className={`${outfit.className} p-3 bg-white text-black rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500`}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
