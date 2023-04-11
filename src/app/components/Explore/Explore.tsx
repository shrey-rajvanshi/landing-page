import { dummyExploreCardData } from "./DummyModelData.js";
import "./explore.css";

export const Explore = () => {
  return (
    <>
      <div className="explore-wrapper flex flex-wrap gap-[30px] justify-center py-[50px]">
        {dummyExploreCardData.map((data) => (
          <div className="card cursor-pointer">
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
    </>
  );
};
