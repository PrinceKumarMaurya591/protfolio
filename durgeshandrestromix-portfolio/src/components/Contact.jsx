import React from "react";
import Button from "../layouts/Button";
import img from "../assets/img/princemumbai.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-5">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <form className="w-full md:w-2/5 space-y-5 pt-20">
          <h1 className="text-5xl font-semibold text-center">Contact Me</h1>
          <div className="flex flex-col">
            <label htmlFor="userName">Name</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24) 0px 3px 8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Prince Kumar Maurya"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userEmail">Email</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24) 0px 3px 8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="princekumar161999@gmail.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="userNumber">Mobile Number</label>
            <input
              className="py-3 px-2 rounded-lg hover:shadow-[rgba(0,0,0,0.24) 0px 3px 8px] transition-all"
              type="text"
              name="userNumber"
              id="userNumber"
              placeholder="8787247736"
            />
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>

        <div className="flex flex-row items-center w-full md:w-2/4 my-5">
          <img className="h-96 rounded-md" src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;













