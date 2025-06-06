import Image from "next/image";
import heroImage from "@/assets/images/heroPicture.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-white">
      {/* Mobile Image */}
      <div className="md:hidden absolute inset-0 z-[-1]">
        <Image
          src={heroImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Optional dark overlay */}
      </div>

      {/* Desktop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/BG02.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className=" md:hidden text-center px-6">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text mb-4">
          Jakaria Inc.
        </h1>
      </div>
    </section>
  );
}
