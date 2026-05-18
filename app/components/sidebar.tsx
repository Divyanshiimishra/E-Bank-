"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, CreditCard, ArrowLeftRight,
  BarChart2, Wallet, Settings, HelpCircle,
} from "lucide-react";

const navItems = [
  { href: "/dashboard",     icon: LayoutDashboard, label: "Dashboard" },
  { href: "/accounts",      icon: CreditCard,      label: "Accounts" },
  { href: "/transactions",  icon: ArrowLeftRight,  label: "Transactions" },
  { href: "/analytics",     icon: BarChart2,       label: "Analytics" },
  { href: "/budgets",       icon: Wallet,          label: "Budgets" },
];

const bottomItems = [
  { href: "/settings", icon: Settings,   label: "Settings" },
  { href: "/support",  icon: HelpCircle, label: "Support" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{
      width: "200px",
      minHeight: "100vh",
      background: "#161b27",
      borderRight: "1px solid #2a3550",
      padding: "24px 12px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      {/* Logo */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 12px", marginBottom: "32px" }}>
          <div style={{
            width: "28px", height: "28px", borderRadius: "8px",
            background: "#00c896", color: "#0f1117",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "11px", fontWeight: "bold"
          }}>FC</div>
          <span style={{ color: "#e8edf5", fontWeight: 600, fontSize: "14px" }}>FinCore Bank</span>
        </div>

        {/* Main Nav */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {navItems.map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "10px 12px", borderRadius: "8px", fontSize: "13px",
                fontWeight: 500, textDecoration: "none",
                background: active ? "#00c896" : "transparent",
                color: active ? "#0f1117" : "#8a97b0",
              }}>
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Nav */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {bottomItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} style={{
              display: "flex", alignItems: "center", gap: "12px",
              padding: "10px 12px", borderRadius: "8px", fontSize: "13px",
              fontWeight: 500, textDecoration: "none",
              background: active ? "#00c896" : "transparent",
              color: active ? "#0f1117" : "#8a97b0",
            }}>
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}