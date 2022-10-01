import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import CouponTab from "./table/CouponTab";
import { PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function CouponPannel() {
  const router = useRouter();

  const [coupon, setCoupon] = useState([]);
  const [edit, setEdit] = useState(false);

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
    <div className="overflow-hidden px-4 lg:px-10 w-full h-full">
      <div className="flex space-x-4 items-center">
        <h1 className="text-3xl font-medium mb-4">Coupon List</h1>
        <PencilIcon
          className=" h-5 w-5 cursor-pointer"
          onClick={() => setEdit(!edit)}
        />
        <PlusIcon
          onClick={() => router.push("/addcoupons")}
          className=" h-5 w-5 cursor-pointer text-rose-500"
        />
      </div>
      <div className="w-full h-full overflow-scroll my-4">
        <table className="bg-[#fafafa] table-fixed border-collapse border border-slate-500 overflow-x-scroll ">
          <thead>
            <tr>
              <th className="border border-slate-600 w-[5%]">NO:</th>
              <th className="border border-slate-600 w-[20%]">Code</th>
              <th className="border border-slate-600 w-[20%]">Series</th>
              <th className="border border-slate-600 w-[10%]">Expired</th>
              <th className="border border-slate-600 w-[20%]">Value</th>
              {edit && (
                <th className="border border-slate-600 w-[10%]">Toggle</th>
              )}
            </tr>
          </thead>
          {coupon?.map((coupon, index) => (
            <CouponTab
              key={coupon.id}
              code={coupon.data().code}
              index={index + 1}
              id={coupon.id}
              expired={coupon.data().expired}
              value={coupon.data().value}
              series={coupon.data().series}
              edit={edit}
            />
          ))}
        </table>
      </div>
    </div>
  );
}

export default CouponPannel;
