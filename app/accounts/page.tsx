export default function AccountsPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Accounts</h1>

      <h2>Needs attention</h2>
      <ul>
        <li>
          <a href="/accounts/example-service">
            Example Service
          </a>{" "}
          — old, inactive, breach exposure
        </li>
      </ul>

      <h2>Monitor</h2>
      <ul>
        <li>Another Service — no immediate risk detected</li>
      </ul>

      <p>
        <a href="/done">Finish for now →</a>
      </p>
    </main>
  );
}