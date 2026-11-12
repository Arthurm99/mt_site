import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

const PHONE = "6892728874";
const EMAIL = "mightytechsolutionsllc@gmail.com";
const SITE_URL = "https://www.mightytechfl.com";
const PAGE_PATH = "/managed-it";
const CONTACT_URL = "/contact?service=managed-it";

export const metadata: Metadata = {
  title: "Managed IT Services for Small Businesses | Mighty Tech Solutions",
  description:
    "Practical managed IT services in Central Florida: cybersecurity, endpoint protection, Microsoft 365, helpdesk support, backups, device management and IT coordination.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Managed IT Services for Small Businesses | Mighty Tech Solutions",
    description:
      "Dependable technology support for small businesses: Microsoft 365, cybersecurity, workstations, backups and day-to-day IT management.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Mighty Tech Solutions",
    locale: "en_US",
    type: "website",
  },
};

const SERVICES = [
  {
    icon: "🛡️",
    title: "Cybersecurity & Endpoint Protection",
    description:
      "Device protection, multifactor authentication, access controls and practical security checks to reduce common business risks.",
  },
  {
    icon: "☁️",
    title: "Microsoft 365 & User Administration",
    description:
      "Email and account setup, user access changes, productivity app configuration and support for everyday Microsoft 365 needs.",
  },
  {
    icon: "💻",
    title: "Workstations & Device Maintenance",
    description:
      "New-computer setup, software configuration, updates, basic health checks and organized onboarding for employee devices.",
  },
  {
    icon: "🎧",
    title: "Helpdesk & User Support",
    description:
      "Troubleshooting for computers, software, printers, sign-ins and the recurring problems that interrupt your team's work.",
  },
  {
    icon: "💾",
    title: "Backups & Recovery Readiness",
    description:
      "Review backup coverage, configure compatible backup tools and plan sensible next steps for protecting important business data.",
  },
  {
    icon: "🌐",
    title: "Network Oversight & IT Coordination",
    description:
      "Network and WiFi reviews, technology planning, vendor coordination and support when systems, services or equipment change.",
  },
];

const COMMON_NEEDS = [
  "We don't have a dedicated IT person",
  "New users and devices take too long to set up",
  "We're unsure who has access to our systems",
  "The same technology issues keep coming back",
];

const PROCESS = [
  {
    number: "01",
    title: "Understand your environment",
    description:
      "We learn about your users, devices, software, current support and the issues that matter most.",
  },
  {
    number: "02",
    title: "Set practical priorities",
    description:
      "We identify immediate fixes, security essentials and a support scope that fits your business.",
  },
  {
    number: "03",
    title: "Support & improve",
    description:
      "We help maintain your technology, resolve problems and review what needs attention as your needs evolve.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Managed IT Services",
  serviceType: [
    "Managed IT Services",
    "Cybersecurity and Endpoint Protection",
    "Microsoft 365 Administration",
    "Helpdesk Support",
    "Workstation Management",
    "Backup Readiness",
  ],
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Practical IT oversight, cybersecurity fundamentals, Microsoft 365 support, device maintenance and helpdesk services for small businesses in Central Florida.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Mighty Tech Solutions LLC",
    url: SITE_URL,
    telephone: "+1-689-272-8874",
  },
  areaServed: ["Orlando", "Kissimmee", "Davenport", "Clermont", "Central Florida"],
};

