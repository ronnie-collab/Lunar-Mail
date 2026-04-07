/* ============================================================
   LUNAR MAIL — Shared App JS
   Demo data, navigation utilities, role switcher
   Owner: Ronnie David · Lunar Rails
   ============================================================ */

// ── Demo Users ──────────────────────────────────────────────
const USERS = {
  ron:      { name: 'Ronnie David',    email: 'ronnie@lunarrails.io',         role: 'Super Admin',  initials: 'RD', dept: 'Lunar Rails · Owner',           color: '#FF569D' },
  elton:    { name: 'Elton',           email: 'elton@lunarrails.io',          role: 'Admin',        initials: 'EL', dept: 'Lunar Rails · Management',       color: '#a855f7' },
  chris:    { name: 'Chris',           email: 'chris@lunarrails.io',          role: 'Admin',        initials: 'CH', dept: 'Lunar Rails · Management',       color: '#a855f7' },
  mark:     { name: 'Mark Antidormi', email: 'mark.antidormi@perpolis.ca',   role: 'Manager',      initials: 'MA', dept: 'Perpolis · Compliance Lead',     color: '#3b82f6' },
  sofia:    { name: 'Sofia',           email: 'sofia@lunarrails.io',          role: 'Manager',      initials: 'SF', dept: '40 Acres · Compliance',          color: '#3b82f6' },
  felipe:   { name: 'Felipe',          email: 'felipe@lunarrails.io',         role: 'Analyst',      initials: 'FP', dept: 'Lunar Rails · Operations',       color: '#22c55e' },
  lisa:     { name: 'Lisa',            email: 'lisa@lunarrails.io',           role: 'Analyst',      initials: 'LI', dept: 'Lunar Rails · Operations',       color: '#22c55e' },
  ekaterina:{ name: 'Ekaterina',       email: 'ekaterina@lunarrails.io',      role: 'Analyst',      initials: 'EK', dept: 'Lunar Rails · Operations',       color: '#22c55e' },
  kevin:    { name: 'Kevin',           email: 'kevin@lunarrails.io',          role: 'Analyst',      initials: 'KV', dept: 'Lunar Rails · Operations',       color: '#22c55e' },
  jyoti:    { name: 'Jyoti',           email: 'jyoti@lunarrails.io',          role: 'Analyst',      initials: 'JY', dept: 'Lunar Rails · Compliance Backup', color: '#6ee7b7' },
  ashwini:  { name: 'Ashwini',         email: 'ashwini@lunarrails.io',        role: 'Analyst',      initials: 'AS', dept: 'Lunar Rails · Compliance Backup', color: '#6ee7b7' },
  shilpa:   { name: 'Shilpa',          email: 'shilpa@lunarrails.io',         role: 'Analyst',      initials: 'SH', dept: 'Lunar Rails · Compliance Backup', color: '#6ee7b7' },
  sherin:   { name: 'Sherin',          email: 'sherin@lunarrails.io',         role: 'Analyst',      initials: 'SR', dept: 'Lunar Rails · Compliance Backup', color: '#6ee7b7' },
};

// ── Mailboxes ────────────────────────────────────────────────
const MAILBOXES = [
  { id: 'cs-perpolis',   email: 'clientservice@perpolis.ca',           company: 'Perpolis OTC',        color: '#7F21FF', phase: 1 },
  { id: 'co-perpolis',   email: 'compliance@perpolis.ca',              company: 'Perpolis OTC',        color: '#EF4444', phase: 2 },
  { id: 'cs-40acres',    email: 'clientservice@40acres.pro',           company: '40 Acres',            color: '#22C55E', phase: 3 },
  { id: 'co-40acres',    email: 'compliance@40acres.pro',              company: '40 Acres',            color: '#10b981', phase: 3 },
  { id: 'cs-paidly',     email: 'clientservices@paidlyinteractive.tech', company: 'Paidly Interactive', color: '#FFBA0D', phase: 4 },
];

