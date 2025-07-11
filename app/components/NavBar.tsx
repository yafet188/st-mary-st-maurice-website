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
  const blackTextPages = [
    "/ContactUs",
    "/AboutUs",
    "/YouthKidsServices",
    "/AdultsMinistries",
    "/CommunityServices",
    "/EducationalServices",
    "/Donation",
    "/JoinAMinistryForm",
    "/Volunteer",
    "/UpcomingEvents",
  ];

  const useBlackText = blackTextPages.includes(pathname);

  const [ministriesHovered, setMinistriesHovered] = useState(false);

  const [ministriesTimeout, setMinistriesTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const navItems = [
    { text: "MINISTRIES", route: "/AdultsMinistries" },
    { text: "EVENTS", route: "/UpcomingEvents" },
    { text: "ABOUT US", route: "/AboutUs" },
    { text: "CONTACT US", route: "/ContactUs" },
    { text: "DONATION", route: "/Donation" },
    { text: "VOLUNTEER", route: "/Volunteer" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [youthHovered, setYouthHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = scrolled
    ? "bg-dark/90 backdrop-blur-xl shadow-lg"
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
        {navItems.map((item) => {
          const isMinistries = item.text === "MINISTRIES";
          const liProps = isMinistries
            ? {
                onMouseEnter: () => {
                  if (ministriesTimeout) clearTimeout(ministriesTimeout);
                  setMinistriesHovered(true);
                },
                onMouseLeave: () => {
                  const timeout = setTimeout(() => {
                    setMinistriesHovered(false);
                  }, 150); // 👈 you can tweak this delay
                  setMinistriesTimeout(timeout);
                },
              }
            : {};

          return (
            <li
              key={item.text}
              className="relative inline-block rounded-xl transition-colors duration-300 hover:bg-[#695532]"
              {...liProps}
            >
              <Link
                href={item.route}
                className={`${
                  outfit.className
                } flex items-center justify-center gap-1 ${
                  useBlackText ? "text-black" : "text-white"
                } no-underline font-semibold text-sm leading-[21px] tracking-[0.02em] uppercase whitespace-nowrap px-3 py-2 rounded-xl`}
              >
                {item.text}
                {isMinistries && (
                  <>
                    <Image
                      src={
                        useBlackText
                          ? ministriesHovered
                            ? "/Images/Icons/ArrowUpBlack.png"
                            : "/Images/Icons/ArrowDownBlack.png"
                          : ministriesHovered
                          ? "/Images/Icons/ArrowUpWhite.png"
                          : "/Images/Icons/ArrowDownWhite.png"
                      }
                      alt="dropdown arrow"
                      width={
                        useBlackText
                          ? ministriesHovered
                            ? 16
                            : 24
                          : ministriesHovered
                          ? 16
                          : 24
                      }
                      height={
                        useBlackText
                          ? ministriesHovered
                            ? 16
                            : 24
                          : ministriesHovered
                          ? 16
                          : 24
                      }
                      className={`${
                        ministriesHovered ? "ml-[12px]" : "ml-[4px]"
                      } transition-transform duration-200`}
                    />

                    {/* ▼ Dropdown Panel */}
                    {ministriesHovered && (
                      <ul className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg z-40">
                        <li
                          onMouseEnter={() => setYouthHovered(true)}
                          onMouseLeave={() => setYouthHovered(false)}
                          className="relative"
                        >
                          <Link
                            href="/YouthKidsServices"
                            className="flex items-center justify-between px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-md hover:rounded-xl
l transition-colors duration-200 text-sm font-semibold uppercase tracking-wide"
                          >
                            Youth & Kids Services
                            <Image
                              src="/Images/Icons/ArrowRightBlack.png"
                              alt="right arrow"
                              width={6}
                              height={6}
                            />
                          </Link>

                          {youthHovered && (
                            <ul className="absolute left-full top-0 ml-2 w-64 bg-white rounded-xl shadow-lg z-50">
                              {[
                                "Sunday School",
                                "High School",
                                "Children’s Choir",
                                "Kids Club",
                                "Kids Camp",
                                "Mosaic Club",
                                "Gym",
                                "Fine Arts",
                                "Hymns Practice",
                              ].map((label) => (
                                <li key={label}>
                                  <Link
                                    href={`/YouthKidsServices#${label
                                      .toLowerCase()
                                      .replace(/ /g, "-")
                                      .replace(/’/g, "")}`}
                                    className="block px-4 py-3 text-black hover:bg-[#FEFAF1] transition-colors duration-200 text-sm font-medium"
                                  >
                                    {label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>

                        <li>
                          <Link
                            href="/AdultsMinistries"
                            className="flex items-center justify-between px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-md hover:rounded-xl transition-colors duration-200 text-sm font-semibold uppercase tracking-wide"
                          >
                            Adults Ministries
                            <Image
                              src="/Images/Icons/ArrowRightBlack.png"
                              alt="right arrow"
                              width={6}
                              height={6}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/EducationalServices"
                            className="flex items-center justify-between px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-md hover:rounded-xl transition-colors duration-200 text-sm font-semibold uppercase tracking-wide"
                          >
                            Educational Services
                            <Image
                              src="/Images/Icons/ArrowRightBlack.png"
                              alt="right arrow"
                              width={6}
                              height={6}
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/CommunityServices"
                            className="flex items-center justify-between px-4 py-3 text-black hover:bg-[#FEFAF1] hover:shadow-md hover:rounded-xl transition-colors duration-200 text-sm font-semibold uppercase tracking-wide"
                          >
                            Community Services
                            <Image
                              src="/Images/Icons/ArrowRightBlack.png"
                              alt="right arrow"
                              width={6}
                              height={6}
                            />
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        className={`${outfit.className} bg-[#E0AE54] ${
          useBlackText ? "text-black" : "text-black"
        } border-none rounded-lg px-4 py-3 leading-[21px] font-semibold uppercase text-sm cursor-pointer transition-colors duration-300 hover:bg-[#B18F54]`}
      >
        SCHEDULE A SPACE
      </button>
    </nav>
  );
}

export default NavBar;
