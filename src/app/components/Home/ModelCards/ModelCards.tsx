// "use client";

// import { useState } from "react";
import "./cards.css";
import { BsFillLightningChargeFill, BsClouds } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import { dummyExploreCardData } from "./DummyModelData.js";
import { VscDebug } from "react-icons/vsc";

export const ModelCards = () => {
  //   const [mapIndex, setMapIndex] = useState(4);
  return (
    <>
      {/* <div classNameName="card-container"> */}
      {/* <div classNameName="section-gradient-heading">The Executive Team</div>
        <div classNameName="section-subheading">Building the future</div> */}

      {/* <div classNameName=" flex gap-[20px] my-[48px] flex-wrap justify-center"> */}
      {/* {dummyExploreCardData.slice(0, 4).map((data, i) => (
            <div classNameName="card" key={i}>
              <img src={data.img} alt="" classNameName="card-img" />
              <div classNameName="card-footer">
                <div classNameName="card-title">{data.title}</div>
                <div classNameName="flex justify-between mt-[12px]">
                  <div classNameName="badge badge-light badge-yellow">
                    {data.badge}
                  </div>
                  <div classNameName="badge badge-light">&#128640;0.5s latency</div>
                </div>
              </div>
            </div>
          ))} */}
      {/* </div> */}
      {/* <a href="https://stage.segmind.com/serverless/explore">
          <button classNameName="btn btn-primary">Explore more </button>
        </a> */}
      {/* // </div> */}

      {/* <div classNameName="card-container mt-[64px]">
        <div classNameName="section-gradient-heading">The Executive Team</div>
        <div classNameName="section-subheading">Features the future</div>

        <div classNameName="card-wrapper flex gap-[20px] my-[48px] flex-wrap justify-center">
          <div classNameName="feature-card">
            <div classNameName="icon">
              <VscDebug />
            </div>
            <div classNameName="feature-heading">Fast</div>
            <div classNameName="feature-subheading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              accusantium nobis, voluptatum quis laborum exercitat
            </div>
          </div>
          <div classNameName="feature-card">
            <div classNameName="icon">
              <VscDebug />
            </div>
            <div classNameName="feature-heading">Fast</div>
            <div classNameName="feature-subheading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              accusantium nobis, voluptatum quis laborum exercitat
            </div>
          </div>
          <div classNameName="feature-card">
            <div classNameName="icon">
              <VscDebug />
            </div>
            <div classNameName="feature-heading">Fast</div>
            <div classNameName="feature-subheading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              accusantium nobis, voluptatum quis laborum exercitat
            </div>
          </div>
          <div classNameName="feature-card">
            <div classNameName="icon">
              <VscDebug />
            </div>
            <div classNameName="feature-heading">Fast</div>
            <div classNameName="feature-subheading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              accusantium nobis, voluptatum quis laborum exercitat
            </div>
          </div>
        </div>
      </div> */}

      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
          <h2 className=" mx-auto text-5xl font-bold text-center w-full text-gray-900 lg:mx-0 mb-12">
            Why Segmind?
          </h2>
          <div className="grid grid-cols-1  text-center gap-y-10 md:grid-cols-3 md:text-left">
            <div className="md:pr-6 lg:pr-12">
              {/* <svg
                className="mx-auto text-gray-900 md:mx-0"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.1667 0C11.865 0 10 1.865 10 4.16667V6.66667H3.33333C1.49167 6.66667 0 8.15833 0 10V16.6667H2.5C4.80167 16.6667 6.66667 18.5317 6.66667 20.8333C6.66667 23.135 4.80167 25 2.5 25H0V31.6667C0 33.5083 1.49167 35 3.33333 35H10V32.5C10 30.1983 11.865 28.3333 14.1667 28.3333C16.4683 28.3333 18.3333 30.1983 18.3333 32.5V35H25C26.8417 35 28.3333 33.5083 28.3333 31.6667V25H30.8333C33.135 25 35 23.135 35 20.8333C35 18.5317 33.135 16.6667 30.8333 16.6667H28.3333V10C28.3333 8.15833 26.8417 6.66667 25 6.66667H18.3333V4.16667C18.3333 1.865 16.4683 0 14.1667 0Z"></path>
              </svg> */}
              <BsFillLightningChargeFill />
              <h3 className="mt-12 text-lg font-bold text-gray-900 font-pj">
                Speed
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                We optimise the models into a high performance production ready
                models, which are upto 5X faster.
              </p>
            </div>

            <div className="w-56 h-px mx-auto bg-gray-200 md:hidden"></div>

            <div className="md:px-6 lg:px-12 md:border-l md:border-gray-200">
              <div className=" text-gray-900  w-[27px] height-[35px]">
                <GrDeploy />
              </div>
              {/* <svg
                className="mx-auto text-gray-900 md:mx-0"
                width="27"
                height="35"
                viewBox="0 0 27 35"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.3333 0C7.79365 0 3.33333 4.46032 3.33333 10V11.6667C1.5 11.6667 0 13.1667 0 15V31.6667C0 33.5 1.5 35 3.33333 35H23.3333C25.1667 35 26.6667 33.5 26.6667 31.6667V15C26.6667 13.1667 25.1667 11.6667 23.3333 11.6667V10C23.3333 4.46032 18.873 0 13.3333 0ZM13.3333 3.33333C17.127 3.33333 20 6.20635 20 10V11.6667H6.66667V10C6.66667 6.20635 9.53968 3.33333 13.3333 3.33333ZM13.3333 20C15.1667 20 16.6667 21.5 16.6667 23.3333C16.6667 25.1667 15.1667 26.6667 13.3333 26.6667C11.5 26.6667 10 25.1667 10 23.3333C10 21.5 11.5 20 13.3333 20Z"></path>
              </svg> */}
              <h3 className="mt-12 text-lg font-bold text-gray-900 font-pj">
                Deploy
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                We abstract away the deployment drudgery. Deploy on high
                performance NVIDIA Triton Server, with a few clicks.
              </p>
            </div>

            <div className="w-56 h-px mx-auto bg-gray-200 md:hidden"></div>

            <div className="md:pl-6 lg:pl-12 md:border-l md:border-gray-200">
              {/* <svg
                className="mx-auto text-gray-900 md:mx-0"
                width="37"
                height="35"
                viewBox="0 0 37 35"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.68421 0C1.65789 0 0 1.65789 0 3.68421V25.7895L5.52632 20.2632H22.1053C24.1316 20.2632 25.7895 18.6053 25.7895 16.5789V3.68421C25.7895 1.65789 24.1316 0 22.1053 0H3.68421ZM29.4737 9.21053V16.5789C29.4737 20.6426 26.1689 23.9474 22.1053 23.9474H11.0526V25.7895C11.0526 27.8158 12.7105 29.4737 14.7368 29.4737H31.3158L36.8421 35V12.8947C36.8421 10.8684 35.1842 9.21053 33.1579 9.21053H29.4737Z"></path>
              </svg> */}
              <BsClouds />
              <h3 className="mt-12 text-lg font-bold text-gray-900 font-pj">
                Scale
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                We rightsize your infrastructure. Scale up or down your GPUs
                automatically, based on the demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex justify-start w-full">
              <h2 className="text-center w-full mx-auto text-5xl font-bold text-gray-900 lg:mx-0 ">
                User Testimonials✨
              </h2>
            </div>

            <div className="relative mt-2 md:mt-16 md:order-2">
              <div className="absolute -inset-1">
                <div
                  className="w-full h-full max-w-full opacity-30 blur-lg filter"
                  // style={{background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}
                ></div>
              </div>

              <div className="relative grid max-w-lg grid-cols-1 overflow-hidden border border-gray-200 divide-y divide-gray-200 md:max-w-none md:grid-cols-3 rounded-xl md:divide-x md:divide-y-0">
                <div className="flex flex-col overflow-hidden">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                    <div className="flex-1">
                      <img
                        className="w-auto h-9"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/1/waverio-logo.svg"
                        alt=""
                      />
                    </div>

                    <div className="mt-10">
                      <blockquote>
                        <p className="text-lg text-gray-900 font-pj">
                          “You made it so simple. My new site is so much faster
                          and easier to work with than my old site. I just
                          choose the page, make the change.”
                        </p>
                      </blockquote>
                      <p className="mt-8 text-lg font-bold text-gray-900 font-pj">
                        Jerome Bell
                      </p>
                      <p className="mt-1 text-base text-gray-600 font-pj">
                        CTO, Waverio
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                    <div className="flex-1">
                      <img
                        className="w-auto h-9"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/1/square-stone-logo.svg"
                        alt=""
                      />
                    </div>

                    <div className="mt-10">
                      <blockquote>
                        <p className="text-lg text-gray-900 font-pj">
                          “Simply the best. Better than all the rest. I’d
                          recommend this product to beginners and advanced
                          users.”
                        </p>
                      </blockquote>
                      <p className="mt-8 text-lg font-bold text-gray-900 font-pj">
                        Leslie Alexander
                      </p>
                      <p className="mt-1 text-base text-gray-600 font-pj">
                        President of Marketing, SS
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col overflow-hidden">
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-9 lg:px-10">
                    <div className="flex-1">
                      <img
                        className="w-auto h-9"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/1/creaty-logo.svg"
                        alt=""
                      />
                    </div>

                    <div className="mt-10">
                      <blockquote>
                        <p className="text-lg text-gray-900 font-pj">
                          “Must have book for students, who want to be Product
                          Designer, UX Designer, or Interaction Designer.”
                        </p>
                      </blockquote>
                      <p className="mt-8 text-lg font-bold text-gray-900 font-pj">
                        Wade Warren
                      </p>
                      <p className="mt-1 text-base text-gray-600 font-pj">
                        Founder, Creaty
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
