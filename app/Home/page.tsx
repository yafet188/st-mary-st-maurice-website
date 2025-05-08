import React from "react";
import Image from "next/image";
import Hero from "../components/Hero";
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
      <div className="w-full h-[650px] bg-[#171E34] pt-[100px] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/StMaryChurchBackground.png"
            alt="Home Church"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* 1st Header Section */}
        <div className="w-[1512px] h-[548px] mx-auto relative z-10 px-[100px] flex justify-center items-center gap-[24px]">
          {/* Text Components Frame*/}
          <div className="w-[1124px] h-[411px] gap-[26px] flex flex-col items-center justify-center">
            {/* Text Components */}
            <div className="flex flex-col items-center">
              {/* Living Orthodoxy */}
              <div className="w-[267px] h-[41px] rounded-[25px] py-[6px] px-[14px] gap-[8px] bg-[#FDEFD5]">
                <p
                  className={`${zillaSlab.className} w-[239px] h-[29px] font-[600] text-[24px] leading-[120%] tracking-[0.02em] text-[#896F41]`}
                >
                  LIVING ORTHODOXY
                </p>
              </div>

              {/* Faith, Family, Fellowship */}
              <div className="w-full h-[80px]">
                <h3
                  className={`${outfit.className} font-[700] text-[64px] tracking-[0.02em] text-white`}
                >
                  FAITH, FAMILY, FELLOWSHIP
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Text Section */}
      <div className="w-full bg-[#3C0000]">
        <div className="w-full h-[380px] mx-auto px-[100px] rounded-[64px] gap-[24px] flex items-center justify-between bg-[rgba(177,143,84,0.8)]">
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
        className="relative w-full h-[1638px] bg-[#3C0000] text-white"
        style={{
          clipPath: "polygon(50% 30%, 100% 0, 100% 100%, 0 100%, 0 0)",
        }}
      >
        <div className="max-w-[1512px] px-[100px] pt-[263px] pb-[74px] mx-auto"></div>

        <section className="w-full px-6 md:px-12 xl:px-24 py-50 bg-[#3C0000]">
          <div className="max-w-[1312px] mx-auto space-y-10">
            <div className="flex justify-center items-center">
              <Image
                src="/Images/Home/WhiteCross.png"
                alt="Gold Cross"
                width={40}
                height={40}
              />
            </div>
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

            {/* View toggle buttons */}
            <div className="flex justify-center gap-4">
              <button className="bg-transparent border border-white text-white px-4 py-2 rounded">
                DAY
              </button>
              <button className="bg-white text-[#4D0B09] px-4 py-2 rounded font-bold">
                WEEK
              </button>
              <button className="bg-transparent border border-white text-white px-4 py-2 rounded">
                MONTH
              </button>
            </div>

            {/* We'll add the week grid and event cards next... */}
          </div>
        </section>
      </section>

      {/* 35 YEARS OF SERVICE VIDEO SECTION */}
      <div className="w-full h-[1040px] pt-[100px] pr-[100px] pl-[100px] gap-[80px] bg-[#E8E9EB] items-center text-center flex flex-col">
        <h3
          className={`${outfit.className} font-bold text-4xl leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
        >
          35 YEARS OF SERVICE
        </h3>
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
        title="Book Your Space & Plan Your Event"
        titleColor="#000000"
        textColor=""
        image={Box}
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
    </>
  );
}
