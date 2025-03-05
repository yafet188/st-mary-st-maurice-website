import Link from "next/link";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import { Outfit } from "next/font/google";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400"] }); // Load the font
const outfit = Outfit({ subsets: ["latin"], weight: ["700", "500"] }); // Load the font

export default function Footer() {
  return (
    <footer
      className={`footer sm:footer-horizontal bg-base-200 text-base-content p-12`}
      // "footer" (daisyUI) applies default footer styles
      // "sm:footer-horizontal" makes the footer layout horizontal on small screens and larger
      // "bg-base-200" sets a light gray background color
      // "text-base-content" ensures the text color matches the theme
      // "p-10" adds padding of 10 units
    >
      <div>
        <aside>
          <Link href="/">
            <Image
              src="/Images/Logos/Logo.png"
              alt="logo"
              width={206.97}
              height={154.03}
            />
          </Link>
          <div
            className={`${urbanist.className} text-[18px] font-[400] leading-[27px] tracking-[0.02em] text-[#E8E9EB] w-[318px] h-[54px]`}
          >
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=388+Ottawa+St+South,+Kitchener,+Ontario,+Canada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-blue underline">388 Ottawa St. South</p>
              <p className="text-blue underline">Kitchener, Ontario, Canada</p>
              <p className="text-blue underline">N2M3P4</p>
            </Link>
            <div
              className={`${urbanist.className} text-[18px] font-[400] leading-[27px] tracking-[0.02em] text-[#E8E9EB] w-[320px] h-[27px]`}
            >
              <a>+1 519 570 2199</a>
            </div>
          </div>
        </aside>
      </div>
      <div>
        <h6 className={outfit.className} style={{ fontWeight: 700 }}>
          SMSM CHURCH
        </h6>
        <Link href="/Home" legacyBehavior>
          <a
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            HOME
          </a>
          {/* "link" (daisyUI) applies link styles */}
          {/* "link-hover" ensures styling when hovered */}
        </Link>
        <Link href="/AboutUs" legacyBehavior>
          <a
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            ABOUT
          </a>
        </Link>
        <Link href="/Ministries" legacyBehavior>
          <a
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            MINISTRIES
          </a>
        </Link>
        <Link href="/YouthKidsServices" legacyBehavior>
          <a
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            SUNDAY SCHOOL
          </a>
        </Link>
      </div>
      <div>
        <h6 className={outfit.className} style={{ fontWeight: 700 }}>
          ENGAGEMENT & RESOURCES
        </h6>
        <Link href="/about-us" legacyBehavior>
          <a
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            SCHEDULE
          </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            MEDIA
          </a>
        </Link>
        <Link href="/jobs" legacyBehavior>
          <a
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            RESOURCES
          </a>
        </Link>
      </div>
      <div>
        <h6 className={outfit.className} style={{ fontWeight: 700 }}>
          CONNECT AND GIVE
        </h6>
        <Link href="/Donation" legacyBehavior>
          <a
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            DONATE
          </a>
        </Link>
        <Link href="/privacy-policy" legacyBehavior>
          <a
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            CONTACT US
          </a>
        </Link>
      </div>
    </footer>
  );
}

/* Subscribe & Phone Number code
<div>
        <h6 className={outfit.className} style={{ fontWeight: 700 }}>
          STAY CONNECTED WITH OUR CHURCH FAMILY
        </h6>
        <form className="w-80">
          {}
          <label
            htmlFor="email"
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          
            EMAIL
          </label>
          <div className="join">
            <input
              id="email"
              type="email"
              placeholder="username@email.com"
              className="input input-bordered join-item"
              // "input" (daisyUI) applies input field styling
              // "input-bordered" adds a border around the input
              // "join-item" ensures proper spacing/alignment inside the "join" container
            />
            <button type="submit" className="btn btn-primary join-item">
              Subscribe
            </button>
          </div>
        </form>
        <form className="w-80">
          <label
            htmlFor="phone"
            className={`${outfit.className} text-[14px] font-light leading-[21px] tracking-[0.02em] text-white opacity-[79.84%] w-[230px] h-[21px]`}
          >
            PHONE NUMBER
          </label>
          <div className="join">
            <input
              id="phone"
              type="tel"
              placeholder="+1 000-000-000"
              className="input input-bordered join-item"
            />
            <button type="submit" className="btn btn-primary join-item">
              Subscribe
            </button>
          </div>
        </form>
      </div>
*/
