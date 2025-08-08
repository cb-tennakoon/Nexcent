import React, { useEffect, useRef, useState } from "react";

const SlideInSection = ({ direction = "left", children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const startPosition =
    direction === "left"
      ? "-translate-x-50"
      : direction === "right"
      ? "translate-x-20"
      : "translate-y-20";

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out opacity-0 transform ${startPosition} ${
        isVisible ? "animate-slide-in" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default function Jsmotion() {
  return (
    <div className="space-y-32 p-10">
      <SlideInSection direction="left">
        <div className="bg-blue-500 text-black p-6 rounded-xl">From Left</div>
      </SlideInSection>

      <SlideInSection direction="right">
        <div className="bg-green-500 text-black p-6 rounded-xl">From Right</div>
      </SlideInSection>

      <SlideInSection direction="bottom">
        <div className="bg-red-500 text-black p-6 rounded-xl">From Bottom</div>
      </SlideInSection>
    </div>
  );
}