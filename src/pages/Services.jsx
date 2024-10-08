import React from "react";

import servicebanner from "../assets/servicebanner.webp";
import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";
import service3 from "../assets/service3.webp";

function Services() {
  return (
    <>
      <div className="overflow-hidden">
        {/* Banner Section */}
        <div className="w-full h-[300px] md:h-[400px] relative">
          {/* Image Banner */}
          <img
            src={servicebanner}
            alt="service Banner"
            className="w-full h-full object-cover"
          />

          {/* Diminished Black Overlay */}
          <div className="absolute inset-0 bg-[rgba(10,9,9,0.5)]"></div>

          {/* Red Circles and Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Left Red Circle */}
              <div className="absolute -left-5 md:-left-10 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#fa6030] rounded-full"></div>

              {/* About Us Text */}
              <h1 className="text-white text-2xl md:text-5xl font-semi-bold px-4 md:px-56 flex justify-center items-center text-center">
                We make home designing easy, whether an entire home or an
                updated area.
              </h1>

              {/* Right Red Circle */}
              <div className="absolute -right-5 md:-right-10 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#fa6030] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Design Consultation Section */}
        <div className="pt-8  px-4 md:px-8 lg:px-20 bg-[#fcf9f4]">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6 text-center">
            Design Consultation
          </h2>
          <p className="max-w-lg md:max-w-2xl mx-auto text-base md:text-lg mb-8 md:mb-12 text-center md:px-6 lg:px-44">
            At Ergo Craft, we wholeheartedly embrace the notion that crafting a
            home is an art form. We’re not just here to offer our creative
            expertise; we’re committed to sharing our distinctive vision with
            you. Whether it’s curating cohesive ensembles for your fresh living
            space or breathing new life into an entirely different abode, our
            design associates possess a discerning eye for harmonizing elements
            with the finesse of an external interior designer.
          </p>

          {/* Images and Text Blocks */}
          <div className="flex flex-col md:flex-row justify-center items-start lg:items-stretch text-left space-y-8 md:space-y-0">
            {/* First Image and Text Block */}
            <div className="flex-1 flex flex-col items-center lg:items-end relative md:-top-44 group">
              <img
                src={service1}
                alt="Dining Area"
                className="w-3/4 md:w-full max-w-xs h-auto object-cover mb-4 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <p className="max-w-sm text-center md:text-left md:pl-16">
                Complete the form to initiate a consultation request.
              </p>
            </div>

            {/* Second Image and Text Block */}
            <div className="flex-1 flex flex-col items-center pl-5 md:pt-7 group">
              <p className="max-w-sm text-center">Book an appointment</p>
              <img
                src={service2}
                alt="Material Samples"
                className="md:w-[40%] max-w-xs md:h-auto object-cover mb-4 p-7 md:p-0 h-[50%] transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
            </div>

            {/* Third Image and Text Block */}
            <div className="flex-1 flex flex-col items-center lg:items-start relative md:-top-44 group">
              <img
                src={service3}
                alt="Living Room"
                className="w-3/4 md:w-full max-w-xs h-auto object-cover mb-4 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />
              <p className="max-w-sm text-center md:text-left md:pr-6">
                Once received, one of our associates will promptly reach out to
                confirm your appointment.
              </p>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------- */}

        {/* ---------------------------------------------- */}
      </div>
      <div className=" bg-[#f6f6f3] px-4  lg:px-20 md:py-10 ">
        <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-6 text-center">
          Room Planer
        </h2>
        <p className="max-w-lg md:max-w-2xl mx-auto text-sm md:text-lg mb-8 md:mb-12 text-center">
          See your exact room, expertly designed in 3D, with Ergo pieces you can
          buy on the spot.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start lg:items-stretch text-left gap-8 md:px-20 md:py-5">
          {/* 3D Room Planer Section */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">3D Room Planer</h3>
            <p className="mb-4">
              Design your floor plan with custom dimensions and place Ergo
              pieces to create your ideal look. Save your creations for future
              inspiration, or opt to consult with one of our in-house designers
              for expert guidance.
            </p>
            <a href="#" className="text-[#fa6030] font-semibold">
              Book a consultation
            </a>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block w-px bg-gray-300 mx-4" />

          {/* 3D Room Planer + Free Designer Section */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left ">
            <h3 className="text-xl font-semibold mb-4">
              3D Room Planer + Free Designer
            </h3>
            <p className="mb-4">
              Seeking inspiration? Look no further than our in-house design
              experts! Collaborate with them to receive a personalized 3D sketch
              of your space, complete with Ergo items tailored to your taste and
            </p>
            <a href="#" className="text-[#fa6030] font-semibold">
              Book a consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
