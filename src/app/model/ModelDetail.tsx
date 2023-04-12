"use client";
import "./model-detail.css";
import { TbPrompt } from "react-icons/tb";
import axios from "axios";
import { useState, useEffect } from "react";

const sd12 = [
  { scheduler: "DDIM" },
  { scheduler: "DPM Multi" },
  { scheduler: "DPM Single" },
  { scheduler: "Euler a" },
  { scheduler: "Euler" },
  { scheduler: "Heun" },
  { scheduler: "DPM2 a Karras" },
  { scheduler: "DPM2 Karras" },
  { scheduler: "LMS" },
  { scheduler: "PNDM" },
  { scheduler: "DDPM" },
  { scheduler: "UniPC" },
];

const sd15 = [
  { scheduler: "DDIM" },
  { scheduler: "DPM Multi" },
  { scheduler: "DPM Single" },
  { scheduler: "Euler a" },
  { scheduler: "Euler" },
  { scheduler: "Heun" },
  { scheduler: "DPM2 a Karras" },
  { scheduler: "DPM2 Karras" },
  { scheduler: "LMS" },
  { scheduler: "PNDM" },
  { scheduler: "DDPM" },
];

const ControlNet = [
  { scheduler: "DDIM" },
  { scheduler: "DPM Multi" },
  { scheduler: "DPM Single" },
  { scheduler: "Euler a" },
  { scheduler: "Euler" },
  { scheduler: "Heun" },
  { scheduler: "DPM2 a Karras" },
  { scheduler: "DPM2 Karras" },
  { scheduler: "LMS" },
  { scheduler: "PNDM" },
  { scheduler: "DDPM" },
  { scheduler: "UniPC" },
];

export const ModelDetailPage = () => {
  const [formInput, setFormInput] = useState({
    prompt: "Stormtrooper giving lecture",
    steps: "30",
    scheduler: "UniPC",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [response, setResponse] = useState();

  const [dropDown, setDropDown] = useState(false);
  // const imageTest = URL.createObjectURL(selectedImage);

  const getResponse = async (selectedImage) => {
    const imageTest = URL.createObjectURL(selectedImage);
    try {
      const response = await axios.post(
        "https://api.segmind.com/v1/stablediffusion-15-controlnet-canny",
        {
          prompt: "Stormtrooper giving lecture",
          negative_prompt: "NONE",
          samples: "1",
          scheduler: "DDIM",
          num_inference_steps: "30",
          guidance_scale: "8",
          seed: "1131347997987",
          strength: "0.75",
          // imageUrl: imageTest,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
                {/* tabs  */}
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

                {/* Prompt  */}
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
                              value={formInput.prompt}
                              onChange={(e) =>
                                setFormInput({
                                  ...formInput,
                                  prompt: e.target.value,
                                })
                              }
                              name=""
                              id=""
                              placeholder="Enter Prompt"
                              rows="1"
                              className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            ></textarea>
                          </div>
                        </div>
                      </div>
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
                              <button
                                className={
                                  formInput.steps == "20"
                                    ? "button-active"
                                    : "button"
                                }
                                onClick={() =>
                                  setFormInput({ ...formInput, steps: "20" })
                                }
                              >
                                20
                              </button>
                              <button
                                className={
                                  formInput.steps == "30"
                                    ? "button-active"
                                    : "button"
                                }
                                onClick={() =>
                                  setFormInput({ ...formInput, steps: "30" })
                                }
                              >
                                30
                              </button>
                              <button
                                className={
                                  formInput.steps == "50"
                                    ? "button-active"
                                    : "button"
                                }
                                onClick={() =>
                                  setFormInput({ ...formInput, steps: "50" })
                                }
                              >
                                50
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Scheduler */}
                <div className="pb-[1rem] bg-white">
                  <div className=" mx-auto">
                    <div className="relative">
                      <label className="block text-sm font-bold text-gray-900">
                        Scheduler
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
                              <span>{formInput.scheduler}</span>
                            </div>
                            <svg
                              onClick={() => setDropDown((prev) => !prev)}
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

                      {dropDown && (
                        <div className="relative -bottom-2 w-full z-10">
                          <div className="border-gray-300 bg-white shadow border rounded-lg w-full block text-sm px-4 py-2 space-y-2">
                            <div className="relative mt-2"></div>
                            <ul className="flex flex-col">
                              {sd12.map((scheduler) => {
                                return (
                                  <li
                                    className="w-full rounded-md p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                      setFormInput({
                                        ...formInput,
                                        scheduler: scheduler.scheduler,
                                      });
                                    }}
                                  >
                                    {scheduler.scheduler}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                      {/* Upload a file: */}
                      <div className=" mt-[1rem] bg-white">
                        <div className=" ">
                          <div className="">
                            <div className="sm:flex flex-col  ">
                              <label
                                for=""
                                className="block text-sm font-bold text-gray-900"
                              >
                                Upload a file:
                              </label>
                              <div className="relative mt-2 sm:mt-0 sm:flex-1">
                                <input
                                  type="file"
                                  onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setSelectedImage(event.target.files[0]);
                                  }}
                                  className=" mt-[8px] block w-full px-4 border py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                />
                                {selectedImage && (
                                  <div>
                                    <img
                                      alt="not found"
                                      width={"250px"}
                                      src={URL.createObjectURL(selectedImage)}
                                    />
                                    <br />
                                    <button
                                      onClick={() => setSelectedImage(null)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        className="button-active mt-[1rem]"
                        onClick={() => getResponse(selectedImage)}
                      >
                        check
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
