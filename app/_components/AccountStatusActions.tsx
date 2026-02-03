"use client";

import { useEffect, useState } from "react";

type Status = "none" | "secured" | "closed" | "in_use" | "ignore";

function storageKey(slug: string) {
  return `anchor-status-${slug}`;
}

export default function AccountStatusActions({ slug }: { slug: string }) {
  const [status, setStatus] = useState<Status>("none");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey(slug)) as Status | null;
    if (saved) setStatus(saved);
  }, [slug]);

  function updateStatus(next: Status) {
    setStatus(next);
    localStorage.setItem(storageKey(slug), next);
  }

  return (
    <section>
      <h2>Account status</h2>
      <p>Current: <strong>{status}</strong></p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => updateStatus("secured")}>Secured</button>
        <button onClick={() => updateStatus("closed")}>Closed</button>
        <button onClick={() => updateStatus("in_use")}>Still use</button>
        <button onClick={() => updateStatus("ignore")}>Ignore</button>
        <button onClick={() => updateStatus("none")}>Clear</button>
      </div>
    </section>
  );
}
