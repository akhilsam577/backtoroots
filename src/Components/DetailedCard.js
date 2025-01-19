import React, { useState } from "react";

const DetailedCard = ({ selectedItem }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg border border-gray-300 p-6 sm:w-4/5 md:w-3/4 lg:w-1/3">
        <img
          src={selectedItem.image}
          alt={`Detailed ${selectedItem.id}`}
          className="w-full h-60 object-cover rounded-md"
        />

        <div className="mt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {selectedItem.name}
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            {selectedItem.description ||
              "This is a detailed description of the selected item. You can update it to show more relevant details about the product."}
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-lg sm:text-xl font-medium text-gray-800">
              ₹{selectedItem.price}
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={handleDecreaseQuantity}
                className="bg-red-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-red-600"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:bg-green-600"
              >
                +
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
