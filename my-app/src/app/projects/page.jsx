"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    if (document.scrollingElement) {
      document.scrollingElement.scrollTo(0, 0);
    }
    handleScroll();
    return () => {};
  }, []);

  const handleScroll = () => {
    ScrollTrigger.defaults({
      scroller: ".scroller",
    });

    gsap.utils.toArray("section").forEach((section, index) => {
      const wrapper = section.querySelector(".wrapper");

      if (wrapper) {
        const xStart = index % 2 ? "100%" : -wrapper.scrollWidth;
        const xEnd = index % 2 ? -wrapper.scrollWidth : 0;

        gsap.fromTo(
          wrapper,
          { x: xStart },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
            },
          }
        );
      }
    });
  };

  return (
    <div>
      <p className="mt-[90px] flex text-xl text-center font-bold text-white overflow px-5">
        Nestled in the heart of Abuja, Nigeria, we are your local construction
        experts with a commitment to global construction standards. Our projects
        stand tall as a testament to our dedication to quality.
      </p>

      <div className="scroller h-screen overflow-auto text-[12vw] overflow-x-hidden bg-transparent ">
        {[1, 2, 3, 4].map((el) => (
          <section key={el}>
            <div className="wrapper flex text-[16vh] font-medium  ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
                <Image
                  key={el2}
                  className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                  src={`https://source.unsplash.com/featured/?cities&${el2}?sig&${el}`}
                  alt="Picture of the author"
                  width={300}
                  height={300}
                />
              ))}
            </div>
          </section>
        ))}
        {[1, 2, 3, 4].map((el) => (
          <section key={el}>
            <div className="wrapper flex text-[16vh] font-medium ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
                <Image
                  key={el2}
                  className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                  src={`https://source.unsplash.com/featured/300×300/?cities&${el2}?sig&${el}`}
                  alt="Picture of the author"
                  width={300}
                  height={300}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
