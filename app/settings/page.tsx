"use client";

import Sidebar from "@/app/components/sidebar";
import { useState } from "react";

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      style={{
        width: "40px", height: "22px", borderRadius: "11px",
        background: on ? "#00c896" : "#2a3550",
        border: "none", cursor: "pointer", position: "relative",
        transition: "background 0.2s",
      }}
    >
      <span style={{
        position: "absolute", top: "3px",
        left: on ? "20px" : "3px",
        width: "16px", height: "16px",
        borderRadius: "50%", background: "#fff",
        transition: "left 0.2s",
      }} />
    </button>
  );
}

export default function SettingsPage() {
  const [mfa, setMfa] = useState(false);
  const [notif, setNotif] = useState(false);
  const [appPref, setAppPref] = useState(true);

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#0f1117" }}>
      <Sidebar />

      <div style={{ flex: 1, padding: "24px" }}>
        <h1 style={{ color: "#e8edf5", fontSize: "20px", fontWeight: 600, marginBottom: "24px" }}>
          Settings and Profile
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* User Profile */}
            <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>User Profile</p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#00c896", color: "#0f1117", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
                  JD
                </div>
                <div>
                  <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500 }}>John Doe</p>
                  <p style={{ color: "#8a97b0", fontSize: "12px" }}>Premium Account</p>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
                {[
                  { label: "Name", value: "John Doe" },
                  { label: "Email", value: "john@email.com" },
                  { label: "Contact", value: "+1234567890" },
                  { label: "Password", value: "••••••••" },
                ].map(f => (
                  <div key={f.label}>
                    <p style={{ color: "#8a97b0", fontSize: "11px", marginBottom: "4px" }}>{f.label}</p>
                    <p style={{ color: "#e8edf5", fontSize: "12px" }}>{f.value}</p>
                  </div>
                ))}
              </div>
              <button style={{ background: "#00c896", color: "#0f1117", border: "none", borderRadius: "8px", padding: "8px 16px", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
                Edit Profile
              </button>
            </div>

            {/* Connected Accounts */}
            <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Connected Bank Accounts</p>
              {["Credit Bank", "Investment Bank", "June Bank"].map(bank => (
                <div key={bank} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #2a3550" }}>
                  <p style={{ color: "#e8edf5", fontSize: "12px" }}>{bank}</p>
                  <button style={{ background: "#2a3550", color: "#8a97b0", border: "none", borderRadius: "6px", padding: "4px 10px", fontSize: "11px", cursor: "pointer" }}>
                    Manage
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Security */}
            <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Security</p>
              {[
                { label: "MFA", sub: "Two factor authentication", isToggle: true, on: mfa, toggle: () => setMfa(!mfa) },
                { label: "Password Change", sub: null, isToggle: false },
                { label: "Device Management", sub: "Manage your devices", isToggle: false },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #2a3550" }}>
                  <div>
                    <p style={{ color: "#e8edf5", fontSize: "12px" }}>{item.label}</p>
                    {item.sub && <p style={{ color: "#8a97b0", fontSize: "11px" }}>{item.sub}</p>}
                  </div>
                  {item.isToggle
                    ? <Toggle on={item.on!} onToggle={item.toggle!} />
                    : <span style={{ color: "#8a97b0", fontSize: "16px" }}>›</span>}
                </div>
              ))}
            </div>

            {/* Notifications */}
            <div style={{ background: "#1a2235", border: "1px solid #2a3550", borderRadius: "12px", padding: "20px" }}>
              <p style={{ color: "#e8edf5", fontSize: "14px", fontWeight: 500, marginBottom: "16px" }}>Notification Preferences</p>
              {[
                { label: "Push Notifications", on: notif, toggle: () => setNotif(!notif) },
                { label: "App Preferences", on: appPref, toggle: () => setAppPref(!appPref) },
              ].map(n => (
                <div key={n.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #2a3550" }}>
                  <p style={{ color: "#e8edf5", fontSize: "12px" }}>{n.label}</p>
                  <Toggle on={n.on} onToggle={n.toggle} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}