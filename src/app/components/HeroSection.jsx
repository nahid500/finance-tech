

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/BG02.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </section>
  );
}
