"use client";

import Sidebar from "@/app/components/sidebar";
import { useState } from "react";

const allTransactions = [
  { date: "08/01/2023", desc: "Groceries",            cat: "Groceries",    amount: -10.00,   status: "Completed"  },
  { date: "08/01/2023", desc: "Salary YuniCorp",      cat: "Salary",       amount: 6036.00,  status: "Completed"  },
  { date: "08/01/2023", desc: "Aurerum Purchase",     cat: "Shopping",     amount: -89.00,   status: "Processing" },
  { date: "06/07/2023", desc: "Groceries",            cat: "Groceries",    amount: -155.00,  status: "Completed"  },
  { date: "06/07/2023", desc: "Netflix Subscription", cat: "Subscription", amount: -19.00,   status: "Processing" },
  { date: "06/07/2023", desc: "Groceries",            cat: "Groceries",    amount: -9.00,    status: "Completed"  },
  { date: "06/07/2023", desc: "Netflix Subscription", cat: "Subscription", amount: -10.80,   status: "Completed"  },
  { date: "06/07/2023", desc: "Salary TechExp",       cat: "Salary",       amount: 5232.00,  status: "Completed"  },
  { date: "06/07/2023", desc: "Amount Purchase",      cat: "Shopping",     amount: -140.00,  status: "Processing" },
  { date: "06/07/2023", desc: "Groceries",            cat: "Groceries",    amount: 23.80,    status: "Completed"  },
];

export default function TransactionsPage() {
  const [category, setCategory] = useState("All");

  const filtered = allTransactions.filter(tx => {
    if (category !== "All" && tx.cat !== category) return false;
    return true;
  });

  const categories = ["All", "Groceries", "Salary", "Shopping", "Subscription"];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f1117" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <h1 style={{ color: "#e8edf5", fontSize: "20px", fontWeight: 600, marginBottom: "24px" }}>
          Transactions History
        </h1>

        <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px" }}>
          
          {/* Filter Bar */}
          <div style={{ padding: "16px", borderBottom: "1px solid #2a3550", display: "flex", alignItems: "center", gap: "12px" }}>
            <p style={{ color: "#8a97b0", fontSize: "12px" }}>Filter:</p>
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                style={{
                  padding: "6px 12px", borderRadius: "8px", fontSize: "12px",
                  border: "none", cursor: "pointer", fontWeight: 500,
                  background: category === c ? "#00c896" : "#2a3550",
                  color: category === c ? "#0f1117" : "#8a97b0",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Table */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Date", "Description", "Category", "Amount", "Status"].map(h => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#8a97b0", fontSize: "11px", fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((tx, i) => (
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
                      background: tx.status === "Completed" ? "#00c89620" : "#f59e0b20",
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