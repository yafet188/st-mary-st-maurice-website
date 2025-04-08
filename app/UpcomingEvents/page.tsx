/* eslint-disable react/no-unescaped-entities */
import ImageTextBlock from "../components/ImageTextBlock";
import KidsByStMaryAltarPicture from "../../public/Images/UpcomingEvents/KidsByStMaryAltar.jpg";
import KidsHoldingIconsPicture from "../../public/Images/UpcomingEvents/KidsHoldingIcons.png";
import AnbaMinaInStMauriceAltarPicture from "../../public/Images/UpcomingEvents/AnbaMinaInStMauriceAltar.jpg";

export default function UpcomingEvents() {
  return (
    <div className="pt-[100px]  bg-[#FEFAF1]">
      <ImageTextBlock
        inverted={false}
        title="Our Sunday School Program"
        image={KidsByStMaryAltarPicture}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#FEFAF1"
      >
        At St. Mary and St. Maurice's, our Sunday School program is dedicated to
        nurturing the young minds and spirits of our community. We offer an
        engaging curriculum that encompasses Biblical teachings, Orthodox
        traditions, and moral lessons relevant to today’s challenges.
      </ImageTextBlock>
      <ImageTextBlock
        inverted={true}
        title="Explore Our Sunday School"
        miniTitle="Building Foundations in Faith"
        image={KidsHoldingIconsPicture}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#E8E9EB"
        btnTxt="EMPOWER YOUR CHILD"
        btnColor="#171E34"
      >
        Our Sunday School is the cornerstone of a lifelong faith. It offers a
        curriculum tailored to each age that educates children and youth about
        Orthodox faith, Biblical stories, Christian values, and community
        service.
      </ImageTextBlock>
      <ImageTextBlock
        inverted={false}
        title="Shaping Young Minds: 
Our Path to Spiritual Enlightenment"
        miniTitle="Join the World of Faith and Learning"
        image={AnbaMinaInStMauriceAltarPicture}
        altText="A picture of the Fr.Anthanasius, a couple of young chanters and kids in front of St. Mary's Altar"
        bgColor="#FEFAF1"
        btnTxt="JOIN THE FAMILY"
        btnColor="#7A0C02"
      >
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
