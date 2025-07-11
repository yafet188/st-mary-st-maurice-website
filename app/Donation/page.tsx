import Hero from "../components/Hero";
import Image from "next/image";
import ImageTextBlock from "../components/ImageTextBlock";
import StMaryChurchRain from "../../public/Images/Donations/StMaryChurchRain.png";
import StMauriceAltar from "../../public/Images/Donations/StMauriceAltar.png";
import StMauriceNave from "../../public/Images/Donations/StMauriceNave.png";
import Circle from "../../public/Images/Donations/Circle.png";
import Cross from "../../public/Images/Donations/Cross.png";

export default function DonationPage() {
  return (
    <div>
      {/* Hero on top of the background images */}
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

      {/* Decorations positioned behind the Hero but before ImageTextBlock */}
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

      {/* This content stays above everything else */}
      <div className="relative z-20">
        <ImageTextBlock
          roundedText=""
          textColor=""
          titleColor=""
          inverted={false}
          title="Transform Lives Through Giving"
          image={StMaryChurchRain}
          altText="Fr. Athansius praying over newly wed couple in St. Mary's Church"
          bgColor="#FEFAF1"
        >
          Every donation helps us enhance our outreach efforts and educational
          programs and maintain our sacred space. With your support, we can
          continue to spread faith and love in our community. 
        </ImageTextBlock>
      </div>

      <ImageTextBlock
        inverted={true}
        roundedText=""
        textColor=""
        titleColor=""
        title="Help Us Make a Difference"
        miniTitle="Building Foundations in Faith"
        image={StMauriceAltar}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#E8E9EB"
        btnTxt="DONATE NOW AN MAKE A DIFFERENCE"
        btnColor="#171E34"
      >
        Donations to St. Mary and St. Maurice's Coptic Orthodox Church are a
        step toward sustaining our spiritual mission and community services. 
      </ImageTextBlock>

      <ImageTextBlock
        inverted={false}
        roundedText=""
        textColor=""
        titleColor=""
        title="Extend Your Hand, Enrich Our Community"
        miniTitle="Your contribution extends beyond the walls of our building"
        bottomMiniTitle={
          <>
            You can donate now via PayPal. <br />
            We also accept e-Transfers to donate@stmarystmaurice.ca.
          </>
        }
        image={StMauriceNave}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#FFFFFF"
        btnTxt="DONATE TODAY"
        btnColor="#7A0C02"
      >
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
