import React from "react";
import Card from "./Card";
import Card02 from "./Card02";

const Home = () => {
  return (
    <div className="">
      <main class="md:ml-36 pt-2 max-h-screen overflow-auto">
        <div class="px-6 py-2">
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-3xl md:p-8 mb-5">
              <h1 class="text-2xl font-bold mb-4">
                Choose a plane that's just right for you !
              </h1>
              <div className="flex justify-end">
                <div className="px-1 w-[14rem] outline outline-2 outline-offset-2 py-1    rounded-3xl">
                  <span className="bg-blue-200 rounded-3xl px-6 py-1 cursor-pointer ">
                    Monthly
                  </span>
                  <span className="hover:bg-blue-200 duration-700 cursor-pointer  rounded-3xl px-6 py-1">
                    Annually
                  </span>
                </div>
              </div>
              <div className="flex md:flex-row flex-col my-6 gap-10 ">
                <Card title="Basic" color="bg-green-200" />
                <Card title="Standard" color="bg-blue-200" />
                <Card title="Premium" color="bg-yellow-200" />
              </div>
              <div className="flex md:flex-row flex-col  gap-10">
                <Card02 title="Free Starter" color="bg-yellow-200" />
                <Card02 title="Enterprise plane" color="bg-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
