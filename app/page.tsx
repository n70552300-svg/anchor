export default function HomePage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Anchor</h1>
      <p>Identify and reduce hidden account risk.</p>

      <h2>Security check</h2>
      <p>
        Anchor helps you find older accounts that may increase password recovery
        risk if left unsecured.
      </p>

      <p>
        <a href="/welcome">Start security check →</a>
      </p>

      <h2>Weekly check-in</h2>
      <p>A calm weekly summary of what changed — and what needs attention.</p>
      <p>
        <a href="/check-in">View weekly check-in →</a>
      </p>
    </main>
  );
}