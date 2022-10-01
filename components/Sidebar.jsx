import React from "react";
import { useRouter } from "next/router";
import SidebarRow from "./SidebarRow";
import {
  HomeIcon,
  HashtagIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  BanknotesIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  const router = useRouter();

  const navHome = () => {
    router.push("/");
  };
  const navExplore = () => {
    alert("explore");
  };

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
    <div className="col-span-2 flex flex-row lg:flex-col items-start justify-between lg:justify-start px-4 md:items-start">
      <div className=" hidden w-full lg:flex items-center justify-center my-4">
        <h2 className="text-3xl mb-3 text-center">ZH ECOM</h2>
      </div>
      <SidebarRow Icon={HomeIcon} title="Home" onClick={navHome} />
      <SidebarRow
        Icon={BuildingLibraryIcon}
        title="Products"
        onClick={navProduct}
      />
      <SidebarRow Icon={UserGroupIcon} title="Users" onClick={navUsers} />
      <SidebarRow Icon={BanknotesIcon} title="Orders" onClick={navOrders} />
      <SidebarRow Icon={GiftIcon} title="Coupons" onClick={navCoupons} />
    </div>
  );
}

export default Sidebar;
