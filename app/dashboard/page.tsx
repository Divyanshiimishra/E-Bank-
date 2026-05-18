"use client";

export default function DashboardPage() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Main Content */}
      <div style={{ flex: 1, padding: "24px", background: "#0f1117" }}>
        
        <h1 style={{ color: "#e8edf5", fontSize: "20px", fontWeight: 600, marginBottom: "24px" }}>
          Dashboard Overview
        </h1>

        {/* 3 Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "24px" }}>
          
          {/* Card 1 */}
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#8a97b0", fontSize: "12px", marginBottom: "8px" }}>Total Balance</p>
            <p style={{ color: "#e8edf5", fontSize: "24px", fontWeight: 600, marginBottom: "6px" }}>$145,230.50</p>
            <p style={{ color: "#00c896", fontSize: "12px" }}>▲ +6.2% this month</p>
          </div>

          {/* Card 2 */}
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#8a97b0", fontSize: "12px", marginBottom: "8px" }}>Monthly Income</p>
            <p style={{ color: "#e8edf5", fontSize: "24px", fontWeight: 600, marginBottom: "6px" }}>$12,850.00</p>
            <p style={{ color: "#00c896", fontSize: "12px" }}>▲ +5.4%</p>
          </div>

          {/* Card 3 */}
          <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "16px" }}>
            <p style={{ color: "#8a97b0", fontSize: "12px", marginBottom: "8px" }}>Monthly Expenses</p>
            <p style={{ color: "#e8edf5", fontSize: "24px", fontWeight: 600, marginBottom: "6px" }}>$4,120.75</p>
            <p style={{ color: "#ff4d6a", fontSize: "12px" }}>▼ +5.3%</p>
          </div>

        </div>

      </div>
    </div>
  );
}