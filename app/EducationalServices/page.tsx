import ProductCard from "../components/ProductCard";
import { Urbanist } from "next/font/google";

// Initialize the Urbanist font
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
})

export default function EducationalServices() {
  
  const products = [
    {
      id: 1,
      image: "/Images/EducationalServices/LetThereBeLight.png",
      title: "Let There Be Light (Foundations + Apologetics)",
      subheading: "Articulate Your Faith Confidently",
      description: `Dive into the core of Christian belief with 'Let There Be Light,' a program at St. Mary and St. Maurice Church
      designed to build a solid foundation in faith and equip you with the skills for apologetics.
      \n- Foundations: Explore essential Christian doctrines, their scriptural roots, and their relevance today.
      \n- Apologetics: Learn to defend your faith against skepticism from atheists, pagans, and others.`,
      buttontext: "JOIN TODAY",
    },
    {
      id: 2,
      image: "/Images/EducationalServices/StMoses.png",
      title: "St. Moses the Strong Continuing Servant Education",
      subheading: "Build Your Spiritual Base",
      description: `Join the Catechesis Program to nurture a deep understanding of Christian doctrines and practices.
      This program is tailored for individuals eager to build a strong foundation in their spiritual life through lectures and discussions.`,
      buttontext: "JOIN THE PROGRAM",
    },
    {
      id: 3,
      image: "/Images/EducationalServices/ServantsPrep.png",
      title: "Servants Preparation",
      subheading: "Shaping Future Servants",
      description: `St. Mary and St. Maurice Church's Servants Preparation Program is designed to thoroughly equip volunteers for effective
      ministry and ensure they are well-prepared to serve the church's community.
      \n- Curriculum\n- Schedule\n- Co-op Services`,
      buttontext: "ENROLL NOW",
    },
    {
      id: 4,
      image: "/Images/EducationalServices/BibleStudies.png",
      title: "Bible Studies",
      subheading: "For All",
      description: `Dive deeper into the Bible to enhance your understanding and application of biblical truth;
      our studies cater to all members eager to strengthen their faith.
      \n- Daily Readings\n- Sermons\n- Retreats & Bible Studies\n- Bookstore\n- Spiritual Articles\n- Quiet Time\n- Questions & Answers`,
      buttontext: "START TODAY",
    },
  ]

  return (
    <div className="w-full px-[100px] py-[100px] gap-[80px] flex flex-col items-center justify-center bg-[#171E34]">
      {/* Title */}
      <h1 className={`${urbanist.className} font-[700] text-[52px] leading-[120%] tracking-[-0.02em] text-white text-center`}>
        Educational Services
      </h1>
    
      {/* Cards Section */}
      <div className="w-full max-w-[1312px] grid grid-cols-1 md:grid-cols-2 gap-[48px] justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
