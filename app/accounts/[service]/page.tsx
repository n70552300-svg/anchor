import { sampleAccounts } from "../../_data/sampleAccounts";

type Props = {
  params: { service: string };
};

export default function AccountDetailPage({ params }: Props) {
  const account = sampleAccounts.find(
    (a) => a.slug === params.service
  );

  if (!account) {
    return <p>Account not found.</p>;
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>{account.name}</h1>

      <p>{account.why}</p>

      <h2>Signals</h2>
      <ul>
        {account.signals.map((signal) => (
          <li key={signal}>{signal}</li>
        ))}
      </ul>

      <p>
        <strong>Recommended next step:</strong>{" "}
        {account.recommendedNextStep}
      </p>
    </main>
  );
}
