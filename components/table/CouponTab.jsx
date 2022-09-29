import React from "react";

function CouponTab({ key, id, code, expired, index }) {
  console.log(code);
  return (
    <tbody>
      <tr
        key={key}
        className="hover:bg-gray-600 hover:text-white cursor-pointer hover:shadow-md"
      >
        <th className=" font-normal px-4 py-2 border  border-slate-400">
          {index}
        </th>
        <th className="font-normal px-4 py-2 truncate border  border-slate-400">
          {code}
        </th>
        <th
          className={` px-4 py-2 truncate border font-medium  border-slate-400 ${
            expired ? "text-red-500" : "text-green-500"
          }`}
        >
          {expired ? "Expired" : "Available"}
        </th>
        <th className=" font-normal px-4 py-2 border  border-slate-400">
          <button className="bg-rose-400 px-6 py-1 rounded text-white font-medium hover:text-rose-400 hover:bg-white">
            Edit
          </button>
        </th>
      </tr>
    </tbody>
  );
}

export default CouponTab;
