import React from "react";
import AddCouponForm from "../../components/form/AddCouponForm";
import Sidebar from "../../components/Sidebar";

function AddCoupons() {
  return (
    <div className="w-screen h-screen">
      <main className="flex-col-reverse lg:flex-row flex w-full flex-1 h-full">
        <Sidebar />
        <div className="px-10 w-full h-full">
          <AddCouponForm />
        </div>
      </main>
    </div>
  );
}

export default AddCoupons;
