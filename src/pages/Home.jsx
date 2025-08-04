import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex  justify-center">
      <div className="text-center relative w-full h-[800px] top-0">
        <HeroSection/>
      </div>
    </div>
  );
}
export default Home;