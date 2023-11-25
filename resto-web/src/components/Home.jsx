import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center lg:px-32 px-5 bg-[url('./assets/img/HERCULES_WEBSITE_HP_V2.jpg')] bg-cover bg-no-repeat ">
      <div className="w-full lg:w-2/3 space-y-5 text-center text-white">
        <h1 className="font-semibold text-6xl">
          Discover your tribe, where you belong. #FindYourTribe
        </h1>
        <p>
          Embrace the mountain bike's essence, ride with your adventure companions.
        </p>
        <div className="lg:pl-44">
          <Button title="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
