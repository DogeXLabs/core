import * as React from "react";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center pb-5 w-full bg-white max-md:max-w-full">
   
   


        <div className="px-4 py-10 mt-5 w-full max-w-[960px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="grow w-full aspect-[1.06] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-base font-bold leading-6 text-neutral-900 max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl tracking-tighter leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                  Unlock the next generation of web3 with DogeXLabs Layer 2
                </div>
                <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                  We are building the first EVM-compatible, optimistic rollup
                  that supports sharding and low gas costs.
                </div>
                <div className="flex gap-3 mt-14 tracking-wide max-md:flex-wrap max-md:mt-10">
                  <div className="flex flex-col grow shrink-0 justify-center px-5 py-3 bg-amber-400 rounded-3xl basis-0 w-fit">
                    <div className="justify-center bg-amber-400">
                      Read whitepaper
                    </div>
                  </div>
                  <div className="flex flex-col justify-center px-5 py-3 rounded-3xl bg-stone-100">
                    <div className="justify-center bg-stone-100">
                      Get in touch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  )
}