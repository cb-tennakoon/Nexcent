import HeroSection from "../components/HeroSection";
import OurClients from "../components/OurClients";
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex  justify-center">
      <div className="text-center relative w-full top-0">
        <HeroSection/>
        <OurClients/>
      </div>
    </div>
  );
}
export default Home;