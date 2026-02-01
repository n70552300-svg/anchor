type Props = {
  params: { service: string };
};

export default function AccountDetailPage({ params }: Props) {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Account: {params.service}</h1>

      <h2>Why Anchor flagged this</h2>
      <p>
        This account shows signals that make it more likely to be used in
        password recovery flows. Securing or closing it reduces that risk.
      </p>

      <h2>Actions</h2>
      <ul>
        <li>Go to account (placeholder)</li>
        <li>Mark as secured (placeholder)</li>
        <li>Mark as closed (placeholder)</li>
        <li>Remind me later (placeholder)</li>
      </ul>

      <p>
        <a href="/accounts">← Back to accounts</a>
      </p>
    </main>
  );
}