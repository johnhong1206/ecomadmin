import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import OrdersPannel from "../../components/OrdersPannel";
import { db } from "../../firebase/firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

function Index() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "orders"), orderBy("created", "asc")),
      (snapshot) => {
        setOrders(
          snapshot.docs?.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
    return unsubscribe;
  }, [db]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "products")),
      (snapshot) => {
        setProducts(
          snapshot.docs?.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      }
    );
    return unsubscribe;
  }, [db]);

  return (
    <div className="w-screen h-screen">
      <main className="flex-col-reverse lg:flex-row flex w-full flex-1 h-full">
        <Sidebar />
        <OrdersPannel orders={orders} products={products} />
      </main>
    </div>
  );
}

export default Index;
