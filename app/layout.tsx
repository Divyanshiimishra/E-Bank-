import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#0f1117", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}