import { sampleAccounts } from "../../_data/sampleAccounts";

type Props = {
  params: { service: string };
};

export default function AccountDetailPage({ params }: Props) {
  const account = sampleAccounts.find(
    (a) => a.slug === params.service
  );

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <p>
        <a href="/accounts">← Back to accounts</a>
      </p>

      {!account ? (
        <>
          <h1>Account not found</h1>
          <p>No sample account matches: {params.service}</p>
        </>
      ) : (
        <>
          <h1>{account.name}</h1>

          <h2>Status</h2>
          <p>
            {account.attention === "high"
              ? "Needs attention"
              : "Monitor"}
          </p>

          <h2>Why Anchor flagged this</h2>
          <p>{account.why}</p>

          <h2>Signals</h2>
          <ul>
            {account.signals.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h2>Recommended next step</h2>
          <p>{account.recommendedNextStep}</p>

          <h2>Actions</h2>
          <ul>
            <li>Go to account (placeholder)</li>
            <li>Mark as secured (placeholder)</li>
            <li>Mark as closed (placeholder)</li>
            <li>Remind me later (placeholder)</li>
          </ul>
        </>
      )}
    </main>
  );
}