'use client'

import { dataPlaygroundPages } from '@/lib/data/dashboardData';
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export default function PlaygroundPages() {
  const data = dataPlaygroundPages.pages;

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="title"
          tickLine={false}
          axisLine={false}
          fontSize={12}
        />
        <YAxis
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Bar
          dataKey="views"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-leaf" />
      </BarChart>
    </ResponsiveContainer>
  )
}
