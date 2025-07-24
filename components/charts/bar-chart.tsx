"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Rectangle,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { data } from "@/constants/data";

export default function BrowserUsageChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Simple Bar Chart</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#339af0"
              activeBar={<Rectangle fill="#339af0" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#cc5de8"
              activeBar={<Rectangle fill="#cc5de8" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
