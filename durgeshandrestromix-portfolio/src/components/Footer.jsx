import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Prince Kumar Maurya</h1>
          <p className=" text-sm">
          I hereby declare that the information mentioned above is true to the best of my knowledge.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://leetcode.com/Prince_kumar_maurya/"
              target="_blank"
  rel="noopener noreferrer"
            >
              LeetCode
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://auth.geeksforgeeks.org/user/princekumar161999"
              target="_blank"
  rel="noopener noreferrer"
            >
              GeeksForGeeks
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://github.com/PrinceKumarMaurya591/"
              target="_blank"
  rel="noopener noreferrer"
            >
              Github
            </a>
            {/* <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a> */}
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              My projects
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Live projects
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              princekumar161999@email.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +91 8787247736
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://www.linkedin.com/in/prince-kumar-maurya-413591184"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Prince Kumar Maurya</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;