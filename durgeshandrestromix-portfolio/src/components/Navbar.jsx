import React, { useState } from "react";
import { Link } from "react-scroll";
import { BiRestaurant} from "react-icons/bi";
import {IoBicycle} from "react-icons/io5";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";



import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  
  const navigate = useNavigate();  // Set up navigate

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };


  const handleLoginClick = () => {
    console.log("Login button clicked"); // Log a message when the button is clicked
    navigate('/login');
  };



  // const downloadCV = () => {
  //   console.log("downloadclicke..........");
  //   const anchor = document.createElement("a");
   
  //   // anchor.href = "/src/assets/img/Prince_Maurya_Resume_Full Stack.pdf"; // Update the path to your PDF file
  //   anchor.href = "/Prince_Maurya_Resume_Full Stack.pdf"; // Update the path to your PDF file
  //   anchor.target = "_blank";
  //   anchor.download = "Prince_Maurya_Resume_Full Stack.pdf";
  //   anchor.click();
  // };

  const downloadCV = () => {
    console.log("Download button clicked");
    const anchor = document.createElement("a");
    anchor.href = "/src/assets/img/Prince_Maurya_Resume_Full Stack.pdf"; // Update the path to your PDF file
    anchor.target = "_blank";
    anchor.download = "Prince_Maurya_Resume_Full Stack.pdf";
    anchor.click();
  };

  // const downloadCV = () => {
  //   console.log("clicked...........")
  //   window.open("/Prince_Maurya_Resume_Full Stack.pdf");
  // };

  return (
    <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            {/* <span>
              <BiRestaurant size={32} />
            </span> */}

            {/* <span>
              <IoBicycle size={24} />
            </span>

            <Button title="Healthcheking" onClick={handleLoginClick} /> */}

            <h1 className=" text-xl font-semibold">Prince Kumar Maurya</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

            <div className="relative group">
              <div className=" flex items-center gap-1">
                <Link
                  to="Projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Projects
                </Link>

                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <Link
                    to="Projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Report Generation Portal
                  </Link>
                </li>
                <li>
                  <Link
                    to="Projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                    Tiny URL Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="Projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >Cluster Head Branch Visit Report portal
                    
                  </Link>
                </li>
                <li>
                  <Link
                    to="Projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-gray-800 hover:text-brightColor transition-all cursor-pointer"
                  >
                     Smart Contact Manager
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              My Experties
            </Link>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>

            {/* <Button title="Login" /> */}
           
            {/* <Button title="Login" onClick={() => navigate('/login')} /> */}

            {/* <Button title="Login" onClick={handleLoginClick} /> */}
            <a
            //  href="/cycle.jpg"
              href="/resume.pdf"
              download="Prince_Maurya_Resume_Full_Stack.pdf"
              className="px-6 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"

              // className="  py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
              // >


            >
              Download CV
            </a>
          
            

          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            My Experties
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>

          {/* <Button title="login" /> */}

          {/* <Button title="Login" onClick={() => navigate('/login')} /> */}

          <Button title="Login" onClick={handleLoginClick} />

          <a
              href="/resume.pdf"
              download="Prince_Maurya_Resume_Full_Stack.pdf"
              // className="text-blue-500 hover:underline transition-all cursor-pointer"
              className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full"
            >
              Download CV
            </a>
          

        </div>
      </div>
    </div>
  );
};

export default Navbar;
















// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { BiRestaurant } from "react-icons/bi";
// import { IoBicycle } from "react-icons/io5";
// import Button from "../layouts/Button";
// import { AiOutlineMenuUnfold } from "react-icons/ai";
// import { BiChevronDown } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   // const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = () => {
//     setMenu(!menu);
//   };

//   const closeMenu = () => {
//     setMenu(false);
//   };

//   const handleLoginClick = () => {
//     // Navigate to the '/login' route when the "Login" button is clicked
//     navigate('/login');
//   };

//   return (
//     <div className="fixed w-full">
//       <div>
//         <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
//           <div className="flex flex-row items-center cursor-pointer">
//             <span>
//               <IoBicycle size={24} />
//             </span>

//             <h1 className="text-xl font-semibold">Kosha Cycle</h1>
//           </div>

//           <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
//             <Link
//               to="home"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-brightColor transition-all cursor-pointer"
//             >
//               Home
//             </Link>

//             {/* Rest of your navigation links... */}

//             <Button title="Login" onClick={handleLoginClick} /> {/* Add onClick handler */}
//           </nav>

//           <div className="md:hidden flex items-center">
//             {menu ? (
//               <AiOutlineClose size={25} onClick={handleChange} />
//             ) : (
//               <AiOutlineMenuUnfold size={25} onClick={handleChange} />
//             )}
//           </div>
//         </div>
//         <div
//                    className={` ${
//             menu ? "translate-x-0" : "-translate-x-full"
//           } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
//         >
//           <Link
//             to="home"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Home
//           </Link>
//           <Link
//             to="dishes"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Dishes
//           </Link>
//           <Link
//             to="about"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             About
//           </Link>
//           <Link
//             to="menu"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Menu
//           </Link>
//           <Link
//             to="review"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className=" hover:text-brightColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Reviews
//           </Link>

//           {/* <Button title="login" /> */}

//            {/* <Button title="Login" onClick={() => navigate('/login')} /> */}
//           <Button title="login" onClick={handleLoginClick} /> {/* Add onClick handler */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
