import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function ProductTab({ key, index, name, id, category, price, stock, cost }) {
  const router = useRouter();
  const [roi, setRoi] = useState(null);

  const navProductDettails = () => {
    router.push(`/products/${id}`);
  };
  useEffect(() => {
    const difference = Number(price) - Number(cost);
    const newROI = (Number(difference) / Number(cost)) * 100;

    setRoi(Number(newROI).toFixed(2));
  }, [cost, price]);

  return (
    <tbody>
      <Link href={`/products/${id}`}>
        <tr
          key={key}
          className="hover:bg-gray-600 hover:text-white cursor-pointer hover:shadow-md"
        >
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            {index}
          </th>
          <th className="font-normal px-4 py-2 truncate border  border-slate-400">
            {name}
          </th>
          <th className=" font-normal px-4 py-2 truncate border  border-slate-400">
            {id}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            {category}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            RM{cost}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            RM{price}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            {roi} %
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            {stock}
          </th>
          <th className=" font-normal px-4 py-2 border  border-slate-400">
            <button
              onClick={navProductDettails}
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

export default ProductTab;
