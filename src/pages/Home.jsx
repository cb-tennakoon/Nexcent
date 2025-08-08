import Community from "../components/Community";
import CommunitySectiontwo from "../components/CommunitySectiontwo";
import HeroSection from "../components/HeroSection";
import Jsmotion from "../components/Jsmotion";
import OurClients from "../components/OurClients";
import Tsotion from "../components/Tsotion";
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex  justify-center">
      <div className="text-center relative w-full top-0">
        <HeroSection/>
        <OurClients/>
        <Community/>
        <CommunitySectiontwo/>
        <Tsotion/>
        {/* <Jsmotion/> */}
      </div>
    </div>
  );
}
export default Home;