import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import UsersTab from "./table/UsersTab";

function UserPannel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "users")),
      (snapshot) => {
        setUsers(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  return (
    <div className="overflow-x-scroll px-10 w-full">
      <h1 className="text-3xl font-medium mb-4">Users List</h1>
      <table className=" bg-[#fafafa] table-fixed border-collapse border border-slate-500 overflow-x-scroll ">
        <thead>
          <tr>
            <th className="border border-slate-600 w-[5%]">NO:</th>
            <th className="border border-slate-600 w-[20%]">Username</th>
            <th className="border border-slate-600 w-[10%]">UID</th>
            <th className="border border-slate-600 w-[20%]">Email</th>
            <th className="border border-slate-600 w-[10%]">Point</th>
            <th className="border border-slate-600 w-[10%]">Contact</th>
            <th className="border border-slate-600 w-[15%]">Address</th>
            <th className="border border-slate-600 w-[10%]"></th>
          </tr>
        </thead>
        {users?.map((user, index) => (
          <UsersTab
            key={user?.id}
            id={user?.id}
            index={index + 1}
            username={user?.data().username}
            uid={user?.data().uid}
            email={user?.data().email}
            point={user?.data().point}
            contact={user?.data().contact}
            address={user?.data().address}
            user={user?.data()}
          />
        ))}
      </table>
    </div>
  );
}

export default UserPannel;
