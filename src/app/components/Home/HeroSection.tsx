// import "./hero-section.css";
import picture from "../../../../public/picture1.jpg";
import Image from "next/image";

import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { dummyExploreCardData } from "../Explore/DummyModelData";

export const HeroSection = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <h2 className="max-w-[32rem] mx-auto text-5xl font-bold text-gray-900 lg:mx-0">
            Deploy & Scale the Fastest Generative AI Models⚡
          </h2>
          <div className="flex flex-col justify-between items-start">
            <p className="max-w-lg mx-auto mt-4 text-sm font-medium text-gray-500 lg:mx-0 lg:mt-0">
              Just use our high performance APIs or bring your own models. We'll
              supercharge and scale them on your cloud or ours.
            </p>
            <a
              href="/explore"
              title=""
              className="mt-[16px] inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              role="button"
            >
              Try Models <AiOutlineArrowRight />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:px-16 md:px-0 md:gap-x-8 gap-y-12 md:text-left md:grid-cols-3">
          {dummyExploreCardData.slice(0, 3).map((cards) => {
            return (
              <div>
                <img
                  className="w-full rounded-md h-[376px] object-cover"
                  src={cards.img}
                  alt=""
                />
                <div className="flex items-center  mt-7 justify-between">
                  <p className="text-lg font-bold text-gray-900">
                    {cards.title}
                  </p>
                  <span className="inline-flex items-center  items-center justify-center px-2 pr-3 py-1 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ">
                    ⚡0.5 latency
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-500">
                  @Jenny wilson, you will face many defeats in life, but never
                  let yourself be defeated
                </p>
                <div className="mt-6 flex gap-[10px]">
                  <Link
                    href="/explore"
                    title=""
                    className="inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                    role="button"
                  >
                    Try Model <AiOutlineArrowRight />
                  </Link>

                  <Link
                    href="/explore"
                    title=""
                    className="inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                    role="button"
                  >
                    API <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex w-full items-center justify-center p-[32px]">
        <button
          type="button"
          className="inline-flex items-center  items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
        >
          Explore More
        </button>
      </div> */}
    </section>
  );
};

// export default HeroSection;
