import * as React from "react";

export default function Docs() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center pb-5 w-full bg-white max-md:max-w-full">
        <div className="flex gap-0 justify-between self-stretch px-10 py-3 border-b border-gray-200 border-solid max-md:flex-wrap max-md:px-5">
          <div className="flex gap-4 my-auto text-lg font-bold tracking-tight text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/76736d89a201b30c399f6a2e42a912a11f3aa6f9f07deb8dc746794a26064024?"
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <div>DogeXLabs Layer 2</div>
          </div>
          <div className="flex gap-5 pl-20 max-md:flex-wrap">
            <div className="flex gap-5 justify-between py-2.5 text-sm font-medium leading-5 whitespace-nowrap text-neutral-900">
              <div>Technology</div>
              <div>Team</div>
              <div>Roadmap</div>
              <div>Docs</div>
            </div>
            <div className="flex justify-center items-center p-2.5 w-10 h-10 rounded-3xl bg-stone-100">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f89b535762b31c7fe996c1de0df0b25821b15b2541d99ed65eb1267bb95f04?"
                className="w-5 aspect-square"
              />
            </div>
            <img
              loading="lazy"
              srcSet="..."
              className="shrink-0 w-10 aspect-square"
            />
          </div>
        </div>
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
        <div className="flex flex-col px-4 py-10 w-full max-w-[960px] max-md:max-w-full">
          <div className="text-4xl font-bold tracking-tighter text-neutral-900 max-md:max-w-full">
            Why DogeXLabs Layer 2?
          </div>
          <div className="justify-center mt-14 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-3 max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium leading-6 text-neutral-900">
                    EVM compatible
                  </div>
                  <div className="text-sm leading-5 text-stone-500">
                    Deploy your existing Solidity contracts with no changes, or
                    write new ones from scratch. Get the benefits of L2 without
                    the hassle.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-14 max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium leading-6 text-neutral-900">
                    Optimistic rollup
                  </div>
                  <div className="text-sm leading-5 text-stone-500">
                    Use your existing tooling to deploy and manage your
                    contracts on our rollup.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-14 max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium leading-6 text-neutral-900">
                    Sharding
                  </div>
                  <div className="text-sm leading-5 text-stone-500">
                    Scale your dapp to support millions of users. Cross-shard
                    communication is coming soon.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-8 max-md:mt-3">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="w-full aspect-[1.79]"
                  />
                  <div className="mt-3 text-base font-medium leading-6 text-neutral-900">
                    Low gas costs
                  </div>
                  <div className="text-sm leading-5 text-stone-500">
                    Enjoy a 100x reduction in gas costs compared to Ethereum L1.
                    Pay as little as 10 gwei per transaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start mt-5 ml-44 text-2xl font-bold tracking-tight text-neutral-900 max-md:ml-2.5">
          How it works
        </div>
        <div className="justify-center p-4 mt-3 w-full max-w-[960px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="grow w-full aspect-[1.79] max-md:mt-7"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="grow w-full aspect-[1.79] max-md:mt-7"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="grow w-full aspect-[1.79] max-md:mt-7"
              />
            </div>
          </div>
        </div>
        <div className="self-start mt-5 ml-44 text-2xl font-bold tracking-tight text-neutral-900 max-md:ml-2.5">
          Get involved
        </div>
        <div className="justify-center p-4 mt-3 w-full max-w-[960px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-4 w-full bg-white rounded-lg border border-solid border-stone-200 max-md:pr-5 max-md:mt-7">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7caab66ac2b149731049cce09265c7b0e164f6efe6ed587d0cfe0b6250055917?"
                  className="w-6 aspect-square"
                />
                <div className="mt-3 text-base font-bold text-neutral-900">
                  Developers
                </div>
                <div className="mt-1 text-sm leading-5 text-stone-500">
                  Build the future of DeFi on DogeXLabs Layer 2. Join our
                  Discord or check out our documentation.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-4 w-full bg-white rounded-lg border border-solid border-stone-200 max-md:pr-5 max-md:mt-7">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1429ebd1c8066327021f2e3deb0e2226e8b1a62edfdabf8e5bdc15cf5b64bba6?"
                  className="w-6 aspect-square"
                />
                <div className="mt-3 text-base font-bold text-neutral-900">
                  Investors
                </div>
                <div className="mt-1 text-sm leading-5 text-stone-500">
                  We're raising a seed round to fund development. If you're
                  interested, please reach out for more information.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow p-4 w-full bg-white rounded-lg border border-solid border-stone-200 max-md:pr-5 max-md:mt-7">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cf4ab7cbc3593717b174ecdfe2c10a4ea99e5b3d8e15fd75a0358ea1e1b1d42?"
                  className="w-6 aspect-square"
                />
                <div className="mt-3 text-base font-bold text-neutral-900">
                  Partners
                </div>
                <div className="mt-1 text-sm leading-5 text-stone-500">
                  We're looking for projects to partner with and help them scale
                  their dapps. If you're interested, please reach out for more
                  information.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


