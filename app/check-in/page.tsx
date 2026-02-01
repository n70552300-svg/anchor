export default function CheckInPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Your weekly Anchor check-in</h1>

      <p>No new security risks detected this week.</p>

      <h2>This week at a glance</h2>
      <ul>
        <li>0 new high-attention accounts</li>
        <li>0 risk escalations</li>
        <li>Accounts remain monitored</li>
      </ul>

      <p>
        Anchor will notify you if your exposure meaningfully changes. You stay in
        control.
      </p>

      <p>
        <a href="/accounts">Review accounts →</a>
      </p>
    </main>
  );
}