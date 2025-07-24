"use client";

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { name: "Jan", users: 400, revenue: 2400 },
  { name: "Feb", users: 300, revenue: 1398 },
  { name: "Mar", users: 200, revenue: 9800 },
];

export default function ComposedChartCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Composed Chart</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer>
          <ComposedChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" barSize={20} fill="hsl(var(--primary))" />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--muted-foreground))"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
