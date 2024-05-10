import Image from "next/image";
import NavLink from "../NavLink";
import { OrdConnectKit } from "@ordzaar/ord-connect";
import { useEffect, useState } from "react";

const Social = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      id="features"
      className="custom-screen pt-16 md:pt-32 pb-8 md:pb-20 flex justify-center w-full"
    >
      <div className="relative">
        <ul className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          <li className="flex flex-col items-center justify-between gap-10 p-5 rounded-[30px] linear-bg-cards text-center">
            <div className="flex flex-col items-center gap-2.5">
              <Image
                src="/images/twitter.svg"
                alt="logo"
                width={40}
                height={40}
              />
              <h3 className="text-3xl text-white">Mint your handle</h3>
              <p className="text-sm text-white/60">
                Link your Twitter handle to your wallet for seamless integration
                and enhanced features on DogeX Network
              </p>
            </div>
            <NavLink href="#" className="custom-button">
              Connect Twitter account
            </NavLink>
          </li>
          <li className="flex flex-col items-center justify-between gap-10 p-5 rounded-[30px] linear-bg-cards text-center">
            <div className="flex flex-col items-center gap-2.5">
              <Image
                src="/images/connect.svg"
                alt="logo"
                width={40}
                height={40}
              />
              <h3 className="text-3xl text-white max-w-72">
                Fully Interoperable: Bridge your Doge
              </h3>
              <p className="text-sm text-white/60">
                Earn, Mint , Swap and Collect NFTs , PFPs, SBTs or Tokens!
              </p>
            </div>
            {isMounted && <OrdConnectKit customStyle="custom-button" />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
