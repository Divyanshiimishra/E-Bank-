"use client";

import Sidebar from "@/app/components/sidebar";
import { useState } from "react";

const tickets = [
  { date: "06/07/2023", desc: "Netflix Subscription", cat: "Subscription", amount: -19.99, status: "Completed" },
  { date: "06/07/2023", desc: "Salary Transfer", cat: "Salary", amount: -2206.50, status: "Completed" },
  { date: "06/07/2023", desc: "Amount Purchase", cat: "Shopping", amount: -148.20, status: "Processing" },
];

export default function SupportPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f1117" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <h1 style={{ color: "#e8edf5", fontSize: "20px", fontWeight: 600, marginBottom: "24px" }}>
          Support and Help
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

          {/* Left - Support Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Support Form</p>

              <div style={{ marginBottom: "12px" }}>
                <p style={{ color: "#8a97b0", fontSize: "11px", marginBottom: "6px" }}>Subject</p>
                <select
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  style={{ width: "100%", padding: "8px 12px", background: "#161b27", border: "1px solid #2a3550", borderRadius: "8px", color: "#8a97b0", fontSize: "12px", outline: "none" }}
                >
                  <option value="">Select Subject</option>
                  <option>Account Issues</option>
                  <option>Transaction Dispute</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div style={{ marginBottom: "12px" }}>
                <p style={{ color: "#8a97b0", fontSize: "11px", marginBottom: "6px" }}>Message</p>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  rows={4}
                  style={{ width: "100%", padding: "8px 12px", background: "#161b27", border: "1px solid #2a3550", borderRadius: "8px", color: "#e8edf5", fontSize: "12px", outline: "none", resize: "none" }}
                />
              </div>

              <button style={{ width: "100%", padding: "10px", background: "#00c896", color: "#0f1117", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>
                Send Message
              </button>
            </div>

            {/* Ticket History */}
            <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px" }}>
              <div style={{ padding: "16px", borderBottom: "1px solid #2a3550" }}>
                <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500 }}>Support Ticket History</p>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {["Date", "Description", "Amount", "Status"].map(h => (
                      <th key={h} style={{ padding: "10px 16px", textAlign: "left", color: "#8a97b0", fontSize: "11px" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t, i) => (
                    <tr key={i} style={{ borderTop: "1px solid #2a3550" }}>
                      <td style={{ padding: "10px 16px", color: "#8a97b0", fontSize: "11px" }}>{t.date}</td>
                      <td style={{ padding: "10px 16px", color: "#e8edf5", fontSize: "11px" }}>{t.desc}</td>
                      <td style={{ padding: "10px 16px", fontSize: "11px", color: "#ff4d6a" }}>${Math.abs(t.amount).toFixed(2)}</td>
                      <td style={{ padding: "10px 16px" }}>
                        <span style={{
                          padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: 500,
                          color: t.status === "Completed" ? "#00c896" : "#f59e0b",
                          background: t.status === "Completed" ? "#00c89620" : "#f59e0b20",
                        }}>
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right - Contacts & KB */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Frequent Contacts */}
            <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Frequent Contact</p>
              {["(711) 532-6999", "(711) 522-6988", "(711) 552-5898"].map(n => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 0", borderBottom: "1px solid #2a3550", color: "#8a97b0", fontSize: "12px" }}>
                  📞 {n}
                </div>
              ))}
            </div>

            {/* Knowledge Base */}
            <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Knowledge Base</p>
              {[
                "How to reset your password",
                "How to link external accounts",
                "How to dispute a transaction",
              ].map((a, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #2a3550" }}>
                  <p style={{ color: "#8a97b0", fontSize: "12px" }}>{a}</p>
                  <span style={{ color: "#8a97b0" }}>›</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}