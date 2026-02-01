export default function ScanningPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Scanning</h1>
      <p>Running security check…</p>

      <ul>
        <li>Checking account creation signals</li>
        <li>Reviewing password reset activity</li>
        <li>Correlating known breach data</li>
        <li>Mapping potential recovery paths</li>
      </ul>

      <p>
        <a href="/results">View results →</a>
      </p>
    </main>
  );
}