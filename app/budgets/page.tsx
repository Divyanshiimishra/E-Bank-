"use client";

import Sidebar from "@/app/components/sidebar";

export default function BudgetsPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f1117" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <h1 style={{ color: "#e8edf5", fontSize: "20px", fontWeight: 600, marginBottom: "24px" }}>
          Budgets
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "24px" }}>
          {[
            { label: "Total Budget",    amount: "$5,000.00", used: "$3,200.00", percent: 64, color: "#3b82f6" },
            { label: "Food & Groceries",amount: "$1,200.00", used: "$850.00",   percent: 70, color: "#f59e0b" },
            { label: "Entertainment",   amount: "$500.00",   used: "$120.00",   percent: 24, color: "#00c896" },
          ].map(b => (
            <div key={b.label} style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
              <p style={{ color: "#8a97b0", fontSize: "12px", marginBottom: "8px" }}>{b.label}</p>
              <p style={{ color: "#e8edf5", fontSize: "22px", fontWeight: 600, marginBottom: "4px" }}>{b.amount}</p>
              <p style={{ color: "#8a97b0", fontSize: "11px", marginBottom: "12px" }}>Used: {b.used}</p>
              <div style={{ background: "#2a3550", borderRadius: "4px", height: "6px", marginBottom: "6px" }}>
                <div style={{ background: b.color, width: `${b.percent}%`, height: "6px", borderRadius: "4px" }} />
              </div>
              <p style={{ color: b.color, fontSize: "11px" }}>{b.percent}% used</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px" }}>
          <div style={{ padding: "16px", borderBottom: "1px solid #2a3550", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500 }}>Budget Categories</p>
            <button style={{ background: "#00c896", color: "#0f1117", border: "none", borderRadius: "8px", padding: "6px 14px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
              + Add Budget
            </button>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Category", "Budget", "Spent", "Remaining", "Status"].map(h => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#8a97b0", fontSize: "11px", fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { cat: "Groceries",     budget: "$1,200", spent: "$850",  remaining: "$350",  status: "On Track"   },
                { cat: "Entertainment", budget: "$500",   spent: "$120",  remaining: "$380",  status: "On Track"   },
                { cat: "Transport",     budget: "$300",   spent: "$290",  remaining: "$10",   status: "Near Limit" },
                { cat: "Shopping",      budget: "$800",   spent: "$950",  remaining: "-$150", status: "Exceeded"   },
                { cat: "Utilities",     budget: "$400",   spent: "$380",  remaining: "$20",   status: "Near Limit" },
              ].map((row, i) => {
                const color = row.status === "On Track" ? "#00c896" : row.status === "Exceeded" ? "#ff4d6a" : "#f59e0b";
                return (
                  <tr key={i} style={{ borderTop: "1px solid #2a3550" }}>
                    <td style={{ padding: "12px 16px", color: "#e8edf5", fontSize: "12px" }}>{row.cat}</td>
                    <td style={{ padding: "12px 16px", color: "#8a97b0", fontSize: "12px" }}>{row.budget}</td>
                    <td style={{ padding: "12px 16px", color: "#8a97b0", fontSize: "12px" }}>{row.spent}</td>
                    <td style={{ padding: "12px 16px", color: "#8a97b0", fontSize: "12px" }}>{row.remaining}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <span style={{ padding: "2px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: 500, color, background: color + "20" }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}