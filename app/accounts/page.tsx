"use client";

import Sidebar from "@/app/components/sidebar";

const accounts = [
  { name: "Checking",   balance: "$145,230.50", recent: -78.9,  color: "#3b82f6" },
  { name: "Savings",    balance: "$1,000.00",   recent: -34.0,  color: "#00c896" },
  { name: "Credit",     balance: "$0.00",       recent: -34.0,  color: "#ff4d6a" },
  { name: "Investment", balance: "$4,500.00",   recent: -78.0,  color: "#f59e0b" },
];

const linkedAccounts = [
  { name: "Checking",   account: "+22033000", balance: "$143,230.00", status: "$18,300.00" },
  { name: "Savings",    account: "+22033000", balance: "$143,230.00", status: "$14,200.00" },
  { name: "Credit",     account: "+13033000", balance: "$143,230.00", status: "$1,000.00"  },
  { name: "Investment", account: "+13303000", balance: "$143,230.00", status: "$1,100.00"  },
];

export default function AccountsPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f1117" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <h1 style={{ color: "#e8edf5", fontSize: "20px", fontWeight: 600, marginBottom: "24px" }}>
          Accounts Listing
        </h1>

        {/* 4 Account Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
          {accounts.map(a => (
            <div key={a.name} style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: a.color + "30", color: a.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold" }}>
                  {a.name[0]}
                </div>
                <span style={{ background: "#2a3550", color: "#8a97b0", padding: "2px 8px", borderRadius: "4px", fontSize: "11px" }}>{a.name}</span>
              </div>
              <p style={{ color: "#e8edf5", fontSize: "18px", fontWeight: 600, marginBottom: "6px" }}>{a.balance}</p>
              <p style={{ color: a.recent > 0 ? "#00c896" : "#ff4d6a", fontSize: "11px", marginBottom: "12px" }}>
                {a.recent > 0 ? "▲" : "▼"} Recent: {a.recent}
              </p>
              <button style={{ width: "100%", padding: "8px", background: "#2a3550", color: "#8a97b0", border: "none", borderRadius: "8px", fontSize: "12px", cursor: "pointer" }}>
                Quick Actions
              </button>
            </div>
          ))}
        </div>

        {/* Linked Accounts Table */}
        <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px" }}>
          <div style={{ padding: "16px", borderBottom: "1px solid #2a3550", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500 }}>Linked External Accounts</p>
            <button style={{ background: "#00c896", color: "#0f1117", border: "none", borderRadius: "8px", padding: "6px 12px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
              + Link Account
            </button>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Account", "Account No.", "Balance", "Status"].map(h => (
                  <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: "#8a97b0", fontSize: "11px", fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {linkedAccounts.map((a, i) => (
                <tr key={i} style={{ borderTop: "1px solid #2a3550" }}>
                  <td style={{ padding: "12px 16px", color: "#e8edf5", fontSize: "12px" }}>{a.name}</td>
                  <td style={{ padding: "12px 16px", color: "#8a97b0", fontSize: "12px" }}>{a.account}</td>
                  <td style={{ padding: "12px 16px", color: "#e8edf5", fontSize: "12px" }}>{a.balance}</td>
                  <td style={{ padding: "12px 16px", color: "#00c896", fontSize: "12px" }}>{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}