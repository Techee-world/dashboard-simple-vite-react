import React from "react";

const Card = ({ title, color }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="rounded-lg w-full  md:w-[17rem]  px-6 py-6 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700">{title}</h3>
          <h4 className="text-xs line-through">$ 699.99/mo</h4>
          <h4 className="text-xl">$ 499.99/mo</h4>
          <button
            className={`${color} hover:bg-gray-700 hover:text-white duration-700 px-6 py-1 flex items-center gap-3 rounded-lg my-4`}
          >
            Get Started
            <img
              className="w-4"
              src="https://cdn-icons-png.flaticon.com/128/3550/3550091.png"
              alt=""
            />
          </button>
          <div className="border-b-2 "></div>
          <h1 className="pb-2">what you'll get</h1>
          <div className="flex items-center pb-2">
            <img
              className="w-4 h-4 mr-3"
              src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              alt=""
            />
            <span>Upto 25 users</span>
          </div>
          <div className="flex items-center pb-2">
            <img
              className="w-4 h-4 mr-3"
              src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              alt=""
            />
            <span>Upto 25GB storage</span>
          </div>
          <div className="flex items-center pb-2">
            <img
              className="w-4 h-4 mr-3"
              src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              alt=""
            />
            <span>Email support</span>
          </div>
          <h1 className="uppercase p-2 font-semibold underline cursor-pointer">
            explore feature
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
