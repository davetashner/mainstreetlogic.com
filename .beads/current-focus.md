# Current Focus

## Session: 2026-01-25

### Project Overview
Building mainstreetlogic.com - a modern website for a technology consultant serving small businesses with:
- Custom software & automation
- Website development (no monthly SaaS fees)
- System integration
- SaaS audit & optimization
- Hourly tech consulting (no hosting commitment)

### Key Positioning
**"Developer, Not Agency"** - Direct access to a developer who builds custom solutions, not an agency that configures templates.

### Target Audience
Small business owners (5-50 employees) struggling with:
- Integration friction (tools don't talk)
- Subscription creep ($500+/month in SaaS)
- One-size-fits-none software
- Slow changes (weeks to update a website)

### Repository Structure
| Repo | Path | Purpose |
|------|------|---------|
| **mainstreetlogic** | `~/Development/mainstreetlogic` | Private planning, brand assets, docs |
| **mainstreetlogic.com** | `~/Development/mainstreetlogic.com` | Public website (Astro) |

### Backlog Status
| Phase | Issues | Status |
|-------|--------|--------|
| Phase 1: Foundation | 6 | Not started |
| Phase 2: Core Pages | 8 | Not started |
| Phase 3: Integrations | 6 | Not started |
| Phase 4: Content & SEO | 8 | Not started |
| Phase 5: Client Portal | 6 | Future (P3) |
| Phase 6: Launch | 5 | Not started |
| **Total** | **46** | **Ready to begin** |

### Recommended Next Items
Start with Phase 1 (Foundation) - these can run in parallel:
1. **Initialize Astro project** (`mainstreetlogic.com-o71`) - Replace Vite with Astro + Tailwind
2. **Set up AWS infrastructure** (`mainstreetlogic.com-5rr`) - CloudFormation for S3 + CloudFront

After Astro init:
3. **Copy brand assets** (`mainstreetlogic.com-mwx`) - From planning repo
4. **Create base layout** (`mainstreetlogic.com-cqa`) - Header, footer, navigation

### Technical Decisions
| Decision | Choice | Notes |
|----------|--------|-------|
| Framework | Astro | Static site, zero JS by default |
| Styling | Tailwind CSS | Utility-first |
| Hosting | S3 + CloudFront | Same as thehousefinch.com |
| Contact Form | Lambda + SES | Self-hosted, spam-resistant |
| Booking | Calendly | Free tier, Google Calendar sync |
| Newsletter | Buttondown | Simple, $9/mo |
| Analytics | CloudFlare Web Analytics | Free, no cookies |
| CRM | Email + spreadsheet | Simple start |

### Infrastructure
| Item | Value |
|------|-------|
| Domain | mainstreetlogic.com |
| Registrar | Namecheap |
| DNS | Route 53 |
| AWS Account | 205074708100 |

### Lead Magnets
1. **Tech Friction Checklist** - Free download, no email required
2. **50% off hosting** - Email-gated, coupon code delivered

### Blog Posts (Backlogged)
1. "The $500/Month SaaS Trap (And How to Escape It)"
2. "Why Your $29/Month Website Is Actually Costing You More"
3. "Stop Being the Middleware: When Your Tools Don't Talk"
4. "5 Signs Your Business Is Ready for Custom Software"

### Client Portal (Future Phase)
Planned features for when 5+ active clients:
- Magic link authentication
- Backlog view (see/request tasks)
- Site health dashboard (Lighthouse, uptime)
- Analytics snapshot
- Billing history
- Support request system

### Completed This Session
- [x] Initialized beads in website repo
- [x] Created comprehensive backlog (46 issues)
- [x] Defined 6 phases with dependencies
- [x] Documented all technical decisions
- [x] Added hourly consulting service

### Open Questions
- Hourly consulting rate (for Pricing page)
- Exact monthly hosting tiers ($12-20 range)

### Branching Strategy
- Trunk-based development
- PR → Staging preview → Merge to main → Production
