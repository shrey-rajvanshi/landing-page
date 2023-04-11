import { dummyExploreCardData } from "./DummyModelData.js";
import "./explore.css";

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
              <h2 className="text-3xl font-bold text-gray-900">
                Explore Models
              </h2>
              <p className="mt-6 text-base font-medium text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum tortor cum dictum nulla.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-6 pb-8 mt-12 overflow-x-auto sm:mt-16 snap-x justify-center">
          <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <img
              className="h-auto w-[332px]"
              src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-1.png"
              alt=""
            />
            <p className="mt-5 text-base font-bold text-gray-600">Handx Opr</p>
          </div>

          <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <img
              className="h-auto w-[332px]"
              src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-2.png"
              alt=""
            />
            <p className="mt-5 text-base font-bold text-gray-600">Handx Opr</p>
          </div>

          <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <img
              className="h-auto w-[332px]"
              src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-3.png"
              alt=""
            />
            <p className="mt-5 text-base font-bold text-gray-600">Handx Opr</p>
          </div>

          {/*<div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <img
              className="h-auto w-[332px]"
              src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-4.png"
              alt=""
            />
            <p className="mt-5 text-base font-bold text-gray-600">Handx Opr</p>
          </div>

          <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
            <img
              className="h-auto w-[332px]"
              src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/gallery/2/image-5.png"
              alt=""
            />
            <p className="mt-5 text-base font-bold text-gray-600">Handx Opr</p>
          </div> */}
        </div>

        <div className="flex items-center justify-center mt-4 space-x-3 lg:hidden">
          <button
            type="button"
            className="p-1.5 -m-1.5 text-gray-300 transition-all duration-200 rounded-full hover:text-gray-600 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          <button
            type="button"
            className="p-1.5 -m-1.5 text-gray-300 transition-all duration-200 rounded-full hover:text-gray-600 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};
