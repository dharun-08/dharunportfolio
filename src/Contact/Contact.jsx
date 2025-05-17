import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kfvxzgo",
        "template_fh6omzy",
        formRef.current,
        "JRPTZMTF4cH6XGvSI"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error.text);
        setStatus("Failed to send message.");
      });
  };

  return (
    <div id="contact" className="w-full h-full bg-black py-10 flex flex-col items-center">
      <hr className="border-gray-700 w-full" />
      <p className="text-white text-center font-afacad tracking-widest font-bold text-2xl mb-6">
        CONTACT
      </p>

      <div className="bg-gray-900 rounded-xl shadow-md p-6 text-white w-full max-w-md">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
        >
          <div>
            <label htmlFor="user_name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block mb-1">
              Mail ID
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              Content
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-2 rounded-md bg-gray-800 text-white"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="reset"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Send
            </button>
          </div>

          {status && <p className="text-sm mt-2 text-center">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
