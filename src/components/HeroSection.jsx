export default function HeroSection() {
  return (
    <section className="hidden md:flex relative w-full h-screen overflow-hidden items-center justify-center text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/BG02.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </section>
  );
}
