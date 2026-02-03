
# Anchor

Anchor is a privacy-first account risk hub.

It helps you find older or forgotten accounts (especially those tied to an email), classify what needs attention, and take safe next steps — without panic, without selling data, and without acting silently.

## Principles
- Privacy-first
- Read-only by default
- Transparent: “why” is always shown
- User-controlled power: the operator decides how much access Anchor has
- No selling or sharing user data

## What exists right now (MVP)
- Onboarding flow: Welcome → Permissions → Scanning → Results
- Accounts list: “Needs attention” vs “Monitor”
- Account detail page:
  - Open website
  - Mark status (secured / closed / still use / ignore)
  - Guided security actions (reset password / security settings / close account)

## Local setup (when running locally)
1) Install dependencies:
   - `npm install`
2) Start dev server:
   - `npm run dev`
3) Open:
   - http://localhost:3000

## Roadmap (next)
- Connect Google (read-only) to detect services from email signals
- Replace sample accounts with discovered accounts
- Weekly check-in and notifications
- Expand “hub” connectors over time (user-approved)