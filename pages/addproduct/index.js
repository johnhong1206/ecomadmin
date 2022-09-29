import React from "react";
import AddProductForm from "../../components/form/AddProductForm";
import Sidebar from "../../components/Sidebar";

function ProductAdd() {
  return (
    <div className="overflow-hidden">
      <main className="flex w-full h-screen">
        <Sidebar />
        <div className="w-full px-10">
          <AddProductForm />
        </div>
      </main>
      <div className="pb-10" />
    </div>
  );
}

export default ProductAdd;
