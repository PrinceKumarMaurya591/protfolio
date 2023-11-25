import React from "react";
import Kosha from "../assets/img/Kosha.jpg"
import Kosha2 from "../assets/img/Kosha2.webp"
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import DishesCard from "../layouts/DishesCard";


const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Products
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={Kosha} title="Kosha 1" price="$210.99" />
        <DishesCard img={Kosha2} title="Kosha 2" price="$212.99" />
        <DishesCard img={Kosha} title="Kosha 3" price="$210.99" />
        <DishesCard img={Kosha2} title="Kosha 4" price="$211.99" />
        <DishesCard img={Kosha} title="Kosha 5" price="$210.99" />
        <DishesCard img={Kosha2} title="Kosha 6" price="$212.99" />
      </div>
    </div>
  );
};

export default Dishes;
