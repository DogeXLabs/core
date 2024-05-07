import GradientWrapper from "@/components/GradientWrapper";
import Image from "next/image";
import NavLink from "../NavLink";
import bgPattern from "@/public/images/bg-pattern.png";
import LayoutEffect from "@/components/LayoutEffect";

const CTA = () => (
  <section>
    <GradientWrapper wrapperClassName="max-w-xs h-[13rem] top-12 inset-0">
      <div id="whitepaper" className="custom-screen py-28 relative">
        <LayoutEffect
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0 translate-y-6",
          }}
        >
          <div className="relative z-10">
            <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto text-center">
              <h2 className="text-white text-4xl md:text-6xl">
                Unleash the Power of Doge
              </h2>
              <p className="max-w-lg text-white/80 text-xl">
                Where innovation meets community in the boundless realm of
                Dogecoin possibilities. Find out more in our comprehensive
                whitepaper
              </p>
            </div>
            <div className="mt-5 flex justify-center font-medium text-sm">
              <NavLink href="/whitepaper" className="custom-button">
                Read Whitepaper
              </NavLink>
            </div>
          </div>
        </LayoutEffect>
        <Image
          src={bgPattern}
          className="w-full h-full object-cover md:object-contain m-auto absolute inset-0 pointer-events-none"
          alt="Background pattern"
        />
      </div>
    </GradientWrapper>
  </section>
);

export default CTA;
