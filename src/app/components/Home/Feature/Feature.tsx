// "use client";

// import { useState } from "react";
import "./feature.css";
// import { dummyExploreCardData } from "./DummyModelData.js";

export const FeatureCard = () => {
  //   const [mapIndex, setMapIndex] = useState(4);
  return (
    <div className="card-container">
      <div className="section-gradient-heading">The Executive Team</div>
      <div className="section-subheading">Building the future</div>

      <div className="card-wrapper flex gap-[20px] my-[48px] flex-wrap justify-center"></div>
      <a href="https://stage.segmind.com/serverless/explore">
        <button className="btn btn-sec">Explore more </button>
      </a>
    </div>
  );
};
