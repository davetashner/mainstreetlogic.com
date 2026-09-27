export interface Service {
  slug: string;
  title: string;
  /** One or two sentences for the home page list */
  summary: string;
  /** What's typically included, for the services page */
  includes: string[];
  /** A representative job, phrased as an example rather than a client claim */
  example: string;
}

export const services: Service[] = [
  {
    slug: 'automation',
    title: 'Automate the repetitive work',
    summary:
      'If someone does the same steps every day or every week, a computer can usually do them instead: invoices, reports, reminders, data entry.',
    includes: [
      'Workflow automation with tools like Zapier and Make, or custom scripts',
      'Scheduled reports that build and send themselves',
      'Email and text reminders for customers and staff',
      'Turning paper forms and photos into structured data',
    ],
    example:
      'Invoices that draft themselves from completed jobs, so the owner reviews and sends instead of typing.',
  },
  {
    slug: 'integration',
    title: 'Connect the tools you already pay for',
    summary:
      'Get your store, bookkeeping, email, and scheduling apps sharing information, so nobody has to retype it.',
    includes: [
      'Point-of-sale and online store to accounting sync',
      'CRM and email marketing connections',
      'Inventory shared across sales channels',
      'Custom API work when no ready-made connector exists',
    ],
    example:
      'Shopify orders and inventory flowing into QuickBooks automatically, with no end-of-month reconciling.',
  },
  {
    slug: 'custom-tools',
    title: 'Build a tool that fits how you work',
    summary:
      "When off-the-shelf software is too big, too expensive, or just wrong for your shop, I'll build a small app that does exactly the job.",
    includes: [
      'Phone-friendly apps for staff on the floor or in the field',
      'Internal dashboards that pull numbers from your other systems',
      'Barcode, photo, and receipt capture',
      'Simple logins and permissions for your team',
    ],
    example:
      'Supply Checkout, a barcode app that replaced a paper sign-out sheet. You can try the demo.',
  },
  {
    slug: 'websites',
    title: 'Websites that do their job',
    summary:
      'Fast, clear sites that tell people what you do and how to reach you. Hosting and upkeep are available so you never have to think about it.',
    includes: [
      'New business websites and landing pages',
      'Redesigns of sites that have gotten slow or dated',
      'Online ordering, booking, and simple stores',
      'Managed hosting, backups, and updates',
    ],
    example:
      'A single-page site with hours, menu, and online ordering that loads quickly on a phone.',
  },
  {
    slug: 'software-audit',
    title: 'Software cost check-up',
    summary:
      'A review of every subscription you pay for: what overlaps, what nobody uses, and what you can cancel or replace with something cheaper.',
    includes: [
      'A full list of subscriptions and what each one costs you per year',
      'Duplicate and unused tools flagged',
      'Cheaper or simpler alternatives, where they exist',
      'A plan for switching without losing data',
    ],
    example:
      'Three overlapping scheduling and email tools consolidated into one.',
  },
  {
    slug: 'hourly',
    title: 'Hourly help and advice',
    summary:
      'Not sure what you need yet? Book time and ask anything: choosing software, sizing up a vendor quote, or fixing a problem that has you stuck.',
    includes: [
      'Technology planning sessions',
      'Help choosing between software options',
      'A second opinion on vendor quotes and contracts',
      'Hands-on troubleshooting',
    ],
    example:
      'An hour comparing two point-of-sale systems before signing a three-year contract.',
  },
];
