import React from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import CalendarViewSwitcherWrapper from "../components/Calendar/CalenarViewSwitcherWrapper";
import { Urbanist, Outfit, Raleway, Zilla_Slab } from "next/font/google";
import ImageTextBlock from "../components/ImageTextBlock";
import MahraganKids from "../../public/Images/Home/MahraganKids.jpg";
import Choir from "../../public/Images/Home/Choir.jpeg";
import Tasbeha from "../../public/Images/Home/St.MaryTasbeha.jpeg";
import Hall from "../../public/Images/Home/St.MauriceHall.jpeg";
import Priests from "../../public/Images/Home/Priests.jpeg";
import Gym from "../../public/Images/Home/Gym.jpeg";
import Tree from "../../public/Images/Home/St.MaryTree.jpeg";
import Box from "../../public/Images/Home/PrayerBox.png";
import Kids from "../../public/Images/Home/KidsPaintings.png";
import Abouna from "../../public/Images/Home/AbounasHand.png";

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
const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  {
    /* ------------------------------------HOME PAGE------------------------------------- */
  }

  return (
    <>
      <div className="relative w-full min-h-screen overflow-visible">
        {/* GLOBAL BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 transform translate-y-[-28.5%]">
            <Image
              src="/Images/StMaryChurchBackground.png"
              alt="Home Church"
              fill
              priority
              className="object-cover brightness-[1.1] transition-all duration-500"
              style={{
                objectPosition: "62.5%",
              }}
            />
          </div>
        </div>
        <div className="bg-[#171E34] overflow-visible">
          <div className="w-full h-[1000px] md:h-[800px] sm:h-[750px] pt-[100px] relative overflow-visible">
            {/* 1st Header Section */}
            <div className="w-[1512px] h-[548px] mx-auto relative px-[100px] flex justify-center items-center gap-[24px]">
              {/* Text Components Frame*/}
              <div className="w-[1124px] h-[411px] gap-[26px] flex flex-col items-center justify-center">
                {/* Text Components */}
                <div className="flex flex-col items-center">
                  {/* Living Orthodoxy */}
                  <div className="w-[267px] h-[41px] rounded-[25px] py-[6px] px-[14px] gap-[8px] bg-[#FDEFD5] shadow-[0_6px_24px_rgba(0,0,0,1)]">
                    <p
                      className={`${zillaSlab.className} w-[239px] h-[29px] font-[600] text-[24px] leading-[120%] tracking-[0.02em] text-[#896F41] drop-shadow-md`}
                    >
                      LIVING ORTHODOXY
                    </p>
                  </div>

                  {/* Faith, Family, Fellowship */}
                  <div className="w-full h-[80px]">
                    <h3
                      className={`${outfit.className} font-[700] text-[64px] tracking-[0.02em] text-white drop-shadow-xl`}
                      style={{
                        textShadow: "2px 4px 6px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      FAITH, FAMILY, FELLOWSHIP
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yellow Text Section */}
        <div className="relative bg-[rgba(60,0,0,0.2)] z-10 -mt-[150px] overflow-visible">
          <div className="w-full h-[380px] mx-auto px-[100px] rounded-[64px] gap-[24px] flex items-center justify-between bg-[rgba(177,143,84,0.8)] z-10">
            {/* Text and Button Section */}
            <div className="w-full h-[144px] gap-[158px] flex justify-between items-center">
              {/* Text */}
              <p
                className={`${outfit.className} w-[969px] h-[144px] font-[700] text-[40px] leading-[120%] tracking-[0.02em] text-white`}
              >
                Join us at St. Mary and St. Maurice's Coptic Orthodox Church,
                where ancient traditions meet modern hearts in Kitchener.
              </p>

              {/* Button */}
              <div>
                <button
                  className={`${outfit.className} w-[185px] h-[45px] bg-[#171E34] text-white font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] 
                    flex items-center justify-center transition duration-300 ease-out hover:bg-red-800`}
                >
                  VISIT US THIS SUNDAY
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CALENDAR SECTION */}
        <section
          className="relative w-full h-[2175px] bg-[#430600] text-white z-0"
          style={{
            clipPath: "polygon(50% 30%, 100% 0, 100% 100%, 0 100%, 0 0)",
          }}
        >
          {/* Cross overlapping the triangle tip */}
          {/* Faint Cross in Calendar Background */}
          <div className="absolute top-[75%] left-[-4%] w-[300px] h-[300px] opacity-100 z-0 pointer-events-none">
            <Image
              src="/Images/Home/Calendar/Cross.png"
              alt="Faint Calendar Background Cross"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute top-[70%] left-[-2.5%] w-[300px] h-[300px] opacity-100 z-0 pointer-events-none">
            <Image
              src="/Images/Home/Calendar/Circle.png"
              alt="Faint Calendar Background Circle"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          <div className="absolute top-[31.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <Image
              src="/Images/Home/WhiteCross.png"
              alt="Gold Cross"
              width={40}
              height={40}
            />
          </div>

          <div className="max-w-[1512px] px-[100px] pt-[263px] pb-[40px] mx-auto"></div>
          <section className="w-full md:px-12 xl:px-24 py-110 bg-[#430600]">
            <div className="max-w-[1312px] mx-auto space-y-10">
              <div className="text-center">
                <h2
                  className={`${outfit.className} text-[36px] md:text-3xl font-[700] leading-[120%] tracking-[0.02em] text-white`}
                >
                  UPCOMING EVENTS & COMMUNITY ANNOUNCEMENTS
                </h2>
                <p
                  className={`${outfit.className} text-[20px] md:text-base mt-2 font-[700] leading-[120%] tracking-[0.02em] text-white`}
                >
                  Stay Updated with Our Upcoming Church Events and Activities
                </p>
              </div>
              <CalendarViewSwitcherWrapper />
            </div>
          </section>
        </section>
      </div>

      {/* 35 YEARS OF SERVICE VIDEO SECTION */}
      <div className="w-full pt-[100px] pr-[100px] pl-[100px] pb-[100px] gap-[80px] bg-[#E8E9EB] items-center text-center flex flex-col">
        <h3
          className={`${outfit.className} font-bold text-4xl leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
        >
          35 YEARS OF SERVICE
        </h3>

        {/* 🎥 Video Block */}
        <video
          className="max-w-7xl w-full h-auto rounded-lg shadow-lg"
          controls
          autoPlay={false}
          loop={true}
        >
          <source src="/videos/Abouna35thAnniversary.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Youth & Kids */}
      <ImageTextBlock
        inverted={false}
        showTag={true}
        roundedText="Youth & Kids Services"
        roundedBgColor="#FDEFD5"
        roundedTextColor="#896F41"
        title="Engaging and Inspiring Youth & Kids"
        titleColor="#000000"
        textColor=""
        image={MahraganKids}
        altText="A picture of the kids recieving rewards from Mahragan."
        bgColor="#FEFAF1"
        btnTxt="EXPLORE ALL MINISTRIES"
        btnColor="#7A0C02"
        btnHoverColor="#171E34"
        btnTextColor="#FFFFFF"
      >
        Explore a variety of engaging programs for youth and kids at our church,
        from Sunday School to Kids Camp and Fine Arts Service, all crafted to
        nurture faith and foster personal growth.
      </ImageTextBlock>

      {/* Adults Services */}
      <ImageTextBlock
        inverted={true}
        showTag={true}
        roundedText="Adults Services"
        roundedBgColor="#F2E7E6"
        roundedTextColor="#430701"
        title="Diverse Ministries for Adults"
        titleColor="#000000"
        textColor=""
        image={Choir}
        altText="A picture of the choir from St. Mary's."
        bgColor="#FFFFFF"
        btnTxt="GET INVOLVED TODAY"
        btnColor="#FFFFFF"
        btnHoverColor=""
        btnTextColor="#7A0C02"
        borderColor="#7A0C02"
      >
        Join various adult ministries, from Family and Senior ministries to
        Young Adult Ministries and the Adults Choir. Enrich your spiritual and
        social life with us.
      </ImageTextBlock>

      {/* Educational Services */}
      <ImageTextBlock
        inverted={false}
        showTag={true}
        roundedText="Educational Services"
        roundedBgColor="#E8E9EB"
        roundedTextColor="#0A0D16"
        title="Nurture Your Spiritual Intelligence & Join Our Educational Services"
        titleColor="#FFFFFF"
        textColor="#E8E9EB"
        image={Tasbeha}
        altText="A picture of youth doing Tasbeha in St. Mary's"
        bgColor="#171E34"
        btnTxt="CHECK NOW"
        btnColor="#171E34"
        btnHoverColor=""
        btnTextColor="#E0AE54"
        borderColor="#E0AE54"
      >
        Deepen your faith, illuminate your life and empower your spiritual
        journey with our educational services.
      </ImageTextBlock>

      {/* Community Services */}
      <ImageTextBlock
        inverted={true}
        showTag={true}
        roundedText="Community Services"
        roundedBgColor="#FDEFD5"
        roundedTextColor="#896F41"
        title="Serving Hearts and Enriching the Community"
        titleColor="#171E34"
        textColor="#151B2F"
        image={Hall}
        altText="A picture of St. Maurice Hall"
        bgColor="#E8E9EB"
        btnTxt="ALL COMMUNITY MINISTRIES"
        btnColor="#171E34"
        btnHoverColor=""
        btnTextColor="#FFFFFF"
        borderColor="#171E34"
      >
        Join our dynamic Community Ministries to make a real difference.
        Participate today and elevate your impact; everyone has a role.
      </ImageTextBlock>

      {/* Priests*/}
      <ImageTextBlock
        inverted={false}
        showTag={true}
        roundedText=""
        roundedBgColor=""
        roundedTextColor=""
        title="Where Faith Meets Family and Fellowship"
        titleColor="#000000"
        textColor=""
        image={Priests}
        altText="A picture of priests."
        bgColor="#FEFAF1"
        btnTxt="LEARN MORE ABOUT SMSM"
        btnColor="#7A0C02"
        btnHoverColor="#171E34"
        btnTextColor="#FFFFFF"
      >
        St. Mary and St. Maurice's Coptic Orthodox Church in Kitchener embodied
        a fusion of Orthodox tradition with a vibrant community spirit. Here,
        faith, education, and service unite, fostering spiritual growth and
        compassionate outreach. All are welcome to explore faith and journey
        together in Christ's love.
      </ImageTextBlock>

      {/* Book & Schedule */}
      <ImageTextBlock
        inverted={true}
        showTag={true}
        roundedText=""
        roundedBgColor=""
        roundedTextColor=""
        title="Book Your Space & Plan Your Event"
        titleColor="#000000"
        textColor=""
        image={Gym}
        altText="A picture of the St. Maurice gym."
        bgColor="#FFFFFF"
        btnTxt="SCHEDULE TODAY"
        btnColor="#FFFFFF"
        btnHoverColor=""
        btnTextColor="#000000"
        borderColor="#000000"
      >
        Join various adult ministries, from Family and Senior ministries to
        Young Adult Ministries and the Adults Choir. Enrich your spiritual and
        social life with us.
      </ImageTextBlock>

      {/* Explore Our Spiritual Resources */}
      <Hero
        overlayColor="#171E34EB"
        image={Tree}
        altText="Vespers in St Mary's church"
        textPosition="Center"
        title={<div className="pt-[50px]">Explore Our Spiritual Resources</div>}
        titleSize="36px"
        textColor="white"
        textWidth="540px"
        descriptionText="We provide resources for spiritual growth. Discover Orthodox teachings, prayer guides, and scholarly articles. Access sermons, educational tools, and community resources to deepen your faith."
        descriptionColor="#E8E9EB"
        descriptionSize="18px"
        overlayOpacity={0.8}
        height="500px"
        imagePlacement="40%"
        buttonText="ACCESS SPIRITUAL RESOURCES"
        buttonColor="#E0AE54"
        buttonTextColor="#171E34"
        buttonLink=""
      ></Hero>

      {/* Unite in Generosity */}
      <ImageTextBlock
        inverted={true}
        showTag={true}
        roundedText=""
        roundedBgColor=""
        roundedTextColor=""
        title="Unite in Generosity"
        titleColor="#000000"
        textColor=""
        image={Box}
        altText="A picture of Prayer Box."
        bgColor="#E8E9EB"
        btnTxt="DONATE"
        btnColor="#FFFFFF"
        btnHoverColor=""
        btnTextColor="#000000"
        borderColor=""
      >
        Your giving creates a legacy that inspires and uplifts. Help us sustain
        our programs, preserve traditions, and encourage new ones.
      </ImageTextBlock>

      {/* KIDS PAINTINGS */}
      <ImageTextBlock
        inverted={false}
        showTag={true}
        roundedText=""
        roundedBgColor="#FFFFFF"
        roundedTextColor=""
        title="Serve with Us and Volunteer"
        titleColor="#000000"
        textColor=""
        image={Kids}
        altText="A picture of kids with paintings."
        bgColor="#FFFFFF"
        btnTxt="VOLUNTEER"
        btnColor="#FFFFFF"
        btnHoverColor=""
        btnTextColor="#000000"
        borderColor="Black"
      >
        Join us in making a meaningful impact. Share your talents and time to
        enrich our community through acts of service and faith. Together, we can
        strengthen our bonds and uplift those in need.
      </ImageTextBlock>

      {/* RENEW YOUR SPIRIT */}
      <Hero
        overlayColor="#E0AE546B"
        image={Abouna}
        altText="Vespers in St Mary's church"
        textPosition="Center"
        title={<div className="pt-[50px]">Renew Your Spirit</div>}
        titleSize="36px"
        textColor="white"
        textWidth="540px"
        descriptionText="Schedule a confidential confession with your father, 
        and find peace, guidance, and the transformative grace of Christ as you embrace a path of healing and 
        reconciliation."
        descriptionColor="#E8E9EB"
        descriptionSize="18px"
        overlayOpacity={0.8}
        height="500px"
        imagePlacement="20%"
        buttonText="SCHEDULE A CONFESSION"
        buttonColor="#E0AE54"
        buttonTextColor="#FFFFFF"
        buttonLink=""
        contentAlignment="left"
        textAlignment="left"
      ></Hero>

      {/* Captured Moments */}
      <div className="w-full bg-[#E8E9EB] flex flex-col items-center pb-25">
        <Hero
          backgroundColor="#E8E9EB"
          altText="Priests and Bishop in Altar"
          textPosition="Center"
          subtitle="Captured Moments"
          title={<div className="pt-[10px]">A look back at our events</div>}
          titleSize="36px"
          textColor="#0A0D16"
          textWidth="522px"
          descriptionText="Explore our gallery to relive moments at St Mary and St Maurice's. From celebrations to workship, each photo tells a story of faith, devotion and community."
          descriptionColor="#151B2F"
          descriptionSize="18px"
          overlayOpacity={0.8}
          height="500px"
          imagePlacement="40%"
          buttonText="VIEW OUR GALLERY"
          buttonColor="White"
          buttonTextColor="#171E34"
          buttonLink=""
        ></Hero>

        <div className="relative w-full max-w-[1400px] aspect-[2.5/1] rounded-xl overflow-hidden shadow-md mx-auto">
          <Image
            src="/images/Clergy.jpg"
            alt="Clergy in Altar"
            fill
            className="object-cover"
          />

          {/* Centered Play Button */}
          <a
            href="https://photos.google.com/share/AF1QipOMYuoJTuEZ0hQfWszzH5GW4ifZLQI11A8lVFQlEgFLCvDWNKqr7Yzd97XFFitCtg?key=eElIVDlka3k5YVM3LXlNOGV4MDVkcXRlOTdBTjhB"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white p-4 rounded-full shadow-lg hover:scale-105 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#7A0C02]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Reach Out Form*/}
      <div className="w-full bg-[#0D111D] py-[100px] px-6 md:px-12 flex border border-[#646877] justify-center">
        {/* Outer Container for Text & Form */}
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left Side - Text Container */}
          <div className="flex-1 flex flex-col justify-center gap-6 h-full">
            {/* Heading and description */}
            <h3
              className={`${urbanist.className} text-[32px] md:text-[52px] font-[700] leading-[120%] tracking-[-0.02em] text-[#ffffff]`}
            >
              REACH OUT
            </h3>
            <p
              className={`${urbanist.className} text-[18px] md:text-[18px] font-[400] leading-[150%] tracking-[0.02rem] text-[#E8E9EB]`}
            >
              Please contact us with any questions regarding our ministries,
              masses, or upcoming events. We are here to assist you.
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
          <div className="flex-1 bg-[#0A0D16] text-white p-6 md:p-8 gap-12 rounded-[24px] border border-[#646877] shadow-lg">
            {/* Form Placeholder */}
            <form className="w-full flex flex-col gap-[24px]">
              {/* Input Fields */}
              {[
                { label: "NAME", placeholder: "First & Last Name" },
                { label: "EMAIL ADDRESS", placeholder: "email@provider.com" },
                { label: "PHONE NUMBER", placeholder: "000-000-0000" },
              ].map((field) => (
                <div key={field.label} className="flex flex-col gap-[8px]">
                  <label
                    className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
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
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
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
                  className={`${outfit.className} w-full h-[48px] rounded-[8px] px-[12px] py-[16px] text-[14px] font-semibold bg-[#E0AE54] text-white`}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
