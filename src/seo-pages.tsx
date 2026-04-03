import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { themeTokens } from './theme-tokens';

export type LandingPageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  relatedLinks?: Array<{ label: string; href: string }>;
  sections: Array<{ heading: string; body: string }>;
  faqs: Array<{ q: string; a: string }>;
};

export const landingPages: LandingPageData[] = [
  {
    slug: 'app-development',
    title: 'App Development Services | ShoverHub',
    metaTitle: 'App Development Services for Startups and Businesses | ShoverHub',
    metaDescription:
      'ShoverHub builds high-performance mobile apps for startups and businesses with product strategy, UX design, development, and long-term support.',
    h1: 'App Development Services That Scale',
    intro:
      'ShoverHub builds Android, iOS, and cross-platform applications focused on performance, retention, and business growth.',
    primaryCtaLabel: 'See Hostel Manager',
    primaryCtaHref: 'https://hostelmanager.shoverhub.com',
    secondaryCtaLabel: 'See VCard Platform',
    secondaryCtaHref: 'https://vcard.shoverhub.com',
    relatedLinks: [
      { label: 'Hostel Manager Product', href: 'https://hostelmanager.shoverhub.com' },
      { label: 'VCard Product', href: 'https://vcard.shoverhub.com' },
      { label: 'ShoverHub Blog', href: 'https://blog.shoverhub.com' },
    ],
    sections: [
      {
        heading: 'What We Build',
        body:
          'We design and build customer-facing apps, internal operations apps, marketplace apps, subscription platforms, and SaaS mobile interfaces. Every project starts with user flows, feature prioritization, and a delivery roadmap aligned to your business goals.',
      },
      {
        heading: 'How We Work',
        body:
          'Our process includes discovery, architecture planning, interface design, development, QA, release management, and iterative optimization. We focus on measurable outcomes like activation, conversion, engagement, and retention.',
      },
      {
        heading: 'Why Teams Choose ShoverHub',
        body:
          'Clients choose us for clean architecture, fast delivery, scalable code, and strong post-launch support. We build products that are easy to maintain and ready to grow with your user base.',
      },
    ],
    faqs: [
      { q: 'Do you build both Android and iOS apps?', a: 'Yes. We build native and cross-platform applications based on timeline, performance, and budget requirements.' },
      { q: 'Can you improve an existing app?', a: 'Yes. We can audit your app, fix performance issues, redesign UX, and ship new feature roadmaps.' },
      { q: 'Do you provide maintenance after launch?', a: 'Yes. We provide monitoring, updates, bug fixes, and ongoing feature support.' },
    ],
  },
  {
    slug: 'website-development',
    title: 'Website Development Services | ShoverHub',
    metaTitle: 'Website Development Services for Fast SEO-Friendly Websites | ShoverHub',
    metaDescription:
      'Get modern, SEO-ready, and conversion-focused website development services from ShoverHub. Built for speed, performance, and long-term growth.',
    h1: 'Website Development Built for Growth',
    intro:
      'We build modern websites that load fast, rank better, and convert visitors into leads and customers.',
    primaryCtaLabel: 'Read Product Stories',
    primaryCtaHref: 'https://blog.shoverhub.com',
    secondaryCtaLabel: 'Start Project Inquiry',
    secondaryCtaHref: '/#contact',
    relatedLinks: [
      { label: 'ShoverHub Blog', href: 'https://blog.shoverhub.com' },
      { label: 'Hostel Manager Website', href: 'https://hostelmanager.shoverhub.com' },
      { label: 'VCard Website', href: 'https://vcard.shoverhub.com' },
    ],
    sections: [
      {
        heading: 'Performance-First Engineering',
        body:
          'Our websites are built with clean code, optimized assets, responsive layouts, and accessibility best practices. This improves user experience and search visibility.',
      },
      {
        heading: 'SEO-Ready Foundation',
        body:
          'From metadata and structured data to crawlability and internal linking, we implement technical SEO standards needed for competitive ranking.',
      },
      {
        heading: 'Conversion-Oriented UX',
        body:
          'We design each page around clear calls-to-action, trust elements, and content hierarchy that helps users take action quickly.',
      },
    ],
    faqs: [
      { q: 'Do you build custom websites or templates?', a: 'We build custom websites tailored to your goals, audience, and content strategy.' },
      { q: 'Will my website be mobile-friendly?', a: 'Yes. Every site is responsive and optimized for mobile, tablet, and desktop.' },
      { q: 'Can you migrate an existing website?', a: 'Yes. We handle redesign, migration, and SEO-safe transitions with minimal risk.' },
    ],
  },
  {
    slug: 'product-design',
    title: 'Product Design Services | ShoverHub',
    metaTitle: 'Product Design Services for Apps and Web Platforms | ShoverHub',
    metaDescription:
      'ShoverHub offers product design services including UX research, user flows, wireframes, and UI systems for high-performing digital products.',
    h1: 'Product Design That Users Love',
    intro:
      'We combine user research, UX thinking, and visual design to create products that are intuitive, useful, and easy to scale.',
    primaryCtaLabel: 'Explore VCard UX',
    primaryCtaHref: 'https://vcard.shoverhub.com',
    secondaryCtaLabel: 'Read UX Content',
    secondaryCtaHref: 'https://blog.shoverhub.com',
    relatedLinks: [
      { label: 'VCard Product Experience', href: 'https://vcard.shoverhub.com' },
      { label: 'Hostel Manager Dashboard UX', href: 'https://hostelmanager.shoverhub.com' },
      { label: 'ShoverHub Blog', href: 'https://blog.shoverhub.com' },
    ],
    sections: [
      {
        heading: 'Research to Reduce Guesswork',
        body:
          'We study user intent, friction points, and market expectations to shape practical design decisions that improve adoption.',
      },
      {
        heading: 'Clear UX Architecture',
        body:
          'From information architecture to interaction patterns, we create predictable journeys that reduce confusion and increase completion rates.',
      },
      {
        heading: 'Scalable UI Systems',
        body:
          'Our design systems maintain visual consistency across screens and speed up future product development.',
      },
    ],
    faqs: [
      { q: 'Can you design before development starts?', a: 'Yes. We provide complete UX and UI workflows before writing production code.' },
      { q: 'Do you redesign existing products?', a: 'Yes. We can redesign specific flows or entire products with measurable UX improvements.' },
      { q: 'Do you provide design systems?', a: 'Yes. We create reusable components, style guides, and scalable design tokens.' },
    ],
  },
  {
    slug: 'hostel-management-software',
    title: 'Hostel Management Software Solutions | ShoverHub',
    metaTitle: 'Hostel Management Software for PG and Hostel Owners | ShoverHub',
    metaDescription:
      'Simplify operations with hostel management software by ShoverHub. Manage rooms, tenants, payments, staff, and analytics in one platform.',
    h1: 'Hostel Management Software for Property Owners',
    intro:
      'Our hostel and PG management solutions help owners reduce manual work, improve occupancy workflows, and track operations in real time.',
    primaryCtaLabel: 'Open Hostel Manager',
    primaryCtaHref: 'https://hostelmanager.shoverhub.com',
    secondaryCtaLabel: 'Contact Sales',
    secondaryCtaHref: '/#contact',
    relatedLinks: [
      { label: 'Hostel Manager Live Platform', href: 'https://hostelmanager.shoverhub.com' },
      { label: 'ShoverHub Main Website', href: 'https://shoverhub.com' },
      { label: 'ShoverHub Blog', href: 'https://blog.shoverhub.com' },
    ],
    sections: [
      {
        heading: 'All-in-One Operations Dashboard',
        body:
          'Track room allocation, tenant details, due payments, staff tasks, and reports from a single control panel.',
      },
      {
        heading: 'Built for Real-World Workflows',
        body:
          'The system is designed for daily hostel operations including admissions, renewals, occupancy changes, and recurring billing.',
      },
      {
        heading: 'Scalable for Multi-Property Growth',
        body:
          'Whether you run one property or multiple locations, our architecture supports growth without rework.',
      },
    ],
    faqs: [
      { q: 'Can I manage multiple properties?', a: 'Yes. The platform supports multi-property management from one dashboard.' },
      { q: 'Does it track tenant payments?', a: 'Yes. You can track payment status, due dates, and transaction history.' },
      { q: 'Is staff management included?', a: 'Yes. You can assign and monitor staff responsibilities inside the platform.' },
    ],
  },
  {
    slug: 'digital-invitation-platform',
    title: 'Digital Invitation Platform | ShoverHub',
    metaTitle: 'Digital Invitation Platform for Events and Business Cards | ShoverHub',
    metaDescription:
      'Create modern digital invitations and business cards with ShoverHub solutions. Fast setup, easy customization, and mobile-ready output.',
    h1: 'Digital Invitation Platform for Modern Events',
    intro:
      'Build beautiful digital invitations and share-ready cards with customizable templates and mobile-first delivery.',
    primaryCtaLabel: 'Open VCard',
    primaryCtaHref: 'https://vcard.shoverhub.com',
    secondaryCtaLabel: 'Contact Team',
    secondaryCtaHref: '/#contact',
    relatedLinks: [
      { label: 'VCard Live Platform', href: 'https://vcard.shoverhub.com' },
      { label: 'ShoverHub Main Website', href: 'https://shoverhub.com' },
      { label: 'ShoverHub Blog', href: 'https://blog.shoverhub.com' },
    ],
    sections: [
      {
        heading: 'Fast Customization',
        body:
          'Users can create and customize invitation designs quickly with clear controls and modern templates.',
      },
      {
        heading: 'Mobile-Optimized Experience',
        body:
          'Invitations are designed to look great on mobile devices, helping hosts share and guests respond easily.',
      },
      {
        heading: 'Built for Scale and Reliability',
        body:
          'Our platform architecture supports growing traffic and event volume while maintaining a smooth experience.',
      },
    ],
    faqs: [
      { q: 'Can I create invitations for different event types?', a: 'Yes. The platform supports multiple event formats and style variations.' },
      { q: 'Are invitations mobile-friendly?', a: 'Yes. All designs are optimized for mobile viewing and sharing.' },
      { q: 'Can businesses use this for digital cards?', a: 'Yes. The platform also supports business card style layouts and sharing.' },
    ],
  },
];

