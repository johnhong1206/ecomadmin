import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

import { db } from "../../firebase/firebase";
import { useRouter } from "next/router";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import OrderDetailsPannel from "../../components/OrderDetailsPannel";

function OrderDetails() {
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const id = router.query.id;

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const docRef = doc(db, "orders", id);
      const docSnap = await getDoc(docRef);
      setOrder(docSnap.data());
    };
    fetchOrderDetails();
  }, [db, id]);

  return (
    <div className="w-screen h-screen">
      <main className="flex-col-reverse lg:flex-row flex w-full flex-1 h-full">
        <Sidebar />
        <OrderDetailsPannel order={order} id={router.query.id} />
      </main>
    </div>
  );
}

export default OrderDetails;
