import React from "react";
import Sidebar from "../../components/Sidebar";
import UserPannel from "../../components/UserPannel";

function Index() {
  return (
    <div className="w-screen h-screen">
      <main className="flex-col-reverse lg:flex-row flex w-full flex-1 h-full">
        <Sidebar />
        <UserPannel />
      </main>
    </div>
  );
}

export default Index;
