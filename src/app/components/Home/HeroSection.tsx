// import "./hero-section.css";
import picture from "../../../../public/picture1.jpg";
import Image from "next/image";

// export const HeroSection = () => {
//   return (
//     <>
//       <section>
//         <div className="header-container">
//           <div className="header-typography">
//             <div className="header-heading-gradient">
//               <span className="flex gap-[10px]">
//                 <Image
//                   src={rocket}
//                   alt=""
//                   className="mt-[5px] w-[50px] h-[50px]"
//                 />
//                 Deploy & Scale
//               </span>
//               the Fastest Generative AI Models
//             </div>
//             {/* <div className="header-heading text-[40px] mt-[8px]">At Scale</div> */}
//             <h1 className="header-subheading mt-[16px]">
//               The time is now for it to be okay to be great. For being a bright
//               color. For standing out.
//             </h1>
//             <div className="flex gap-[10px]">
//               <button className="btn btn-primary">Try Now</button>
//               <button className="btn btn-sec">Explore</button>
//             </div>
//           </div>
//           <div className="header-image-container">
//             <div className="hero-img-section">
//               <img
//                 className="hero-img mt-[100px]"
//                 src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
//                 alt="image"
//               />
//             </div>

//             <div className="hero-img-section">
//               <img
//                 className="hero-img"
//                 src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
//                 alt="image"
//               />
//               <img
//                 className="hero-img"
//                 src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
//                 alt="image"
//               />
//             </div>
//             <div className="hero-img-section">
//               <img
//                 className="hero-img  mt-[70px]"
//                 src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
//                 alt="image"
//               />
//               <img
//                 className="hero-img"
//                 src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
//                 alt="image"
//               />
//             </div>

//             <div className="hero-img-section">
//               <img
//                 className="hero-img  mt-[20px]"
//                 src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
//                 alt="image"
//               />
//               <img
//                 className="hero-img"
//                 src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
//                 alt="image"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
import { AiOutlineArrowRight } from "react-icons/ai";

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
              A creative workplace gives employees the ability to come up with
              unique solutions to challenges instead of simply being told what
              to do.
            </p>
            <a
              href="#"
              title=""
              className="mt-[16px] inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              role="button"
            >
              Try Models <AiOutlineArrowRight />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:px-16 md:px-0 md:gap-x-8 gap-y-12 md:text-left md:grid-cols-3">
          <div>
            <Image
              className="w-full rounded-md h-[376px] object-cover"
              src={picture}
              alt=""
            />
            <div className="flex items-center  mt-7 justify-between">
              <p className="text-lg font-bold text-gray-900">Jenny Wilson</p>
              <span className="inline-flex items-center  items-center justify-center px-2 pr-3 py-1 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ">
                ⚡0.5 latency
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-gray-500">
              @Jenny wilson, you will face many defeats in life, but never let
              yourself be defeated
            </p>
            <div className="mt-6">
              <a
                href="#"
                title=""
                className="inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                role="button"
              >
                Try Model <AiOutlineArrowRight />
              </a>
            </div>
          </div>

          <div>
            <img
              className="w-full rounded-md"
              src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/3/member-2.png"
              alt=""
            />
            <div className="flex items-center  mt-7 justify-between">
              <p className="text-lg font-bold text-gray-900">Jenny Wilson</p>
              <span className="inline-flex items-center  items-center justify-center px-2 pr-3 py-1 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ">
                ⚡0.5 latency
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-gray-500">
              @Leslie Alexander, the greatest glory in living lies not in never
              falling, but in rising every time we fall
            </p>
            <div className="mt-6">
              <a
                href="#"
                title=""
                className="inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                role="button"
              >
                Try Model <AiOutlineArrowRight />
              </a>
            </div>
          </div>

          <div>
            <img
              className="w-full rounded-md"
              src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/3/member-3.png"
              alt=""
            />
            <div className="flex items-center  mt-7 justify-between">
              <p className="text-lg font-bold text-gray-900">Jenny Wilson</p>
              <span className="inline-flex items-center  items-center justify-center px-2 pr-3 py-1 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ">
                ⚡0.5 latency
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-gray-500">
              @Savannah Nguyen, never let the fear of striking out keep you from
              playing the game
            </p>
            <div className="mt-6">
              <a
                href="#"
                title=""
                className="inline-flex gap-[10px] items-center justify-center px-5 py-3 text-xs font-bold tracking-widest text-gray-900 uppercase transition-all duration-200 bg-transparent border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                role="button"
              >
                Try Model <AiOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center p-[32px]">
        <button
          type="button"
          className="inline-flex items-center  items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
        >
          Explore More
        </button>
      </div>
    </section>
  );
};

// export default HeroSection;
