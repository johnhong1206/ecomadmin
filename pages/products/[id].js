import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ProductDetailsPannel from "../../components/table/ProductDetailsPannel";
import { db } from "../../firebase/firebase";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";

function ProductDetails() {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const id = router.query.id;

  useEffect(() => {
    const fetchProductDetails = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      setProduct(docSnap.data());
    };
    fetchProductDetails();
  }, [db, id]);

  return (
    <div className="w-screen h-screen">
      <main className="flex-col-reverse lg:flex-row flex w-full flex-1 h-full">
        <Sidebar />
        <ProductDetailsPannel product={product} id={router.query.id} />
      </main>
    </div>
  );
}

export default ProductDetails;
