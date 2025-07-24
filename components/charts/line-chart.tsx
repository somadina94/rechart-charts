"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { data } from "@/constants/data";

export default function LineChartCard() {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Simple Line Chart</CardTitle>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#339af0"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#cc5de8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
