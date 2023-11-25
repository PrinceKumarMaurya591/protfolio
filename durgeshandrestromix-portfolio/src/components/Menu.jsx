// import React from "react";
// import DishesCard from "../layouts/DishesCard";
// import Kosha from "../assets/img/Kosha.jpg";
// import Kosha2 from "../assets/img/Kosha2.webp";

// const Menu = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
//       <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
//         Our Premium Products
//       </h1>

//       <div className=" flex flex-wrap gap-8 justify-center">
//         <DishesCard img={Kosha} title="Kosha 0.1" price="$116.99" />
//         <DishesCard img={Kosha} title="Kosha 0.2" price="$218.99" />
//         <DishesCard img={Kosha2} title="Kosha 0.3" price="$314.99" />
//       </div>
//     </div>
//   );
// };

// export default Menu;











import bannerBackground from "../assets/img/banner_wallpaper.svg";
const Menu = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" mb-16 text-5xl font-bold underline  text-center">
          My Expertise
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
              I am actively working on projects involving the mentioned technologies.
              I am committed to staying updated with the latest industry trends and continuously 
              enhancing my skills through online courses, certifications,
               and participation in technical communities.
               
              </p>
              {/* <button className=" text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                Hire Me
              </button> */}
<br></br>
<a href="mailto:princekumar161999@gmail.com" className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
  Hire Me
</a>

            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                J2EE
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Hibernate(ORM Tool)
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Boot Framework
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Security
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Tailwind CSS
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                MYSQL
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
               Tomcat
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                State Management
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                AWS Cloud
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                EC2
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                AWS CloudWatch
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
              Deploying on Tomcat
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Deploying on Clound
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

