"use client";

import Sidebar from "@/app/components/sidebar";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  AreaChart, Area,
} from "recharts";

const spendingData = [
  { name: "Spending",      value: 35, color: "#3b82f6" },
  { name: "Subscriptions", value: 20, color: "#8b5cf6" },
  { name: "Groceries",     value: 15, color: "#f59e0b" },
  { name: "Savings",       value: 12, color: "#00c896" },
  { name: "Shopping",      value: 8,  color: "#ff4d6a" },
  { name: "Others",        value: 10, color: "#6b7280" },
];

const netWorthData = [
  { month: "Jan", income: 800,  total: 900  },
  { month: "Feb", income: 600,  total: 700  },
  { month: "Mar", income: 1200, total: 1400 },
  { month: "Apr", income: 900,  total: 1100 },
  { month: "May", income: 1600, total: 2000 },
];

const peerData = [
  { cat: "Total",    actual: 160, budgeted: 140 },
  { cat: "Groceries",actual: 120, budgeted: 100 },
  { cat: "Shopping", actual: 178, budgeted: 150 },
  { cat: "Others",   actual: 90,  budgeted: 110 },
];

export default function AnalyticsPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f1117" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <h1 style={{ color: "#e8edf5", fontSize: "20px", fontWeight: 600, marginBottom: "24px" }}>
          Analytics and Reports
        </h1>

        {/* Top Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
          
          {/* Pie Chart */}
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Spending by Category</p>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <ResponsiveContainer width={140} height={140}>
                <PieChart>
                  <Pie data={spendingData} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value">
                    {spendingData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#161b27", border: "1px solid #2a3550", borderRadius: 8 }} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {spendingData.map(s => (
                  <div key={s.name} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px", color: "#8a97b0" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: s.color, display: "inline-block" }} />
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Savings Goals */}
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Savings Goals</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ color: "#e8edf5", fontSize: "12px" }}>Savings Start</p>
                  <p style={{ color: "#8a97b0", fontSize: "11px" }}>First Goal</p>
                </div>
                <span style={{ color: "#ff4d6a", fontWeight: 600, fontSize: "13px" }}>-$18.30</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ color: "#e8edf5", fontSize: "12px" }}>Savings Alert</p>
                  <p style={{ color: "#8a97b0", fontSize: "11px" }}>Spending Alert</p>
                </div>
                <span style={{ color: "#00c896", fontWeight: 600, fontSize: "13px" }}>+$2,620.00</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", background: "#161b27", borderRadius: "8px", padding: "12px" }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#8a97b0", fontSize: "11px", marginBottom: "4px" }}>Savings Goals</p>
                <p style={{ color: "#e8edf5", fontWeight: 600 }}>$210</p>
                <p style={{ color: "#00c896", fontSize: "11px" }}>+11999%</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#8a97b0", fontSize: "11px", marginBottom: "4px" }}>Net Worth</p>
                <p style={{ color: "#e8edf5", fontWeight: 600 }}>$20</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          
          {/* Net Worth Chart */}
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Net Worth</p>
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={netWorthData}>
                <defs>
                  <linearGradient id="gincome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gtotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#00c896" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00c896" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a3550" />
                <XAxis dataKey="month" tick={{ fill: "#8a97b0", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#8a97b0", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#161b27", border: "1px solid #2a3550", borderRadius: 8 }} />
                <Area type="monotone" dataKey="income" stroke="#3b82f6" fill="url(#gincome)" strokeWidth={2} />
                <Area type="monotone" dataKey="total"  stroke="#00c896" fill="url(#gtotal)"  strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Peer Comparison */}
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Peer Comparison</p>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={peerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a3550" />
                <XAxis dataKey="cat" tick={{ fill: "#8a97b0", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#8a97b0", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#161b27", border: "1px solid #2a3550", borderRadius: 8 }} />
                <Bar dataKey="actual"   fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="budgeted" fill="#00c896" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}