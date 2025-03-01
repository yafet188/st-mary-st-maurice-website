import Link from "next/link";
import Image from "next/image";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <div className="smsm-logo">
        <Link href="/">
          <Image
            src="/Images/Logos/NavBarLogo.png"
            alt="logo"
            width={102.31}
            height={78.63}
          />
        </Link>
      </div>

      <ul className="nav-links">
        <li className="nav-item">
          <Link href="/Ministries">MINISTRIES ▼</Link>
        </li>
        <li className="nav-item nav-item-events">
          <Link href="/UpcomingEvents">EVENTS</Link>
        </li>
        <li className="nav-item">
          <Link href="/AboutUs">ABOUT US</Link>
        </li>
        <li className="nav-item">
          <Link href="/ContactUs">CONTACT US</Link>
        </li>
        <li className="nav-item">
          <Link href="/Donation">DONATION</Link>
        </li>
        <li className="nav-item">
          <Link href="/Volunteer">VOLUNTEER</Link>
        </li>
      </ul>

      <button className="cta-button">SCHEDULE A SPACE</button>
    </nav>
  );
}

export default NavBar;
