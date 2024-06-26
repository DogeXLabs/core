import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavHeader from "../NavHeader";
import { OrdConnectKit } from "@ordzaar/ord-connect";
const Navbar = () => {
  const [isMounted, setMounted] = useState(false);
  const [state, setState] = useState(false);
  const menuBtnEl = useRef();

  const navigation = [
    { name: "Whitepaper", href: "/whitepaper" },
    { name: "Docs", href: "/docs" },
    { name: "GitHub", href: "https://github.com/dogexlabs" },
   { name: "Stake DOGE", href: "/app" },
  ];
  


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!menuBtnEl.current.contains(target)) setState(false);
    };
  }, []);

  return (
    <header className="relative bg-orange-50">
      <div className="custom-screen md:hidden absolute w-full">
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />
      </div>
      <nav
        className={`pt-2 md:text-sm md:block absolute w-full ${
          state
            ? "bg-[#282828] absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:shadow-none"
            : "hidden"
        }`}
      >
        <div className="custom-screen items-center md:flex">
          <NavHeader state={state} onClick={() => setState(!state)} />
          <div
            className={`flex-1 items-center mt-8 mb-5 md:mb-0 text-white text-base font-normal md:mt-0 md:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="">
                    <Link href={item.href} className="block">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              {isMounted && <OrdConnectKit customStyle="custom-button" />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
