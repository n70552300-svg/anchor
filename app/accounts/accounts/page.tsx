import { sampleAccounts } from "../_data/sampleAccounts";

export default function AccountsPage() {
  const needsAttention = sampleAccounts.filter(
    (a) => a.attention === "high"
  );
  const monitor = sampleAccounts.filter(
    (a) => a.attention === "monitor"
  );

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Accounts</h1>

      <h2>Needs attention</h2>
      <ul>
        {needsAttention.map((a) => (
          <li key={a.slug}>
            <a href={`/accounts/${a.slug}`}>{a.name}</a> — {a.why}
          </li>
        ))}
      </ul>

      <h2>Monitor</h2>
      <ul>
        {monitor.map((a) => (
          <li key={a.slug}>
            <a href={`/accounts/${a.slug}`}>{a.name}</a> — {a.why}
          </li>
        ))}
      </ul>

      <p>
        <a href="/done">Finish for now →</a>
      </p>
    </main>
  );
}