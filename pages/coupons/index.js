import React from "react";
import CouponPannel from "../../components/CouponPannel";
import Sidebar from "../../components/Sidebar";

function Index() {
  return (
    <div className="w-screen h-screen">
      <main className="flex-col-reverse lg:flex-row flex w-full flex-1 h-full">
        <Sidebar />
        <CouponPannel />
      </main>
    </div>
  );
}

export default Index;
