import { OrdConnectKit } from "@ordzaar/ord-connect";
import Link from "next/link";
import Brand from "../Brand";
import { useEffect, useState } from "react";

const Footer = () => {
  const navigation = [
    { name: "GitHub", href: "https://github.com/dogexnetwork/core" },
    { name: "Whitepaper", href: "/whitepaper" },
  ];

  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="mt-10 mb-6">
      <div className="custom-screen">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center">
          <Link href="/">
            <Brand />
          </Link>
          <ul className="flex justify-center items-center gap-3">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-white text-base font-normal">
                  <Link href={item.href} className="block">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="">
            {isMounted && <OrdConnectKit customStyle="custom-button" />}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
