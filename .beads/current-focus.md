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
| Phase 1: Foundation | 6 | **Complete** |
| Phase 2: Core Pages | 8 | **Complete** |
| Phase 3: Integrations | 6 | In progress |
| Phase 4: Content & SEO | 8 | Not started |
| Phase 5: Client Portal | 6 | Future (P3) |
| Phase 6: Launch | 5 | Not started |

### Completed Items
- [x] Initialize Astro project with Tailwind CSS
- [x] Set up AWS infrastructure (CloudFormation)
- [x] Configure CI/CD pipeline with GitHub Actions
- [x] Copy and integrate brand assets
- [x] Create base layout and navigation components
- [x] Build Homepage with hero and value proposition
- [x] Build About page
- [x] Build Services page with all offerings
- [x] Build Pricing page with transparent model
- [x] Build Contact page (static form)
- [x] Build Blog structure and layout
- [x] Set up E2E tests with Playwright
- [x] Configure custom domain (mainstreetlogic.com)
- [x] SSL certificate via ACM
- [x] DNS configuration (Route 53)

### Recommended Next Items
Phase 3 (Integrations & Lead Generation):
1. **Implement contact form backend** (`mainstreetlogic.com-1ta`) - Lambda + SES
2. **Integrate consultation booking** (`mainstreetlogic.com-hov`) - Calendly embed
3. **Configure CloudFlare Web Analytics** (`mainstreetlogic.com-dd5`)
4. **Set up newsletter signup** (`mainstreetlogic.com-wv5`) - Buttondown

### Technical Decisions
| Decision | Choice | Notes |
|----------|--------|-------|
| Framework | Astro | Static site, zero JS by default |
| Styling | Tailwind CSS v4 | Utility-first |
| Hosting | S3 + CloudFront | Via CloudFormation |
| Contact Form | Lambda + SES | Self-hosted, spam-resistant (pending) |
| Booking | Calendly | Free tier, Google Calendar sync |
| Newsletter | Buttondown | Simple, $9/mo |
| Analytics | CloudFlare Web Analytics | Free, no cookies |
| CRM | Email + spreadsheet | Simple start |

### Infrastructure
| Item | Value |
|------|-------|
| Domain | mainstreetlogic.com |
| Registrar | Namecheap |
| DNS | Route 53 (Z0323027WXRAQQHL711J) |
| AWS Account | 108772197494 (mainstreetlogic.com) |
| Production URL | https://mainstreetlogic.com |
| Staging URL | https://d37bllkokemcy4.cloudfront.net |

### Live URLs
- **Production**: https://mainstreetlogic.com
- **Production (www)**: https://www.mainstreetlogic.com
- **Staging**: https://d37bllkokemcy4.cloudfront.net

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

### Open Questions
- Hourly consulting rate (for Pricing page)
- Exact monthly hosting tiers ($12-20 range)

### Branching Strategy
- Trunk-based development
- PR -> Staging preview -> Merge to main -> Production
