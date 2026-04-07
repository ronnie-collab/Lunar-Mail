# Lunar Mail
### AI-Powered Email Management Portal · Lunar Rails

**Owner:** Ronnie David (ronnie@lunarrails.io)
**Version:** 1.0 — Phase 1 Prototype
**Status:** Review Build — IT Testing
**Repo:** https://github.com/Lunar-Rails/lunar-mail
**Live URL:** https://lunar-mail.netlify.app *(pending deployment)*

---

## Overview

Lunar Mail is Lunar Rails' internal email management portal, built as part of the **EDRA (Email Draft Reply Assistant)** project. It provides a branded, role-based interface for reviewing and approving AI-generated email drafts across five mailboxes spanning three portfolio companies.

All AI-generated drafts are held under a **Zero-Send Policy** — no email leaves the system without explicit human approval from an authorised reviewer.

---

## Companies & Mailboxes

| Phase | Mailbox | Company | Status |
|-------|---------|---------|--------|
| 1 | clientservice@perpolis.ca | Perpolis OTC | ✅ Live |
| 2 | compliance@perpolis.ca | Perpolis OTC | 🔜 Phase 2 |
| 3 | clientservice@40acres.pro | 40 Acres | 🔜 Phase 3 |
| 3b | compliance@40acres.pro | 40 Acres | 🔜 Phase 3b |
| 4 | clientservices@paidlyinteractive.tech | Paidly Interactive | 🔜 Phase 4 |

---

## File Structure

```
lunar-mail/
├── index.html          Login page (Google SSO entry point)
├── dashboard.html      Main dashboard — stats, alerts, recent emails
├── inbox.html          Split-pane inbox — email list + review pane
├── email-review.html   Full-screen single email review + AI draft
├── compliance.html     Compliance queue — escalation management
├── admin.html          Admin panel — users, access, mailbox config, audit log
├── netlify.toml        Netlify deployment & security headers config
├── README.md           This file
├── css/
│   └── main.css        Lunar Rails design system + all component styles
└── js/
    └── app.js          Shared demo data, users, emails, navigation helpers
```

---

## Pages

### `/index.html` — Login
Entry point. Simulates Google SSO (Phase 1 prototype — links directly to dashboard). Access restricted to `@lunarrails.io` accounts and authorised company contacts.

### `/dashboard.html` — Dashboard
Overview of email activity across all active mailboxes:
- Key metrics (emails today, pending review, compliance alerts, approved)
- Active compliance alerts with escalation status
- Recent email list
- Mailbox health table (all 5 mailboxes, phase status)
- AI performance metrics
- Team online status

### `/inbox.html` — Inbox
Split-pane view:
- Left: email list with company filter, category chips, search
- Right: email detail + AI draft panel with approve / edit / flag / archive actions
- Supports URL param: `?mailbox=cs-perpolis` to filter by mailbox

### `/email-review.html` — Email Review
Full-screen focused review page for a single email:
- Side-by-side original email + AI draft
- Confidence score ring (Claude API)
- Inline draft editing with toolbar
- Approve & Send / Edit / Flag / Archive / Regenerate actions
- Internal notes panel
- Escalation banner for compliance emails
- Keyboard shortcuts: `⌘↵` Approve, `⌘E` Edit, `⌘F` Flag, `⌘/` Notes
- Supports URL param: `?id=em-001`

### `/compliance.html` — Compliance Queue
Dedicated view for compliance-sensitive emails:
- Active escalation cards with timer + chain (primary → backup)
- 24h reminder / 48h auto-escalate logic display
- Resolved items history
- Policy reference box
- Compliance team contact panel

### `/admin.html` — Admin Panel
Four-tab management interface:
1. **Users & Access** — Full 13-user × 5-mailbox permission matrix
2. **Gmail SSO Setup** — Integration guide for Notion, Front, Slack, and the Portal
3. **Mailbox Config** — Status, phase, and settings for all 5 mailboxes
4. **Audit Log** — Timeline of recent access and approval events

---

## User Roles & Access

