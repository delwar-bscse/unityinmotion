import React, { useState, useEffect, useRef } from "react";

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // When the element is in view, set the background image
            observer.unobserve(bgRef.current); // Stop observing once it's loaded
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in the viewport
    );

    if (bgRef.current) {
      observer.observe(bgRef.current);
    }

    return () => {
      if (bgRef.current) {
        observer.unobserve(bgRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="w-full relative bg-cover bg-no-repeat h-[1000px]"
      style={{
        backgroundImage: isVisible
          ? "url('https://i.gifer.com/Eih3.gif')"
          : "none",
        backgroundColor: "#000", // Optionally, add a fallback background color
      }}
    >
      <div className="relative inset-0 w-full h-full z-10 bg-gray-900/90 flex items-center justify-center">
        <h2 className="text-white font-bold text-2xl md:text-4xl">
          Functional Movement.<br /> Anytime Anywhere.
        </h2>
        <button className="text-white font-bold text-lg md:text-xl">
          Join Our Class
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
