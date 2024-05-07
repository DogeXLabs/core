import { featuresData } from "./featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <div id="features" className="custom-screen pt-8 md:pt-14">
      <div className="relative">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {featuresData.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col items-center gap-2.5 p-5 rounded-[30px] bg-[#2E2E2E] text-center"
            >
              <Image
                src={item.image}
                alt="logo"
                width={230}
                height={30}
                priority
              />
              <h3 className="text-3xl text-white">{item.title}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
