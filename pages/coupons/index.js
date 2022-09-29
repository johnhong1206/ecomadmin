import React from "react";
import CouponPannel from "../../components/CouponPannel";
import Sidebar from "../../components/Sidebar";

function Index() {
  return (
    <div className="">
      <main className="flex w-full">
        <Sidebar />
        <CouponPannel />
      </main>
    </div>
  );
}

export default Index;
