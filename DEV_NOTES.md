# Dev Notes

## Current structure
- `app/` routes use Next.js App Router.
- Sample data lives in `app/_data/sampleAccounts.ts`.
- Account actions:
  - Open website (uses `openUrl`)
  - Status actions (uses browser localStorage)

## Next technical milestone
- Replace sample accounts with discovered accounts from email signals.
- Keep access minimal and transparent (read-only).

## Known future upgrades
- Replace localStorage status with a user account store (after auth is added).
- Add connectors only when the user explicitly opts in.