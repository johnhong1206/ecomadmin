import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import OrdersTab from "./table/OrdersTab";

import TotalSalesCard from "./widget/TotalSalesCard";
import MonthSalesCard from "./widget/MonthSalesCard";
const Chart = dynamic(() => import("./Chart"));

function OrdersPannel({ orders }) {
  const [totalAmount, setTotalAmount] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [previousMonth, setPreviousMonth] = useState(null);

  useEffect(() => {
    setTotalAmount(orders.reduce((total, item) => (total += item.amount), 0));
  }, [orders]);

  useEffect(() => {
    function getMonth() {
      let date = new Date();
      const prevMonth = date.getMonth() - 1;
      const firstDay = 1;

      setPreviousMonth(
        new Date(date.getFullYear(), prevMonth, firstDay).toLocaleString(
          "default",
          {
            month: "long",
          }
        )
      );
    }
    setCurrentMonth(
      new Date().toLocaleString("default", {
        month: "long",
      })
    );
    getMonth();
  }, [new Date()]);

  return (
    <div className="overflow-hidden px-4 lg:px-10 w-full h-full">
      <div className="flex space-x-4 items-center">
        <h1 className="text-3xl font-medium mb-4">Order List</h1>
      </div>
      <div className="w-full h-full overflow-scroll my-4">
        <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3">
          <TotalSalesCard totalAmount={totalAmount} />
          <MonthSalesCard
            previousMonth={previousMonth}
            currentMonth={currentMonth}
            orders={orders}
          />
        </div>
        <Chart data={orders} title="Sales" grid dataKey="amount" />
        <div className="max-w-screen overflow-scroll">
          <table className=" bg-[#fafafa] table-fixed border-collapse border border-slate-500 ">
            <thead>
              <tr>
                <th className="border border-slate-600 w-[5%]">NO:</th>
                <th className="border border-slate-600 w-[10%] ">Order Id</th>
                <th className="border border-slate-600 w-[10%]">Received</th>
                <th className="border border-slate-600 w-[15%] ">Amount</th>
                <th className="border border-slate-600 w-[10%]">Date</th>
                <th className="border border-slate-600 w-[10%]">Method</th>
                <th className="border border-slate-600 w-[20vw]">Time</th>
                <th className="border border-slate-600 w-[10%]">Email</th>
                <th className="border border-slate-600 w-[10%]">Contact</th>
                <th className="border border-slate-600 w-[10%]">Address</th>
              </tr>
            </thead>
            {orders?.map((order, index) => (
              <OrdersTab
                key={order?.id}
                id={order?.id}
                index={index + 1}
                amount={order?.amount}
                date={order?.date}
                method={order?.method}
                time={order?.preferredTime}
                email={order?.email}
                contact={order?.contact}
                address={order?.address}
                received={order?.received}
              />
            ))}
          </table>
          <div className="pb-32" />
        </div>
      </div>
    </div>
  );
}

export default OrdersPannel;
