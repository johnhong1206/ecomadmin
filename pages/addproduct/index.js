import React from "react";
import AddProductForm from "../../components/form/AddProductForm";
import Sidebar from "../../components/Sidebar";

function ProductAdd() {
  return (
    <div className="">
      <main className="flex w-full h-screen">
        <Sidebar />
        <div className="w-full px-10">
          <AddProductForm />
        </div>
      </main>
      <div className=" pb-36" />
    </div>
  );
}

export default ProductAdd;
