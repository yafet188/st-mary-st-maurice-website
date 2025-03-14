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
    <footer className="w-full h-[669px] bg-[#0c101f] text-white py-16">
      {/* Main content container */}
      <div className="w-[1750px] h-[396px] mx-auto px-6 md:px-8 lg:px-0">
        {/* Top section with logo, navigation, and form */}
        <div className="flex flex-col lg:flex-row gap-[24px] justify-between">
          {/* Left section - Logo, address & contact */}
          <div className="w-full lg:w-[358px] flex flex-col gap-6">
            <Link href="/">
              <Image
                src="/Images/Logos/Logo.png"
                alt="St. Mary and St. Maurice Coptic Orthodox Church"
                width={192}
                height={144}
                priority
              />
            </Link>

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
                  388 Ottawa St. South
                </p>
                <p className="text-blue hover:underline">
                  Kitchener, Ontario, Canada
                </p>
                <p className="text-blue hover:underline">N2M 3P4</p>
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

          {/* Right section - Navigation links & form */}
          <div className="w-full lg:w-[786px] flex flex-col gap-12">
            {/* Navigation links in three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
              {/* Column 1 - SMSM CHURCH */}
              <div className="flex flex-col gap-4">
                <h6
                  className={`${outfit.className} hover:underline font-bold text-base tracking-wide`}
                >
                  SMSM CHURCH
                </h6>
                <nav className="flex flex-col gap-3">
                  <Link href="/Home">
                    <p
                      className={`${outfit.className} text-sm font-medium leading-tight tracking-wide opacity-80 hover:opacity-100 hover:underline`}
                    >
                      HOME
                    </p>
                  </Link>
                  <Link href="/AboutUs">
                    <p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 hover:opacity-100`}
                    >
                      ABOUT
                    </p>
                  </Link>
                  <Link href="/Ministries">
                    <p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 hover:opacity-100`}
                    >
                      MINISTRIES
                    </p>
                  </Link>
                  <Link href="/YouthKidsServices">
                    <p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 hover:opacity-100`}
                    >
                      SUNDAY SCHOOL
                    </p>
                  </Link>
                </nav>
              </div>

              {/* Column 2 - ENGAGEMENT & RESOURCES */}
              <div className="flex flex-col gap-4">
                <h6
                  className={`${outfit.className} hover:underline font-bold text-base tracking-wide`}
                >
                  ENGAGEMENT & RESOURCES
                </h6>
                <nav className="flex flex-col gap-3">
                  <Link href="/schedule">
                    <p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 hover:opacity-100`}
                    >
                      SCHEDULE
                    </p>
                  </Link>
                  <Link href="/media">
                    <p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 hover:opacity-100`}
                    >
                      MEDIA
                    </p>
                  </Link>
                  <Link href="/resources">
                    <p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 hover:opacity-100`}
                    >
                      RESOURCES
                    </p>
                  </Link>
                </nav>
              </div>

              {/* Column 3 - CONNECT & GIVE */}
              <div className="flex flex-col gap-4">
                <h6
                  className={`${outfit.className} hover:underline font-bold text-base tracking-wide`}
                >
                  CONNECT & GIVE
                </h6>
                <nav className="flex flex-col gap-3">
                  <Link href="/donation">
                    <p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 hover:opacity-100`}
                    >
                      DONATE
                    </p>
                  </Link>
                  <Link href="/contact">
                    <p
                      className={`${outfit.className} hover:underline text-sm font-medium leading-tight tracking-wide opacity-80 hover:opacity-100`}
                    >
                      CONTACT US
                    </p>
                  </Link>
                </nav>
              </div>
            </div>

            {/* Subscription form */}
            <div className="p-6 rounded-[16px] border border-[#454B5D] bg-[#0A0D16]">
              <h6
                className={`${outfit.className} font-bold text-base mb-5 tracking-wide`}
              >
                STAY CONNECTED WITH OUR CHURCH FAMILY
              </h6>

              <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-5 justify-between">
                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label
                    className={`${outfit.className} text-sm font-semibold`}
                  >
                    EMAIL
                  </label>
                  <div className="relative">
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
                      className={`${outfit.className} w-full h-14 pl-11 pr-4 py-3 bg-[#151B2F] rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 font-normal`}
                    />
                  </div>
                </div>

                {/* Phone field with country dropdown */}
                <div className="flex flex-col gap-2">
                  <label
                    className={`${outfit.className} text-sm font-semibold`}
                  >
                    PHONE NUMBER
                  </label>
                  <div className="flex w-full">
                    <div className="flex items-center bg-[#454B5D] rounded-l-2xl px-3">
                      <Image
                        src="/Images/Countries/Canada.png"
                        alt="Canada Flag"
                        width={26}
                        height={20}
                        className="rounded"
                      />
                      <div className="px-[5px] py-[3px]" />
                      <Image
                        src="/Images/Icons/ArrowDownWhite.png"
                        alt="Arrow Down"
                        width={10}
                        height={5}
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="000-000-0000"
                      className={`${outfit.className} w-[214.33px] h-[56px] flex-grow px-4 py-3 bg-[#151B2F] rounded-r-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 font-[400]`}
                    />
                  </div>
                </div>

                {/* Subscribe button */}
                <div className="hover:underline flex items-end">
                  <button
                    type="submit"
                    className={`${outfit.className} h-14 px-3 py-4 bg-white text-black text-sm font-semibold rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-100 w-32`}
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright section - bottom part */}
        <div
          className={`mt-16 pt-6 border-t border-[#454B5D] flex flex-col md:flex-row justify-between items-center`}
        >
          <p
            className={`${outfit.className} text-[#9498A2] text-[14px] font-[400] mb-4 md:mb-0`}
          >
            © Copyright 2024 St.Mary and St.Maurice Coptic Orthodox Church- All
            rights reserved.
          </p>
          <p
            className={`${outfit.className} text-[#9498A2] text-[14px] font-[400]`}
          >
            Designed & Developed by{" "}
            <a
              href="https://webelocity.io"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Webelocity
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
