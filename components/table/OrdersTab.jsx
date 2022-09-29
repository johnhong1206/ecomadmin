import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function OrdersTab({
  key,
  id,
  index,
  amount,
  date,
  method,
  time,
  email,
  contact,
  address,
  received,
}) {
  const router = useRouter();

  const navOrderDetails = () => {
    router.push(`/orders/${id}`);
  };
  return (
    <tbody>
      <Link href={`/orders/${id}`}>
        <tr
          key={key}
          className=" hover:bg-gray-600 hover:text-white cursor-pointer hover:shadow-md"
        >
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            {index}
          </th>
          <th className=" font-normal truncate px-4 py-2 border  border-slate-400">
            {id}
          </th>
          <th
            className={` px-4 py-2 border font-medium  border-slate-400 ${
              received ? "text-green-500" : "text-red-500"
            }`}
          >
            {received ? "Completed" : "Not Completed"}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            RM {amount}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            {date}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            {method}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            {time}
          </th>
          <th className=" font-normal px-4 py-2 border truncate  border-slate-400">
            {email}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            {contact}
          </th>
          <th className=" font-normal px-4 py-2 border truncate  border-slate-400">
            {address}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            <button
              onClick={navOrderDetails}
              className="bg-rose-400 px-6 py-1 rounded text-white font-medium hover:text-rose-400 hover:bg-white"
            >
              Edit
            </button>
          </th>
        </tr>
      </Link>
    </tbody>
  );
}

export default OrdersTab;
