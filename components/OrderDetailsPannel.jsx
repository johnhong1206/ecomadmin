import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  ArrowLeftIcon,
  PencilIcon,
  CheckBadgeIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import { db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

function OrderDetailsPannel({ order, id }) {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const navBack = () => {
    router.back();
  };
  const toggleComplete = async () => {
    if (!order?.received) {
      await updateDoc(doc(db, "orders", id), {
        received: Boolean(true),
      });
    } else {
      await updateDoc(doc(db, "orders", id), {
        received: Boolean(false),
      });
    }
    router.back();
  };

  return (
    <div className="w-full">
      <div>
        <div className="flex items-center space-x-4">
          <ArrowLeftIcon
            onClick={navBack}
            className=" h-6 w-6 cursor-pointer"
          />
          <div className="flex space-x-2 items-center">
            <h1 className="text-lg font-bold my-4">{id}</h1>
            <PencilIcon
              className=" h-5 w-5 cursor-pointer"
              onClick={() => setEdit(!edit)}
            />
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="flex flex-col lg:flex-row items-center space-x-4 mb-10"></div>
        <div>
          <div className="shadow-sm w-95vw cursor-pointer">
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-t-2 border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Id:</h2>
              </div>
              <div className="w-3/4 flex items-center space-x-12">
                <div>
                  <h2 className="font-medium">{id}</h2>
                  <h2>
                    {order?.received ? (
                      <p className="uppercase text-sm text-green-500 font-medium">
                        Completed
                      </p>
                    ) : (
                      <p className="uppercase text-sm text-red-500 font-medium">
                        Pending
                      </p>
                    )}
                  </h2>
                </div>
                <div>
                  <div
                    onClick={() => toggleComplete()}
                    className={`w-16 h-8 flex items-center p-1 rounded-full shadow-inner relative cursor-pointer ${
                      order?.received ? "bg-gray-300" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`w-8 text-2xl absolute transform transition-all ease-in duration-150 ${
                        order?.received ? "translate-x-full" : ""
                      }`}
                    >
                      {order?.received ? (
                        <CheckBadgeIcon className="h-6 text-green-600" />
                      ) : (
                        <CheckIcon className=" h-6 text-red-600" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Amount:</h2>
              </div>
              <div className="3/4">
                <h2 className="font-medium">RM {order?.amount}</h2>
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Order Date</h2>
              </div>
              <div className="3/4">
                <h2 className="font-medium">{order?.date}</h2>
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Customer:</h2>
              </div>
              <div className="3/4 space-y-1">
                <div className="font-medium uppercase flex items-center space-x-2">
                  <h2>
                    Name <span>:</span>
                  </h2>
                  <h2>{order?.contactName}</h2>
                </div>
                <div className="font-medium uppercase flex items-center space-x-2">
                  <h2>
                    email <span>:</span>
                  </h2>
                  <h2>{order?.email}</h2>
                </div>
                <div className="font-medium uppercase flex items-center space-x-2">
                  <h2>
                    Contact Number <span>:</span>
                  </h2>
                  <h2>{order?.contactNumber}</h2>
                </div>
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Pickup Method</h2>
              </div>
              <div className="3/4">
                <h2 className="font-medium">{order?.method}</h2>
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Available Date</h2>
              </div>
              <div className="3/4">
                <h2 className="font-medium">
                  {order?.availableDate?.length > 0
                    ? order?.availableDate
                    : "none"}
                </h2>
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Preferred Time</h2>
              </div>
              <div className="3/4">
                <h2 className="font-medium">
                  {order?.preferredTime?.length > 0
                    ? order?.preferredTime
                    : "none"}
                </h2>
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Product</h2>
              </div>
              <div className="3/4">
                {order?.cart?.map((product) => (
                  <div className="space-y-1">
                    <p className="text-sm font-medium">
                      <span className="mr-1">&#8226;</span>
                      {product?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Code Redeem</h2>
              </div>
              <div className="3/4">
                {order?.code ? (
                  <p className="font-medium">Yes</p>
                ) : (
                  <p className="font-medium">No</p>
                )}
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Point Redeem</h2>
              </div>
              <div className="3/4">
                {order?.point ? (
                  <p className="font-medium">Yes</p>
                ) : (
                  <p className="font-medium">No</p>
                )}
              </div>
            </div>
            <div className="hover:shadow-lg flex flex-row items-center w-full px-2 py-4 border-b border-l-2 border-r-2 border-slate-400">
              <div className="w-1/4 font-medium uppercase">
                <h2>Address</h2>
              </div>
              <div className="3/4">
                <h2 className="font-medium">{order?.address}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPannel;
