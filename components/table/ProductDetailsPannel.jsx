import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase";
import { useRouter } from "next/router";
import Image from "next/image";

import { ArrowLeftIcon, PencilIcon } from "@heroicons/react/24/outline";
import ProductForm from "../form/ProductForm";

function ProductDetailsPannel({ product, id }) {
  const router = useRouter();
  const [edit, setEdit] = useState(false);

  const navBack = () => {
    router.back();
  };

  return (
    <div className="overflow-hidden px-4 lg:p-0 h-full">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center space-x-6">
          <ArrowLeftIcon
            onClick={navBack}
            className=" h-6 w-6 cursor-pointer"
          />
          <h1 className="text-lg font-bold my-4">{product?.name}</h1>
          <PencilIcon
            className=" h-5 w-5 cursor-pointer"
            onClick={() => setEdit(!edit)}
          />
        </div>
      </div>

      <div className="p-0 lg:p-10 w-full h-full overflow-scroll">
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 mb-10">
          <div className="w-full h-full">
            <Image
              src={product?.imageUrl}
              alt={product?.name}
              width={400}
              height={400}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="w-full h-full">
            <p className="tracking-widest text-base lg:text-lg">
              {product?.description}
            </p>
          </div>
        </div>
        <div className="w-full h-auto">
          <table className="  bg-[#fafafa] table-fixed border-collapse border border-slate-500 ">
            <thead>
              <tr>
                <th className="border border-slate-600 w-[40%] ">Name</th>
                <th className="border border-slate-600 w-[15%]">Category</th>
                <th className="border border-slate-600 w-[10%]">Price (RM)</th>
                <th className="border border-slate-600 w-[10%]">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-600 hover:text-white cursor-pointer hover:shadow-md">
                <th className=" font-normal px-4 py-2 border  border-slate-400">
                  {product?.name}
                </th>
                <th className=" font-normal px-4 py-2 border  border-slate-400">
                  {product?.category}
                </th>
                <th className=" font-normal px-4 py-2 border  border-slate-400">
                  {product?.price}
                </th>
                <th className=" font-normal px-4 py-2 border  border-slate-400">
                  {product?.countInStock}
                </th>
              </tr>
            </tbody>
          </table>
          {product && edit && <ProductForm product={product} id={id} />}
          <div className="pb-32" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPannel;
