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
  const u = USERS[key];
  // Update demo banner
  const banner = document.getElementById('demo-user-label');
  if (banner) banner.textContent = `Viewing as: ${u.name} (${u.role})`;
  // Apply role-based restrictions to current page
  applyRoleToPage();
}

// ── Role-based page restrictions ─────────────────
function applyRoleToPage() {
  const u = getCurrentUser();
  const isAdmin   = u.role === 'Super Admin' || u.role === 'Admin';
  const isAnalyst = u.role === 'Analyst';

  // Show/hide Admin Panel nav item
  const adminNav = document.querySelector('[data-page="admin"]');
  if (adminNav) adminNav.style.display = isAdmin ? '' : 'none';

  // Update comment avatar to match current user
  const commentAvatar = document.getElementById('comment-avatar');
  if (commentAvatar) {
    commentAvatar.textContent = u.initials;
    commentAvatar.style.background = `linear-gradient(135deg, ${u.color}, #7F21FF)`;
  }

  // For analysts: disable approve/send buttons and show read-only notice
  if (isAnalyst) {
    document.querySelectorAll('[id^="approve-btn-"]').forEach(btn => {
      btn.disabled = true;
      btn.title = 'Read only — contact Manager or Admin to approve';
      btn.style.opacity = '0.4';
    });
    // Add read-only notice to inbox if not already there
    if (!document.getElementById('role-readonly-notice')) {
      const notice = document.createElement('div');
      notice.id = 'role-readonly-notice';
      notice.style.cssText = 'margin:8px 14px;padding:8px 12px;background:rgba(255,186,13,0.07);border:1px solid rgba(255,186,13,0.2);border-radius:8px;font-size:12px;color:#FFBA0D;display:flex;gap:8px;align-items:center;';
      notice.innerHTML = `<span>👁</span><span>Viewing as <strong>${u.name}</strong> — Analyst role. Read-only access. Drafts visible but Approve &amp; Send is disabled.</span>`;
      const filterBar = document.querySelector('.filter-bar');
      if (filterBar) filterBar.after(notice);
    }
  } else {
    // Remove read-only notice if present
    document.getElementById('role-readonly-notice')?.remove();
    // Re-enable approve buttons
    document.querySelectorAll('[id^="approve-btn-"]').forEach(btn => {
      btn.disabled = false;
      btn.title = '';
      btn.style.opacity = '';
    });
  }
}

