// Importing necessary components and assets
import Hero from "../components/Hero";
import Image from "next/image";
import ImageTextBlock from "../components/ImageTextBlock";
import StMaryChurchRain from "../../public/Images/Donations/StMaryChurchRain.png";
import StMauriceAltar from "../../public/Images/Donations/StMauriceAltar.png";
import StMauriceNave from "../../public/Images/Donations/StMauriceNave.png";
import Circle from "../../public/Images/Donations/Circle.png";
import Cross from "../../public/Images/Donations/Cross.png";

// Main component for the Donation page
export default function DonationPage() {
  return (
    <div>
      {/* Hero section with a title and background */}
      <div className="relative">
        <Hero
          altText="White Background"
          title={
            <div className="pt-30 text-center">
              Support Our Mission
              <br />
              Donate Today
            </div>
          }
          backgroundColor="white"
          titleSize="64px"
          textColor="#0D111D"
          textWidth="1312px"
          overlayColor="#FEFAF1CC"
          overlayOpacity={0.8}
          height="464px"
          imagePlacement="47%"
          textPosition="Center"
          contentAlignment="center"
        />
      </div>

      {/* Decorative elements positioned behind the Hero */}
      <div className="absolute top-0 left-0 w-full h-[464px] pointer-events-none">
        <Image
          src={Circle}
          alt="Decorative Circle"
          className="absolute top-[-150px] left-[50px]"
          width={900}
          height={900}
        />
        <Image
          src={Cross}
          alt="Decorative Cross"
          className="absolute top-[-100px] left-[-100px]"
          width={800}
          height={800}
        />
      </div>

      {/* Content section with ImageTextBlock */}
      <div className="relative z-20">
        <ImageTextBlock
          roundedText=""
          textColor=""
          titleColor=""
          inverted={false} // Normal layout (image on the left, text on the right)
          title="Transform Lives Through Giving"
          image={StMaryChurchRain}
          altText="Fr. Athansius praying over newly wed couple in St. Mary's Church"
          bgColor="#FEFAF1"
        >
          {/* Description of the impact of donations */}
          Every donation helps us enhance our outreach efforts and educational
          programs and maintain our sacred space. With your support, we can
          continue to spread faith and love in our community. 
        </ImageTextBlock>
      </div>

      {/* Second section: Encouraging donations */}
      <ImageTextBlock
        inverted={true} // Inverted layout (image on the right, text on the left)
        roundedText=""
        textColor=""
        titleColor=""
        title="Help Us Make a Difference"
        miniTitle="Building Foundations in Faith"
        image={StMauriceAltar}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#E8E9EB"
        btnTxt="DONATE NOW AN MAKE A DIFFERENCE" // Button text
        btnColor="#171E34" // Button color
      >
        {/* Description of how donations sustain the church's mission */}
        Donations to St. Mary and St. Maurice's Coptic Orthodox Church are a
        step toward sustaining our spiritual mission and community services. 
      </ImageTextBlock>

      {/* Third section: Highlighting donation methods */}
      <ImageTextBlock
        inverted={false} // Normal layout
        roundedText=""
        textColor=""
        titleColor=""
        title="Extend Your Hand, Enrich Our Community"
        miniTitle="Your contribution extends beyond the walls of our building"
        bottomMiniTitle={
          <>
            {/* Additional donation methods */}
            You can donate now via PayPal. <br />
            We also accept e-Transfers to donate@stmarystmaurice.ca.
          </>
        }
        image={StMauriceNave}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#FFFFFF"
        btnTxt="DONATE TODAY" // Button text
        btnColor="#7A0C02" // Button color
      >
        {/* Description of the broader impact of donations */}
        With each gift, we are able to offer more to those in need, enrich
        spiritual lives, and maintain the beauty and accessibility of our sacred
        spaces.
        <br />
        <br />
        Donate today and be a cornerstone in our ongoing journey of faith and
        service.
      </ImageTextBlock>
    </div>
  );
}
