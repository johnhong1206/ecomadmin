import React, { useState, useEffect } from "react";

import ProductTab from "./table/ProductTab";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function ControlPannel({ products }) {
  const router = useRouter();

  return (
    <div className="overflow-hidden px-4 lg:px-10 w-full h-full">
      <div className="flex space-x-4 items-center">
        <h1 className="text-3xl font-medium my-4">Product List</h1>
        <PlusIcon
          onClick={() => router.push("/addproduct")}
          className=" h-5 w-5 cursor-pointer text-rose-500"
        />
      </div>
      <div className="w-full h-full overflow-scroll my-4">
        <table className=" bg-[#fafafa] table-fixed border-collapse border border-slate-500 ">
          <thead>
            <tr>
              <th className="border border-slate-600 w-[5%]">NO:</th>
              <th className="border border-slate-600 w-[40%] ">Product</th>
              <th className="border border-slate-600 w-[10%]">Id</th>
              <th className="border border-slate-600 w-[15%]">Category</th>
              <th className="border border-slate-600 w-[10%]">Cost</th>
              <th className="border border-slate-600 w-[10%]">Price</th>
              <th className="border border-slate-600 w-[10%]">ROI</th>
              <th className="border border-slate-600 w-[10%]">Stock</th>
              <th className="border border-slate-600 w-[10%]">Edit</th>
            </tr>
          </thead>

          {products?.map((product, index) => (
            <ProductTab
              key={product?.id}
              id={product?.id}
              index={index + 1}
              name={product?.data().name}
              cost={product?.data().cost}
              category={product?.data().category}
              price={product?.data().price}
              stock={product?.data().countInStock}
            />
          ))}
        </table>
        <div className="pb-32" />
      </div>
    </div>
  );
}

export default ControlPannel;
