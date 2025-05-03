"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Section } from "@/src/components/common/Section";

const data = [
  { date: "2024-07-01", count: 3 },
  { date: "2024-07-02", count: 1 },
  { date: "2024-07-03", count: 4 },
  { date: "2024-07-04", count: 2 },
  { date: "2024-07-05", count: 5 },
  { date: "2024-07-06", count: 0 },
  { date: "2024-07-07", count: 3 },
  { date: "2025-05-01", count: 2 },
];

/** 折れ線グラフ 画面表示用 コンポーネント */
const DashboardProgressChart = () => {
  return (
    <Section title="夢への軌跡" bgColor="bg-white">
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
};

export default DashboardProgressChart;
