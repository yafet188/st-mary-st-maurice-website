/* eslint-disable react/no-unescaped-entities */

// Importing the ImageTextBlock component and images used in the page
import ImageTextBlock from "../components/ImageTextBlock";
import KidsByStMaryAltarPicture from "../../public/Images/UpcomingEvents/KidsByStMaryAltar.jpg";
import KidsHoldingIconsPicture from "../../public/Images/UpcomingEvents/KidsHoldingIcons.png";
import AnbaMinaInStMauriceAltarPicture from "../../public/Images/UpcomingEvents/AnbaMinaInStMauriceAltar.jpg";

// Main component for the Upcoming Events page
export default function UpcomingEvents() {
  return (
    // Page container with padding and background color
    <div className="pt-[100px]  bg-[#FEFAF1]">
      {/* First section: Sunday School Program introduction */}
      <ImageTextBlock
        inverted={false} // Normal layout (image on the left, text on the right)
        roundedText=""
        textColor=""
        titleColor=""
        title="Our Sunday School Program"
        image={KidsByStMaryAltarPicture}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#FEFAF1"
      >
        {/* Description of the Sunday School program */}
        At St. Mary and St. Maurice's, our Sunday School program is dedicated to
        nurturing the young minds and spirits of our community. We offer an
        engaging curriculum that encompasses Biblical teachings, Orthodox
        traditions, and moral lessons relevant to today’s challenges.
      </ImageTextBlock>

      {/* Second section: Exploring Sunday School */}
      <ImageTextBlock
        inverted={true} // Inverted layout (image on the right, text on the left)
        roundedText=""
        textColor=""
        titleColor=""
        title="Explore Our Sunday School"
        miniTitle="Building Foundations in Faith"
        image={KidsHoldingIconsPicture}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#E8E9EB"
        btnTxt="EMPOWER YOUR CHILD" // Button text
        btnColor="#171E34" // Button color
      >
        {/* Description of the curriculum and its importance */}
        Our Sunday School is the cornerstone of a lifelong faith. It offers a
        curriculum tailored to each age that educates children and youth about
        Orthodox faith, Biblical stories, Christian values, and community
        service.
      </ImageTextBlock>

      {/* Third section: Spiritual enlightenment through Sunday School */}
      <ImageTextBlock
        inverted={false} // Normal layout
        roundedText=""
        textColor=""
        titleColor=""
        title="Shaping Young Minds: 
Our Path to Spiritual Enlightenment"
        miniTitle="Join the World of Faith and Learning"
        image={AnbaMinaInStMauriceAltarPicture}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#FEFAF1"
        btnTxt="JOIN THE FAMILY" // Button text
        btnColor="#7A0C02" // Button color
      >
        {/* Description of the program's goals and activities */}
        We believe in fostering a vibrant spiritual foundation for our children
        through our Sunday School program. Here, your child can engage with
        biblical stories and principles in a way that resonates with their young
        minds.
        <br />
        <br />
        Our tailored activities and discussions are designed to promote
        understanding and application of Christian values in everyday life.
      </ImageTextBlock>
    </div>
  );
}
