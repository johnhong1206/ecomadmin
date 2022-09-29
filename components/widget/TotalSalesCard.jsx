import React from "react";
import { MinusIcon } from "@heroicons/react/24/outline";

function TotalSalesCard({ totalAmount }) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex-1 mx-5 p-8 rounded-lg cursor-pointer shadow-lg">
      <span className="text-lg font-medium">Total Revenue</span>
      <div className="mt-3 flex flex-row items-center">
        <span className="flex flex-row font-medium text-[30px]">
          RM {totalAmount}
        </span>
      </div>
      <span className="text-sm text-gray-400">Total {currentYear} Revenue</span>
    </div>
  );
}

export default TotalSalesCard;
