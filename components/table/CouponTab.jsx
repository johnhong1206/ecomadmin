import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/outline";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

function CouponTab({ key, id, code, expired, index, edit, value, series }) {
  const router = useRouter();

  const toggleCoupon = async () => {
    if (!expired) {
      await updateDoc(doc(db, "coupon", id), {
        expired: Boolean(true),
      });
    } else {
      await updateDoc(doc(db, "coupon", id), {
        expired: Boolean(false),
      });
    }
    // router.reload();
  };
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
        <th className="font-normal px-4 py-2 truncate border  border-slate-400">
          {series}
        </th>
        <th className="font-normal px-4 py-2 truncate border  border-slate-400">
          {value}
        </th>
        <th
          className={` px-4 py-2 truncate border font-medium  border-slate-400 ${
            expired ? "text-red-500" : "text-green-500"
          }`}
        >
          {expired ? "Expired" : "Available"}
        </th>
        {edit && (
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            <div
              onClick={() => toggleCoupon()}
              className={`w-16 h-8 flex items-center p-1 rounded-full shadow-inner relative cursor-pointer ${
                !expired ? "bg-gray-300" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-8 text-2xl absolute transform transition-all ease-in duration-150 ${
                  !expired ? "translate-x-full" : ""
                }`}
              >
                {!expired ? (
                  <CheckBadgeIcon className="h-6 text-green-600" />
                ) : (
                  <CheckIcon className=" h-6 text-red-600" />
                )}
              </div>
            </div>
          </th>
        )}
      </tr>
    </tbody>
  );
}

export default CouponTab;
