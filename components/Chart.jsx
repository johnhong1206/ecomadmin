import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dynamic from "next/dynamic";

function Chart({ title, data, dataKey, grid }) {
  const date = new Date().toISOString().split("T")[0];

  return (
    <div className="m-5 p-5 shadow-lg">
      <h3 className="mb-5">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#5550bd" />
          <YAxis dataKey="amount" stroke="#5550bd" />

          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />

          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