// ── Sample Emails ────────────────────────────────────────────
const EMAILS = [
  {
    id: 'em-001',
    mailbox: 'cs-perpolis',
    company: 'Perpolis OTC',
    from_name: 'David Chen',
    from_email: 'david.chen@quantumcap.ca',
    subject: 'OTC Bitcoin Purchase — 50 BTC Inquiry',
    preview: 'Hi, I represent Quantum Capital and we are looking to purchase 50 BTC via OTC...',
    body: `Hi,\n\nI represent Quantum Capital Partners and we are looking to purchase approximately 50 BTC via OTC desk in the next 48 hours.\n\nCould you please confirm:\n1. Your current OTC spread on this volume\n2. Settlement timeframe (we require T+1)\n3. KYC requirements for a first transaction\n4. Preferred payment method (wire transfer)\n\nWe have traded with several desks and are looking for a long-term relationship if pricing is competitive.\n\nLooking forward to your response.\n\nBest regards,\nDavid Chen\nHead of Digital Assets\nQuantum Capital Partners`,
    category: 'prospect_inquiry',
    priority: 'high',
    status: 'pending',
    time: '09:14',
    timeAgo: '2h ago',
    unread: true,
    avatarColor: '#7F21FF',
    aiDraft: `Dear David,\n\nThank you for reaching out to Perpolis OTC. We'd be delighted to assist Quantum Capital Partners with a 50 BTC purchase.\n\nTo address your questions:\n\n1. **Spread**: For a 50 BTC position, our spread is typically 0.3–0.5% above spot, depending on settlement timing and liquidity at the time of execution.\n\n2. **Settlement**: We support T+1 settlement via wire transfer. Once KYC is completed, transactions typically settle within 24 business hours.\n\n3. **KYC Requirements**: For a first transaction, we require: corporate registration documents, beneficial ownership declaration, and proof of source of funds. This process takes 24–48 hours.\n\n4. **Payment**: We accept USD or CAD wire transfers from verified corporate accounts.\n\nI'd love to schedule a brief call to discuss your needs in detail. Are you available tomorrow between 10am–12pm EST?\n\nBest regards,\nPerpolis OTC Client Services`,
    aiConfidence: '94%',
  },
  {
    id: 'em-002',
    mailbox: 'cs-perpolis',
    company: 'Perpolis OTC',
    from_name: 'Sarah Whitmore',
    from_email: 'swhitmore@brightfund.io',
    subject: 'KYC Documentation Follow-Up — Account #P2891',
    preview: 'Following up on our KYC submission from last week. We have now uploaded all required...',
    body: `Hello,\n\nI'm following up on our KYC submission from last Tuesday (Account #P2891 - Bright Fund Investments).\n\nWe have now uploaded all required documents to the portal:\n- Certificate of Incorporation\n- Director ID verification (all 3 directors)\n- Proof of source of funds (audited financials FY2025)\n- Bank reference letter\n\nCould you please confirm receipt and advise on the expected approval timeline? We have a time-sensitive trade we would like to execute once approved.\n\nThank you,\nSarah Whitmore\nBright Fund Investments`,
    category: 'kyc_followup',
    priority: 'medium',
    status: 'draft',
    time: '08:32',
    timeAgo: '3h ago',
    unread: true,
    avatarColor: '#3b82f6',
    aiDraft: `Dear Sarah,\n\nThank you for following up on Account #P2891 — Bright Fund Investments.\n\nWe can confirm receipt of all documents uploaded to the portal. Your KYC submission is now under review by our compliance team.\n\nExpected timeline: 24–48 business hours from the time of complete submission. Your submission appears complete as of this morning.\n\nWe will notify you via email once your account is approved and ready for trading. If there are any outstanding queries, our compliance team will reach out directly.\n\nWe understand you have a time-sensitive trade and will prioritise your review accordingly.\n\nBest regards,\nPerpolis OTC Client Services`,
    aiConfidence: '98%',
  },
  {
    id: 'em-003',
    mailbox: 'co-perpolis',
    company: 'Perpolis OTC',
    from_name: 'Reginald Thompson',
    from_email: 'r.thompson@fincompliance.org',
    subject: 'AML Query — Large Transaction Monitoring (>CAD $500K)',
    preview: 'This communication relates to a regulatory inquiry regarding transaction #TXN-2024-8821...',
    body: `To Whom It May Concern,\n\nThis communication relates to a regulatory inquiry under FINTRAC reporting requirements.\n\nWe are requesting supporting documentation for Transaction #TXN-2024-8821 (CAD $520,000 equivalent in BTC, executed March 14, 2026).\n\nSpecifically, we require:\n1. Client KYC file (identity verification)\n2. Source of funds declaration\n3. Transaction rationale/purpose documentation\n4. Internal AML screening records\n\nPlease respond within 5 business days. Failure to respond may result in escalation to regulatory authorities.\n\nReginald Thompson\nSenior Compliance Officer\nFinCompliance Regulatory Services`,
    category: 'compliance_query',
    priority: 'high',
    status: 'escalated',
    time: 'Yesterday',
    timeAgo: '26h ago',
    unread: false,
    avatarColor: '#EF4444',
    aiDraft: `[COMPLIANCE ESCALATION — AI Draft Withheld]\n\nThis email has been flagged as a regulatory/AML query and has been escalated to Mark Antidormi (Compliance Lead) for direct response.\n\nDo not use the AI-generated draft for regulatory correspondence. This requires a manually composed, legally reviewed response.`,
    aiConfidence: '—',
    flagged: true,
    escalatedTo: 'Mark Antidormi',
    escalatedHours: 26,
  },
  {
    id: 'em-004',
    mailbox: 'cs-40acres',
    company: '40 Acres',
    from_name: 'James Beaumont',
    from_email: 'jb@greenpath.ventures',
    subject: 'Investment Interest — 40 Acres Growth Fund',
    preview: 'I came across the 40 Acres Growth Fund through a colleague and would like to learn more...',
    body: `Hello,\n\nI came across the 40 Acres Growth Fund through a colleague and I'm interested in learning more about participation opportunities.\n\nI'm a private investor with a focus on sustainable agriculture and alternative assets. Could you share:\n- Minimum investment threshold\n- Fund structure and lock-up period\n- Current performance metrics\n- Next subscription window\n\nI'd also be interested in scheduling an introductory call with your team.\n\nThank you,\nJames Beaumont\nGreenpath Ventures`,
    category: 'new_inquiry',
    priority: 'medium',
    status: 'pending',
    time: '10:05',
    timeAgo: '1h ago',
    unread: true,
    avatarColor: '#22C55E',
    aiDraft: `Dear James,\n\nThank you for your interest in the 40 Acres Growth Fund — it's great to hear you've been referred by a colleague.\n\nHere's a brief overview to get started:\n\n- **Minimum Investment**: [To be confirmed by team]\n- **Fund Structure**: [To be confirmed by team]\n- **Performance**: We'd be happy to share our latest investor report under NDA\n- **Next Subscription Window**: [To be confirmed by team]\n\nI'd love to arrange an introductory call at your convenience. Please reply with your availability and we'll get something scheduled.\n\nBest regards,\n40 Acres Client Services`,
    aiConfidence: '82%',
    note: 'Some fields need manual completion before sending.',
  },
  {
    id: 'em-005',
    mailbox: 'cs-perpolis',
    company: 'Perpolis OTC',
    from_name: 'promo@cryptonews-daily.io',
    from_email: 'promo@cryptonews-daily.io',
    subject: '🚀 EXCLUSIVE: 10x Your Portfolio This Month!',
    preview: 'Limited time offer for crypto traders! Click here to claim your exclusive...',
    body: `This is a promotional email...`,
    category: 'spam',
    priority: 'low',
    status: 'archived',
    time: '07:44',
    timeAgo: '4h ago',
    unread: false,
    avatarColor: '#6b7280',
    aiDraft: '[Auto-archived. No reply needed.]',
    aiConfidence: '99%',
  },
  {
    id: 'em-006',
    mailbox: 'cs-perpolis',
    company: 'Perpolis OTC',
    from_name: 'Amanda Park',
    from_email: 'apark@northstarlp.com',
    subject: 'Onboarding Checklist — North Star LP',
    preview: 'Hi, we have received our approved KYC and would like to proceed with the onboarding...',
    body: `Hi Perpolis Team,\n\nWe received notification that our KYC has been approved (Account #P3102 - North Star LP).\n\nWe'd like to proceed with the onboarding steps. Could you:\n1. Confirm the funding account details for wire transfer\n2. Send us the master trading agreement for review\n3. Confirm our assigned account manager\n\nWe're looking to execute our first trade next week.\n\nThanks,\nAmanda Park\nCFO, North Star LP`,
    category: 'onboarding',
    priority: 'high',
    status: 'pending',
    time: 'Yesterday',
    timeAgo: 'Yesterday',
    unread: false,
    avatarColor: '#14b8a6',
    aiDraft: `Dear Amanda,\n\nCongratulations on your KYC approval — welcome to Perpolis OTC!\n\nHere are your onboarding next steps:\n\n1. **Funding Instructions**: Please find our wire transfer details attached. Funds must be received from the account verified during KYC.\n\n2. **Master Trading Agreement**: I will send the MTA to this email address within 24 hours for your legal team's review. Typical turnaround for signing is 2–3 business days.\n\n3. **Account Manager**: Your dedicated account manager is [Assigned Account Manager Name], who will introduce themselves once the MTA is executed.\n\nWe look forward to welcoming North Star LP as a trading partner.\n\nBest regards,\nPerpolis OTC Client Services`,
    aiConfidence: '91%',
  },
];

