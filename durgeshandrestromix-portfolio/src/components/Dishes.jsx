import React from "react";
import fullstack from "../assets/img/fullStackcertification.jpg";
import gfg from "../assets/img/gfg-certificate.jpg";
import Microservices from "../assets/img/Microservices.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        My Certificates
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard
          img={fullstack}
          title="Completed Full Stack Java developer:- Java + JSP + Restful WS + Spring."
          downloadUrl="https://www.udemy.com/certificate/UC-77c86715-f7d4-46d3-a13e-f95df3ecf51e/"
        />
        {/* <DishesCard img={Kosha2} title="Complete Interview Preparation Course" price="$212.99" /> */}
        <DishesCard
          img={gfg}
          title="Complete Interview Preparation Course"
          downloadUrl="https://media.geeksforgeeks.org/courses/certificates/4f8094e24840f600c1c665d7aa4fd65b.pdf"
        />
        <DishesCard
          img={Microservices}
          title="Master Microservices with Java, Spring ,Docker, Kubernetes"
          downloadUrl="https://www.udemy.com/certificate/UC-f2fbabe2-ead4-41a7-a107-27d305b9b1a7/"
        />
       
      </div>
    </div>
  );
};

export default Dishes;
