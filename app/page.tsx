"use client";

import Sidebar from "@/app/components/sidebar";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const cashFlowData = [
  { month: "Jan", income: 320, expenses: 180 },
  { month: "Feb", income: 280, expenses: 220 },
  { month: "Mar", income: 350, expenses: 150 },
  { month: "Apr", income: 400, expenses: 280 },
  { month: "May", income: 380, expenses: 190 },
];

const recentTx = [
  { date: "06/07/2022", desc: "Netflix Subscription", cat: "Subscription", amount: -18.8,  status: "Completed" },
  { date: "06/07/2022", desc: "Salary TechExp",       cat: "Salary",       amount: 35.8,   status: "Completed" },
  { date: "06/07/2022", desc: "Amount Purchase",      cat: "Shopping",     amount: -145.3, status: "Processing" },
];

export default function HomePage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f1117" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <h1 style={{ color: "#e8edf5", fontSize: "20px", fontWeight: 600, marginBottom: "24px" }}>
          Dashboard Overview
        </h1>

        {/* 3 Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#8a97b0", fontSize: "12px", marginBottom: "8px" }}>Total Balance</p>
            <p style={{ color: "#e8edf5", fontSize: "24px", fontWeight: 600, marginBottom: "6px" }}>$145,230.50</p>
            <p style={{ color: "#00c896", fontSize: "12px" }}>▲ +6.2% this month</p>
          </div>
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#8a97b0", fontSize: "12px", marginBottom: "8px" }}>Monthly Income</p>
            <p style={{ color: "#e8edf5", fontSize: "24px", fontWeight: 600, marginBottom: "6px" }}>$12,850.00</p>
            <p style={{ color: "#00c896", fontSize: "12px" }}>▲ +5.4%</p>
          </div>
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#8a97b0", fontSize: "12px", marginBottom: "8px" }}>Monthly Expenses</p>
            <p style={{ color: "#e8edf5", fontSize: "24px", fontWeight: 600, marginBottom: "6px" }}>$4,120.75</p>
            <p style={{ color: "#ff4d6a", fontSize: "12px" }}>▼ +5.3%</p>
          </div>
        </div>

        {/* Chart + Quick Transfer */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px", marginBottom: "24px" }}>
          
          {/* Chart */}
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Cash Flow Analytics</p>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={cashFlowData}>
                <defs>
                  <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#00c896" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00c896" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="expenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor="#ff4d6a" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ff4d6a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a3550" />
                <XAxis dataKey="month" tick={{ fill: "#8a97b0", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#8a97b0", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "#161b27", border: "1px solid #2a3550", borderRadius: 8, color: "#e8edf5" }} />
                <Area type="monotone" dataKey="income"   stroke="#00c896" fill="url(#income)"   strokeWidth={2} />
                <Area type="monotone" dataKey="expenses" stroke="#ff4d6a" fill="url(#expenses)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Quick Transfer */}
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500 }}>Quick Transfer</p>
            <div>
              <p style={{ color: "#8a97b0", fontSize: "11px", marginBottom: "6px" }}>Recipients</p>
              <div style={{ background: "#161b27", border: "1px solid #2a3550", borderRadius: "8px", padding: "8px 12px", color: "#e8edf5", fontSize: "12px" }}>
                Sarah Miller or Alice Chan
              </div>
            </div>
            <div>
              <p style={{ color: "#8a97b0", fontSize: "11px", marginBottom: "6px" }}>Amount</p>
              <div style={{ background: "#161b27", border: "1px solid #2a3550", borderRadius: "8px", padding: "8px 12px", color: "#e8edf5", fontSize: "12px" }}>
                $250.00
              </div>
            </div>
            <div>
              <p style={{ color: "#8a97b0", fontSize: "11px", marginBottom: "6px" }}>Note</p>
              <div style={{ background: "#161b27", border: "1px solid #2a3550", borderRadius: "8px", padding: "8px 12px", color: "#e8edf5", fontSize: "12px" }}>
                Dinner Payment
              </div>
            </div>
            <button style={{ background: "#00c896", color: "#0f1117", border: "none", borderRadius: "8px", padding: "10px", fontSize: "13px", fontWeight: 600, cursor: "pointer", marginTop: "auto" }}>
              Execute Transfer
            </button>
          </div>
        </div>

        {/* Recent Transactions */}
        <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px" }}>
          <div style={{ padding: "16px", borderBottom: "1px solid #2a3550" }}>
            <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500 }}>Recent Transactions</p>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Date", "Description", "Category", "Amount", "Status"].map(h => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#8a97b0", fontSize: "11px", fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentTx.map((tx, i) => (
                <tr key={i} style={{ borderTop: "1px solid #2a3550" }}>
                  <td style={{ padding: "12px 16px", color: "#8a97b0", fontSize: "12px" }}>{tx.date}</td>
                  <td style={{ padding: "12px 16px", color: "#e8edf5", fontSize: "12px" }}>{tx.desc}</td>
                  <td style={{ padding: "12px 16px", color: "#8a97b0", fontSize: "12px" }}>{tx.cat}</td>
                  <td style={{ padding: "12px 16px", fontSize: "12px", fontWeight: 500, color: tx.amount > 0 ? "#00c896" : "#ff4d6a" }}>
                    {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount).toFixed(2)}
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    <span style={{
                      padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 500,
                      color: tx.status === "Completed" ? "#00c896" : "#f59e0b",
                      background: tx.status === "Completed" ? "#00c89620" : "#f59e0b20"
                    }}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}