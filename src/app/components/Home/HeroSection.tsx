import "./hero-section.css";
import rocket from "../../../../public/rocket.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <>
      <section>
        <div className="header-container">
          <div className="header-typography">
            <div className="header-heading-gradient">
              <span className="flex gap-[10px]">
                <Image
                  src={rocket}
                  alt=""
                  className="mt-[5px] w-[50px] h-[50px]"
                />
                Deploy & Scale
              </span>
              the Fastest Generative AI Models
            </div>
            {/* <div className="header-heading text-[40px] mt-[8px]">At Scale</div> */}
            <h1 className="header-subheading mt-[16px]">
              The time is now for it to be okay to be great. For being a bright
              color. For standing out.
            </h1>
            <div className="flex gap-[10px]">
              <button className="btn btn-primary">Try Now</button>
              <button className="btn btn-sec">Explore</button>
            </div>
          </div>
          <div className="header-image-container">
            <div className="hero-img-section">
              <img
                className="hero-img mt-[100px]"
                src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
                alt="image"
              />
            </div>

            <div className="hero-img-section">
              <img
                className="hero-img"
                src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
                alt="image"
              />
              <img
                className="hero-img"
                src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
                alt="image"
              />
            </div>
            <div className="hero-img-section">
              <img
                className="hero-img  mt-[70px]"
                src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
                alt="image"
              />
              <img
                className="hero-img"
                src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
                alt="image"
              />
            </div>

            <div className="hero-img-section">
              <img
                className="hero-img  mt-[20px]"
                src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
                alt="image"
              />
              <img
                className="hero-img"
                src="https://replicate.delivery/pbxt/YKVetNkuroyWJC4mxzrgvQbJ2vS5eFOS1B8xkJMkAiXMbaegA/output_1.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
