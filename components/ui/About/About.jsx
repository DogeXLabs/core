import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About = () => {
  const [wordsRef, setWordsRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const wordsRef = useRef([]);
    wordsRef.current = [];
    return [wordsRef, (ref) => ref && wordsRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "This project aims to establish a Doge Coin-native EVM compatible Layer 2 blockchain. Inspired by Bitcoin-native solutions like Stacks and RSK, this platform will enable smart contract functionality and dApp deployment directly on the Doge Chain, leveraging its unique brand and community.";

  useEffect(() => {
    const anim = gsap.to(wordsRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 60%",
      },
      opacity: 1,
      duration: 10,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <section>
      <div className="custom-screen flex justify-center pt-16 pb-8 md:pt-28 md:pb-14">
        <div className="reveal max-w-4xl text-4xl md:text-6xl">
          <div ref={triggerRef}>
            {text.split(" ").map((word, index) => (
              <span
                className={
                  word.toLowerCase() === "stacks"
                    ? "text-[#686EFF] opacity-40"
                    : word.toLowerCase() === "rsk,"
                    ? "text-[#29D9FF] opacity-40"
                    : "text-white opacity-40"
                }
                key={index}
                ref={setWordsRef}
              >
                {word}{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
