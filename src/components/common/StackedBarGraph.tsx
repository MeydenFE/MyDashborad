"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/** 積み上げグラフ　表示用コンポーネント */
export const StackedBarGraph = ({
  data,
  keys,
}: {
  data: any[];
  keys: string[];
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} stackOffset="expand">
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {keys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            stackId="a"
            fill={dynamicColor(index)}
            animationDuration={300}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00c49f"];
const dynamicColor = (index: number) => COLORS[index % COLORS.length];
