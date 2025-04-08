import ImageTextBlock from "../components/ImageTextBlock";
import LiturgyPicture from "../../public/Images/Donation/LiturgyCommunion.png";
import OutsideFrontPicture from "../../public/Images/Donation/OutsideFront.png";
import MauriceNavePicture from "../../public/Images/Donation/MauriceNave.png";

export default function Donation() {
  
  
  
  return (
  <div>
    <ImageTextBlock
      inverted={false}
      title="Transform Lives Through Giving"
      image={OutsideFrontPicture}
      altText="A picture of St. Mary's Church from outside on the sidewalk showing its lawn and sign"
      bgColor="#FEFAF1"
    >
      Every donation helps us enhance our outreach efforts and educational programs and maintain our sacred space. With your support, we can continue to spread faith and love in our community. 
    </ImageTextBlock>
    <ImageTextBlock
      inverted={true}
      title="Help Us Make a Difference"
      image={LiturgyPicture}
      altText="A picture of St. Maurice's Sanctuary from one side showing Fr. Jeremiah starting to distribute communion with the other 2 priests in the foreground and 3 deacons holding candles off to the side"
      bgColor="#E8E9EB"
      btnTxt="Donate Now and Make a Difference"
      btnColor="#171E34"
      btnHoverColor="#7A0C02"
    >
      Donations to St. Mary and St. Maurice's Coptic Orthodox Church are a step toward sustaining our spiritual mission and community services. 
    </ImageTextBlock>
    <ImageTextBlock
      inverted={false}
      title="Extend Your Hand, Enrich Our Community"
      image={MauriceNavePicture}
      altText="A picture of the Offering of Incense prayers from the back of St. Maurice nave. Father Theodore stands just outside the Sanctuary, leading the prayer, while about a dozen deacons and congregations members fill the seats behind him"
      bgColor="#FEFAF1"  //TODO: should be #FFFFFF
      miniTitle="Your contribution extends beyond the walls of our building"
      btnColor="#7A0C02"
      btnHoverColor="#171E34"
      btnTxt="Donate Today"
    >
      With each gift, we are able to offer more to those in need, enrich spiritual lives, and maintain the beauty and accessibility of our sacred spaces.
      <br/>Donate today and be a cornerstone in our ongoing journey of faith and service.
      <br/>You can donate now via PayPal,...
    </ImageTextBlock>
  </div>
  );
}
