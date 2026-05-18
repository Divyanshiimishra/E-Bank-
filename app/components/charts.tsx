"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { month: "Jan", income: 4000, expenses: 2400 },
  { month: "Feb", income: 3000, expenses: 1398 },
  { month: "Mar", income: 5000, expenses: 3800 },
  { month: "Apr", income: 4780, expenses: 2908 },
  { month: "May", income: 5890, expenses: 3800 },
]

export default function Chart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-8">

      <h2 className="text-xl font-bold mb-4">
        Income vs Expenses
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
            />

            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#ef4444"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}