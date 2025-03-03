import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="footer sm:footer-horizontal bg-base-200 text-base-content p-10"
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
              width={102.31}
              height={78.63}
            />
          </Link>
          <p>388 Ottawa St. South</p>
          <p>Kitchener, Ontario, Canada</p>
          <p>N2M 3P4</p>
        </aside>
      </div>
      <div>
        <h6 className="footer-title">
          {/* "footer-title" (daisyUI) styles this like a section heading */}
          SMSM CHURCH
        </h6>
        <Link href="/Home" legacyBehavior>
          <a className="link link-hover">HOME</a>
          {/* "link" (daisyUI) applies link styles */}
          {/* "link-hover" ensures styling when hovered */}
        </Link>
        <Link href="/design" legacyBehavior>
          <a className="link link-hover">ABOUT</a>
        </Link>
        <Link href="/marketing" legacyBehavior>
          <a className="link link-hover">MINISTRIES</a>
        </Link>
        <Link href="/advertisement" legacyBehavior>
          <a className="link link-hover">SUNDAY SCHOOL</a>
        </Link>
      </div>
      <div>
        <h6 className="footer-title">ENGAGEMENT & RESOURCES</h6>
        <Link href="/about-us" legacyBehavior>
          <a className="link link-hover">SCHEDULE</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="link link-hover">MEDIA</a>
        </Link>
        <Link href="/jobs" legacyBehavior>
          <a className="link link-hover">RESOURCES</a>
        </Link>
      </div>
      <div>
        <h6 className="footer-title">CONNECT AND GIVE</h6>
        <Link href="/terms-of-use" legacyBehavior>
          <a className="link link-hover">DONATE</a>
        </Link>
        <Link href="/privacy-policy" legacyBehavior>
          <a className="link link-hover">CONTACT US</a>
        </Link>
      </div>
      <div>
        <h6 className="footer-title">STAY CONNECTED WITH OUR CHURCH FAMILY</h6>
        <form className="w-80">
          {/* "w-80" sets the width of the form to 80 Tailwind units */}
          <label htmlFor="email" className="block mb-2">
            {/* "block" makes the label a block element so it appears on its own line */}
            {/* "mb-2" adds margin-bottom of 2 units */}
            EMAIL
          </label>
          <div className="join">
            {/* "join" (daisyUI) groups input and button together */}
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
              {/* "btn" (daisyUI) applies button styling */}
              {/* "btn-primary" makes the button use the primary color */}
              Subscribe
            </button>
          </div>
        </form>
        <form className="w-80">
          <label htmlFor="phone" className="block mb-2">
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
    </footer>
  );
}
