import { Inter } from "next/font/google";
import { HeroSection } from "./components/Home/HeroSection";
import { ModelCards } from "./components/Home/ModelCards/ModelCards";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <HeroSection />
      <ModelCards />
    </>
  );
};
export default Home;
