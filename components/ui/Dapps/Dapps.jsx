import { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Dapps = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = document.querySelectorAll(".animate-up");

    images.forEach((image) => {
      gsap.from(image, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <section className="relative flex justify-center items-center custom-screen">
      <div className="custom-screen flex justify-center pt-16 pb-8 md:pt-28 md:pb-14">
        <div className="flex flex-col justify-center items-center gap-8 md:gap-11 max-w-2xl mx-auto text-center">
          <h2 className="text-white text-5xl md:text-8xl md:leading-[90px]">
            Build native SocialFi and GameFi dapps on Doge
          </h2>
          <p className="max-w-lg text-white/60 text-base">
            Create social finance and gaming decentralized applications directly
            on DogeX Network, transforming social interactions and gaming
            experiences within the Dogecoin ecosystem
          </p>
        </div>
      </div>
      <Image
        src="/images/fun.png"
        alt="fun"
        width={250}
        height={220}
        className="fun-image animate-up absolute left-0 pl-2"
      />
      <Image
        src="/images/chat.png"
        alt="chat"
        width={300}
        height={220}
        className="chat-image animate-up absolute right-0 mt-60 pr-2"
      />
    </section>
  );
};

export default Dapps;
