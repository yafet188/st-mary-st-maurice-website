import Link from "next/link";
import Image from "next/image";
import { Urbanist, Outfit } from "next/font/google";

// Load fonts with correct weights
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400"] });
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className="bg-[#0c101f] text-base-content py-[80px] px-[80px] w-full min-h-[396px] border-t border-[#454B5D] grid grid-cols-2 gap-[48px]">
      <div className="flex justify-between items-start w-full max-w-[1352px] mx-auto gap-[48px]">
        {/* Left Section - Logo, Address & Contact */}
        <div className="flex flex-col gap-[24px] w-[358px] min-w-[358px]">
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
            <div className="flex items-start gap-3">
              <Image
                src="/Images/Icons/Location.png"
                alt="Location"
                width={16.28}
                height={20.8}
              />
              <Link
                href="https://www.google.com/maps/dir/?api=1&destination=388+Ottawa+St+South,+Kitchener,+Ontario,+Canada"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-blue underline">388 Ottawa St. South</p>
                <p className="text-blue underline">
                  Kitchener, Ontario, Canada
                </p>
                <p className="text-blue underline">N2M 3P4</p>
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Image
              src="/Images/Icons/Phone.png" // Ensure correct path
              alt="Phone"
              width={18} // Slightly increased for better balance
              height={18}
            />
            <div
              className={`${urbanist.className} text-[18px] font-[400] leading-[27px] tracking-[0.02em] text-[#E8E9EB]`}
            >
              <a href="tel:+15195702199">+1 519 570 2199</a>
            </div>
          </div>
        </div>

        {/* Right Section - Navigation Links & Subscription Form */}
        <div className="flex flex-col gap-[48px] w-[786px] min-w-[786px]">
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
          <div
            className={`w-[786px] h-[172px] p-[24px] gap-[20px] rounded-[16px] border-[0.5px] bg-[#0A0D16] border-[#454B5D] flex flex-col`}
          >
            <h6
              className={`${outfit.className} text-white font-[700] text-[16px] leading-[24px] tracking-[0.02em] `}
            >
              STAY CONNECTED WITH OUR CHURCH FAMILY
            </h6>
            <form className="grid grid-cols-[1fr_1fr_auto] w-[738px] h-[124px] gap-[20px] items-end">
              {/* EMAIL Field */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className={`${outfit.className} text-white text-sm font-[600]`}
                >
                  EMAIL
                </label>
                <div className="relative w-[287px] h-">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Image
                      src="/Images/Icons/Email.png"
                      alt="Email"
                      width={18}
                      height={14}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className={`${outfit.className} w-[287px] h-[56px] p-3 pl-11 bg-[#151B2F] text-white rounded-[16px] focus:outline-none focus:ring-2 focus:ring-gray-500 font-[400]`}
                  />
                </div>
              </div>
              {/* PHONE Field with Canada Dropdown */}
              <div className="flex flex-col gap-[8px]">
                <label
                  className={`${outfit.className} text-white text-sm font-[600]`}
                >
                  PHONE NUMBER
                </label>
                <div className="flex w-full">
                  <div className="flex items-center bg-[#454B5D] rounded-tl-[16px] rounded-bl-[16px] px-3">
                    <Image
                      src="/Images/Countries/Canada.png" // Update with correct path
                      alt="Canada Flag"
                      width={26.67} // Adjust size as needed
                      height={20}
                      className="rounded-[4px]"
                    />
                    <div className="px-[5.5px] py-[2.83px]" />
                    <Image
                      src="/Images/Icons/ArrowDownWhite.png"
                      alt="Arrow Down"
                      width={10.33}
                      height={5}
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="000-000-0000"
                    className={`${outfit.className} w-[214.33px] h-[56px] p-3 bg-[#151B2F] text-white rounded-tr-[16px] rounded-br-[16px] focus:outline-none focus:ring-2 focus:ring-gray-500 font-[400]`}
                  />
                </div>
              </div>
              {/* Subscribe Button */}
              <button
                type="submit"
                className={`${outfit.className} w-[124px] h-[56px] gap-[6px] bg-white text-black text-[14px] font-[600] rounded-[8px] border-[1px] border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 py-[16px] px-[12px]`}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
