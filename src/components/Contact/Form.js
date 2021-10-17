import React from "react";
import { BiMailSend } from "react-icons/bi";

const Form = () => {
  return (
    <div>
      <div className="flex items-center w-full">
        <div className="w-full bg-gray-100 rounded p-8 m-4 md:max-w-sm md:mx-auto">
          <form
            className="mb-4 md:flex md:flex-wrap md:justify-between"
            method="post"
            action={`https://getform.io/f/e2419428-661a-4a22-acb4-d246cf183763`}
          >
            <div className="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 tracking-wide font-bold text-md text-gray-800"
                htmlFor="first_name"
              >
                Full Name
              </label>
              <input
                className="py-2 px-3 rounded-xl text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Rev Visu"
                required
              />
            </div>
            <div className="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 font-bold text-md text-gray-800"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="py-2 px-3 rounded-xl text-gray-800 border-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                type="email"
                name="email"
                id="email"
                placeholder="info@lifeword.com"
                required
              />
            </div>

            <div className="flex flex-col mt-4 md:w-full">
              <label
                className="mb-2 font-bold text-md text-gray-800"
                htmlFor="message"
              >
                How can we help?
              </label>
              <textarea
                name="message"
                id="message"
                className="resize-none p-2 h-36 rounded focus:outline-n border-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="mt-10 md:mx-auto">
              <button
                type="submit"
                className="flex flex-row mx-auto justify-evenly text-white bg-purple-500 hover:bg-purple-700 font-bold py-4 md:py-2 px-6 text-xl rounded-md"
              >
                <h2 className="my-auto">Send {` `}</h2>
                <BiMailSend className="text-3xl my-auto" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
