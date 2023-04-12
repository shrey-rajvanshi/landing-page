import { dummyExploreCardData } from "./DummyModelData.js";
import "./explore.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image.js";
import picture from "../../../../public/picture1.jpg";
import Link from "next/link.js";

export const Explore = () => {
  return (
    <>
      {/* <div className="explore-wrapper flex flex-wrap gap-[30px] justify-center py-[50px]">
        {dummyExploreCardData.map((data, i) => (
          <div key={i} className="card cursor-pointer">
            <img src={data.img} alt="" className="card-img" />
            <div className="card-footer">
              <div className="card-title">{data.title}</div>
              <div className="flex justify-between mt-[12px]">
                <div className="badge badge-light badge-yellow">
                  {data.badge}
                </div>
                <div className="badge badge-light">&#128640;0.5s latency</div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-end lg:justify-between">
            <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
              <h2 className="text-3xl font-bold text-gray-900">Model hub</h2>
              <p className="mt-6 text-base font-medium text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum tortor cum dictum nulla.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-12 text-center sm:px-16 md:px-0 md:gap-x-8 gap-y-12 md:text-left md:grid-cols-3">
            {dummyExploreCardData.map((model, i) => {
              return (
                <>
                  <div>
                    <img
                      className="w-full rounded-md h-[376px] object-cover"
                      src={model.img}
                      alt=""
                    />
                    <div className="flex items-center  mt-7 justify-between">
                      <p className="text-lg font-bold text-gray-900">
                        {model.title}
                      </p>
                      <span className="inline-flex items-center  items-center justify-center px-2 pr-3 py-1 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ">
                        ⚡0.5 latency
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-500">
                      @Jenny wilson, you will face many defeats in life, but
                      never let yourself be defeated
                    </p>
                    <div className="mt-6">
                      <Link
                        href={`/explore/${i}`}
                        title=""
                        className="inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                        role="button"
                      >
                        Try Model <AiOutlineArrowRight />
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
