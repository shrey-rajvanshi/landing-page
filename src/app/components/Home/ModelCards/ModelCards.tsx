// "use client";

// import { useState } from "react";
import "./cards.css";
import { dummyExploreCardData } from "./DummyModelData.js";
import { VscDebug } from "react-icons/vsc";

export const ModelCards = () => {
  //   const [mapIndex, setMapIndex] = useState(4);
  return (
    <>
      <div className="card-container">
        <div className="section-gradient-heading">The Executive Team</div>
        <div className="section-subheading">Building the future</div>

        <div className=" flex gap-[20px] my-[48px] flex-wrap justify-center">
          {dummyExploreCardData.slice(0, 4).map((data, i) => (
            <div className="card" key={i}>
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
        </div>
        <a href="https://stage.segmind.com/serverless/explore">
          <button className="btn btn-primary">Explore more </button>
        </a>
      </div>

      <div className="card-container mt-[64px]">
        <div className="section-gradient-heading">The Executive Team</div>
        <div className="section-subheading">Features the future</div>

        <div className="card-wrapper flex gap-[20px] my-[48px] flex-wrap justify-center">
          <div className="feature-card">
            <div className="icon">
              <VscDebug />
            </div>
            <div className="feature-heading">Fast</div>
            <div className="feature-subheading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              accusantium nobis, voluptatum quis laborum exercitat
            </div>
          </div>
          <div className="feature-card">
            <div className="icon">
              <VscDebug />
            </div>
            <div className="feature-heading">Fast</div>
            <div className="feature-subheading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              accusantium nobis, voluptatum quis laborum exercitat
            </div>
          </div>
          <div className="feature-card">
            <div className="icon">
              <VscDebug />
            </div>
            <div className="feature-heading">Fast</div>
            <div className="feature-subheading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              accusantium nobis, voluptatum quis laborum exercitat
            </div>
          </div>
          <div className="feature-card">
            <div className="icon">
              <VscDebug />
            </div>
            <div className="feature-heading">Fast</div>
            <div className="feature-subheading">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              accusantium nobis, voluptatum quis laborum exercitat
            </div>
          </div>
        </div>
      </div>

      <div className="card-container mt-[64px]">
        <div className="section-gradient-heading">The Executive Team</div>
        <div className="section-subheading">User Testimonials</div>

        <div className=" flex gap-[20px] my-[48px] flex-wrap justify-center"></div>
      </div>
    </>
  );
};