// ── Stats ────────────────────────────────────────────────────
const STATS = {
  today:       { label: 'Emails Today',       value: 24, sub: '+6 since yesterday',     icon: '📧' },
  pending:     { label: 'Pending Review',      value: 8,  sub: '3 high priority',         icon: '⏳' },
  compliance:  { label: 'Compliance Alerts',   value: 2,  sub: '1 escalated >24h',        icon: '🔒' },
  approved:    { label: 'Approved Today',       value: 14, sub: 'Avg 4 min review time',  icon: '✅' },
};

// ── Current Demo User (default: Ron) ─────────────────────────
let currentUser = 'ron';

function getCurrentUser() { return USERS[currentUser]; }

// ── Set Active Nav ────────────────────────────────────────────
function setActiveNav(page) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const target = document.querySelector(`[data-page="${page}"]`);
  if (target) target.classList.add('active');
}

// ── Render User in Sidebar ────────────────────────────────────
function renderUser() {
  const u = getCurrentUser();
  const nameEl = document.getElementById('sidebar-user-name');
  const roleEl = document.getElementById('sidebar-user-role');
  const avatarEl = document.getElementById('sidebar-avatar');
  if (nameEl) nameEl.textContent = u.name;
  if (roleEl) roleEl.textContent = u.role;
  if (avatarEl) {
    avatarEl.textContent = u.initials;
    avatarEl.style.background = `linear-gradient(135deg, ${u.color}, #7F21FF)`;
  }
}

