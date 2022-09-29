import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import CouponTab from "./table/CouponTab";

function CouponPannel() {
  const [coupon, setCoupon] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "coupon")),
      (snapshot) => {
        setCoupon(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  return (
    <div className="overflow-x-scroll px-10 w-full">
      <h1 className="text-3xl font-medium mb-4">Users List</h1>
      <table className="bg-[#fafafa] table-fixed border-collapse border border-slate-500 overflow-x-scroll ">
        <thead>
          <tr>
            <th className="border border-slate-600 w-[5%]">NO:</th>
            <th className="border border-slate-600 w-[20%]">Code</th>
            <th className="border border-slate-600 w-[10%]">Expired</th>
            <th className="border border-slate-600 w-[10%]"></th>
          </tr>
        </thead>
        {coupon?.map((coupon, index) => (
          <CouponTab
            key={coupon.id}
            code={coupon.data().code}
            index={index + 1}
            id={coupon.id}
            expired={coupon.data().expired}
          />
        ))}
      </table>
    </div>
  );
}

export default CouponPannel;
