import React from "react";
import home1 from "../assets/home1.webp";
import door2 from "../assets/door2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bgtestimonial from "../assets/bg-testimonial.jpg";
import lock1 from "../assets/lock1.webp";
import lock2 from "../assets/lock2.webp";
import { Link } from "react-router-dom";
import modern1 from "../assets/modern1.jpg";
import modern2 from "../assets/modern2.jpg";
import modern3 from "../assets/modern3.jpg";
import modern4 from "../assets/modern4.jpg";
import modern5 from "../assets/modern5.jpg";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import prev1 from "../assets/prev1.jpg";
import prev2 from "../assets/prev2.jpg";
import prev3 from "../assets/prev3.jpg";
import prev4 from "../assets/prev4.jpg";

function Home() {
  // Scroll left function
  const scrollLeft = () => {
    const container = document.getElementById("scrollContainer");
    container.scrollBy({
      left: -container.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  // Scroll right function
  const scrollRight = () => {
    const container = document.getElementById("scrollContainer");
    container.scrollBy({
      left: container.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  // ------------
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <div className="w-full h-full  flex flex-col md:flex-row relative">
        {/* Green Div */}
        <div className="w-full pt-10 md:w-1/2 bg-[#fcf9f4] flex justify-center items-center">
          <div className="">
            <div className="bg-[#fcf9f4] flex-col justify-end md:pr-10 px-10 md:pl-56 md:py-12">
              <h1 className="text-black font-light text-5xl ">
                A HAPPY WINDOW IS A RIGHT WINDOW
              </h1>
              <p className="text-black font-light text-base text-justify md:py-7 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi 
              </p>
              <button className="bg-[#be9662] text-white px-6 py-3 my-5">
                Get In Touch
              </button>
            </div>
            {/* <div className="bg-yellow-600 flex justify-end md:pr-10 px-10 md:pl-48"></div> */}
          </div>
        </div>

        {/* Yellow Div */}
        <div className="w-full  md:w-1/2 bg-yellow-200 md:h-[550px] ">
          <img src={home1} className="h-[300px] md:h-full" alt="" />
        </div>
      </div>
      {/* --------------absolute box--------------- */}
      <div className="bg-[#be9662] h-24 w-full absolute md:w-[85%] flex md:bottom-[124px]  justify-center  gap-6 ">
        <div className="w-25%  flex flex-col items-center  justify-center ">
          {" "}
          <h2 className="text-white">Own Production</h2>
          <p className="text-xs text-white text-center md:px-5">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="w-25%  flex flex-col items-center  justify-center ">
          {" "}
          <h2 className="text-white">Free Measurement</h2>
          <p className="text-xs text-white text-center md:px-5">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="w-25%  flex flex-col items-center  justify-center ">
          {" "}
          <h2 className="text-white">Quick Installation</h2>
          <p className="text-xs text-white text-center md:px-5 ">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="w-25%  flex flex-col items-center  justify-center ">
          {" "}
          <h2 className="text-white">Huge Experience</h2>
          <p className="text-xs text-white text-center  md:px-5">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
      {/* -------------------------first box img & content------------------------------ */}
      <div className="bg-[#fcf9f4] h-full w-full flex flex-col md:flex-row   ">
        <div className="md:w-[35%] w-full flex justify-center items-center ">
          <img src={door2} className="w-full h-[70%]" alt="" />
        </div>
        <div className="md:w-[65%] w-full flex justify-center items-center md:px-36 px-7">
          <div>
            <h1 className="text-lg font-medium">WHY CHOOSE US</h1>
            <p className="py-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p className="py-1 text-justify">
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/about">
              <button className="bg-[#be9662] text-white px-6 py-3 my-5">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ------------------------------------ second div------------------------------------- */}
      <div className="bg-[#fcf9f4] h-full w-full flex flex-col md:flex-row ">
        <div className="md:w-[65%] w-full flex justify-center items-center md:px-36 px-7">
          <div>
            <h1 className="text-lg font-medium"> OUR MANUFACTURING</h1>
            <p className="py-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p className="py-1 text-justify">
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/about">
              <button className="bg-[#be9662] text-white px-6 py-3 my-5">
                About Us
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[35%] w-full flex justify-center items-center">
          <img src={door2} className="w-full  h-[70%]" alt="" />
        </div>
      </div>
      {/* -----------------------MODern Solution------------------------ */}
      <div className="w-full h-full bg-[#fcf9f4]">
        <div className="w-full h-36 flex justify-center items-center">
          <h1 className="text-2xl">MODERN SOLUTIONS</h1>
        </div>

        <div className="relative w-full">
          {/* Container with Horizontal Scrolling */}
          <div
            id="scrollContainer"
            className="flex overflow-x-hidden md:overflow-x-auto scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="relative w-[50%] md:w-1/5 h-96 snap-center shrink-0">
              <img src={modern1} className="h-full w-full" alt="" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">WOODEN DOORS</p>
              </div>
            </div>
            <div className="relative w-[50%] md:w-1/5 h-96 snap-center shrink-0">
              <img src={modern2} className="h-full w-full" alt="" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">SMART DOORS</p>
              </div>
            </div>
            <div className="relative w-[50%] md:w-1/5 h-96 snap-center shrink-0">
              <img src={modern3} className="h-full w-full" alt="" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">ROAMIC WINDOWS</p>
              </div>
            </div>
            <div className="relative w-[50%] md:w-1/5 h-96 snap-center shrink-0">
              <img src={modern5} className="h-full w-full" alt="" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">STEEL DOORS</p>
              </div>
            </div>
            <div className="relative w-[50%] md:w-1/5 h-96 snap-center shrink-0">
              <img src={modern4} className="h-full w-full" alt="" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">ERTIBLE WINDOWS</p>
              </div>
            </div>
          </div>

          {/* Left Scroll----------- Button */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 md:hidden z-10"
            onClick={() => scrollLeft()}
          >
            ◀
          </button>

          {/* Right Scroll Button */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 md:hidden z-10"
            onClick={() => scrollRight()}
          >
            ▶
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------ */}

      <div className="w-full h-full bg-[#fcf9f4]">
        <div className="w-full h-36 bg-[#f9f4ee] flex justify-between items-center">
          <div className=" p-4  w-[20%] h-full flex  justify-center items-center">
            <img src={icon1} alt="" />
          </div>
          <div className=" p-4  w-[20%] h-full flex  justify-center items-center">
            <img src={icon2} alt="" />
          </div>
          <div className=" p-4  w-[20%] h-full flex  justify-center items-center">
            <img src={icon3} alt="" />
          </div>
          <div className=" p-4  w-[20%] h-full flex  justify-center items-center">
            <img src={icon4} alt="" />
          </div>
          <div className=" p-4  w-[20%] h-full flex  justify-center items-center">
            <img src={icon5} alt="" />
          </div>
        </div>

        <div className="w-full h-36 flex justify-center items-center">
          <h1 className="text-2xl">PREVIOUS WORKS</h1>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* First Box */}
          <div className="relative h-96">
            <img src={prev1} className="w-full h-full" alt="" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <p className="text-white text-lg">WOODEN DOORS</p>
            </div>
          </div>

          {/* Second Box */}
          <div className="relative h-96">
            <img src={prev2} className="w-full h-full" alt="" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <p className="text-white text-lg">SMART DOORS</p>
            </div>
          </div>

          {/* Third Box */}
          <div className="relative h-96">
            <img src={prev3} className="w-full h-full" alt="" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <p className="text-white text-lg">ROAMIC WINDOWS</p>
            </div>
          </div>

          {/* Fourth Box */}
          <div className="relative h-96">
            <img src={prev4} className="w-full h-full" alt="" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <p className="text-white text-lg">STEEL DOORS</p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------- */}
      <div
        className="w-full h-80 flex flex-col mt-5 px-7 justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgtestimonial})` }}
      >
        <h1 className="text-2xl mb-5">WHAT THEY SAY</h1>
        <Slider {...settings} className="w-full max-w-xl">
          <div>
            <p className="text-center">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <p className="text-center">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            </p>
          </div>
          <div>
            <p className="text-center">
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness.
            </p>
          </div>
        </Slider>
      </div>

      {/* <div className="w-full h-80 flex flex-col  bg-[#be9662] mt-5 md:px-96 px-7 justify-center items-center ">
        <h1 className="text-2xl">WHAT THEY SAY</h1>
        <p className="flex-col justify-center items-center text-center">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div> */}

      {/* ------------------------------------ */}

      {/* Left section with text */}
      {/* h-full rounded-br-[40%] */}
      {/* Right section with images */}
      <div className="flex flex-col gap-5 md:p-12 md:flex-row p-7">
        <div className="block">
          <div className="h-96 bg-[#f4ebe6] w-full md:h-full  md:w-[425px] rounded-br-[40%] flex flex-col justify-center items-start text-left px-6 md:px-12">
            <h2 className="text-lg font-semibold">Interior Decoration</h2>
            <h1 className="text-2xl font-bold">
              Cabinets With Style to
              <br /> Meet Your Vision
            </h1>
            <p className="mt-4">
              With years of experience and a passion for design, we specialize
              in creating stunning kitchens that combine functionality and
              style.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={lock1}
            alt="Cabinet Image 1"
            className="h-full w-full md:w-[425px] rounded-tr-[40%]"
          />
        </div>
        <div className="hidden md:block">
          <img
            src={lock2}
            alt="Cabinet Image 2"
            className="h-full w-full md:w-[425px] rounded-tl-[40%]"
          />
        </div>
      </div>

      {/* -||--||--||--||--||--||--||--||--||--||--||--qwert007--||--||--||--||--||--||--||--||--||--||- */}
    </>
  );
}

export default Home;

// ----------------------------------------------------------
