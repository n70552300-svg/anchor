export const metadata = {
  title: "Anchor",
  description: "Your oldest accounts are your weakest security link.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
