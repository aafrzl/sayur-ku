"use client"

import { dataDashboardOverview } from "@/lib/data/dashboardData"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={dataDashboardOverview}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-leaf"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
