export const metadata = {
  title: "Anchor",
  description: "Identify and reduce hidden account risk.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui" }}>
        <header
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid #eee",
            display: "flex",
            gap: 12,
            alignItems: "center",
          }}
        >
          <strong>Anchor</strong>
          <a href="/welcome">Run check</a>
          <a href="/accounts">Accounts</a>
          <a href="/check-in">Check-in</a>
          <a href="/privacy">Privacy</a>
        </header>

        <div style={{ padding: 16 }}>{children}</div>
      </body>
    </html>
  );
}