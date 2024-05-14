import Image from "next/image";
import NavLink from "../NavLink";
import Marquee from "react-fast-marquee";

const Chain = () => {
  const coinImages = Array.from({ length: 10 }, (_, index) => (
    <Image
      key={index}
      src="/images/coin.svg"
      alt="coin"
      width={72}
      height={72}
      quality={100}
      className="mr-4 w-11 h-11 md:w-auto md:h-auto"
    />
  ));

  return (
    <section className="custom-screen pt-16 pb-8 md:pt-48 md:pb-14">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        <div>
          <p className="min-w-52 text-3xl text-white">Why Dogex Chain?</p>
        </div>
        <div className="max-w-[630px] flex flex-col gap-12 md:gap-28 xl:mr-20">
          <div className="flex flex-col gap-4">
            <h4 className="max-w-xl text-6xl text-white">
              Incentive for core Doge miners
            </h4>
            <p className="text-base text-white/60">
              to earn more yields for running our validators
            </p>
            <div className="flex flex-row items-center gap-3">
              <Image
                src="/images/wallet.svg"
                alt="wallet"
                width={100}
                height={100}
                quality={100}
                className="w-16 h-16 md:w-auto md:h-auto"
              />
              <Marquee
                speed={70}
                gradient
                gradientColor="#282828"
                gradientWidth={100}
              >
                {coinImages}
              </Marquee>
            </div>
            <NavLink href="#" className="custom-button w-max">
              Stake DOGE and farm
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chain;
