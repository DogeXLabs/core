const Hero = () => (
  <section className="bg-hero h-[90vh] md:h-screen">
    <div className="custom-screen flex flex-col justify-between h-full pt-28 md:pt-32">
      <h1 className="text-5xl md:text-8xl text-white text-center hero-heading font-Gurmukhi mx-auto">
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
