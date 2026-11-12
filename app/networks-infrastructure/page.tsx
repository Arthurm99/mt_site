import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";

const PHONE = "6892728874";
const EMAIL = "mightytechsolutionsllc@gmail.com";
const SITE_URL = "https://www.mightytechfl.com";
const PAGE_PATH = "/networks-infrastructure";
const CONTACT_URL = "/contact?service=networks-infrastructure";

export const metadata: Metadata = {
  title: "Business Networks & Infrastructure | Mighty Tech Solutions",
  description:
    "Business WiFi, mesh networks, Cat6 Ethernet cabling, VoIP, PoE access points, network equipment and troubleshooting in Orlando and Central Florida.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Business Networks & Infrastructure | Mighty Tech Solutions",
    description:
      "From Ethernet cabling to WiFi, VoIP and network upgrades: practical network solutions for Central Florida businesses.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "Mighty Tech Solutions",
    locale: "en_US",
    type: "website",
  },
};

const SERVICES = [
  {
    icon: "🔌",
    title: "Ethernet & Structured Cabling",
    description:
      "Cat6 cable runs, data drops, wall jacks, patch panels, network racks and cable testing for new or expanding workspaces.",
  },
  {
    icon: "📶",
    title: "Business WiFi & Mesh Systems",
    description:
      "WiFi coverage improvements, access point setup, mesh configuration and wired backhaul where the infrastructure allows.",
  },
  {
    icon: "⚡",
    title: "Access Points, PoE & Data Connections",
    description:
      "Power and data connectivity for compatible wireless access points, IP cameras and other network-connected equipment.",
  },
  {
    icon: "🌐",
    title: "Routers, Switches & Network Equipment",
    description:
      "Installation, configuration and organization of routers, switches, network racks and supporting business network hardware.",
  },
  {
    icon: "☎️",
    title: "VoIP & IP Telephony",
    description:
      "Network connectivity, device setup and troubleshooting for compatible VoIP phones and IP-based business calling systems.",
  },
  {
    icon: "🛠️",
    title: "Troubleshooting & Network Upgrades",
    description:
      "Help with unstable connections, slow networks, equipment faults, cabling issues and technology changes as your business grows.",
  },
];

const COMMON_NEEDS = [
  "WiFi dead zones or frequent disconnects",
  "More Ethernet ports for desks or equipment",
  "New access points, phones or IP cameras",
  "An untidy rack or unreliable network setup",
];

const PROCESS = [
  {
    number: "01",
    title: "Tell us what is happening",
    description:
      "We start with your location, devices, coverage needs and the outcome you want.",
  },
  {
    number: "02",
    title: "Review the right approach",
    description:
      "We assess the existing network and propose practical cabling, equipment or configuration work.",
  },
  {
    number: "03",
    title: "Install, configure & verify",
    description:
      "We organize the work and test the relevant connections before wrapping up.",
  },
];

const PROJECTS = [
  {
    image: "/Projects/network_upgrade.jpg",
    imageAlt: "Mighty Tech Solutions network infrastructure cleanup and equipment upgrade",
    category: "NETWORK INFRASTRUCTURE",
    title: "Network Infrastructure Upgrade",
    text: "Media panel organization, network cleanup and wired backhaul using existing Ethernet infrastructure.",
  },
  {
    image: "/Projects/mesh_system.jpg",
    imageAlt: "Mighty Tech Solutions business mesh WiFi installation",
    category: "BUSINESS WIFI",
    title: "Business Mesh WiFi Upgrade",
    text: "Mesh system configuration to improve connectivity throughout a local business facility.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "Business Networks & Infrastructure",
  serviceType: [
    "Ethernet and Structured Cabling",
    "Business WiFi and Mesh Networks",
    "Network Equipment Installation",
    "VoIP Network Setup",
    "Network Troubleshooting",
  ],
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    "Ethernet cabling, business WiFi, mesh systems, PoE connections, VoIP support and network troubleshooting for businesses in Central Florida.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Mighty Tech Solutions LLC",
    url: SITE_URL,
    telephone: "+1-689-272-8874",
  },
  areaServed: ["Orlando", "Kissimmee", "Davenport", "Clermont", "Central Florida"],
};

