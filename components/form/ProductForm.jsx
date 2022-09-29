import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

function ProductForm({ product, id }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);
  const [cost, setCost] = useState(null);
  const [updatePrice, setUpdatePrice] = useState(false);
  const [updateCost, setUpdateCost] = useState(false);
  const [updateStock, setUpdateStock] = useState(false);
  const [description, setDescription] = useState("");
  const [nameError, setNameError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [stockError, setStockError] = useState(null);
  const [priceError, setPriceError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const isInvalid = name === "" || category === "" || stock < 0 || price < 0;

  const updateProduct = async () => {
    if (name === "") {
      setName(product?.name);
    }
    if (category === "") {
      setCategory(product?.category);
    }
    if (description === "") {
      setDescription(product?.description);
    }
    if (stock < 0) {
      setStockError("Stock Quantity must be greater than zero");
    }
    if (price < 0) {
      setPriceError("Price must be greater than zero");
    }
    if (!isInvalid) {
      if (updatePrice) {
        await updateDoc(doc(db, "products", id), {
          price: price,
        });
      }
      if (updateStock) {
        await updateDoc(doc(db, "products", id), {
          countInStock: stock,
        });
      }
      if (updateCost) {
        await updateDoc(doc(db, "products", id), {
          cost: cost,
        });
      }

      router.back();
    }
  };

  console.log("updatePrice", updatePrice);

  return (
    <div className="mt-4">
      <h2 className="text-center font-bold text-lg">{product?.name} update</h2>
      <div>
        <h3 className="font-medium">Name</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder={`${product?.name}`}
          className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${nameError !== null && "border-2 border-red-500"}`}
        />
      </div>
      <div>
        <h3>Category</h3>
        <input
          onChange={(e) => setCategory(e.target.value)}
          placeholder={`${product?.category}`}
          className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${categoryError !== null && "border-2 border-red-500"}`}
        />
      </div>
      <div>
        <h3>Cost</h3>
        <div className="flex flex-row items-center space-x-2">
          <input
            onChange={(e) => setCost(e.target.value)}
            type="number"
            min={0}
            placeholder={`${product?.cost}`}
            className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${priceError !== null && "border-2 border-red-500"}`}
          />
          <input type="checkbox" onChange={(e) => setUpdateCost(!updateCost)} />
        </div>
      </div>
      <div>
        <h3>Price</h3>
        <div className="flex flex-row items-center space-x-2">
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            min={0}
            placeholder={`${product?.price}`}
            className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${priceError !== null && "border-2 border-red-500"}`}
          />
          <input
            type="checkbox"
            onChange={(e) => setUpdatePrice(!updatePrice)}
          />
        </div>
      </div>
      <div>
        <h3>Stock</h3>
        <div className="flex flex-row items-center space-x-2">
          <input
            onChange={(e) => setStock(e.target.value)}
            type="number"
            min={0}
            placeholder={`${product?.countInStock}`}
            className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${stockError !== null && "border-2 border-red-500"}`}
          />
          <input
            type="checkbox"
            onChange={(e) => setUpdateStock(!updateStock)}
          />
        </div>
      </div>
      <div>
        <h3 className="font-medium">Description</h3>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder={`${product?.description}`}
          className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${descriptionError !== null && "border-2 border-red-500"}`}
        />
      </div>
      <div
        onClick={updateProduct}
        type="submit"
        className={`bg-[#008080] text-center cursor-pointer bg-gradient-to-r from-[#06202A]  text-white w-full rounded h-10 lg:h-8 font-bold hover:shadow-xl `}
      >
        Update
      </div>
    </div>
  );
}

export default ProductForm;
