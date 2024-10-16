import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Element } from "react-scroll";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ParticlesContainer from "./ParticlesContainer";
const Artworks = ({ textLeave, textEnter }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ArtWorksArr = [

    {
      title: "Neon City",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/7.jpg",
      date: "12/09/22",
    },
    {
      title: "Your Name",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/1.JPG",
      date: "12/09/22",
    },
    {
      title: "Ancient Ruins",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/2.png",
      date: "12/09/22",
    },
    {
      title: "Wall of Art",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/3.JPG",
      date: "12/09/22",
    },
    {
      title: "Neon City",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/4.png",
      date: "12/09/22",
    },
    {
      title: "Cube",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/5.JPG",
      date: "19/05/23",
    },

  ];

  const [scrolled, setScrolled] = useState(0);

  const titleSpring = (show) =>
    useSpring({
      opacity: show ? 1 : 0,
      transform: show ? "scale(1)" : "scale(1.5)",
      letterSpacing: show
        ? "0.1em"
        : windowWidth < 800
        ? windowWidth < 500
          ? "0.2em"
          : "0.5em"
        : "0.8em",
    });

  const descSpring = (show) =>
    useSpring({
      opacity: show ? 1 : 0,
      transform: show ? "scale(1) " : "scale(1.5)",
      letterSpacing: show
        ? "0.1em"
        : windowWidth < 800
        ? windowWidth < 500
          ? "0.05em"
          : "0.3em"
        : "0.8em",
    });

  const dateSpring = (show) =>
    useSpring({
      opacity: show ? 1 : 0,
      transform: show ? "scale(1) " : "scale(1.1)",
      letterSpacing: show ? "0.1em" : "0.3em",
    });

  const imageSpring = (end, extra) =>
    useSpring({
      transform: `translate(-${scrolled / 2}px, -${scrolled / 2}px)`,
    });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    <div className="z-0">
      <ParticlesContainer />  
    </div>  
    <div className=" text-white items-center ">
      <div className=" overflow-hidden relative">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="flex max-md:text-5xl max-sm:text-4xl justify-center items-center text-6xl h-[100vh] mb-[15rem]"
        >
          Welcome to Artworks
        </div>
        <div className="flex flex-col gap-[11rem] mx-auto max-md:gap-[1rem] max-xl:max-w-[80%] h-[2500px] max-md:h-[295vh] max-sm:h-[300vh]">
          {ArtWorksArr.map((artwork, index) => {
            const add = windowWidth > 780 ? 500 : 380;
            const show =
              scrolled > 350 + index * add && scrolled < 650 + index * add;
            const margin_val =
              (
                (windowWidth > 1900
                  ? 200
                  : windowWidth < 1050
                  ? windowWidth < 750
                    ? 200
                    : 300
                  : 300) * index
              ).toString() + "px";
            return (
              <>
                <div
                  key={index}
                  className={`fixed z-30 top-[50vh] -rotate-90 left-0 max-sm:-left-10  overflow-visible`}
                >
                  <animated.div style={dateSpring(show)}>
                    <span
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="text-8xl max-xl:text-6xl max-sm:text-4xl"
                    >
                      {artwork.date}
                    </span>
                  </animated.div>
                </div>
                <div
                  key={index}
                  className={`fixed z-30 w-[100%] top-[40vh] max-sm:left-14 left-24 overflow-hidden`}
                >
                  <Element name="scrollToElement" class="max-sm:mr-20">
                    <animated.div
                      className="text-center"
                      style={titleSpring(show)}
                    >
                      <h2
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className="text-3xl"
                      >
                        {artwork.title}
                      </h2>
                    </animated.div>
                    <animated.div
                      className="text-center  text-base mt-5 max-sm:text-sm  "
                      style={descSpring(show)}
                    >
                      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        {artwork.desc}
                      </p>
                    </animated.div>
                  </Element>
                </div>
                <div
                  key={index}
                  className="w-[100%] flex justify-end -rotate-12"
                  style={{ marginLeft: margin_val }}
                >
                  <animated.div style={imageSpring(300 + index * 500 + 400, 0)}>
                    <img
                      src={artwork.img}
                      alt=""
                      className="h-[500px] w-[500px] max-lg:scale-[90%] max-xl:ml-[30rem] max-md:ml-[30rem] max-md:scale-75 rounded-lg brightness-90 z-0"
                    />
                  </animated.div>
                </div>
              </>
            );
          })}
        </div>
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="flex absolute hover:text-white text-white bottom-[5rem] max-sm:left-[35%] max-md:left-[40%] left-[45%] gap-5 justify-center flex-col items-center"
        >
          <div className="flex flex-col gap-3 items-center">
            <Link
              to="/more-artworks"
              className="text-3xl text-white hover:text-white cursor-pointer border border-white rounded-full p-2"
            >
              <FaLongArrowAltRight/>
            </Link>
             <Link
              to="/more-artworks"
              className="text-3xl text-white hover:text-white cursor-pointer"
            >
              Show More
            </Link> 
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Artworks;