// ── Canned Response Templates ─────────────────────────────────
// Sourced from EDRA Template Library (Notion). Used to pre-fill
// AI draft panel in inbox.html and email-review.html.
const TEMPLATES = [

  /* ── Perpolis OTC ───────────────────────────────────────── */
  {
    id: 'pp-001', company: 'Perpolis OTC', category: 'prospect_inquiry',
    name: 'Initial Inquiry — More Info Request',
    body: `Hi <Client First Name>,\n\nThank you for reaching out to Perpolis OTC.\n\nBefore we can move forward, we kindly ask that you provide a few additional details:\n\n- Volume or amount per trade?\n- Any specific trading pairs (BTC/CAD, ETH/USD, etc.)?\n- Are you trading as an individual or on behalf of a company?\n- Region/jurisdiction you are based in?\n\nOnce we receive this information, we'll be able to guide you through the next steps.\n\nWe look forward to your response.\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-002', company: 'Perpolis OTC', category: 'prospect_inquiry',
    name: 'Services Overview — What Trading Services Do You Offer?',
    body: `Hi <Client First Name>,\n\nThank you for your interest in Perpolis OTC.\n\nWe are a regulated OTC cryptocurrency trading desk providing the following services:\n\n- **OTC Trading**: Direct over-the-counter trades for BTC, ETH, USDT, and USDC\n- **Settlement**: T+1 settlement via bank wire (CAD, USD, EUR)\n- **Minimum Trade Size**: $50,000 CAD equivalent per transaction\n- **Jurisdiction**: We serve clients in Canada and select international markets (excluding the USA)\n\nTo proceed with an application, please provide:\n- Your region of operations\n- Estimated monthly trading volume\n- Asset preferences\n\nWe look forward to hearing from you.\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-003', company: 'Perpolis OTC', category: 'prospect_inquiry',
    name: 'Introducing Perpolis to a New Client',
    body: `Hello <First Name>,\n\nThank you for reaching out to us.\n\nPerpolis OTC is a regulated cryptocurrency trading desk offering institutional and high-net-worth clients access to OTC liquidity in Bitcoin, Ethereum, USDT, and USDC. We provide competitive pricing, T+1 settlement, and a fully compliant onboarding experience.\n\nTo determine if we can be of service to you, we'd love to learn a little more:\n\n- What is your company's primary business?\n- What region are you based in?\n- What volume and trading pairs are you interested in?\n\nOnce we have this information, we'll provide you with the next steps.\n\nBest regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-004', company: 'Perpolis OTC', category: 'onboarding',
    name: 'Onboarding — Client Registration Form and MSA',
    body: `Hi <Client First Name>,\n\nThank you for your interest in opening an account with Perpolis OTC.\n\nTo begin the onboarding process, please complete the following steps:\n\n1. **Client Registration Form** — Please fill out and return the attached registration form with your company and contact details.\n\n2. **Master Services Agreement (MSA)** — Please review, sign, and return the attached MSA. This agreement governs our trading relationship.\n\n3. **KYC Documentation** — Once the above are returned, our compliance team will reach out with the KYC requirements specific to your entity type.\n\nIf you have any questions about the documents, please don't hesitate to ask.\n\nWe look forward to welcoming you as a client.\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-005', company: 'Perpolis OTC', category: 'compliance_query',
    name: 'Onboarding — Additional Details Required by Compliance',
    body: `Hi <Client First Name>,\n\nThank you for submitting your onboarding documents.\n\nOur compliance team has reviewed your application and requires the following additional information before we can proceed:\n\n- [Insert specific requirement here]\n- [Insert specific requirement here]\n\nCould you please provide the above at your earliest convenience? Once received, we aim to complete the review within 2–3 business days.\n\nIf you have any questions, please don't hesitate to reach out.\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-006', company: 'Perpolis OTC', category: 'onboarding',
    name: 'Onboarding — Client Not Responding',
    body: `Hi <Client First Name>,\n\nWe noticed that we haven't heard back from you regarding your Perpolis OTC onboarding.\n\nIf you still wish to proceed, please reply to this email or complete the pending step at your earliest convenience.\n\nIf you need more time or have any questions, we're happy to help — just let us know.\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-007', company: 'Perpolis OTC', category: 'onboarding',
    name: 'Account Approved — Welcome Email',
    body: `Hi <Client First Name>,\n\nWe are pleased to inform you that your Perpolis OTC account has been approved and is now active.\n\nYou can log in to the trading platform using the credentials you created during registration.\n\nFor reference, here are your next steps:\n\n1. Log in to your account and verify your profile settings\n2. Add your wallet address(es) to the whitelist\n3. Initiate your first trade by contacting your dedicated account manager\n\nWelcome aboard — we look forward to building a successful trading relationship with you.\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-008', company: 'Perpolis OTC', category: 'onboarding',
    name: 'Account Approved — Wallet Whitelist Instructions',
    body: `Hi <Client First Name>,\n\nNow that your account is active, the next step is to whitelist your wallet address(es) for receiving funds.\n\n**How to whitelist a wallet:**\n\n1. Log in to the Perpolis platform\n2. Navigate to **Settings > Wallet Addresses**\n3. Click **Add New Address** and enter your wallet address\n4. Select the asset (BTC, ETH, USDT, USDC)\n5. Submit — our team will verify and approve the address within 1 business day\n\nOnce approved, you'll be ready to receive settlements directly to your wallet.\n\nIf you have any questions, don't hesitate to reach out.\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-009', company: 'Perpolis OTC', category: 'trade_execution',
    name: 'Agency Trading — Model Introduction',
    body: `Hi <Client First Name>,\n\nThank you for your inquiry about our Agency Trading model.\n\nUnder our agency model, Perpolis acts as your agent — sourcing the best available liquidity in the market on your behalf. Key features include:\n\n- **Best Execution**: We seek the best price across our liquidity network\n- **Full Transparency**: You receive a complete transaction report with all execution details\n- **Fee Structure**: A flat agency fee applies per transaction (shared in the MSA)\n- **Supported Assets**: BTC, ETH, USDT, USDC\n\nThis model is particularly well-suited for larger block trades where market impact is a concern.\n\nWould you like to schedule a call to discuss how this could work for your specific needs?\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-010', company: 'Perpolis OTC', category: 'compliance_query',
    name: 'Compliance — Source of Funds Request',
    body: `Hi <Client First Name>,\n\nAs part of our ongoing compliance obligations, we are required to verify the source of funds for your account.\n\nCould you please provide the following documentation at your earliest convenience:\n\n- **Source of Funds Declaration**: A brief written explanation of the origin of the funds being used for trading\n- **Supporting Documentation**: Bank statements, investment account statements, or other documentation confirming the source\n\nThis is a standard regulatory requirement and applies to all our clients. Your information is handled in strict confidence.\n\nIf you have any questions about this request, please don't hesitate to reach out.\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-011', company: 'Perpolis OTC', category: 'off_boarding',
    name: 'Off-boarding — Account Closure Confirmation',
    body: `Hi <Client First Name>,\n\nThank you for getting in touch.\n\nBefore we proceed with closing your account, please clarify:\n\n- Do you wish to **permanently close** your Perpolis OTC account, or would you prefer a **temporary suspension** of trading activity?\n- Is there anything we can do to address your concerns or improve your experience?\n\nWe'd appreciate the opportunity to understand your reasons, and if there's anything we can do to assist further before you go, please don't hesitate to let us know.\n\nKind regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-012', company: 'Perpolis OTC', category: 'off_boarding',
    name: 'Off-boarding — Account Closed',
    body: `Hi <Client First Name>,\n\nWe hereby confirm that your Perpolis OTC account has been closed as of today.\n\nAll pending settlements have been processed and your wallet addresses have been removed from the whitelist.\n\nWe're sorry to see you go and wish you all the best in your future endeavours. Should you ever wish to reopen your account, we'd be happy to welcome you back.\n\nAll the best,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-013', company: 'Perpolis OTC', category: 'off_boarding',
    name: 'Off-boarding — Client Declined',
    body: `Hi <Client First Name>,\n\nThank you for your interest in Perpolis OTC.\n\nAfter reviewing your application, we regret to inform you that we are unable to onboard you as a client at this time due to our internal compliance policies.\n\nWe appreciate the time you took to complete our application process and wish you all the best.\n\nKind Regards,\nClient Service - Perpolis OTC`,
  },
  {
    id: 'pp-014', company: 'Perpolis OTC', category: 'off_boarding',
    name: 'Off-boarding — Client Declined (Geographic — USA)',
    body: `Hi <Client First Name>,\n\nThank you for your interest in Perpolis OTC.\n\nUnfortunately, due to your stated geographic location, we are unable to offer our trading services to you at this time. Perpolis OTC does not currently serve clients based in the United States.\n\nWe appreciate the time you took in completing our application process and wish you all the best.\n\nKind Regards,\nClient Service - Perpolis OTC`,
  },

  /* ── 40 Acres ───────────────────────────────────────────── */
  {
    id: 'ac-001', company: '40 Acres', category: 'prospect_inquiry',
    name: 'Initial Inquiry — More Info Request',
    body: `Hi <Client First Name>,\n\nThank you for reaching out to us. Before we can move forward, we kindly ask that you provide a few additional details:\n\n- Volume or amount per trade?\n- We only support Bitcoin, USDT, USDC & ETH. Are you fine with these? If so, please also provide the trading pairs you would like to use.\n- Region you are based in?\n- Your company's primary business?\n\nOnce we receive this information, we'll be able to guide you through the next steps.\n\nWe look forward to your response.\n\nKind regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-002', company: '40 Acres', category: 'onboarding',
    name: 'Onboarding — Account Registration Requirements',
    body: `Hi <client first name>,\n\nThank you for your reply.\n\nThe onboarding requirements for 40 Acres Trading Platform are as described below. Please ensure you have the below documents and details handy before starting the onboarding process.\n\n**1. Company Data:** Country, Company name, Registration number, Legal address.\n\n**2. Company Documents / Ownership Structure** (one or multiple of the following):\n- Shareholder registry, Statement of information, Trust agreement, or Recent excerpt from a state company registry\n\n**3. Associated Parties Verification**\n\nUBOs: First name, last name, date of birth, email, ID document, selfie/liveness test.\nDirectors: Same as UBOs, plus phone number.\n\n**4. Business Questionnaire:**\n- Nature of Business, Invoicing Volume per Month, Bank Account Details (IBAN, SWIFT, etc.)\n- Acknowledgement of Terms of Service\n\nKind Regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-003', company: '40 Acres', category: 'prospect_inquiry',
    name: 'Services Overview — What Trading Services Do You Offer?',
    body: `Subject: Next Steps for Your Trading Application\n\nHello <First Name>,\n\nThank you for reaching out to us. Please find answers to your initial questions below:\n\n- **Types of Trading Available**: We provide OTC Trading services, where you can convert from any of BTC, ETH, USDT, and USDC.\n- **Settlement Timeline**: We will settle EUR & USD to your bank account within two business days as described in the MSA (excluding weekends and holidays).\n\nIf you would like to proceed with an application, kindly provide:\n- The region in which you are based\n- Your company's primary business\n- Volume and trading pairs you are interested in\n\nWe look forward to your response.\n\nKind regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-004', company: '40 Acres', category: 'prospect_inquiry',
    name: 'Onboarding — Introducing 40Acres to a New Client',
    body: `Hello <First Name>,\n\nThank you for reaching out to us.\n\nTo move forward, we kindly ask that you share the following details:\n- The region you are based in\n- Your company's primary business (for corporate accounts)\n- Volume and trading pairs you are interested in\n\nOnce we have this information, we'll provide you with the next steps.\n\nBest regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-005', company: '40 Acres', category: 'compliance_query',
    name: 'KYC — Documents Required for Verification',
    body: `Dear <Client Name>,\n\nAs part of the onboarding process, our verification platform will request the following documentation. We wanted to give you a heads-up so you can have everything ready beforehand:\n\n- Certificate of Incorporation\n- Articles of Association\n- Recent Business Registry Extract (issued within the last 3 months)\n- Proof of Company Address\n- UBO Register & Directors Register\n- Latest Audited Financial Statements (or bank statements if recently incorporated)\n- Tax Identification Number (TIN) and VAT Registration Certificate\n- Ownership Structure Diagram (UBOs with holdings exceeding 10%)\n- Valid ID Documents & Proof of Address for UBOs (within last 3 months)\n\nHaving these prepared in advance will help ensure a smooth process. Should any additional documentation be needed, we'll reach out directly.\n\nKind regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-006', company: '40 Acres', category: 'compliance_query',
    name: 'KYC — Rejection Follow-up',
    body: `Dear <Client Name>,\n\nThank you for reaching out. We understand how frustrating this can be, and we're here to help you get this resolved.\n\nWhen a KYC application is rejected, the verification platform typically provides a reason. Common reasons include:\n\n- Documents that are expired or illegible\n- Information that doesn't match across submitted documents\n- Missing or incomplete documentation\n- Proof of address older than 3 months\n\nWe'll review your specific case and share the details with you. Once the issue is identified, you'll simply need to upload the corrected documents through the platform.\n\nWe'll be in touch shortly with more details.\n\nKind regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-007', company: '40 Acres', category: 'onboarding',
    name: 'Account Approved — Welcome Email',
    body: `Hi <client first name>,\n\nHope you are doing well.\n\nWe are pleased to inform you that your account is approved to start operating at the Trading Platform.\n\nYou can proceed using the instructions in our Getting Started Guide.\n\nPlease don't hesitate to contact us if you have any questions or require assistance.\n\nKind regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-008', company: '40 Acres', category: 'onboarding',
    name: 'Onboarding — Client Not Responding',
    body: `Hi <client first name>,\n\nWe noticed you haven't accessed the link for completing the onboarding process with us.\n\nPlease feel free to let us know if you require more time to complete this process.\n\nShould you have any questions or concerns, please get in touch and we're happy to assist.\n\nKind regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-009', company: '40 Acres', category: 'off_boarding',
    name: 'Off-boarding — Account Closure Request',
    body: `Hi <client first name>,\n\nThank you for getting in touch.\n\nBefore we proceed, please clarify whether you wish to close your 40 Acres trading account indefinitely or temporarily suspend your trading activity.\n\nIn case there's something we can do to change your mind, would you mind sharing with us your reasons for considering account closure?\n\nKind regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-010', company: '40 Acres', category: 'off_boarding',
    name: 'Off-boarding — Account Closed Confirmation',
    body: `Hi <client first name>,\n\nWe hereby confirm that your 40 Acres account has been closed.\n\nWe are sad to see you go, but we wish you well in your future endeavours.\n\nAll the best,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-011', company: '40 Acres', category: 'off_boarding',
    name: 'Off-boarding — Client Declined',
    body: `Hi <client first name>,\n\nWe have reviewed your application and have decided that we are unable to onboard you as a client at this time due to our internal policies.\n\nWe appreciate your time in completing our application process and wish you all the best.\n\nKind Regards,\nClient Service - 40Acres`,
  },
  {
    id: 'ac-012', company: '40 Acres', category: 'off_boarding',
    name: 'Off-boarding — Client Declined (Geographic — USA)',
    body: `Hi <client first name>,\n\nDue to your stated geographic location we are unable to make our trading services available to you.\n\nWe appreciate your time in completing our application process, and wish you all the best.\n\nKind Regards,\nClient Service - 40Acres`,
  },
];

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
