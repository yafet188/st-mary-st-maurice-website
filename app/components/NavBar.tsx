"use client";

import Link from "next/link";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function NavBar() {
  const pathname = usePathname();
  const blackTextPages = ["/ContactUs", "/AboutUs"];
  const whiteBgPages = ["/Volunteer", "/UpcomingEvents"];
  const useBlackText =
    blackTextPages.includes(pathname) || whiteBgPages.includes(pathname);
  const forceWhiteBg = whiteBgPages.includes(pathname);

  const navItems = [
    { text: "MINISTRIES", route: "/Ministries" },
    { text: "EVENTS", route: "/UpcomingEvents" },
    { text: "ABOUT US", route: "/AboutUs" },
    { text: "CONTACT US", route: "/ContactUs" },
    { text: "DONATION", route: "/Donation" },
    { text: "VOLUNTEER", route: "/Volunteer" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = forceWhiteBg
    ? "bg-white"
    : scrolled
    ? "bg-dark/80 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  return (
    <nav
      className={`flex items-center justify-between w-full h-[104.26px] fixed top-0 left-0 z-50 px-[80px] pt-[24px] pb-[24px] ${navBgClass}`}
    >
      <div className="mr-8">
        <Link href="/Home">
          <Image
            src="/Images/Logos/NavBarLogo.png"
            alt="logo"
            width={102.31}
            height={78.63}
          />
        </Link>
      </div>

      <ul className="flex items-center list-none m-0 p-0 gap-6 h-[37px]">
        {navItems.map((item) => (
          <li
            key={item.text}
            className="inline-block rounded-xl transition-colors duration-300 hover:bg-[#695532]"
          >
            <Link
              href={item.route}
              className={`${
                outfit.className
              } flex items-center justify-center ${
                useBlackText ? "text-black" : "text-white"
              } no-underline font-semibold text-sm leading-[21px] tracking-[0.02em] uppercase whitespace-nowrap px-3 py-2 rounded-xl`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={`${outfit.className} bg-[#E0AE54] ${
          useBlackText ? "text-black" : "text-white"
        } border-none rounded-lg px-4 py-3 leading-[21px] font-semibold uppercase text-sm cursor-pointer transition-colors duration-300 hover:bg-[#B18F54]`}
      >
        SCHEDULE A SPACE
      </button>
    </nav>
  );
}

export default NavBar;
