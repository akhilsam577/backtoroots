import React, { useEffect, useState } from "react";
import ScrollableCards from "./ScrollableCards";

const Categories = () => {
  const [currentList, setCurrentList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch products by category
  const fetchProductsByCategory = async (category) => {
    setLoading(true); // Show loading while fetching data
    try {
      const response = await fetch(
        `http://localhost:3001/getProduct?category=${category}`
      );
      if (response.ok) {
        const products = await response.json();
        setCurrentList(products);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error.message);
    } finally {
      setLoading(false); // Hide loading after fetching data
    }
  };

  // Fetch vegetables by default when the component mounts
  useEffect(() => {
    fetchProductsByCategory("Vegetables");
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center items-center mt-10">
          <div className="flex gap-6 ">
            <div
              className="w-48 bg-white rounded-lg shadow-md border border-gray-300 p-4 cursor-pointer hover:shadow-lg hover:border-green-700 transition-all duration-200"
              onClick={() => fetchProductsByCategory("Vegetables")}
            >
              <img
                src="https://www.orgpick.com/cdn/shop/products/vegetables-box_large.jpg?v=1541021440"
                alt="Vegetables"
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
              onClick={() => fetchProductsByCategory("Fruits")}
            >
              <img
                src="https://4.imimg.com/data4/ER/NW/MY-22098906/organic-fruits.jpg"
                alt="Fruits"
                className="w-full h-28 object-cover rounded-t-lg"
              />
              <div className="text-center mt-4">
                <h2 className="text-lg font-semibold text-gray-700">Fruits</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <p>Loading...</p>
        </div>
      ) : (
        <ScrollableCards items={currentList} />
      )}
    </>
  );
};

export default Categories;
