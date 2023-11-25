import bannerImage from "../assets/img/prnce.jpeg";
import bannerBackground from "../assets/img/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FullStack Developer", "SpringBoot Developer", "ReactJs Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-24 md:py-48"
      style={{ backgroundImage: `url(${bannerBackground})` }}
    >
      
      <div className="container mx-auto flex items-center justify-center text-white">
        <div className="w-full md:w-2/3 space-y-2 md:ml-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Prince Kumar Maurya</h1>
          <h2 className="text-3xl">
            <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
          Experienced Full Stack Developer skilled in Java, Spring Boot, JavaScript, React, SQL databases, AWS, Git, Docker, and more.
           Delivers robust, secure and scalable web applications with commitment to quality.
          </p>

          <div className="icons-container flex space-x-5">
            <a
 href="https://github.com/PrinceKumarMaurya591/"
 target="_blank"

              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              {/* <i className="fab fa-facebook text-4xl"></i> */}
              <i class="fa-brands fa-github text-4xl"></i>
            </a>

            <a
              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fab fa-instagram text-4xl"></i>
            </a>

            <a
              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fab fa-youtube text-4xl"></i>
            </a>

            <a
            href="https://www.linkedin.com/in/prince-kumar-maurya-413591184"
            target="_blank" // Add this line
              className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fab fa-linkedin-in text-4xl"></i>
            </a>
          </div>
          <br />
          {/* <a
            className="text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg"
            href="/contact"
          >
            Contact Me
          </a> */}


<a
  className="text-2xl px-3 py-2 bg-orange-500 rounded-full shadow-lg"
  href="mailto:princekumar161999@gmail.com"
>
  Contact Me
</a>



      
       


        </div>
      


      <div className="w-full flex justify-center">
        <img className="rounded-full my-2 shadow-lg w-48 md:w-64" src={bannerImage} alt="Prince Kumar Maurya" />
      </div>

      </div>
    </div>
  );
};

export default Home;
