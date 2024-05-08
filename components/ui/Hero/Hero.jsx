const Hero = () => (
  <section className="bg-hero h-[90vh] md:h-screen">
    <div className="custom-screen flex flex-col justify-between h-full pt-28 md:pt-32">
      <h1 className="text-[40px] md:text-[80px] leading-none text-white text-center mx-auto max-w-6xl md:px-5">
        Introducing the Future of Doge: A Native Doge EVM Layer2
      </h1>
      <div className="flex flex-row justify-center md:justify-between text-base text-white py-6">
        <p>Unleash the Power of Doge!</p>
        <p className="hidden md:block">Unleash the Power of Doge!</p>
      </div>
    </div>
  </section>
);

export default Hero;
