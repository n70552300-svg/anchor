export default function PermissionsPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Permissions</h1>
      <p>
        Anchor requests read-only access to security-related signals such as
        account creation and password reset emails.
      </p>

      <p>
        <a href="/scanning">Continue →</a>
      </p>

      <p>
        <a href="/privacy">Read privacy overview</a>
      </p>
    </main>
  );
}