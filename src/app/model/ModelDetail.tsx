import "./model-detail.css";
import { TbPrompt } from "react-icons/tb";
// import { useState } from "react";

export const ModelDetailPage = () => {
  //   const [tab, setTab] = useState("tabDemo");
  return (
    <>
      {/* <div className="doc-container"> */}
      {/* <div className="doc-model-title">jagilley/controlnet-depth2img</div>
        <div className="doc-tab-container mb-[24px]">
          <button className="tab">Details</button>
          <button className="tab-active">Demo</button>
          <button className="tab">API</button>
        </div> */}

      {/* <div className="details-subheading ">
          This model is ControlNet adapting Stable Diffusion to generate images
          that have the same structure as an input image of your choosing, using
          canny edge detection. The model is trained with a canny edge detector
          (with random thresholds) to obtain 3M edge-image- caption pairs from
          the internet. The model is trained with 600 GPU-hours with Nvidia A100
          80G. The base model is Stable Diffusion 1.5.
        </div> */}

      {/* <div className="demo-wrapper">
          <div className="demo-container">
            <label htmlFor="" className="label">
              Prompt <TbPrompt />
            </label>
            <input
              type="text"
              className="input-feild mt-[4px]"
              placeholder="Enter Prompt"
            />

            <label htmlFor="" className="label mt-[18px]">
              Steps <TbPrompt />
            </label>
            <div className="flex gap-[10px] mt-[4px]">
              <button className="btn btn-outline-active">20</button>
              <button className="btn btn-outline">30</button>
              <button className="btn btn-outline">50</button>
            </div>

            <label htmlFor="" className="label mt-[18px]">
              Upload Image <TbPrompt />
            </label>
            <div className="upload-image  mt-[4px]">
              <div> Drop a file or click to select</div>
              <p> https://replicate.delivery/pbxt/IKFvJn5EpLuDDsFys</p>
            </div>
            <div className="flex gap-[10px] mt-[24px]">
              <button className="btn btn-primary">Submit</button>
              <button className="btn btn-sec">Reset</button>
            </div>
          </div>
          <div className="demo-output">
            <img
              src="https://replicate.delivery/pbxt/CCPUFqXwc2LZF5CVU13C8yPE03ENz9gMdnuvXf7Kb2abzhPIA/output_1.png"
              alt=""
              className="demo-output-img"
            />
            <p className="muted-text text-[16px] mt-[8px]">
              Generated in 20.90 seconds
            </p>
            <div className="my-[16px] flex gap-[10px]">
              <button className="btn btn-outline ">Download</button>
              <button className="btn btn-outline">Share</button>
            </div>
          </div>
        </div> */}

      {/* <div className="doc-heading">Run the model</div>
        <div className="doc-subheading">
          Install the replicate Node.js client:
        </div>
        <div className="doc-code-container">
          <code className="doc-code">npm install replicate</code>
        </div>

        <div className="doc-subheading">
          First, copy your API token and authenticate by setting it as an
          environment variable:
        </div>

        <div className="doc-code-container">
          <code className="doc-code">export REPLICATE_API_TOKEN=[token]</code>
        </div>

        <div className="doc-subheading">Then, run the model:</div>
        <div className="doc-code-container">
          <code className="doc-code">npm install replicate</code>
        </div>
        <div className="doc-subheading">
          You can specify a webhook URL to be called when the prediction is
          complete. Take a look at the webhook docs for details on setting that
          up. For example:
        </div> */}
      {/* </div> */}

      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-stretch grid-cols-1 gap-y-12 lg:grid-cols-12 gap-x-16">
            <div className="flex flex-col justify-between lg:col-span-8">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-gray-900">Model Name</h2>
                <p className="mt-4 text-base font-medium text-gray-500">
                  In a creative workplace, employees with responsibly try
                  different solutions
                </p>

                <div className="py-6 bg-white">
                  <div className=" mx-auto max-w-7xl">
                    <div className="w-full pb-1 overflow-x-auto">
                      <div className="border-b border-gray-200">
                        <nav className="flex -mb-px space-x-10">
                          <a
                            href="#"
                            className="py-4 text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 border-indigo-600 whitespace-nowrap"
                          >
                            Details
                          </a>

                          <a
                            href="#"
                            className="py-4 text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                          >
                            Demo
                          </a>

                          <a
                            href="#"
                            className="py-4 text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                          >
                            API
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pb-[1rem] bg-white">
                  <div className=" mx-auto  max-w-7xl">
                    <div className="max-w-xl mx-auto">
                      <div>
                        <label className="block text-sm font-bold text-gray-900">
                          Prompt
                        </label>
                        <div className="mt-2">
                          <div className="mt-2">
                            <textarea
                              name=""
                              id=""
                              placeholder="Enter Prompt"
                              rows="1"
                              className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      {/* <div className="flex gap-[10px] mt-[4px]">
                        <button className="btn btn-outline-active">20</button>
                        <button className="btn btn-outline">30</button>
                        <button className="btn btn-outline">50</button>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="pb-[1rem] bg-white">
                  <div className=" mx-auto  max-w-7xl">
                    <div className="max-w-xl mx-auto">
                      <div>
                        <label className="block text-sm font-bold text-gray-900">
                          Steps
                        </label>
                        <div className="mt-2">
                          <div className="mt-2">
                            <div className="flex gap-[10px] mt-[4px]">
                              <button className="btn border bg-[#000] text-[#fff] border-black text-[#000]">
                                30
                              </button>
                              <button className="btn border border-black text-[#000]">
                                30
                              </button>
                              <button className="btn border border-black text-[#000]">
                                50
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-2">
                        <div className="mt-2">
                          <div className="py-8 bg-white">
                            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                              <div className="max-w-xs mx-auto">
                                <div className="absolute top-0 left-0 w-full h-screen z-0 bg-transparent"></div>
                                <div className="relative">
                                  <label className="block text-sm font-bold text-gray-900">
                                    
                                    Country
                                  </label>
                                  <div className="mt-2">
                                    <div className="cursor-pointer block w-full py-3 px-4 border-gray-300 border rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                      <div className="flex justify-between items-center">
                                        <div className="flex items-center justify-start space-x-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                            />
                                          </svg>
                                          <span>Select a country</span>
                                        </div>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          stroke-width="2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19 9l-7 7-7-7"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div
                                    className="relative -bottom-2 w-full z-10"
                                    x-show="open"
                                  >
                                    <div className="border-gray-300 bg-white shadow border rounded-lg w-full block text-sm px-4 py-2 space-y">                                     <ul className="flex flex-col">
                                        <li className="w-full rounded-md p-2 hover:bg-gray-100 cursor-pointer">
                                          🇺🇸 United States of America
                                        </li>
                                        <li className="w-full rounded-md p-2 hover:bg-gray-100 cursor-pointer">
                                          🇳🇱 Netherlands
                                        </li>
                                        <li className="w-full rounded-md bg-gray-100 p-2 hover:bg-gray-100 cursor-pointer">
                                          🇳🇿 New Zealand
                                        </li>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                     */}

              {/* <div className="grid grid-cols-1 gap-12 mt-12 sm:grid-cols-2 sm:mt-16 xl:gap-x-16">
                <div>
                  <p className="text-sm font-medium text-gray-500">Phase 1</p>
                  <p className="mt-4 text-xl font-bold text-gray-900">Launch</p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit odio sagittis, ac senectus eta.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Phase 2</p>
                  <p className="mt-4 text-xl font-bold text-gray-900">
                    Investment
                  </p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit odio sagittis, ac senectus eta.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Phase 3</p>
                  <p className="mt-4 text-xl font-bold text-gray-900">
                    Connection
                  </p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit odio sagittis, ac senectus eta.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Phase 4</p>
                  <p className="mt-4 text-xl font-bold text-gray-900">Growth</p>
                  <p className="mt-4 text-base font-medium text-gray-500">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit odio sagittis, ac senectus eta.
                  </p>
                </div>
              </div> */}
            </div>
            <div className="lg:col-span-4">
              <div className="aspect-w-4 aspect-h-3 lg:aspect-none">
                <img
                  className="object-cover w-full h-full"
                  src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/roadmap/8/image.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
