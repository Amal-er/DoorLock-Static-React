import React from "react";
import aboutbanner from "../assets/aboutbanner.webp";
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.webp";
import CountUp from "react-countup";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import { motion } from "framer-motion"; // For animations
import { useInView } from "react-intersection-observer";

function About() {
  const { ref: valueRef, inView: valueInView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <>
      <div className="bg-[#fcf9f4]">
        <div className="w-full h-[400px] relative">
          {/* Image Banner */}
          <img
            src={aboutbanner}
            alt="About Banner"
            className="w-full h-full object-cover"
          />

          {/* Diminished Black Overlay */}
          <div className="absolute inset-0 bg-[rgba(10,9,9,0.5)]"></div>

          {/* Red Circles and Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Left Red Circle */}
              <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#fa6030] rounded-full"></div>

              {/* About Us Text */}
              <h1 className="text-white text-4xl font-bold">About Us</h1>

              {/* Right Red Circle */}
              <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#fa6030] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* ------------about us-------------------- */}
        <div className="container mx-auto py-10 md:px-12 bg-[#fcf9f4]">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10">
            {/* Left Side: Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2">
              <div className="md:pt-12">
                <img
                  src={about1}
                  alt="Modern Building"
                  className="w-full object-cover h-[280px]" // Same height for consistency
                />
              </div>
              <div className="">
                <img
                  src={about2}
                  alt="Interior Design"
                  className="w-full object-cover h-[330px]" // Same height for consistency
                />
              </div>

              <img
                src={about3}
                alt="City View"
                className="w-full object-cover sm:col-span-2 h-[200px] md:pl-5" // Same height for consistency
              />
            </div>

            {/* Right Side: About Text Section */}
            <div className="lg:w-1/2 space-y-4 md:py-10 px-7">
              {/* Dot and Title Section */}
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h2 className="text-lg font-semibold uppercase text-gray-500">
                  Know About Us
                </h2>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold text-gray-800">
                A Century of Excellence
              </h1>

              {/* Paragraph Section */}
              <p className="text-gray-600">
                Simpson has been making doors within the forests of Washington
                state since 1912. Generations of families have dedicated their
                lives to creating the finest doors in America. It’s a team
                effort requiring creativity, engineering, innovation, and
                experience. So when you choose a Simpson door, you are not only
                getting a finely handcrafted piece for your home, you are
                getting a part of our home as well.
              </p>

              <p className="text-gray-600">
                Simpson's comprehensive line of interior and exterior stile and
                rail doors includes hundreds of standard options from panel to
                French to decorative entry doors with matching sidelights and
                transoms. Available in a variety of wood species, sizes, and
                glass options, Simpson provides customers with the door they
                desire, whether it is a standard design or a one-of-a-kind
                custom door.
              </p>

              {/* Button */}
              <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
        {/* ---------------- counting--------------------- */}
        <div className="container mx-auto py-10 text-center bg-white">
          <h2 className="text-2xl font-bold text-gray-800">
            Trusted by over{" "}
            <span className="text-[#fa6030]">
              <CountUp end={362} duration={3} />
            </span>{" "}
            clients
          </h2>
          <p className="text-gray-600 mt-2">
            Experts to level up your business
          </p>

          {/* Additional Number Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center">
            {/* Projects */}
            <div className="flex flex-col items-center">
              <img className="w-20 mb-2" src={icon1} alt="Projects Icon" />
              <h3 className="text-5xl font-bold text-[#fa6030]">
                <CountUp end={76} duration={3} />
              </h3>
              <p className="text-lg text-gray-600 mt-2">Projects</p>
            </div>

            {/* Happy Clients */}
            <div className="flex flex-col items-center">
              <img className="w-20 mb-2" src={icon2} alt="Happy Clients Icon" />
              <h3 className="text-5xl font-bold text-[#fa6030]">
                <CountUp end={362} duration={3} />
              </h3>
              <p className="text-lg text-gray-600 mt-2">Happy Clients</p>
            </div>

            {/* Team Members */}
            <div className="flex flex-col items-center">
              <img className="w-20 mb-2" src={icon3} alt="Team Members Icon" />
              <h3 className="text-5xl font-bold text-[#fa6030]">
                <CountUp end={19} duration={3} />
              </h3>
              <p className="text-lg text-gray-600 mt-2">Team Members</p>
            </div>
          </div>
        </div>
        {/* ------------------  vison mission------------------------ */}

        {/* ----------------------- */}
      </div>
      <div className="container-fluid mx-auto py-10 md:px-28 text-center bg-[#fcf9f4] px-7">
        {/* Left-side: Text coming from the left */}
        <motion.div
          ref={valueRef} // Attach the ref for scroll detection
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={valueInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
          transition={{ duration: 1 }} // Animation duration
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our value</h2>
          <h3 className="text-3xl font-bold text-gray-800">
            Where designs meet creativity.
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>

        {/* Right-side: Vision and Mission coming from the right */}
        <motion.div
          ref={visionRef} // Attach the ref for scroll detection
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          animate={visionInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
          transition={{ duration: 1.5 }} // Slightly slower animation
        >
          {/* Vision */}
          <div className="bg-white p-8 shadow-lg rounded-lg md:w-[600px] ">
            <img
              src={icon1}
              alt="Vision Icon"
              className="w-10 h-10 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Vision</h3>
            <p className="text-gray-600 mt-2">
              Feugiat egestas arcu lacinia sollicitudin augue ultrices
              suspendisse.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <img
              src={icon2}
              alt="Mission Icon"
              className="w-10 h-10 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Mission</h3>
            <p className="text-gray-600 mt-2">
              Feugiat egestas arcu lacinia sollicitudin augue ultrices
              suspendisse.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default About;
