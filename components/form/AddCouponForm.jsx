import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

function AddCouponForm() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [expired, setExpired] = useState(false);
  const [series, setSeries] = useState("");
  const [codevalue, setCodeValue] = useState(0);
  const [codeError, setCodeError] = useState(null);
  const [seriesError, setSeriesError] = useState(null);
  const [codevalueError, setCodeValueError] = useState(null);

  const navBack = () => {
    router.back();
  };

  const addCoupon = async (e) => {
    e.preventDefault();
    if (code === "") {
      setCodeError("Please enter a code");
    }
    if (series === "") {
      setSeriesError("Please enter a code series");
    }
    if (codevalue <= 0) {
      setSeriesError("The code value must be greater than zero");
    }
    await addDoc(collection(db, "coupon"), {
      code: code,
      series: series,
      expired: Boolean(false),
      value: codevalue,
    });
    setCode("");
    setSeries("");
    setCodeValue("");
    router.back();
  };

  return (
    <div className="mt-4 w-full h-full flex-1">
      <div className="flex items-center space-x-4">
        <ArrowLeftIcon onClick={navBack} className=" h-6 w-6 cursor-pointer" />
        <div className="flex space-x-2 items-center">
          <h1 className="text-lg font-bold my-4">Add Product</h1>
        </div>
      </div>
      <div>
        <h3 className="font-medium">Code</h3>
        <input
          onChange={(e) => setCode(e.target.value)}
          placeholder={`Code`}
          className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${codeError !== null && "border-2 border-red-500"}`}
        />
      </div>
      <div>
        <h3>Series</h3>
        <input
          onChange={(e) => setSeries(e.target.value)}
          placeholder={`Product Category`}
          className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${seriesError !== null && "border-2 border-red-500"}`}
        />
      </div>

      <div>
        <h3>Value</h3>
        <div className="flex flex-row items-center space-x-2">
          <input
            onChange={(e) => setCodeValue(e.target.value)}
            type="number"
            min={0}
            placeholder={`Value to discount`}
            className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${codevalueError !== null && "border-2 border-red-500"}`}
          />
        </div>
      </div>

      <button
        onClick={addCoupon}
        type="submit"
        className={`bg-[#008080] bg-gradient-to-r from-[#06202A]  text-white w-full rounded h-10 lg:h-8 font-bold hover:shadow-xl `}
      >
        Add Product
      </button>
    </div>
  );
}

export default AddCouponForm;
