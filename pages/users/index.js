import React from "react";
import Sidebar from "../../components/Sidebar";
import UserPannel from "../../components/UserPannel";

function Index() {
  return (
    <div className="">
      <main className="flex w-full">
        <Sidebar />
        <UserPannel />
      </main>
    </div>
  );
}

export default Index;