// ── Role Switcher ─────────────────────────────────────────────
function openRoleSwitcher() {
  const roles = [
    { key: 'ron',    label: 'Ron (Super Admin)' },
    { key: 'elton',  label: 'Elton (Admin)' },
    { key: 'mark',   label: 'Mark (Manager - Compliance)' },
    { key: 'felipe', label: 'Felipe (Analyst - Ops)' },
  ];

  const existing = document.getElementById('role-modal');
  if (existing) { existing.remove(); return; }

  const modal = document.createElement('div');
  modal.id = 'role-modal';
  modal.style.cssText = `
    position:fixed; bottom:80px; left:20px; width:220px;
    background:#181818; border:1px solid rgba(127,33,255,0.4);
    border-radius:12px; z-index:1000; padding:8px;
    box-shadow: 0 0 30px rgba(127,33,255,0.2);
    animation: fadeUp 0.2s ease;
  `;

  modal.innerHTML = `
    <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5C5C72;padding:6px 8px 10px;">View As</div>
    ${roles.map(r => `
      <div onclick="switchRole('${r.key}')" style="padding:9px 10px;border-radius:8px;cursor:pointer;font-size:13px;color:#A0A0B0;transition:all 0.15s ease;"
           onmouseover="this.style.background='rgba(127,33,255,0.1)';this.style.color='#fff'"
           onmouseout="this.style.background='transparent';this.style.color='#A0A0B0'">
        ${r.label}
      </div>
    `).join('')}
  `;

  document.body.appendChild(modal);
  setTimeout(() => document.addEventListener('click', () => modal.remove(), { once: true }), 100);
}

function switchRole(key) {
  currentUser = key;
  renderUser();
  document.getElementById('role-modal')?.remove();
  // Update demo banner
  const banner = document.getElementById('demo-user-label');
  if (banner) banner.textContent = `Viewing as: ${USERS[key].name} (${USERS[key].role})`;
}

// ── Navigate ──────────────────────────────────────────────────
function navigate(page) {
  const pages = {
    'dashboard':    'dashboard.html',
    'inbox':        'inbox.html',
    'compliance':   'compliance.html',
    'admin':        'admin.html',
    'review':       'email-review.html',
    'login':        'index.html',
  };
  if (pages[page]) window.location.href = pages[page];
}

// ── Category Label ────────────────────────────────────────────
function categoryLabel(cat) {
  const map = {
    prospect_inquiry: 'Prospect',
    kyc_followup:     'KYC',
    compliance_query: 'Compliance',
    trade_execution:  'Trade',
    onboarding:       'Onboarding',
    spam:             'Spam',
    new_inquiry:      'New Inquiry',
    lp_communication: 'LP Comms',
  };
  return map[cat] || cat;
}

function categoryBadgeClass(cat) {
  const map = {
    prospect_inquiry: 'badge-prospect',
    kyc_followup:     'badge-kyc',
    compliance_query: 'badge-compliance',
    trade_execution:  'badge-trade',
    onboarding:       'badge-onboarding',
    spam:             'badge-spam',
    new_inquiry:      'badge-inquiry',
    lp_communication: 'badge-lp',
  };
  return map[cat] || 'badge-prospect';
}

function statusBadgeClass(status) {
  const map = {
    pending:   'badge-pending',
    draft:     'badge-draft',
    approved:  'badge-approved',
    escalated: 'badge-escalated',
    archived:  'badge-archived',
  };
  return map[status] || 'badge-pending';
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderUser();

  // Active page detection
  const page = window.location.pathname.split('/').pop().replace('.html','') || 'dashboard';
  setActiveNav(page);

  // Animate items in
  document.querySelectorAll('.animate-in').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${i * 50}ms`;
    setTimeout(() => { el.style.opacity = ''; }, 10);
  });
});
