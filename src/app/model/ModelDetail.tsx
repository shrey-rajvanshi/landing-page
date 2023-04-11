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
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Roadmap
                </h2>
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
                            {" "}
                            Dashboard{" "}
                          </a>

                          <a
                            href="#"
                            className="py-4 text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                          >
                            {" "}
                            My Account{" "}
                          </a>

                          <a
                            href="#"
                            className="py-4 text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap"
                          >
                            {" "}
                            Downloads{" "}
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
