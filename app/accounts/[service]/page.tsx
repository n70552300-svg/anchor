import { sampleAccounts } from "../../_data/sampleAccounts";
import AccountStatusActions from "../.._components/AccountStausActions";
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
      <AccountSatusActions slug={account.slug} />
<p>
  <a href={account.openUrl} target="_blank" rel="noreferrer">
    Open website →
  </a>
</p>
      <p>{account.why}</p>

      <h2>Signals</h2>
      <ul>
        {account.signals.map((signal) => (
          <li key={signal}>{signal}</li>
        ))}
      </ul>

      <p>
<h2>Security actions</h2>
<ul>
  {account.securityLinks?.resetPassword && (
    <li>
      <a
        href={account.securityLinks.resetPassword}
        target="_blank"
        rel="noreferrer"
      >
        Reset password →
      </a>
    </li>
  )}

  {account.securityLinks?.securitySettings && (
    <li>
      <a
        href={account.securityLinks.securitySettings}
        target="_blank"
        rel="noreferrer"
      >
        Security settings →
      </a>
    </li>
  )}

  {account.securityLinks?.closeAccount && (
    <li>
      <a
        href={account.securityLinks.closeAccount}
        target="_blank"
        rel="noreferrer"
      >
        Close account →
      </a>
    </li>
  )}
</ul>
        <strong>Recommended next step:</strong>{" "}
        {account.recommendedNextStep}
      </p>
    </main>
  );
}
