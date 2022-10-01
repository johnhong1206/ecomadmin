import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ControlPannel from "../../components/ControlPannel";
import { db } from "../../firebase/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "products")),
      (snapshot) => {
        setProducts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);
  return (
    <div className="w-screen h-screen">
      <main className="flex-col-reverse lg:flex-row flex w-full flex-1 h-full">
        <Sidebar />
        <ControlPannel products={products} />
      </main>
    </div>
  );
}

export default Index;
