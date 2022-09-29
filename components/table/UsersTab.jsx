import React from "react";

function UsersTab({
  key,
  id,
  index,
  username,
  uid,
  email,
  point,
  contact,
  address,
  user,
}) {
  return (
    <tbody>
      <tr
        key={key}
        className="hover:bg-gray-600 hover:text-white cursor-pointer hover:shadow-md"
      >
        <th className=" font-normal px-4 py-2 border  border-slate-400">
          {index}
        </th>
        <th className="font-normal px-4 py-2 truncate border  border-slate-400">
          {username}
        </th>
        <th className=" font-normal px-4 py-2 truncate border  border-slate-400">
          {uid}
        </th>
        <th className=" font-normal px-4 py-2 border  border-slate-400">
          {email}
        </th>
        <th className=" font-normal px-4 py-2 border  border-slate-400">
          {point}
        </th>
        <th className=" font-normal px-4 py-2 border  border-slate-400">
          {contact}
        </th>
        <th className=" font-normal px-4 py-2 border truncate  border-slate-400">
          {address}
        </th>
        <th className=" font-normal px-4 py-2 border  border-slate-400">
          <button className="bg-rose-400 px-6 py-1 rounded text-white font-medium hover:text-rose-400 hover:bg-white">
            Edit
          </button>
        </th>
      </tr>
    </tbody>
  );
}

export default UsersTab;
