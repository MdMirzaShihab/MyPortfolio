import React from 'react'
import img from "../assets/Gallery/img3.webp";

const Contact = () => {
  return (
    <div className="bg-white">
    <div className="flex justify-center min-h-screen">
      <div className="hidden bg-cover lg:block lg:w-2/5" style={{
    backgroundImage: `url(${img})`, }}>

      </div>
      <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
        <div className="w-full">
          <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
            Contact Me.
          </h1>
          <p className="mt-4 text-gray-500">
            Let’s get .
          </p>
          <div className="mt-6">
            <h1 className="text-gray-500">Social Media</h1>
            <div className="mt-3 md:flex md:items-center md:-mx-2">
              <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none">
                {/* SVG icon */}
                <span className="mx-2">client</span>
              </button>
              <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2">
                {/* SVG icon */}
                <span className="mx-2">Icon</span>
              </button>
            </div>
          </div>
          <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
            {/* Input fields */}
            {/* First Name */}
            <div>
              <label className="block mb-2 text-sm text-gray-600">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md"
              />
            </div>
            {/* Last Name */}
            {/* ... (similar structure for other input fields) */}
            {/* Submit button */}
            <button
              className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400"
            >
              {/* Button text */}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};


export default Contact