import React from "react";
import home1 from "../assets/home1.webp";
import door2 from "../assets/door2.jpg";

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
      <div className="bg-[#be9662] h-24 w-full absolute md:w-[85%] flex md:bottom-[124px] bottom-14 ">
        <div>fs</div>
        <div>sfs</div>
        <div>dfsf</div>
        <div>fdf</div>
      </div>
      {/* ---------------------first box img & content------------------------------ */}
      <div className="bg-[#fcf9f4] h-full w-full flex flex-col md:flex-row   ">
        <div className="md:w-[35%] w-full flex justify-center items-center ">
          <img src={door2} className="w-full h-[70%]" alt="" />
        </div>
        <div className="md:w-[65%] w-full flex justify-center items-center md:px-36 px-7">
          <div>
            <h1 className="text-lg font-medium">WHY CHOOSE US</h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p className="py-1">
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-[#be9662] text-white px-6 py-3 my-5">
              About Us
            </button>
          </div>
        </div>
      </div>
      {/* ------------------------ second div------------------------------------- */}
      <div className="bg-[#fcf9f4] h-full w-full flex flex-col md:flex-row ">
        <div className="md:w-[65%] w-full flex justify-center items-center md:px-36 px-7">
          <div>
            <h1 className="text-lg font-medium"> OUR MANUFACTURING</h1>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <p className="py-1">
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-[#be9662] text-white px-6 py-3 my-5">
              About Us
            </button>
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
              <div className="w-full h-full object-cover bg-slate-100"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">WOODEN DOORS</p>
              </div>
            </div>
            <div className="relative w-[50%] md:w-1/5 h-96 snap-center shrink-0">
              <div className="w-full h-full object-cover bg-slate-200"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">SMART DOORS</p>
              </div>
            </div>
            <div className="relative w-[50%] md:w-1/5 h-96 snap-center shrink-0">
              <div className="w-full h-full object-cover bg-slate-300"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">ROAMIC WINDOWS</p>
              </div>
            </div>
            <div className="relative w-[50%] md:w-1/5 h-96 snap-center shrink-0">
              <div className="w-full h-full object-cover bg-slate-400"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">STEEL DOORS</p>
              </div>
            </div>
            <div className="relative w-[50%] md:w-1/5 h-96 snap-center shrink-0">
              <div className="w-full h-full object-cover bg-slate-500"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <p className="text-white text-lg">ERTIBLE WINDOWS</p>
              </div>
            </div>
          </div>

          {/* Left Scroll Button */}
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
    </>
  );
}

export default Home;