| Role | Users | Access |
|------|-------|--------|
| Super Admin | Ronnie David | Full access to all mailboxes and admin |
| Admin | Elton, Chris | Full access to all mailboxes |
| Manager | Mark Antidormi, Sofia | Mailbox-specific management + compliance |
| Analyst | Felipe, Lisa, Ekaterina, Kevin, Jyoti, Ashwini, Shilpa, Sherin | Read + draft review for assigned mailboxes |

All users authenticate via `@lunarrails.io` Gmail accounts. External manager Mark Antidormi authenticates via `mark.antidormi@perpolis.ca`.

---

## Escalation Policy

**Compliance emails follow this chain:**

1. **Immediate** — Tagged on Lunar Mail + Slack DM to primary compliance contact
2. **+24h (weekday)** — Auto-reminder to primary if no response
3. **+48h (weekday)** — Auto-escalate to backup list via Slack bot

Weekends excluded from timer (timer pauses Friday COB, resumes Monday 9am).

**Perpolis OTC chain:** Elton → Mark Antidormi → Jyoti / Ashwini / Shilpa / Sherin
**40 Acres chain:** Elton → Sofia → Admin tier (Ron, Elton, Chris)

---

## Design System

Built on the **Lunar Rails Design System** (dark-only, space-age aesthetic):

| Token | Value |
|-------|-------|
| Background | `#0A0A0A` |
| Surface | `#111111` |
| Elevated | `#181818` |
| Brand Purple | `#7F21FF` |
| Brand Pink | `#FF569D` |
| Brand Yellow | `#FFBA0D` |
| Gradient | `linear-gradient(90deg, #7F21FF → #FF569D → #FFBA0D)` |
| Font | Satoshi (Fontshare CDN), fallback Montserrat → Arial |

---

## Deployment

### Netlify (current)

This is a **static site** — no build step required.

1. Connect the `Lunar-Rails/lunar-mail` GitHub repository to Netlify
2. Set **Publish directory** to `.` (root)
3. No build command needed
4. Security headers and redirects are configured in `netlify.toml`

Netlify auto-deploys on every push to `main`.

### Custom Domain

To assign `lunar-mail.lunarrails.io` or a custom subdomain:
1. In Netlify → Site Settings → Domain Management
2. Add custom domain
3. Update DNS at your registrar with the CNAME Netlify provides

---

## Phase 2 Roadmap

| Phase | Feature |
|-------|---------|
| Next.js migration | Convert static HTML to Next.js app (same design, same routes) |
| Real Google OAuth | Replace simulated SSO with actual OAuth 2.0 |
| Make.com integration | Connect `/api/approve` and `/api/flag` endpoints to Make.com webhooks |
| Front integration | Embed or replace Front as the sending layer |
| Notification webhooks | Real-time Slack alerts on approval / escalation events |
| Notion sync | Write audit log entries directly to Notion database |

---

## IT Setup Checklist

For technical review and production go-live, the following credentials are required:

- [ ] Front API token (for Phase 1 sending layer)
- [ ] Front webhook URL (inbound email trigger)
- [ ] Slack bot token (for escalation notifications)
- [ ] Mark Antidormi's Slack User ID
- [ ] Anthropic API key (Claude AI draft generation)
- [ ] Slack channel names for Perpolis OTC and 40 Acres
- [ ] 40 Acres compliance backup contacts (Phase 3b)

**Contact:** ronnie@lunarrails.io for credentials and access.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vanilla HTML5 + CSS3 + JavaScript (ES6+) |
| Fonts | Satoshi via Fontshare CDN |
| Hosting | Netlify (static) |
| AI | Claude (Anthropic API) via Make.com |
| Automation | Make.com (one scenario per mailbox) |
| Notifications | Slack (bot + DM) |
| Review workflow | Lunar Mail (this portal) |
| Data store | Notion (email log + audit trail) |
| Sending | Front (Phase 1) |

---

*Lunar Mail v1.0 — Phase 1 Prototype · Lunar Rails · Owner: Ronnie David*
