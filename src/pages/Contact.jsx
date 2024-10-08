// import React, { useState } from "react";
// import contact2 from "../assets/contact2.webp";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   // State for storing the uploaded image and its preview URL
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState(null);

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle image upload and create a preview
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       // Create an object URL for the uploaded image file (this will be the exact copy)
//       const imageUrl = URL.createObjectURL(file);
//       setImageUrl(imageUrl);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here
//     console.log("Form Submitted:", formData);
//     console.log("Image Uploaded:", image);
//   };

//   return (
//     <>
//       <div className="overflow-hidden">
//         {/* Banner Section */}
//         <div className="w-full h-[300px] md:h-[400px] relative">
//           <img
//             src={contact2}
//             alt="service Banner"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-[rgba(10,9,9,0.5)]"></div>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="relative">
//               <div className="absolute -left-5 md:-left-10 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#fa6030] rounded-full"></div>
//               <h1 className="text-white text-2xl md:text-5xl font-semi-bold px-4 md:px-56 flex justify-center items-center text-center">
//                 We make home designing easy, whether an entire home or an
//                 updated area.
//               </h1>
//               <div className="absolute -right-5 md:-right-10 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#fa6030] rounded-full"></div>
//             </div>
//           </div>
//         </div>

//         {/* Design Consultation Section */}
//         <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white">
//           <div className="flex flex-col md:flex-row w-full md:px-10">
//             <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:px-0 mb-6 md:mb-0 leading-relaxed">
//               <p className="text-black font-bold uppercase">Get in Touch</p>
//               <h2 className="text-black font-bold text-4xl md:text-5xl leading-tight md:leading-tight">
//                 We are always ready <br /> to help you and <br /> answer your{" "}
//                 <br /> questions
//               </h2>
//             </div>
//             <div className="w-full md:w-1/2 bg-[#f0f2f4] md:ml-14 p-6 md:px-10 rounded-lg shadow-lg md:m-7">
//               <h1 className="text-2xl font-semibold mb-4">Get in Touch</h1>
//               <p className="mb-6">
//                 Define your goals and identify areas where AI can add value to
//                 your business.
//               </p>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Enter Your Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="Enter Your Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="subject"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     placeholder="Enter Your Subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     placeholder="Enter Your Message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     required
//                   ></textarea>
//                 </div>
//                 {/* File input for image upload */}
//                 <div className="mb-4">
//                   <label
//                     htmlFor="image"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Upload Image
//                   </label>
//                   <input
//                     type="file"
//                     id="image"
//                     name="image"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm"
//                   />
//                 </div>
//                 {imageUrl && (
//                   <div className="mb-4">
//                     <p className="text-sm font-medium text-gray-700">
//                       Image Preview:
//                     </p>
//                     {/* Display the exact copy of the uploaded image */}
//                     <img
//                       src={imageUrl}
//                       alt="Uploaded Image Preview"
//                       className="w-full h-auto rounded-md"
//                     />
//                   </div>
//                 )}
//                 <button
//                   type="submit"
//                   className="custom-gradient w-full bg-slate-300 text-white py-2 px-4 rounded-md text-sm hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;

import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 md:pt-8 flex flex-col items-center justify-center">
      {/* Title and Breadcrumb */}
      <div className="w-full max-w-6xl text-left py-10  px-5">
        <h1 className="text-3xl font-semibold text-gray-800">Contact</h1>
        <p className="text-gray-600 text-sm">
          Home <span className="mx-2">➣</span> Contact
        </p>
      </div>

      {/* White box with form and contact info */}
      <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg p-8 rounded-lg md:py-28">
        {/* Left side - Contact Info */}
        <div className="space-y-6 ">
          <div className="flex-col justify-center items-center md:px-16  ">
            <h2 className="text-2xl font-bold text-gray-800  ">
              SUBMIT A REQUEST
            </h2>
            <p className="text-gray-400 flex justify-center items-center py-3">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4 md:space-y-0 md:px-16">
            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89-3.4a2 2 0 011.93 0L21 8m0 0v8a2 2 0 01-1.89 2H4.89A2 2 0 013 16V8m18 0L12 12M12 12L3 8m9 4v8"
                />
              </svg>
              <div>
                <p>Open Hours</p>
                <span className=" text-gray-400">Mon – Fri : 8:30 – 18:00</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16.88 3.549a5 5 0 11-.77.733L9.875 14.053a3.001 3.001 0 01-2.224 2.229L3 17.071l2.29-4.658a3 3 0 012.229-2.224l6.223-6.223z"
                />
              </svg>
              <div>
                <p>Phone number</p>
                <span className="text-gray-400">(+62)81 32 539 780</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657a8 8 0 10-11.314 0A8 8 0 0017.657 16.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14v4m0-4v-4m0 0h4m-4 0H8"
                />
              </svg>
              <div>
                <p>Our Location</p>
                <span className="text-gray-400">Jln. Sunset Road, Kuta</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12h-4m0 0H8m4 0v-4m0 4v4"
                />
              </svg>
              <div>
                <p>Our Email</p>
                <span className="text-gray-400">furniture@domain.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="space-y-4">
          <div className="flex gap-10">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-gray-500"
          />
          <textarea
            placeholder="Message"
            className="w-full border-b-2 border-gray-300 p-2 focus:outline-none focus:border-gray-500"
            rows="4"
          ></textarea>
          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
            Send Message
          </button>
        </div>
      </div>

      {/* iFrame section - Full width */}
      <div className="w-full  ">
        <iframe
          className="w-full h-64 border border-gray-300 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317713.70948444184!2d-122.50763994119304!3d37.757679762717944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2df0c8c1bb%3A0xd23dfbc510c034a7!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1630921104875!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
