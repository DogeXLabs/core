import * as React from "react";

export default function Docs() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center pb-5 w-full bg-white max-md:max-w-full">
   
   


        <div className="px-4 py-10 mt-5 w-full max-w-[960px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src='/features/community-and-developer-engagement.svg'
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
                    src="/features/scalability-and-efficiency.svg"
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
                    src="/features/community-and-developer-engagement.svg"
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
                    src="/features/community-and-developer-engagement.svg"
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
                    src="/features/community-and-developer-engagement.svg"
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
                src="'/features/community-and-developer-engagement.svg'"
                className="grow w-full aspect-[1.79] max-md:mt-7"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="'/features/community-and-developer-engagement.svg'"
                className="grow w-full aspect-[1.79] max-md:mt-7"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="'/features/community-and-developer-engagement.svg'"
                className="grow w-full aspect-[1.79] max-md:mt-7"
              />
            </div>
          </div>
        </div>
        
    <div className="flex flex-col px-5 max-w-[928px]">
      <div className="w-full text-2xl font-bold tracking-tight text-neutral-900 max-md:max-w-full">
        Key components
      </div>
      <div className="flex gap-3 mt-7 max-md:flex-wrap">
        <div className="flex flex-col p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f20c97b4720d6270cdf999cdafcf0f6f8c9eff235e4d7ec01805f7af2cc505a2?"
            className="w-6 aspect-square"
          />
          <div className="mt-3 text-base font-bold text-neutral-900">
            Bridge
          </div>
          <div className="mt-1 text-sm leading-5 text-stone-500">
            Connects Layer 2 to Ethereum mainnet
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9f5182471700b7c3f5ba18eca36cf38f2ca23c00cebe5e4bdd82e52f461fc5e?"
            className="w-6 aspect-square"
          />
          <div className="mt-3 text-base font-bold text-neutral-900">
            Validator
          </div>
          <div className="mt-1 text-sm leading-5 text-stone-500">
            Processes and validates transactions off-chain
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px] max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f994e2493bfc9de8c91edbb23b3a10e6cd489813e51adf4e896ff43ca6869ea?"
            className="w-6 aspect-square"
          />
          <div className="mt-3 text-base font-bold text-neutral-900">
            Sequencer
          </div>
          <div className="mt-1 text-sm leading-5 text-stone-500">
            Orders and batches transactions for submission to Ethereum mainnet
          </div>
        </div>
        <div className="flex flex-col p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a85f64e359f4bca36c785cd9456b526b778fd801b89b7826cfdd295d9a8cd3f?"
            className="w-6 aspect-square"
          />
          <div className="mt-3 text-base font-bold text-neutral-900">
            Aggregator
          </div>
          <div className="mt-1 text-sm leading-5 text-stone-500">
            Collects and processes user transactions
          </div>
        </div>
        <div className="flex flex-col items-start p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px] max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6147ab661912adde0b36d9c5796f38d1dbb05f67789d9beada740171d9e98fcd?"
            className="w-6 aspect-square"
          />
          <div className="mt-3 text-base font-bold text-neutral-900">
            Rollup
          </div>
          <div className="mt-1 text-sm leading-5 text-stone-500">
            Stores transaction data
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 mt-3 w-44 max-w-full bg-white rounded-lg border border-solid border-stone-200">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea8560e90000df23ec9d2bbe5842cea6aafb3d4533d4eb9b7adcd6c765094851?"
          className="w-6 aspect-square"
        />
        <div className="mt-3 text-base font-bold text-neutral-900">
          Operator
        </div>
        <div className="mt-1 text-sm leading-5 text-stone-500">
          Manages Layer 2 operations
        </div>
      </div>
    </div>


        <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center px-20 pt-5 pb-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-4 py-10 w-full max-w-[960px] max-md:max-w-full">
          <div className="text-4xl font-bold tracking-tighter text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
            Built for developers
          </div>
          <div className="mt-4 text-base leading-6 text-neutral-900 max-md:mr-2.5 max-md:max-w-full">
            DogeXLabs Layer 2 is designed to be easy to use, with familiar tools
            and developer-friendly features.
          </div>
          <div className="justify-center mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-3 max-md:mt-3 max-md:max-w-full">
                  <div className="mt-3 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
                    Scalable smart contracts
                  </div>
                  <div className="text-sm leading-5 text-stone-500 max-md:max-w-full">
                    Our Layer 2 solution lets you run complex smart contracts at
                    the speed of Dogecoin
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pb-3 max-md:mt-3 max-md:max-w-full">
                  
                  <div className="mt-3 text-base font-medium leading-6 text-neutral-900 max-md:max-w-full">
                    Secure and decentralized
                  </div>
                  <div className="text-sm leading-5 text-stone-500 max-md:max-w-full">
                    Powered by a network of validators, our Layer 2 solution is
                    as secure and decentralized as Dogecoin itself
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start mt-5 ml-24 text-2xl font-bold tracking-tight text-neutral-900 max-md:ml-2.5">
          Use cases
        </div>
        <div className="flex flex-col p-4 mt-3 w-full max-w-[960px] max-md:max-w-full">
          <div className="flex gap-3 max-md:flex-wrap">
            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg border border-solid border-stone-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/efbb9d724d2ef6f8eed429eeb070aaae8a1b87d5227839dec5e303bf72ffd146?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Decentralized finance
              </div>
              <div className="mt-6 text-sm leading-5 text-stone-500">
                Create new DeFi apps and bring existing ones to Dogecoin
              </div>
            </div>
            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg border border-solid border-stone-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/27b9bb3642302ae3069dc6019828922dbe0ec20d7e477c16c395c8e02a505aeb?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                NFT marketplaces
              </div>
              <div className="mt-1 text-sm leading-5 text-stone-500">
                Design and trade NFTs at the speed of Dogecoin
              </div>
            </div>
            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg border border-solid border-stone-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8e84ede375f5216900ed9ea9376df51e51fc5f134d865daa6600687b36ebae5?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Social media
              </div>
              <div className="mt-1 text-sm leading-5 text-stone-500">
                Build censorship-resistant social media platforms
              </div>
            </div>
            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg border border-solid border-stone-200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d55367bfe8207b53204039a8fb1777ed5c39ec3252f0604f5d18c5aba1807f?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Gaming
              </div>
              <div className="mt-1 text-sm leading-5 text-stone-500">
                Power fast, fun, and secure blockchain games
              </div>
            </div>
            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg border border-solid border-stone-200 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be7e6219ff5976c58dd7fba5981fda61edef5f2b081f57027d26c9490239694c?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                E-commerce
              </div>
              <div className="mt-1 text-sm leading-5 text-stone-500">
                Enable instant, low-fee transactions for online shopping
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 mt-3 w-44 max-w-full bg-white rounded-lg border border-solid border-stone-200 max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d84bfe282542905783764585e5fdc1eb40df9aebb019098d157077aab5eb9ba?"
              className="w-6 aspect-square"
            />
            <div className="mt-3 text-base font-bold text-neutral-900">
              DAOs
            </div>
            <div className="mt-1 text-sm leading-5 text-stone-500">
              Govern protocol updates and fund community projects
            </div>
          </div>
        </div>
        <div className="self-start mt-5 ml-24 text-2xl font-bold tracking-tight text-neutral-900 max-md:ml-2.5">
          Getting started
        </div>
        <div className="flex flex-col p-4 mt-3 mb-96 w-full max-w-[960px] max-md:mb-10 max-md:max-w-full">
          <div className="flex gap-3 max-md:flex-wrap">
            <div className="flex flex-col p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px] max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ce69b720273946aed4314f00a421fce6b7a48151251b3fa1cb31d741b4f484b?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Developer documentation
              </div>
              <div className="mt-6 text-sm leading-5 text-stone-500">
                Explore our Layer 2 API and other technical resources
              </div>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7665a7959c368c1f1c0407933a3074eae79038867768a49c5e53f54174fcc06a?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Tutorials
              </div>
              <div className="mt-1 text-sm leading-5 text-stone-500">
                Follow step-by-step guides for building on DogeXLabs
              </div>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px] max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce1ed21276572a86be54c405f62880a2d58d6cfd43170c5de2c1281554235c6?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Community forum
              </div>
              <div className="mt-1 text-sm leading-5 text-stone-500">
                Connect with other builders and share your projects
              </div>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/abe6825aa249b8d10601bc47a896b5c92cd36d86ec2f8105645adcaa1aedd59a?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Testnet
              </div>
              <div className="mt-1 text-sm leading-5 text-stone-500">
                Try out DogeXLabs Layer 2 in a risk-free environment
              </div>
            </div>
            <div className="flex flex-col p-4 bg-white rounded-lg border border-solid border-stone-200 h-[177px] w-[177px] max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c73f91fe7c2c6d03c9fc13e4c6c33ffece449b9d0cd1ebada91fc6b9df28698?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Mainnet
              </div>
              <div className="mt-1 text-sm leading-5 text-stone-500">
                Access the live Layer 2 network for production use
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 mt-3 w-44 max-w-full bg-white rounded-lg border border-solid border-stone-200">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab7de1bcfd2ecf1d8ba7cd062806845828d4f14001b0c8da3495829ef561e330?"
              className="w-6 aspect-square"
            />
            <div className="mt-3 text-base font-bold text-neutral-900">
              Ecosystem projects
            </div>
            <div className="mt-6 text-sm leading-5 text-stone-500">
              Discover apps, tools, and integrations in the DogeXLabs ecosystem
            </div>
          </div>
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


