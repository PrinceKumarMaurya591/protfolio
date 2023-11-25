import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";

const DishesCard = (props) => {
  return (
    <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className=" rounded-xl" src={props.img} alt="img" />
      <div className=" space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-6">{props.title}</h3>
        <div className=" flex flex-row justify-center">
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarHalf className=" text-brightColor" />
        </div>
        <div className=" flex flex-row items-center justify-center gap-4">
          <h3 className=" font-semibold text-lg">{props.price}</h3>
          {/* <Button title="Download Now" downloadUrl={props.downloadUrl} /> */}
          <a
            href={props.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DishesCard;





// import React from "react";
// import { BsStarFill } from "react-icons/bs";
// import Button from "../layouts/Button";

// const DishesCard = (props) => {
//   return (
//     <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,0,0,0.24) 0px 3px 8px] rounded-lg">
//       <img className="rounded-xl" src={props.img} alt="img" />
//       <div className="space-y-4">
//         <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
//         <div className="flex flex-row justify-center">
//           <BsStarFill className="text-brightColor" />
//           <BsStarFill className="text-brightColor" />
//           <BsStarFill className="text-brightColor" />
//           <BsStarFill className="text-brightColor" />
//           <BsStarHalf className="text-brightColor" />
//         </div>
//         <div className="flex flex-row items-center justify-center gap-4">
//           <h3 className="font-semibold text-lg">{props.price}</h3>
//           <Button title="Download Now" downloadUrl={props.downloadUrl} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DishesCard;
