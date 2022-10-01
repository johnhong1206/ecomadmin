import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { db, storage } from "../../firebase/firebase";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { collection, addDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function AddProductForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);
  const [cost, setCost] = useState(null);
  const [rating, setRating] = useState(null);
  const [updatePrice, setUpdatePrice] = useState(false);
  const [updateStock, setUpdateStock] = useState(false);
  const [description, setDescription] = useState("");
  const [nameError, setNameError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [stockError, setStockError] = useState(null);
  const [priceError, setPriceError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const imgPickerRef = useRef(null);
  const [haveImg, setHaveImg] = useState(false);
  const [profilemage, setImage] = useState(null);
  const [imgToPost, setImgtoPost] = useState(null);

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
  };
  const addImgtoPost = (e) => {
    const reader = new FileReader();
    setHaveImg(true);
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImgtoPost(readerEvent.target.result);
    };
  };

  const addProduct = async (e) => {
    e.preventDefault();

    const imageRef = ref(storage, `/products/${name}`);
    await uploadString(imageRef, imgToPost, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await addDoc(collection(db, "products"), {
          name: name,
          category: category,
          imageUrl: downloadURL,
          activeImg: [downloadURL],
          countInStock: stock,
          description: description,
          price: price,
          rating: Number(rating),
          cost: cost,
        });
      }
    );
  };
  const navBack = () => {
    router.back();
  };

  return (
    <div className="mt-4 w-full h-full">
      <div className="flex items-center space-x-4">
        <ArrowLeftIcon onClick={navBack} className=" h-6 w-6 cursor-pointer" />
        <div className="flex space-x-2 items-center">
          <h1 className="text-lg font-bold my-4">Add Product</h1>
        </div>
      </div>
      <div>
        <h3 className="font-medium">Name</h3>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder={`Product Name`}
          className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${nameError !== null && "border-2 border-red-500"}`}
        />
      </div>
      <div>
        <h3>Category</h3>
        <input
          onChange={(e) => setCategory(e.target.value)}
          placeholder={`Product Category`}
          className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${categoryError !== null && "border-2 border-red-500"}`}
        />
      </div>
      <div>
        <h3>Image</h3>
        <div
          className="inputIcon flex flex-col space-y-2 items-center justify-center"
          onClick={() => imgPickerRef.current.click()}
        >
          {imgToPost && <img src={imgToPost} width="100" height="100" />}
          <PhotoIcon className="h-8 w-8 text-green-500 cursor-pointer" />
          <p className="text-xs sm:text-sm lg:text-base">Photo</p>

          <input
            ref={imgPickerRef}
            type="file"
            hidden
            onChange={addImgtoPost}
          />
        </div>
      </div>
      <div>
        <h3>Cost</h3>
        <div className="flex flex-row items-center space-x-2">
          <input
            onChange={(e) => setCost(e.target.value)}
            type="number"
            min={0}
            placeholder={`Product Price`}
            className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${priceError !== null && "border-2 border-red-500"}`}
          />
        </div>
      </div>
      <div>
        <h3>Price</h3>
        <div className="flex flex-row items-center space-x-2">
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            min={0}
            placeholder={`Product Price`}
            className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${priceError !== null && "border-2 border-red-500"}`}
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
            placeholder={`Product Stock`}
            className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${stockError !== null && "border-2 border-red-500"}`}
          />
        </div>
      </div>
      <div>
        <h3>Rating</h3>
        <div className="flex flex-row items-center space-x-2">
          <input
            onChange={(e) => setRating(e.target.value)}
            type="number"
            min={0}
            max={5}
            placeholder={`Product Rating`}
            className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${stockError !== null && "border-2 border-red-500"}`}
          />
        </div>
      </div>
      <div>
        <h3 className="font-medium">Description</h3>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder={`Product Description`}
          className={`text-sm text-gray-500 w-full pr-3 py-5 px-4 border border-gray-primary rounded mb-2 focus-within:shadow-lg outline-none
${descriptionError !== null && "border-2 border-red-500"}`}
        />
      </div>
      <button
        onClick={addProduct}
        type="submit"
        className={`bg-[#008080] bg-gradient-to-r from-[#06202A]  text-white w-full rounded h-10 lg:h-8 font-bold hover:shadow-xl `}
      >
        Add Product
      </button>
    </div>
  );
}

export default AddProductForm;
