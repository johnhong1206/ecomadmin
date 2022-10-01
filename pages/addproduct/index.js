import React from "react";
import AddProductForm from "../../components/form/AddProductForm";
import Sidebar from "../../components/Sidebar";

function ProductAdd() {
  return (
    <div className="">
      <main className="flex-col-reverse lg:flex-row flex w-full flex-1 h-full">
        <Sidebar />
        <div className="px-10 w-full">
          <AddProductForm />
        </div>
      </main>
    </div>
  );
}

export default ProductAdd;
