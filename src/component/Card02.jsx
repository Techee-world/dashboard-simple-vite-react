import React from 'react'

const Card02 = ({ title, color }) => {
  return (
    <div>
      <div class="flex md:py-10 mb-10 ">
        <div class="rounded-lg  flex md:w-[27rem] w-full  border  px-6 py-6 shadow-md">
          <div className="w-[13rem]">
            <span className={`text-xs py-0 px-2 ${color} rounded-md`}>
              Free forever
            </span>
            <h3 class=" text-2xl font-semibold text-gray-700">{title}</h3>
            <h1 className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              vero.
            </h1>
            <button
              className={`${color} hover:bg-gray-700 hover:text-white duration-700  px-6 py-1 flex items-center gap-3 rounded-lg my-4`}
            >
              Get Started
              <img
                className="w-4"
                src="https://cdn-icons-png.flaticon.com/128/3550/3550091.png"
                alt=""
              />
            </button>
          </div>
          <div>
            <h1 className="pb-2">what you'll get</h1>
            <div className="flex items-center pb-2">
              <img
                className="w-4 h-4 mr-3"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
                alt=""
              />
              <span>Upto 25 user</span>
            </div>
            <div className="flex items-center pb-2">
              <img
                className="w-4 h-4 mr-3"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
                alt=""
              />
              <span>Upto 25gb storage</span>
            </div>
            <div className="flex items-center pb-2">
              <img
                className="w-4 h-4 mr-3"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
                alt=""
              />
              <span>Email support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card02