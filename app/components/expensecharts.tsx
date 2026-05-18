"use client"

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Food", value: 400 },
  { name: "Shopping", value: 300 },
  { name: "Bills", value: 300 },
  { name: "Transport", value: 200 },
]

const COLORS = ["#22c55e", "#3b82f6", "#ef4444", "#f59e0b"]

export default function ExpenseChart() {

  return (

    <div className="bg-white p-6 rounded-lg shadow mt-8">

      <h2 className="text-xl font-bold mb-4">
        Expense Breakdown
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label
            >

              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  )
}