import React, { useState, useEffect } from "react";

function MonthSalesCard({ previousMonth, currentMonth, orders }) {
  const [currentMonthOrders, setCurrentMonthOrders] = useState(null);
  const [previousMonthOrders, setPreviousMonthOrders] = useState(null);
  const [currentMonthRevenue, setCurrentMonthRevenue] = useState(null);
  const [previousMonthRevenue, setPreviousMonthRevenue] = useState(null);
  const [differenceAmount, setDifferenceAmount] = useState(null);

  useEffect(() => {
    const newCurrentMonthOrder = orders.filter(
      (order) => order.month.toLowerCase() === currentMonth.toLowerCase()
    );
    const previousMonthOrders = orders.filter(
      (order) => order.month.toLowerCase() === previousMonth.toLowerCase()
    );
    setCurrentMonthOrders(newCurrentMonthOrder);
    setPreviousMonthOrders(previousMonthOrders);
  }, [previousMonth, currentMonth, orders]);

  useEffect(() => {
    const currentAmount = currentMonthOrders?.reduce(
      (total, item) => (total += item.amount),
      0
    );
    const previousAmount = previousMonthOrders?.reduce(
      (total, item) => (total += item.amount),
      0
    );
    const newDifferenceAmount =
      Number(currentAmount) -
      (Number(previousAmount) / Number(previousAmount)) * 100;
    setCurrentMonthRevenue(currentAmount);
    setPreviousMonthRevenue(previousAmount);
    setDifferenceAmount(newDifferenceAmount / 10);
  }, [currentMonthOrders, previousMonthOrders]);

  return (
    <div className="flex-1 mx-5 p-8 rounded-lg cursor-pointer shadow-lg">
      <p className="text-lg font-medium ">
        <span className="text-blue-400"> {currentMonth}</span> Monthly Revenue
      </p>
      <div className="mt-3 flex flex-row items-center">
        <span className="flex flex-row font-medium text-[30px]">
          RM {currentMonthRevenue}
        </span>
        <span
          className={`flex flex-row items-center ml-5 font-medium text-sm ${
            differenceAmount > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {differenceAmount > 0 ? "+" : "-"}
          {differenceAmount}
        </span>
      </div>
      <span className="text-sm text-gray-400">
        Compared to last month (RM {previousMonthRevenue / 10} K)
      </span>
    </div>
  );
}

export default MonthSalesCard;
