import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  HomeIcon,
  HashtagIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  BanknotesIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import Sidebar from "../components/Sidebar";
import SidebarRow from "../components/SidebarRow";

export default function Home() {
  const router = useRouter();

  const navProduct = () => {
    router.push("/products");
  };
  const navUsers = () => {
    router.push("/users");
  };
  const navOrders = () => {
    router.push("/orders");
  };

  const navCoupons = () => {
    router.push("/coupons");
  };
  return (
    <div className="w-screen h-screen">
      <main className="flex-col-reverse lg:flex-row flex w-full flex-1 h-full">
        <Sidebar />
        <div className=" bg-[#fafafa] grid place-items-center w-full h-full">
          <h2 className="text-4xl my-12  lg:my-3">ZH ECOM</h2>
          <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            <SidebarRow
              Icon={BuildingLibraryIcon}
              title="Products"
              onClick={navProduct}
            />
            <SidebarRow Icon={UserGroupIcon} title="Users" onClick={navUsers} />
            <SidebarRow
              Icon={BanknotesIcon}
              title="Orders"
              onClick={navOrders}
            />
            <SidebarRow Icon={GiftIcon} title="Coupons" onClick={navCoupons} />
          </div>
          <p className="text-sm font-light">Please Click to see the details</p>
        </div>
      </main>
    </div>
  );
}
