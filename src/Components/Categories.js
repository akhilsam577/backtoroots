import React, { useEffect, useState } from "react";
import ScrollableCards from "./ScrollableCards";
import { vegetables, fruits } from "../utils/catalogList";

const Categories = () => {
  const [currentList, setCurrentList] = useState("");
  console.log("currentList", currentList);
  useEffect(() => {
    setCurrentList(vegetables);
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center items-center mt-10">
          <div className="flex gap-6 ">
            <div
              className="w-48 bg-white rounded-lg shadow-md border border-gray-300 p-4 cursor-pointer hover:shadow-lg hover:border-green-700 transition-all duration-200"
              onClick={() => setCurrentList(vegetables)}
            >
              <img
                src="https://www.orgpick.com/cdn/shop/products/vegetables-box_large.jpg?v=1541021440"
                alt="Person 1"
                className=" w-full h-28 object-cover rounded-t-lg"
              />
              <div className="text-center mt-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  Vegetables
                </h2>
              </div>
            </div>

            <div
              className="w-48 bg-white rounded-lg shadow-md border border-gray-300 p-4 cursor-pointer hover:shadow-lg hover:border-green-700 transition-all duration-200"
              onClick={() => setCurrentList(fruits)}
            >
              <img
                src="https://4.imimg.com/data4/ER/NW/MY-22098906/organic-fruits.jpg"
                alt="Person 2"
                className="w-full h-28 object-cover rounded-t-lg"
              />
              <div className="text-center mt-4">
                <h2 className="text-lg font-semibold text-gray-700">Fruits</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollableCards items={currentList} />
    </>
  );
};

export default Categories;