export default function ManagedITPage() {
  return (
    <div className="mts-managed-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <style>{`
        .mts-managed-page {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #08264A;
          background: #FFFFFF;
          min-height: 100vh;
        }
        .mts-managed-page * { box-sizing: border-box; }
        .mts-managed-page .mts-header-call,
        .mts-managed-page .mts-mobile-call { background: #011535 !important; color: #FFFFFF !important; }
        .mts-managed-page .mts-header-call:hover,
        .mts-managed-page .mts-mobile-call:hover { background: #103765 !important; }
        .mts-mi-container { width: 100%; max-width: 1120px; margin: 0 auto; }
        .mts-mi-kicker {
          display: block; font-size: 12px; font-weight: 850;
          letter-spacing: 1.3px; text-transform: uppercase; color: #0866E8;
          margin-bottom: 13px;
        }
        .mts-mi-heading {
          font-size: clamp(30px, 3.4vw, 42px);
          font-weight: 850; line-height: 1.15; letter-spacing: -0.9px;
          margin: 0 0 15px; color: #08264A;
        }
        .mts-mi-copy { color: #526981; font-size: 16px; line-height: 1.72; margin: 0; }
        .mts-mi-button {
          display: inline-flex; justify-content: center; align-items: center;
          min-height: 48px; padding: 13px 23px; text-align: center;
          border-radius: 11px; font-weight: 750; font-size: 14px;
          text-decoration: none; transition: background .18s ease, transform .18s ease;
        }
        .mts-mi-button:focus-visible { outline: 3px solid #64C9FF; outline-offset: 3px; }
        .mts-mi-button:hover { transform: translateY(-1px); }
        .mts-mi-button--primary { background: #011535; color: #FFFFFF; border: 1px solid #011535; }
        .mts-mi-button--primary:hover { background: #103765; }
        .mts-mi-button--outline {
          color: #FFFFFF; border: 1px solid rgba(255,255,255,.70);
          background: rgba(255,255,255,.06);
        }
        .mts-mi-button--outline:hover { background: rgba(255,255,255,.14); }
        .mts-mi-hero {
          padding: 84px 24px 88px;
          background: linear-gradient(112deg, #00234B 0%, #052E59 60%, #0A426B 100%);
        }
        .mts-mi-hero-grid { display: grid; grid-template-columns: 1.04fr .96fr; gap: 50px; align-items: center; }
        .mts-mi-hero .mts-mi-kicker { color: #9CE4FF; }
        .mts-mi-hero h1 {
          color: #FFFFFF; font-size: clamp(39px, 4.2vw, 54px);
          font-weight: 850; letter-spacing: -1.5px; line-height: 1.09;
          margin: 0 0 21px;
        }
        .mts-mi-hero-lead {
          color: #E0EEFA; font-size: 18px; line-height: 1.7;
          margin: 0 0 28px; max-width: 650px;
        }
        .mts-mi-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .mts-mi-hero .mts-mi-button--primary { border-color: #64C9FF; }
        .mts-mi-hero-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 30px; }
        .mts-mi-hero-tags span {
          color: #C8E5F7; font-size: 12px; font-weight: 700;
          border: 1px solid rgba(181,219,243,.24); background: rgba(255,255,255,.06);
          border-radius: 999px; padding: 8px 13px;
        }
        .mts-mi-hero-photo {
          margin: 0; overflow: hidden; border-radius: 21px;
          border: 1px solid rgba(218,239,255,.24);
          background: #08264A; box-shadow: 0 18px 48px rgba(0,16,42,.22);
        }
        .mts-mi-hero-photo img { width: 100%; height: 380px; display: block; object-fit: cover; }
        .mts-mi-hero-photo figcaption {
          padding: 16px 20px; color: #DCEFFF; font-size: 12px; line-height: 1.5;
          font-weight: 700; background: rgba(0,18,40,.68);
        }
        .mts-mi-services { padding: 91px 24px 94px; }
        .mts-mi-section-intro { max-width: 790px; margin-bottom: 38px; }
        .mts-mi-services-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 20px; }
        .mts-mi-service-card {
          display: flex; gap: 18px; background: #FFFFFF;
          border: 1px solid #DBE7F3; border-radius: 18px; padding: 26px;
          box-shadow: 0 5px 20px rgba(15,23,42,.035);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .mts-mi-service-card:hover { transform: translateY(-2px); box-shadow: 0 12px 25px rgba(15,23,42,.065); }
        .mts-mi-service-icon {
          width: 51px; height: 51px; flex: 0 0 51px;
          border-radius: 13px; display: grid; place-items: center;
          background: #EDF5FD; font-size: 23px;
        }
        .mts-mi-service-card h3 {
          margin: 2px 0 8px; font-size: 18px; font-weight: 800; line-height: 1.3;
        }
        .mts-mi-service-card p { font-size: 14px; line-height: 1.68; color: #526981; margin: 0; }
        .mts-mi-identify { background: #EAF4FC; padding: 76px 24px 83px; }
        .mts-mi-identify-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 55px; align-items: center; }
        .mts-mi-need-list { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
        .mts-mi-need {
          background: #FFFFFF; border: 1px solid #D5E6F5; border-radius: 15px;
          padding: 19px; font-size: 14px; font-weight: 700; color: #294A69;
          min-height: 99px; display: flex; align-items: flex-start; gap: 10px; line-height: 1.5;
        }
        .mts-mi-check { color: #0866E8; font-size: 17px; font-weight: 900; flex: 0 0 auto; }
        .mts-mi-identify-link {
          display: inline-block; color: #0756C4; font-size: 14px; font-weight: 800;
          text-decoration: none; margin-top: 24px;
        }
        .mts-mi-identify-link:hover { text-decoration: underline; }
        .mts-mi-support { padding: 90px 24px; }
        .mts-mi-support-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 45px; align-items: center; }
        .mts-mi-support-photo {
          margin: 0; background: #EDF5FD; border: 1px solid #DBE7F3;
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 9px 32px rgba(0,35,75,.07);
        }
        .mts-mi-support-photo img { width: 100%; height: 340px; display: block; object-fit: cover; }
        .mts-mi-support-photo figcaption {
          padding: 12px 18px; color: #64748b; font-size: 12px;
          line-height: 1.5;
        }
        .mts-mi-support-list { list-style: none; margin: 26px 0 0; padding: 0; display: grid; gap: 15px; }
        .mts-mi-support-list li { color: #294A69; font-size: 15px; line-height: 1.55; display: flex; gap: 11px; }
        .mts-mi-support-list li::before { content: '✓'; color: #0866E8; font-weight: 850; flex: 0 0 auto; }
        .mts-mi-process { padding: 74px 24px 81px; background: #F2F7FC; }
        .mts-mi-process-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; }
        .mts-mi-step { padding: 25px 24px; background: #FFFFFF; border: 1px solid #DBE7F3; border-radius: 16px; }
        .mts-mi-step-number { display: block; color: #0866E8; font-size: 13px; font-weight: 850; margin-bottom: 14px; }
        .mts-mi-step h3 { font-size: 17px; font-weight: 800; margin: 0 0 9px; }
        .mts-mi-step p { margin: 0; color: #526981; font-size: 14px; line-height: 1.65; }
        .mts-mi-cta-section { padding: 82px 24px 92px; }
        .mts-mi-cta {
          border-radius: 24px; padding: 49px 43px;
          background: linear-gradient(110deg, #064E9B 0%, #00234B 100%);
          display: flex; justify-content: space-between; align-items: center; gap: 30px;
        }
        .mts-mi-cta h2 { color: #FFFFFF; font-size: clamp(25px,2.6vw,32px); line-height: 1.22; margin: 0 0 12px; }
        .mts-mi-cta p { color: #D3E5F7; margin: 0; font-size: 15px; line-height: 1.7; max-width: 610px; }
        .mts-mi-cta .mts-mi-button--primary { border-color: #64C9FF; white-space: nowrap; }
        .mts-mi-footer {
          background: #071E39; border-top: 1px solid #1A4775; padding: 30px 24px;
          color: #E1EFFC; text-align: center; font-size: 13px;
        }
        .mts-mi-footer-links { margin-top: 10px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .mts-mi-footer a { color: #BFD5EA; text-decoration: none; }
        .mts-mi-footer a:hover { text-decoration: underline; }
        @media (max-width: 940px) {
          .mts-mi-hero-grid { grid-template-columns: 1fr; gap: 35px; }
          .mts-mi-hero-photo { max-width: 680px; }
          .mts-mi-identify-grid, .mts-mi-support-grid { grid-template-columns: 1fr; gap: 30px; }
          .mts-mi-cta { align-items: flex-start; flex-direction: column; }
        }
        @media (max-width: 720px) {
          .mts-mi-hero { padding: 62px 20px 65px; }
          .mts-mi-hero h1 { font-size: 38px; }
          .mts-mi-hero-lead { font-size: 16px; }
          .mts-mi-hero-photo img { height: 270px; }
          .mts-mi-services, .mts-mi-support { padding: 71px 20px 73px; }
          .mts-mi-identify, .mts-mi-process { padding: 64px 20px; }
          .mts-mi-services-grid, .mts-mi-process-grid { grid-template-columns: 1fr; }
          .mts-mi-service-card { padding: 21px; }
          .mts-mi-need-list { grid-template-columns: 1fr; }
          .mts-mi-need { min-height: 0; padding: 17px; }
          .mts-mi-support-photo img { height: 240px; }
          .mts-mi-cta-section { padding: 69px 20px 77px; }
          .mts-mi-cta { padding: 34px 25px; }
          .mts-mi-hero-actions .mts-mi-button, .mts-mi-cta .mts-mi-button { width: 100%; }
        }
        @media (max-width: 420px) {
          .mts-mi-hero h1 { font-size: 34px; }
          .mts-mi-service-card { gap: 13px; }
          .mts-mi-service-icon { width: 44px; height: 44px; flex-basis: 44px; font-size: 21px; }
        }
      `}</style>

      <SiteHeader phoneHref={`tel:+1${PHONE}`} />

      <main>
        <section className="mts-mi-hero">
          <div className="mts-mi-container mts-mi-hero-grid">
            <div>
              <span className="mts-mi-kicker">For Business · Central Florida</span>
              <h1>Managed IT Services for Small Businesses</h1>
              <p className="mts-mi-hero-lead">
                Your business needs technology that works, even without a full
                in-house IT team. We help manage devices, Microsoft 365,
                cybersecurity essentials and everyday IT support.
              </p>
              <div className="mts-mi-hero-actions">
                <a className="mts-mi-button mts-mi-button--primary" href={CONTACT_URL}>
                  Schedule IT Consultation
                </a>
                <a className="mts-mi-button mts-mi-button--outline" href={`tel:+1${PHONE}`}>
                  Call Now
                </a>
              </div>
              <div className="mts-mi-hero-tags" aria-label="Common managed IT needs">
                <span>Cybersecurity</span>
                <span>Microsoft 365</span>
                <span>Device &amp; User Support</span>
              </div>
            </div>

            <figure className="mts-mi-hero-photo">
              <Image
                src="/ServiceCards/managed-it.webp"
                alt="Illustration of managed business technology and IT administration"
                width={800}
                height={620}
                sizes="(max-width: 940px) 100vw, 48vw"
                priority
              />
              <figcaption>Illustrative image · Managed IT and technology oversight</figcaption>
            </figure>
          </div>
        </section>

        <section className="mts-mi-services" id="managed-it-services">
          <div className="mts-mi-container">
            <div className="mts-mi-section-intro">
              <span className="mts-mi-kicker">What We Do</span>
              <h2 className="mts-mi-heading">The IT essentials your business needs covered</h2>
              <p className="mts-mi-copy">
                From account administration to device security and responsive troubleshooting,
                we help keep daily technology work under control.
              </p>
            </div>
            <div className="mts-mi-services-grid">
              {SERVICES.map((service) => (
                <article className="mts-mi-service-card" key={service.title}>
                  <div className="mts-mi-service-icon" aria-hidden="true">{service.icon}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mts-mi-identify">
          <div className="mts-mi-container mts-mi-identify-grid">
            <div>
              <span className="mts-mi-kicker">Sound Familiar?</span>
              <h2 className="mts-mi-heading">You run the business. We help manage the IT.</h2>
              <p className="mts-mi-copy">
                You don't need to know which tool or setting is causing the problem.
                Tell us what your team uses, what isn't working and what you want to improve.
              </p>
              <a className="mts-mi-identify-link" href={CONTACT_URL}>
                Tell us about your IT needs →
              </a>
            </div>
            <div className="mts-mi-need-list">
              {COMMON_NEEDS.map((need) => (
                <div className="mts-mi-need" key={need}>
                  <span className="mts-mi-check" aria-hidden="true">✓</span>
                  <span>{need}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mts-mi-support">
          <div className="mts-mi-container mts-mi-support-grid">
            <figure className="mts-mi-support-photo">
              <Image
                src="/ServiceCards/it-support.webp"
                alt="Illustration of a technician helping with an office computer"
                width={780}
                height={560}
                sizes="(max-width: 940px) 100vw, 47vw"
                loading="lazy"
              />
              <figcaption>Illustrative image · Hands-on business technology support</figcaption>
            </figure>
            <div>
              <span className="mts-mi-kicker">Practical IT Management</span>
              <h2 className="mts-mi-heading">One point of contact for everyday technology needs</h2>
              <p className="mts-mi-copy">
                Managed IT is not just fixing a computer after it breaks. It's also
                about organized accounts, maintained devices and knowing who to call
                when technology changes or stops working.
              </p>
              <ul className="mts-mi-support-list">
                <li>Help employees get started with accounts and devices</li>
                <li>Address recurring issues instead of repeatedly working around them</li>
                <li>Review security basics, backups and network dependencies</li>
                <li>Coordinate technology vendors and upcoming changes</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mts-mi-process">
          <div className="mts-mi-container">
            <div className="mts-mi-section-intro">
              <span className="mts-mi-kicker">Our Approach</span>
              <h2 className="mts-mi-heading">A clear, practical way to get started</h2>
            </div>
            <div className="mts-mi-process-grid">
              {PROCESS.map((step) => (
                <div className="mts-mi-step" key={step.number}>
                  <span className="mts-mi-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mts-mi-cta-section">
          <div className="mts-mi-container">
            <div className="mts-mi-cta">
              <div>
                <h2>Need IT support without a full internal IT team?</h2>
                <p>
                  Tell us about your users, devices, Microsoft 365 setup and the issues
                  slowing your business down. We'll review the right scope for you.
                </p>
              </div>
              <a className="mts-mi-button mts-mi-button--primary" href={CONTACT_URL}>
                Discuss Managed IT
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mts-mi-footer">
        © 2026 Mighty Tech Solutions LLC · Business &amp; Residential Technology · Central Florida
        <div className="mts-mi-footer-links">
          <a href={`tel:+1${PHONE}`}>(689) 272-8874</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href="/">Home</a>
        </div>
      </footer>
    </div>
  );
}
