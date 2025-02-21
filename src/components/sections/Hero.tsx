import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  overlayColor?: string;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  overlayColor = "bg-black/40", // default semi-transparent overlay
}: HeroProps) => {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className={`absolute inset-0 ${overlayColor}`} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        {subtitle && (
          <div className="bg-primary/90 px-6 py-2 rounded-full mb-4">
            {subtitle}
          </div>
        )}
        <h1 className="text-5xl font-bold text-center mb-4">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
