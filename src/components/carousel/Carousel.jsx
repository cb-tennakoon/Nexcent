import { useState,useEffect,useRef   } from "react";
import TextCard from "./caroselPage/TextCard";
import ProfileCard from "./caroselPage/ProfileCard";
import FeatureCard from "./caroselPage/FeatureCard";

export default function Carousel(){

    const [currentIndex,setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [prevIndex, setPrevIndex] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        { id: 1, component: <TextCard />, alt: 'Text Card' },
        { id: 2, component: <ProfileCard />, alt: 'Profile Card' },
        { id: 3, component: <FeatureCard />, alt: 'Feature Card' },
    ];
  const prevSlide = () => {
    //Disable buttons during animations using isAnimating state
    if (isAnimating) {
      console.log('Animation in progress, ignoring prev click');
      return;
    }
    console.log('Previous clicked, currentIndex:', currentIndex);
    setIsAnimating(true);
    setDirection('prev');
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? slides.length - 1 : prev - 1;
      console.log('New index:', newIndex);
      return newIndex;
    });
  };

  const nextSlide = () => {
    if (isAnimating) {
      console.log('Animation in progress, ignoring next click');
      return;
    }
    console.log('Next clicked, currentIndex:', currentIndex);
    setIsAnimating(true);
    setDirection('next');
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => {
      const newIndex = prev === slides.length - 1 ? 0 : prev + 1;
      console.log('New index:', newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    if (direction) {
      console.log('Current index:', currentIndex, 'Direction:', direction, 'Prev index:', prevIndex);
      const timer = setTimeout(() => {
        setDirection(null);
        setPrevIndex(null);
        setIsAnimating(false);
        console.log('Reset direction and isAnimating');
      }, 500); // Matches transition duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

    const [dragStartX, setDragStartX] = useState(null);
    const carouselRef = useRef(null);

    const handleDragStart = (e) => {
      if (isAnimating) return;
      const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
      setDragStartX(clientX);
      console.log('Drag start at:', clientX);
    };

    const handleDragEnd = (e) => {
      if (isAnimating || dragStartX === null) return;
      const clientX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
      const dragDistance = dragStartX - clientX;
      console.log('Drag end, distance:', dragDistance);
      if (dragDistance > 50) {
        prevSlide();
      } else if (dragDistance < -50) {
        nextSlide();
      }
      setDragStartX(null);
    };
    
    return <>
    <div className="relative w-full mx-auto h-[600px] perspective-1000 overflow-hidden" ref={carouselRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
    >
      {slides.map((slide, index) => {
        //These are the default Tailwind CSS classes applied to every slide
        //let slideClass = 'absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out';
        let slideClass = 'absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out';

        if (index === currentIndex) {
            slideClass += ' translate-x-0 opacity-100 visible z-10';
            //slideRole = 'active';
        }
        else if(index === prevIndex && direction){
            slideClass += direction === 'next' ? ' translate-x-full opacity-0 visible z-5' : ' -translate-x-full opacity-0 visible z-5';
        }
        else{
            slideClass += ' opacity-0 invisible z-0';
        }

        console.log("test");
        console.log(`Slide ${index} class: ${slideClass}`);
        return (
          <div key={slide.id} className={slideClass}>
            {slide.component}
          </div>
        );
      })}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-20 ${
          isAnimating ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 z-20 ${
          isAnimating ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        &rarr;
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentIndex && !isAnimating) {
                console.log('Dot clicked, target index:', index);
                setIsAnimating(true);
                setDirection(index > currentIndex ? 'next' : 'prev');
                setPrevIndex(currentIndex);
                setCurrentIndex(index);
              }
            }}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
    </>
}