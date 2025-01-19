import React, { useState } from "react";
import DetailedCard from "./DetailedCard";

const ScrollableCards = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    items && (
      <div>
        <div className="flex justify-center mt-4 items-center">
          <div className="w-full m-2 overflow-x-auto cursor-pointer">
            <div className="flex gap-4">
              {items.map((card) => (
                <div
                  key={card.id}
                  className="w-60 bg-white rounded-lg shadow-md border border-gray-300 p-4 flex-shrink-0 hover:border-green-700 transition-all duration-200"
                  onClick={() => handleItemClick(card)}
                >
                  <img
                    src={card.image}
                    alt={`Card ${card.id}`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <div className="mt-2 text-center">
                    <h2 className="text-lg font-medium text-gray-700">
                      {card.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedItem && <DetailedCard selectedItem={selectedItem} />}
      </div>
    )
  );
};

export default ScrollableCards;