type Props = {
  page: LandingPageData;
};

export function SeoLandingPage({ page }: Props) {
  useEffect(() => {
    document.title = page.metaTitle;

    const desc = document.head.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (desc) desc.content = page.metaDescription;

    const ogTitle = document.head.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (ogTitle) ogTitle.content = page.metaTitle;

    const ogDesc = document.head.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (ogDesc) ogDesc.content = page.metaDescription;

    const twTitle = document.head.querySelector('meta[name="twitter:title"]') as HTMLMetaElement | null;
    if (twTitle) twTitle.content = page.metaTitle;

    const twDesc = document.head.querySelector('meta[name="twitter:description"]') as HTMLMetaElement | null;
    if (twDesc) twDesc.content = page.metaDescription;

    const canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = `https://shoverhub.com/${page.slug}`;

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
    document.head.appendChild(faqScript);

    return () => {
      document.head.removeChild(faqScript);
      if (canonical) canonical.href = 'https://shoverhub.com';
    };
  }, [page]);

  return (
    <main className="min-h-screen" style={{ backgroundColor: themeTokens.colors.bg, color: themeTokens.colors.textBody }}>
      <section className="py-20 md:py-28 border-b" style={{ borderColor: themeTokens.colors.border }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wider mb-4" style={{ color: themeTokens.colors.tertiary }}>
            ShoverHub Services
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: themeTokens.colors.text, fontFamily: themeTokens.fonts.display }}>
            {page.h1}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl" style={{ color: themeTokens.colors.textMuted }}>
            {page.intro}
          </p>
          <div className="mt-8">
            <a
              href={page.primaryCtaHref ?? '/#contact'}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold"
              style={{ backgroundColor: themeTokens.colors.primary, color: themeTokens.colors.bg }}
              target={(page.primaryCtaHref ?? '').startsWith('http') ? '_blank' : undefined}
              rel={(page.primaryCtaHref ?? '').startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {page.primaryCtaLabel ?? 'Start a Project'}
              <ArrowRight className="w-4 h-4" />
            </a>
            {page.secondaryCtaHref && page.secondaryCtaLabel && (
              <a
                href={page.secondaryCtaHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold ml-3 mt-3 sm:mt-0"
                style={{ backgroundColor: themeTokens.colors.surface, color: themeTokens.colors.text, border: `1px solid ${themeTokens.colors.border}` }}
                target={page.secondaryCtaHref.startsWith('http') ? '_blank' : undefined}
                rel={page.secondaryCtaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {page.secondaryCtaLabel}
              </a>
            )}
          </div>
        </div>
      </section>

      {page.relatedLinks && page.relatedLinks.length > 0 && (
        <section className="py-10 border-b" style={{ borderColor: themeTokens.colors.border }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: themeTokens.colors.text, fontFamily: themeTokens.fonts.display }}>
              Related Platforms
            </h2>
            <div className="grid sm:grid-cols-3 gap-3">
              {page.relatedLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-4 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: themeTokens.colors.surface, color: themeTokens.colors.text, border: `1px solid ${themeTokens.colors.border}` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:gap-10">
          {page.sections.map((section) => (
            <article
              key={section.heading}
              className="p-6 md:p-8 rounded-xl"
              style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}` }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: themeTokens.colors.text, fontFamily: themeTokens.fonts.display }}>
                {section.heading}
              </h2>
              <p className="leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16" style={{ backgroundColor: themeTokens.colors.surface }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: themeTokens.colors.text, fontFamily: themeTokens.fonts.display }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <details
                key={faq.q}
                className="p-5 rounded-lg"
                style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}
              >
                <summary className="cursor-pointer font-semibold" style={{ color: themeTokens.colors.text }}>
                  {faq.q}
                </summary>
                <p className="mt-3" style={{ color: themeTokens.colors.textMuted }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
