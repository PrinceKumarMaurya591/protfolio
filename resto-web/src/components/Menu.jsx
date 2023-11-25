import React from "react";
import DishesCard from "../layouts/DishesCard";
import Kosha from "../assets/img/Kosha.jpg";
import Kosha2 from "../assets/img/Kosha2.webp";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Our Premium Products
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={Kosha} title="Kosha 0.1" price="$116.99" />
        <DishesCard img={Kosha} title="Kosha 0.2" price="$218.99" />
        <DishesCard img={Kosha2} title="Kosha 0.3" price="$314.99" />
      </div>
    </div>
  );
};

export default Menu;
