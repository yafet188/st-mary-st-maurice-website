import React from "react";
import Image from "next/image";
import { Urbanist, Outfit, Raleway } from "next/font/google";

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

const fathers = [
  {
    name: "HEG. ATHANASIUS ISKANDER",
    image: "/Images/ContactUs/AbounaAthanasius.png",
  },
  {
    name: "FR. JEREMIAH ATTAALLA",
    image: "/Images/ContactUs/AbounaJeremiah.png",
  },
  {
    name: "FR. THEODORE RIZKALLA",
    image: "/Images/ContactUs/FatherTheodore.png",
  },
];

const AboutUs = () => {
  {
    /* ------------------------------------ABOUT US SECTION ------------------------------------- */
  }
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden pt-[104.26px]">
      {/* Header Section w/ Cross Image */}
      <div className="absolute inset-0 z-0 max-w-[1276px] h-[1276px]">
        <Image
          src="/Images/AboutUs/CircleCross.png"
          alt="Golden Cross"
          fill
          className="object-cover"
        />
      </div>

      {/* 1st Section */}
      <div className="relative z-10 w-full flex flex-row items-start">
        {/* Our Story Component */}
        <div className="w-1/3 sticky top-0 h-screen flex flex-col items-center pt-[32px] z-20">
          <div className="w-[228px] h-[327px] flex flex-col justify-between">
            {/* OUR STORY */}
            <div className="w-[228px] h-[160px]">
              <p
                className={`${outfit.className} font-[700] text-[64px] leading-[80px] tracking-[-0.02em] text-[#0D111D]`}
              >
                OUR STORY
              </p>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className={`${outfit.className} w-[123px] h-[45px] font-[600] rounded-[8px] px-[16px] py-[16px] gap-[6px] text-[14px] leading-[150%] tracking-[0.02em] bg-[#E0AE54] text-white flex items-center`}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Story Text Components */}
        <div className="w-2/3 h-screen overflow-y-scroll pr-[60px] flex flex-row gap-[80px]">
          {/* First Row */}
          <div className="w-[462px] h-[2841.74px] gap-[80px] flex flex-col justify-center items-start">
            {/* Our Beginnings Text */}
            <div className="w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Our Beginnings Header */}
              <div className="w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Our Beginnings: A Foundation of Faith
                </p>
              </div>

              {/* Our Beginnings Body */}
              <div className="w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  In the late 1970s, Father Athanasius, alongside Father Mittias
                  El Souriany (later His Grace Bishop Reweis), began serving the
                  faithful in Kitchener, marking the nascent stages of our
                  church's journey. By 1980, as a deacon and secretary, Father
                  Athanasius laid the groundwork for our first church building
                  in Cambridge, acquired through faith-filled perseverance and a
                  bank loan, ready by Christmas Eve 1981.
                </p>
              </div>
            </div>

            {/* Old Church Image */}
            <div>
              <Image
                src="/Images/AboutUs/OldChurchImage.png"
                alt="Old Church Image"
                width={462}
                height={327}
                className="object-cover object-bottom rounded-[16px] w-[462px] h-[327px]"
              />
            </div>

            {/* Renewing Sanctuary Text */}
            <div className="w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Renewing Sanctuary Header */}
              <div className="w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Renewing Sanctuary: The First Renovation
                </p>
              </div>

              {/* Renewing Sanctuary Body */}
              <div className="w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  Our new building underwent extensive renovations to align with
                  Orthodox traditions, including reorientation towards the East
                  and the addition of a sanctuary, enhancing the spiritual
                  ambiance. This transformation, completed in the summer of
                  1996, was inaugurated by His Grace Bishop Reweis, using the
                  same shovel that broke ground for another church twelve years
                  prior, symbolizing continuity and growth.
                </p>
              </div>
            </div>

            {/* Pope Shenouda Image */}
            <div>
              <Image
                src="/Images/AboutUs/PopeShenouda.png"
                alt="Pope Shenouda"
                width={462}
                height={327}
                className="object-cover object-top rounded-[16px] w-[462px] h-[327px]"
              />
            </div>

            {/* Evolving With Grace Text */}
            <div className="w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Evolving With Grace Header */}
              <div className="w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Evolving with Grace: The Second Renovation
                </p>
              </div>

              {/* Evolving With Grace Body */}
              <div className="w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  As our community continued to flourish, the need for space
                  became evident again. In 2001, we embarked on another
                  expansion, enhancing our church to include additional Sunday
                  School rooms and accessibility features, ensuring our
                  facilities could welcome everyone, embodying Christ's
                  inclusive love.
                </p>
              </div>
            </div>

            {/* St Mary's Martyrs Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryMartyrs.jpg"
                alt="StMaryMartyrs"
                width={462}
                height={327}
                className="object-cover object-[0_22%] rounded-[16px] w-[462px] h-[327px]"
              />
            </div>

            {/* Church Retreat Text */}
            <div className="w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Church Retreat Header */}
              <div className="w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  The Church Retreat Initiative
                </p>
              </div>

              {/* Church Retreat Body */}
              <div className="w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  Embracing a broader mission, in 2005, our church acquired a
                  scenic 90-acre parcel in Cambridge, envisaged as a spiritual
                  retreat for our congregation and sister churches. This
                  ambitious project underlines our commitment to serving not
                  just our local community but the broader Coptic Orthodox
                  community in Southwestern Ontario.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="w-[462px] h-[2841.74px] gap-[80px] flex flex-col justify-center items-start">
            {/* Old Church Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryFront.jpg"
                alt="St Mary Front"
                width={462}
                height={327}
                className="object-cover object-center rounded-[16px] w-[462px] h-[327px]"
              />
            </div>

            {/* Journey of Expansion Text */}
            <div className="w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Journey of Expansion  Header */}
              <div className="w-[462px] h-[55px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Journey of Expansion: From Cambridge to Kitchener
                </p>
              </div>

              {/* Journey of Expansion Body */}
              <div className="w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  Returning as a priest in 1989, Father Athanasius witnessed the
                  burgeoning of our small congregation into a vibrant community,
                  necessitating a move in 1994 to a larger church in Kitchener
                  to accommodate our growing family. This move heralded a new
                  chapter, with the first Liturgy celebrated in our new home on
                  June 12, 1994, and the hosting of the Coptic Youth East Canada
                  Convention, cementing our church's role in the spiritual life
                  of Eastern Canada's youth.
                </p>
              </div>
            </div>

            {/* Pope Shenouda Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryDarkOutside.jpg"
                alt="St Mary Dark Outside"
                width={462}
                height={327}
                className="object-cover object-center rounded-[16px] w-[462px] h-[327px]"
              />
            </div>

            {/* Pope Shenouda Text */}
            <div className="w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Pope Shenouda Header */}
              <div className="w-[462px] h-[24px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Blessing from His Holiness, Pope Shenouda III
                </p>
              </div>

              {/* Pope Shenouda Body */}
              <div className="w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  The pinnacle of our early years was the consecration of our
                  church by His Holiness Pope Shenouda in November 1996. This
                  moment marked our church not just as a building but as a
                  consecrated home for our faith, solidified by the imprint of
                  His Holiness' image on our cornerstone.
                </p>
              </div>
            </div>

            {/* St Mary's Martyrs Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryOutsideForecast.jpg"
                alt="St Mary Outside Forecast"
                width={462}
                height={327}
                className="object-cover object-center rounded-[16px] w-[462px] h-[327px]"
              />
            </div>

            {/* Boundaries Text */}
            <div className="w-[462px] h-[327px] gap-[16px] justify-center flex flex-col items-center">
              {/* Boundaries Header */}
              <div className="w-[462px] h-[55px]">
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
                >
                  Extending Our Boundaries: Acquiring Adjacent Properties
                </p>
              </div>

              {/* Boundaries Body */}
              <div className="w-[462px] h-[192px]">
                <p
                  className={`${raleway.className} font-[500] text-[16px] leading-[150%] tracking-[0.02em] text-[#151B2F]`}
                >
                  Our church's footprint grew with the acquisition of
                  neighbouring properties in 2002 and 2003, providing space for
                  future development and the potential for a chapel dedicated to
                  Saint Maurice, reflecting our deepening roots in the community
                  and our forward-looking vision.
                </p>
              </div>
            </div>

            {/* St Mary's Martyrs Image */}
            <div>
              <Image
                src="/Images/AboutUs/StMaryChoir.jpg"
                alt="St Mary Choir"
                width={462}
                height={327}
                className="object-cover object-center rounded-[16px] w-[462px] h-[327px]"
              />
            </div>
          </div>

          {/* Gradient Fade */}
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent to-white z-30 pointer-events-none" />
        </div>
      </div>

      {/* 2nd Section */}
      <div className="w-full h-[900px] p-[100px] gap-[60px] bg-[#FEFAF1] flex flex-col">
        {/* Cross Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/Images/AboutUs/GoldCross.png"
            alt="Gold Cross"
            width={92}
            height={92}
          />
        </div>

        {/* Guiding Lights Text */}
        <div className="w-full flex flex-col items-center text-center gap-[16px]">
          {/* Header */}
          <div className="w-[898px] h-[43px]">
            <h3
              className={`${outfit.className} font-[700] text-[36px] leading-[120%] tracking[0.02em] text-[#695532]`}
            >
              Guiding Lights: The Fathers of SMSM Church
            </h3>
          </div>

          {/* Body */}
          <div className="w-[676px] h-[81px]">
            <p
              className={`${urbanist.className} font-[400] text-[18px] leading-[150%] tracking-[0.02em] text-[#896F41]`}
            >
              The spiritual lineage of SMSM Church is adorned with Fathers whose
              dedication and guidance have illuminated our path. With a
              commitment that transcends time, these shepherds have nurtured the
              faith, unity, and growth of our community. 
            </p>
          </div>
        </div>

        {/* Fathers Images */}
        <div className="relative flex justify-center items-center">
          {/* Cross image */}
          <div className="flex justify-center items-center space-x-[24px] relative z-10 gap-[108px]">
            {fathers.map((father) => (
              <div
                key={father.name}
                className="w-[291px] flex flex-col items-center relative"
              >
                {/* Cross image - Positioned behind */}
                <div className="absolute top-[-45px] z-[-10]">
                  <Image
                    src="/Images/AboutUs/BigCircle.png"
                    alt="Cross"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>

                {/* Father's Image - Positioned on top */}
                <div className="relative w-[188.54px] h-[200px] z-10 rounded-full overflow-hidden">
                  <Image
                    src={father.image}
                    alt={father.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name Text */}
                <p
                  className={`${outfit.className} font-[700] text-[20px] leading-[120%] tracking-[0.02em] mt-[50px] text-center text-[#896F41]`}
                >
                  {father.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Get In Touch Button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className={`${outfit.className} w-[133px] h-[45px] font-[600] rounded-[8px] px-[16px] py-[16px] gap-[6px] text-[14px] leading-[150%] tracking-[0.02em] bg-[#7A0C02] text-white flex items-center`}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