export default function NetworksInfrastructurePage() {
  return (
    <div className="mts-network-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <style>{`
        .mts-network-page {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #08264A;
          background: #FFFFFF;
          min-height: 100vh;
        }
        .mts-network-page * { box-sizing: border-box; }
        .mts-network-page .mts-header-call,
        .mts-network-page .mts-mobile-call { background: #011535 !important; color: #FFFFFF !important; }
        .mts-network-page .mts-header-call:hover,
        .mts-network-page .mts-mobile-call:hover { background: #103765 !important; }
        .mts-net-container { width: 100%; max-width: 1120px; margin: 0 auto; }
        .mts-net-kicker {
          display: block; font-size: 12px; font-weight: 850;
          letter-spacing: 1.3px; text-transform: uppercase; color: #0866E8;
          margin-bottom: 13px;
        }
        .mts-net-heading {
          font-size: clamp(30px, 3.4vw, 42px);
          font-weight: 850; line-height: 1.15; letter-spacing: -0.9px;
          margin: 0 0 15px; color: #08264A;
        }
        .mts-net-copy { color: #526981; font-size: 16px; line-height: 1.72; margin: 0; }
        .mts-net-button {
          display: inline-flex; justify-content: center; align-items: center;
          min-height: 48px; padding: 13px 23px; text-align: center;
          border-radius: 11px; font-weight: 750; font-size: 14px;
          text-decoration: none; transition: background .18s ease, transform .18s ease;
        }
        .mts-net-button:focus-visible { outline: 3px solid #64C9FF; outline-offset: 3px; }
        .mts-net-button:hover { transform: translateY(-1px); }
        .mts-net-button--primary { background: #011535; color: #FFFFFF; border: 1px solid #011535; }
        .mts-net-button--primary:hover { background: #103765; }
        .mts-net-button--outline {
          color: #FFFFFF; border: 1px solid rgba(255,255,255,.70);
          background: rgba(255,255,255,.06);
        }
        .mts-net-button--outline:hover { background: rgba(255,255,255,.14); }
        .mts-net-hero {
          padding: 84px 24px 88px;
          background: linear-gradient(112deg, #00234B 0%, #052E59 60%, #0A426B 100%);
        }
        .mts-net-hero-grid { display: grid; grid-template-columns: 1.04fr .96fr; gap: 50px; align-items: center; }
        .mts-net-hero .mts-net-kicker { color: #9CE4FF; }
        .mts-net-hero h1 {
          color: #FFFFFF; font-size: clamp(39px, 4.2vw, 54px);
          font-weight: 850; letter-spacing: -1.5px; line-height: 1.09;
          margin: 0 0 21px;
        }
        .mts-net-hero-lead {
          color: #E0EEFA; font-size: 18px; line-height: 1.7;
          margin: 0 0 28px; max-width: 650px;
        }
        .mts-net-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .mts-net-hero .mts-net-button--primary { border-color: #64C9FF; }
        .mts-net-hero-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 30px; }
        .mts-net-hero-tags span {
          color: #C8E5F7; font-size: 12px; font-weight: 700;
          border: 1px solid rgba(181,219,243,.24); background: rgba(255,255,255,.06);
          border-radius: 999px; padding: 8px 13px;
        }
        .mts-net-hero-photo {
          margin: 0; overflow: hidden; border-radius: 21px;
          border: 1px solid rgba(218,239,255,.24);
          background: #08264A; box-shadow: 0 18px 48px rgba(0,16,42,.22);
        }
        .mts-net-hero-photo img { width: 100%; height: 380px; display: block; object-fit: cover; }
        .mts-net-hero-photo figcaption {
          padding: 16px 20px; color: #DCEFFF; font-size: 12px; line-height: 1.5;
          font-weight: 700; background: rgba(0,18,40,.68);
        }
        .mts-net-services { padding: 91px 24px 94px; }
        .mts-net-section-intro { max-width: 790px; margin-bottom: 38px; }
        .mts-net-services-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 20px; }
        .mts-net-service-card {
          display: flex; gap: 18px; background: #FFFFFF;
          border: 1px solid #DBE7F3; border-radius: 18px; padding: 26px;
          box-shadow: 0 5px 20px rgba(15,23,42,.035);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .mts-net-service-card:hover { transform: translateY(-2px); box-shadow: 0 12px 25px rgba(15,23,42,.065); }
        .mts-net-service-icon {
          width: 51px; height: 51px; flex: 0 0 51px;
          border-radius: 13px; display: grid; place-items: center;
          background: #EDF5FD; font-size: 23px;
        }
        .mts-net-service-card h3 {
          margin: 2px 0 8px; font-size: 18px; font-weight: 800; line-height: 1.3;
        }
        .mts-net-service-card p { font-size: 14px; line-height: 1.68; color: #526981; margin: 0; }
        .mts-net-identify { background: #EAF4FC; padding: 76px 24px 83px; }
        .mts-net-identify-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 55px; align-items: center; }
        .mts-net-need-list { display: grid; grid-template-columns: 1fr 1fr; gap: 13px; }
        .mts-net-need {
          background: #FFFFFF; border: 1px solid #D5E6F5; border-radius: 15px;
          padding: 19px; font-size: 14px; font-weight: 700; color: #294A69;
          min-height: 99px; display: flex; align-items: flex-start; gap: 10px; line-height: 1.5;
        }
        .mts-net-check { color: #0866E8; font-size: 17px; font-weight: 900; flex: 0 0 auto; }
        .mts-net-identify-link {
          display: inline-block; color: #0756C4; font-size: 14px; font-weight: 800;
          text-decoration: none; margin-top: 24px;
        }
        .mts-net-identify-link:hover { text-decoration: underline; }
        .mts-net-projects { padding: 91px 24px 90px; }
        .mts-net-project-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 23px; }
        .mts-net-project {
          background: #FFFFFF; border: 1px solid #DCE8F3;
          border-radius: 19px; overflow: hidden;
          box-shadow: 0 6px 23px rgba(0,35,75,.045);
        }
        .mts-net-project img { display: block; width: 100%; height: 255px; object-fit: cover; }
        .mts-net-project-copy { padding: 23px 25px 27px; }
        .mts-net-project-copy span {
          color: #0866E8; font-size: 11px; font-weight: 850;
          text-transform: uppercase; letter-spacing: .9px;
        }
        .mts-net-project h3 { margin: 10px 0 8px; font-size: 20px; font-weight: 800; }
        .mts-net-project p { margin: 0; color: #526981; font-size: 14px; line-height: 1.65; }
        .mts-net-process { padding: 74px 24px 81px; background: #F2F7FC; }
        .mts-net-process-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; }
        .mts-net-step { padding: 25px 24px; background: #FFFFFF; border: 1px solid #DBE7F3; border-radius: 16px; }
        .mts-net-step-number { display: block; color: #0866E8; font-size: 13px; font-weight: 850; margin-bottom: 14px; }
        .mts-net-step h3 { font-size: 17px; font-weight: 800; margin: 0 0 9px; }
        .mts-net-step p { margin: 0; color: #526981; font-size: 14px; line-height: 1.65; }
        .mts-net-cta-section { padding: 82px 24px 92px; }
        .mts-net-cta {
          border-radius: 24px; padding: 49px 43px;
          background: linear-gradient(110deg, #064E9B 0%, #00234B 100%);
          display: flex; justify-content: space-between; align-items: center; gap: 30px;
        }
        .mts-net-cta h2 { color: #FFFFFF; font-size: clamp(25px,2.6vw,32px); line-height: 1.22; margin: 0 0 12px; }
        .mts-net-cta p { color: #D3E5F7; margin: 0; font-size: 15px; line-height: 1.7; max-width: 610px; }
        .mts-net-cta .mts-net-button--primary { border-color: #64C9FF; white-space: nowrap; }
        .mts-net-footer {
          background: #071E39; border-top: 1px solid #1A4775; padding: 30px 24px;
          color: #E1EFFC; text-align: center; font-size: 13px;
        }
        .mts-net-footer-links { margin-top: 10px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .mts-net-footer a { color: #BFD5EA; text-decoration: none; }
        .mts-net-footer a:hover { text-decoration: underline; }
        @media (max-width: 940px) {
          .mts-net-hero-grid { grid-template-columns: 1fr; gap: 35px; }
          .mts-net-hero-photo { max-width: 680px; }
          .mts-net-identify-grid { grid-template-columns: 1fr; gap: 30px; }
          .mts-net-cta { align-items: flex-start; flex-direction: column; }
        }
        @media (max-width: 720px) {
          .mts-net-hero { padding: 62px 20px 65px; }
          .mts-net-hero h1 { font-size: 38px; }
          .mts-net-hero-lead { font-size: 16px; }
          .mts-net-hero-photo img { height: 270px; }
          .mts-net-services, .mts-net-projects { padding: 71px 20px 73px; }
          .mts-net-identify, .mts-net-process { padding: 64px 20px; }
          .mts-net-services-grid, .mts-net-project-grid, .mts-net-process-grid { grid-template-columns: 1fr; }
          .mts-net-service-card { padding: 21px; }
          .mts-net-need-list { grid-template-columns: 1fr; }
          .mts-net-need { min-height: 0; padding: 17px; }
          .mts-net-project img { height: 215px; }
          .mts-net-cta-section { padding: 69px 20px 77px; }
          .mts-net-cta { padding: 34px 25px; }
          .mts-net-hero-actions .mts-net-button { width: 100%; }
          .mts-net-cta .mts-net-button { width: 100%; }
        }
        @media (max-width: 420px) {
          .mts-net-hero h1 { font-size: 34px; }
          .mts-net-service-card { gap: 13px; }
          .mts-net-service-icon { width: 44px; height: 44px; flex-basis: 44px; font-size: 21px; }
        }
      `}</style>

      <SiteHeader phoneHref={`tel:+1${PHONE}`} />

      <main>
        <section className="mts-net-hero">
          <div className="mts-net-container mts-net-hero-grid">
            <div>
              <span className="mts-net-kicker">For Business · Central Florida</span>
              <h1>Business Networks &amp; Infrastructure</h1>
              <p className="mts-net-hero-lead">
                Reliable connections start with the right setup. We help businesses
                with Ethernet cabling, WiFi and mesh systems, VoIP, PoE connections,
                network equipment and troubleshooting.
              </p>
              <div className="mts-net-hero-actions">
                <a className="mts-net-button mts-net-button--primary" href={CONTACT_URL}>
                  Request Network Service
                </a>
                <a className="mts-net-button mts-net-button--outline" href={`tel:+1${PHONE}`}>
                  Call Now
                </a>
              </div>
              <div className="mts-net-hero-tags" aria-label="Common services">
                <span>Ethernet &amp; Cat6</span>
                <span>Business WiFi &amp; Mesh</span>
                <span>VoIP &amp; PoE</span>
              </div>
            </div>

            <figure className="mts-net-hero-photo">
              <Image
                src="/Projects/pic_01.jpg"
                alt="Network cabling, patch panel and network infrastructure from a Mighty Tech Solutions project"
                width={800}
                height={620}
                sizes="(max-width: 940px) 100vw, 48vw"
                priority
              />
              <figcaption>Real MTS project · Network cabling and infrastructure</figcaption>
            </figure>
          </div>
        </section>

        <section className="mts-net-services" id="network-services">
          <div className="mts-net-container">
            <div className="mts-net-section-intro">
              <span className="mts-net-kicker">What We Do</span>
              <h2 className="mts-net-heading">Find the network service you need</h2>
              <p className="mts-net-copy">
                Whether you are adding one connection or improving an entire office network,
                these are the areas where we can help.
              </p>
            </div>

            <div className="mts-net-services-grid">
              {SERVICES.map((service) => (
                <article className="mts-net-service-card" key={service.title}>
                  <div className="mts-net-service-icon" aria-hidden="true">{service.icon}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mts-net-identify">
          <div className="mts-net-container mts-net-identify-grid">
            <div>
              <span className="mts-net-kicker">Sound Familiar?</span>
              <h2 className="mts-net-heading">You know the problem. We help find the fix.</h2>
              <p className="mts-net-copy">
                You do not need to know whether the issue is the cable, equipment or
                configuration. Tell us what is not working and what you need to accomplish.
              </p>
              <a className="mts-net-identify-link" href={CONTACT_URL}>
                Tell us about your network →
              </a>
            </div>
            <div className="mts-net-need-list">
              {COMMON_NEEDS.map((need) => (
                <div className="mts-net-need" key={need}>
                  <span className="mts-net-check" aria-hidden="true">✓</span>
                  <span>{need}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mts-net-projects">
          <div className="mts-net-container">
            <div className="mts-net-section-intro">
              <span className="mts-net-kicker">Real Field Work</span>
              <h2 className="mts-net-heading">Network projects we have worked on</h2>
              <p className="mts-net-copy">
                Actual work from Mighty Tech Solutions, not stock project photography.
              </p>
            </div>
            <div className="mts-net-project-grid">
              {PROJECTS.map((project) => (
                <article className="mts-net-project" key={project.title}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={750}
                    height={400}
                    sizes="(max-width: 720px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="mts-net-project-copy">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mts-net-process">
          <div className="mts-net-container">
            <div className="mts-net-section-intro">
              <span className="mts-net-kicker">Our Approach</span>
              <h2 className="mts-net-heading">A straightforward process</h2>
            </div>
            <div className="mts-net-process-grid">
              {PROCESS.map((step) => (
                <div className="mts-net-step" key={step.number}>
                  <span className="mts-net-step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mts-net-cta-section">
          <div className="mts-net-container">
            <div className="mts-net-cta">
              <div>
                <h2>Need a network upgrade or help with an existing issue?</h2>
                <p>
                  Tell us what you need connected, where the equipment is located
                  and what is not working. We will review your request.
                </p>
              </div>
              <a className="mts-net-button mts-net-button--primary" href={CONTACT_URL}>
                Request Network Service
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mts-net-footer">
        © 2026 Mighty Tech Solutions LLC · Business &amp; Residential Technology · Central Florida
        <div className="mts-net-footer-links">
          <a href={`tel:+1${PHONE}`}>(689) 272-8874</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href="/">Home</a>
        </div>
      </footer>
    </div>
  );
}
