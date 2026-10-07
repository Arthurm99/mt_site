import type { Metadata } from "next";

const PHONE = "6892728874";
const SMS_URL = `sms:+1${PHONE}`;
const EMAIL = "mightytechsolutionsllc@gmail.com";
const SITE_URL = "https://www.mightytechfl.com";

export const metadata: Metadata = {
  title: "Business WiFi Installation & Networking | Mighty Tech FL",
  description:
    "Business WiFi installation, access points, routers, switches, guest WiFi, mesh networking and troubleshooting for small businesses across Central Florida.",
  alternates: {
    canonical: "/business-wifi-networking",
  },
  openGraph: {
    title: "Business WiFi Installation & Networking | Mighty Tech FL",
    description:
      "Business WiFi installation, access points, routers, switches, guest WiFi, mesh networking and troubleshooting across Central Florida.",
    url: `${SITE_URL}/business-wifi-networking`,
    siteName: "Mighty Tech Solutions LLC",
    type: "website",
  },
};

const SERVICES = [
  {
    title: "Business WiFi Installation",
    description:
      "Wireless network installation and configuration for offices, stores and other small-business environments.",
  },
  {
    title: "Wireless Access Point Installation",
    description:
      "Access point placement and configuration to improve usable coverage where your team and customers actually need it.",
  },
  {
    title: "Router Installation & Configuration",
    description:
      "Router replacement, setup and configuration for new locations, network upgrades and existing connectivity problems.",
  },
  {
    title: "Network Switch Installation",
    description:
      "Switch installation and basic network equipment organization for connected workstations, cameras, access points and other devices.",
  },
  {
    title: "Guest WiFi Setup",
    description:
      "Guest wireless setup for customer-facing businesses that need practical internet access separate from day-to-day business use.",
  },
  {
    title: "Mesh Network Installation",
    description:
      "Mesh WiFi deployment for smaller commercial spaces where a practical multi-node wireless system is the right fit.",
  },
  {
    title: "Network Optimization",
    description:
      "Improve placement, configuration and overall network layout when an existing system is underperforming.",
  },
  {
    title: "Network Troubleshooting",
    description:
      "Diagnose weak coverage, intermittent connectivity, poor device placement and common small-business network problems.",
  },
];

const WHO_WE_HELP = [
  "Small Offices",
  "Retail Stores",
  "Professional Services",
  "Salons & Studios",
  "Automotive Businesses",
  "Property Managers",
  "Mobile Businesses",
  "Customer-Facing Locations",
];

const USE_CASES = [
  {
    title: "Weak or inconsistent WiFi",
    text: "Improve coverage when employees, customer areas or connected devices are losing signal or performing inconsistently.",
  },
  {
    title: "New business location",
    text: "Set up the core WiFi, router and switching needed to get a new office or commercial space connected.",
  },
  {
    title: "Consumer equipment no longer fits",
    text: "Replace or reorganize an improvised network that has grown beyond the equipment or layout it started with.",
  },
  {
    title: "Guest connectivity",
    text: "Provide practical wireless access for customers, visitors or shared spaces without making the setup harder than it needs to be.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Understand the space",
    text: "We review the location, current equipment, problem areas, connected devices and how the business actually uses the network.",
  },
  {
    step: "02",
    title: "Plan the network",
    text: "We determine practical equipment placement, WiFi coverage needs and whether the existing cabling can support the design.",
  },
  {
    step: "03",
    title: "Install & configure",
    text: "We install and configure the selected router, access points, mesh system, switches and related network equipment.",
  },
  {
    step: "04",
    title: "Test & optimize",
    text: "We verify connectivity, check coverage in the important areas and make final configuration adjustments.",
  },
];

const AREAS = [
  "Orlando",
  "Kissimmee",
  "Davenport",
  "Clermont",
  "Haines City",
  "Winter Haven",
  "Winter Garden",
  "ChampionsGate",
  "Celebration",
  "Reunion",
  "Dr. Phillips",
];

const FAQS = [
  {
    q: "Do you install WiFi for small businesses?",
    a: "Yes. Mighty Tech Solutions installs and configures WiFi systems for small offices, retail spaces, customer-facing businesses and other small commercial environments across Central Florida.",
  },
  {
    q: "Can you improve an existing business WiFi system?",
    a: "Yes. We can troubleshoot weak coverage, poor equipment placement, unstable mesh systems, router issues and other common network problems before recommending replacement equipment.",
  },
  {
    q: "Do you install wireless access points?",
    a: "Yes. We install and configure wireless access points when they are a better fit than a consumer-style mesh system for the space and network requirements.",
  },
  {
    q: "Can you install Ethernet cabling for access points and network equipment?",
    a: "Yes. Physical cabling is handled under our Network Cabling & Structured Cabling service, including Cat6, Ethernet runs, data drops, patch panels and network racks.",
  },
  {
    q: "Do you provide full managed IT services?",
    a: "We currently focus on practical on-site technology support, networking, WiFi, troubleshooting and installation. We are not positioning this service as a full managed IT or MSP offering.",
  },
];

export default function BusinessWifiNetworkingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business WiFi Installation & Networking",
    serviceType: "Business WiFi Installation and Networking",
    url: `${SITE_URL}/business-wifi-networking`,
    provider: {
      "@type": "Organization",
      name: "Mighty Tech Solutions LLC",
      url: SITE_URL,
      telephone: `+1${PHONE}`,
      email: EMAIL,
    },
    areaServed: [
      "Orlando, FL",
      "Kissimmee, FL",
      "Davenport, FL",
      "Clermont, FL",
      "Haines City, FL",
      "Winter Haven, FL",
      "Winter Garden, FL",
      "Central Florida",
    ],
    description:
      "Business WiFi installation, access points, routers, switches, guest WiFi, mesh networking, optimization and troubleshooting for small businesses across Central Florida.",
  };

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#0f172a",
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <style>
        {`
          * { box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          body { margin: 0; }
          a {
            transition:
              opacity 0.15s ease,
              transform 0.15s ease,
              box-shadow 0.15s ease;
          }
          a:hover { opacity: 0.94; }
          .hero-grid {
            display: grid;
            grid-template-columns: 1.08fr 0.92fr;
            gap: 52px;
            align-items: center;
          }
          .service-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }
          .who-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 15px;
          }
          .use-case-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }
          .process-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 18px;
          }
          .related-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }
          .service-card,
          .use-case-card,
          .related-card {
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              border-color 0.18s ease;
          }
          .service-card:hover,
          .use-case-card:hover,
          .related-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
            border-color: #bfdbfe !important;
          }
          .mobile-nav { display: none; }

          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr; }
            .process-grid,
            .who-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .desktop-nav { display: none !important; }
            .mobile-nav { display: block; }
          }

          @media (max-width: 720px) {
            .service-grid,
            .use-case-grid,
            .related-grid { grid-template-columns: 1fr; }
            .hero-title { font-size: 39px !important; }
            .section-title { font-size: 29px !important; }
            .hero-section {
              padding-top: 52px !important;
              padding-bottom: 58px !important;
            }
            .cta-band { padding: 36px 24px !important; }
          }

          @media (max-width: 520px) {
            .process-grid,
            .who-grid { grid-template-columns: 1fr; }
            .hero-title { font-size: 35px !important; }
            .logo-image { height: 54px !important; }
          }
        `}
      </style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.97)",
          borderBottom: "1px solid #e2e8f0",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 24px",
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <a href="/" style={{ display: "block" }}>
            <img
              className="logo-image"
              src="/Logo_Horizontal_FB.JPG"
              alt="Mighty Tech Solutions LLC"
              style={{ height: 64, width: "auto", display: "block" }}
            />
          </a>

          <nav
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: 20 }}
          >
            {[
              ["Commercial Services", "/#commercial-services"],
              ["Residential Services", "/#residential-services"],
              ["Projects", "/#projects"],
              ["Reviews", "/#reviews"],
              ["Areas", "/#areas"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{
                  color: "#475569",
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 650,
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={SMS_URL}
            style={{
              background: "#0f172a",
              color: "#ffffff",
              padding: "12px 20px",
              borderRadius: 11,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            📱 Text Us
          </a>
        </div>

        <div className="mobile-nav">
          <details
            style={{
              borderTop: "1px solid #e2e8f0",
              background: "#ffffff",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                padding: "12px 24px",
                color: "#334155",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              Menu
            </summary>
            <div
              style={{
                padding: "0 24px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <a
                href="/#commercial-services"
                style={{ color: "#334155", textDecoration: "none" }}
              >
                Commercial Services
              </a>

              <a
                href="/#residential-services"
                style={{ color: "#334155", textDecoration: "none" }}
              >
                Residential Services
              </a>

              <a
                href="/#projects"
                style={{ color: "#334155", textDecoration: "none" }}
              >
                Projects
              </a>

              <a
                href="/#reviews"
                style={{ color: "#334155", textDecoration: "none" }}
              >
                Reviews
              </a>

              <a
                href="/#areas"
                style={{ color: "#334155", textDecoration: "none" }}
              >
                Areas
              </a>

              <a
                href={SMS_URL}
                style={{
                  marginTop: 6,
                  background: "#2563eb",
                  color: "#ffffff",
                  padding: "12px 16px",
                  borderRadius: 10,
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                📱 Text Us
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <section
        className="hero-section"
        style={{
          background:
            "linear-gradient(135deg, #f8fafc 0%, #eef6ff 55%, #f8fafc 100%)",
          padding: "82px 24px",
        }}
      >
        <div
          className="hero-grid"
          style={{ maxWidth: 1120, margin: "0 auto" }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#dbeafe",
                color: "#1d4ed8",
                padding: "7px 14px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 750,
                marginBottom: 22,
              }}
            >
              Business Networking · Central Florida
            </div>

            <h1
              className="hero-title"
              style={{
                fontSize: 49,
                fontWeight: 850,
                lineHeight: 1.08,
                margin: "0 0 22px",
                letterSpacing: "-1.5px",
                maxWidth: 720,
              }}
            >
              Business WiFi Installation & Networking
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "#475569",
                lineHeight: 1.72,
                margin: "0 0 31px",
                maxWidth: 720,
              }}
            >
              Business WiFi, wireless access points, routers, switches, guest
              WiFi, mesh networking and troubleshooting for small businesses
              across Central Florida.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="/#contact"
                style={{
                  background: "#2563eb",
                  color: "#ffffff",
                  padding: "15px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 750,
                }}
              >
                Request Service
              </a>

              <a
                href={`tel:+1${PHONE}`}
                style={{
                  background: "#0f172a",
                  color: "#ffffff",
                  padding: "15px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 750,
                }}
              >
                📞 Call Now
              </a>
            </div>

            <div
              style={{
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
                marginTop: 26,
                paddingTop: 20,
                borderTop: "1px solid #dbeafe",
              }}
            >
              {[
                "Small-business focused",
                "Installation + troubleshooting",
                "Commercial networking",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    color: "#64748b",
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: "#2563eb", fontWeight: 800 }}>✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid #dbeafe",
              boxShadow: "0 12px 45px rgba(15,23,42,0.12)",
              background: "#e2e8f0",
            }}
          >
            <img
              src="/Projects/business-mesh-wifi.jpg"
              alt="Business WiFi installation and networking project"
              style={{
                width: "100%",
                minHeight: 390,
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: "78px 24px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gap: 18,
          }}
        >
          <div
            style={{
              color: "#2563eb",
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Reliable Business Connectivity
          </div>
          <h2
            className="section-title"
            style={{
              fontSize: 35,
              fontWeight: 850,
              margin: 0,
              maxWidth: 790,
            }}
          >
            Your business network should work where the business actually happens
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 16,
              lineHeight: 1.75,
              margin: 0,
              maxWidth: 820,
            }}
          >
            Weak coverage, poorly placed equipment and an improvised network can
            create everyday problems for workstations, payment devices, cameras,
            displays and connected business systems. We focus on practical
            network design, installation and troubleshooting for small
            commercial environments.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#f8fafc", padding: "78px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 40 }}>
            <div
              style={{
                color: "#2563eb",
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 9,
              }}
            >
              Services Included
            </div>
            <h2
              className="section-title"
              style={{ fontSize: 33, fontWeight: 850, margin: "0 0 11px" }}
            >
              Business WiFi & networking services
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              The focus here is active connectivity: WiFi, routing, switching,
              network configuration and troubleshooting.
            </p>
          </div>

          <div className="service-grid">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="service-card"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 18,
                  padding: 26,
                }}
              >
                <div
                  style={{
                    color: "#2563eb",
                    fontSize: 20,
                    fontWeight: 900,
                    marginBottom: 10,
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: 14,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section style={{ padding: "74px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 740, marginBottom: 36 }}>
            <h2
              className="section-title"
              style={{ fontSize: 33, fontWeight: 850, margin: "0 0 11px" }}
            >
              Built for small-business environments
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              We work with businesses that need reliable connectivity without
              turning a straightforward network project into an oversized IT
              deployment.
            </p>
          </div>

          <div className="who-grid">
            {WHO_WE_HELP.map((item) => (
              <div
                key={item}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14,
                  padding: "20px 18px",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{ background: "#0f172a", padding: "76px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 38 }}>
            <div
              style={{
                color: "#93c5fd",
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 9,
              }}
            >
              Typical Use Cases
            </div>
            <h2
              className="section-title"
              style={{
                color: "#ffffff",
                fontSize: 33,
                fontWeight: 850,
                margin: "0 0 11px",
              }}
            >
              Common reasons businesses call us
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              Most projects start with a practical problem: poor coverage,
              unreliable connectivity, new equipment or a business location
              that needs a cleaner network setup.
            </p>
          </div>

          <div className="use-case-grid">
            {USE_CASES.map((item) => (
              <article
                key={item.title}
                className="use-case-card"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 17,
                  padding: 25,
                }}
              >
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: 18,
                    fontWeight: 800,
                    margin: "0 0 9px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: 14,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "78px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 40 }}>
            <div
              style={{
                color: "#2563eb",
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 9,
              }}
            >
              Our Process
            </div>
            <h2
              className="section-title"
              style={{ fontSize: 33, fontWeight: 850, margin: "0 0 11px" }}
            >
              From coverage problem to working network
            </h2>
          </div>

          <div className="process-grid">
            {PROCESS.map((item) => (
              <div
                key={item.step}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 17,
                  padding: 24,
                  background: "#ffffff",
                }}
              >
                <div
                  style={{
                    color: "#2563eb",
                    fontSize: 13,
                    fontWeight: 850,
                    marginBottom: 12,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: 14,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section style={{ background: "#f8fafc", padding: "74px 24px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            gap: 18,
          }}
        >
          <div
            style={{
              color: "#2563eb",
              fontSize: 13,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Network Equipment
          </div>
          <h2
            className="section-title"
            style={{
              fontSize: 33,
              fontWeight: 850,
              margin: 0,
              maxWidth: 760,
            }}
          >
            The right equipment for the size and use of the space
          </h2>
          <p
            style={{
              color: "#64748b",
              fontSize: 16,
              lineHeight: 1.75,
              margin: 0,
              maxWidth: 850,
            }}
          >
            Depending on the project, the network may use wireless access
            points, routers, switches or mesh systems. We focus on equipment
            placement, configuration and how the network supports the actual
            devices and workflow in the business.
          </p>
        </div>
      </section>

      {/* REAL PROJECT */}
      <section style={{ padding: "78px 24px" }}>
        <div
          className="hero-grid"
          style={{ maxWidth: 1120, margin: "0 auto" }}
        >
          <div>
            <div
              style={{
                color: "#2563eb",
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 10,
              }}
            >
              Real Project Experience
            </div>
            <h2
              className="section-title"
              style={{ fontSize: 33, fontWeight: 850, margin: "0 0 14px" }}
            >
              Business Mesh WiFi Upgrade — Orlando
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.75,
                margin: "0 0 18px",
              }}
            >
              For a local rent-a-car business, Mighty Tech Solutions configured
              a TP-Link Deco X55 mesh system to improve reliable connectivity
              throughout the facility.
            </p>
            <p
              style={{
                color: "#64748b",
                fontSize: 14,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              This is the type of small-business project this service is built
              around: practical network improvement using equipment and a layout
              appropriate for the site.
            </p>
          </div>

          <div
            style={{
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid #e2e8f0",
              background: "#e2e8f0",
            }}
          >
            <img
              src="/Projects/business-mesh-wifi.jpg"
              alt="Business mesh WiFi installation in Orlando"
              style={{
                width: "100%",
                height: 340,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section style={{ background: "#f8fafc", padding: "74px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <h2
              className="section-title"
              style={{ fontSize: 31, fontWeight: 850, margin: "0 0 11px" }}
            >
              Related technology services
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              WiFi and active network equipment often work alongside physical
              cabling, connected security systems and hands-on IT support.
            </p>
          </div>

          <div className="related-grid">
            <a
              className="related-card"
              href="/network-cabling-structured-cabling/"
              style={{
                display: "block",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 17,
                padding: 24,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  marginBottom: 7,
                }}
              >
                Network Cabling & Structured Cabling
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Cat6, Ethernet, data drops, patch panels, network racks and
                existing cabling troubleshooting.
              </div>
              <div
                style={{
                  color: "#2563eb",
                  fontSize: 14,
                  fontWeight: 750,
                  marginTop: 14,
                }}
              >
                View Cabling Services →
              </div>
            </a>

            <a
              className="related-card"
              href="/small-business-it-support/"
              style={{
                display: "block",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 17,
                padding: 24,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  marginBottom: 7,
                }}
              >
                Small Business IT Support
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                On-site troubleshooting, device setup, network support, equipment
                replacement and technology cleanup for small businesses.
              </div>
              <div
                style={{
                  color: "#2563eb",
                  fontSize: 14,
                  fontWeight: 750,
                  marginTop: 14,
                }}
              >
                View IT Support →
              </div>
            </a>

            <a
              className="related-card"
              href="/security-camera-installation/"
              style={{
                display: "block",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 17,
                padding: 24,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  marginBottom: 7,
                }}
              >
                Security Camera Installation
              </div>
              <div
                style={{
                  color: "#64748b",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Commercial and residential camera installation, configuration,
                upgrades and troubleshooting.
              </div>
              <div
                style={{
                  color: "#2563eb",
                  fontSize: 14,
                  fontWeight: 750,
                  marginTop: 14,
                }}
              >
                View Camera Services →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            className="section-title"
            style={{ fontSize: 31, fontWeight: 850, margin: "0 0 9px" }}
          >
            Business WiFi Service Areas
          </h2>
          <p
            style={{
              color: "#64748b",
              lineHeight: 1.7,
              margin: "0 0 30px",
            }}
          >
            Serving small businesses across Orange, Osceola, Polk and Lake
            counties and surrounding Central Florida communities.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {AREAS.map((area) => (
              <span
                key={area}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 999,
                  padding: "9px 18px",
                  fontSize: 14,
                  color: "#374151",
                  fontWeight: 550,
                }}
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f8fafc", padding: "76px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ marginBottom: 34 }}>
            <div
              style={{
                color: "#2563eb",
                fontSize: 13,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 9,
              }}
            >
              FAQ
            </div>
            <h2
              className="section-title"
              style={{ fontSize: 33, fontWeight: 850, margin: 0 }}
            >
              Business WiFi & networking questions
            </h2>
          </div>

          <div style={{ display: "grid", gap: 13 }}>
            {FAQS.map((item) => (
              <details
                key={item.q}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14,
                  padding: "18px 20px",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontWeight: 750,
                    color: "#1e293b",
                  }}
                >
                  {item.q}
                </summary>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: "14px 0 0",
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "70px 24px",
        }}
      >
        <div
          className="cta-band"
          style={{
            background: "#0f172a",
            borderRadius: 24,
            padding: "50px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 28,
          }}
        >
          <div style={{ maxWidth: 630 }}>
            <h2
              style={{
                color: "#ffffff",
                fontSize: 28,
                lineHeight: 1.25,
                fontWeight: 850,
                margin: "0 0 9px",
              }}
            >
              Need better WiFi or a more reliable business network?
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: 15,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Tell us what is not working, what you are trying to improve or
              what needs to be installed.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="/#contact"
              style={{
                background: "#2563eb",
                color: "#ffffff",
                padding: "14px 26px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 750,
              }}
            >
              Request Service
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
          padding: "29px 24px",
          textAlign: "center",
          color: "#94a3b8",
          fontSize: 13,
        }}
      >
        © 2026 Mighty Tech Solutions LLC · Commercial & Residential Technology
        Services · Central Florida

        <div
          style={{
            marginTop: 9,
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href={`tel:+1${PHONE}`}
            style={{ color: "#64748b", textDecoration: "none" }}
          >
            (689) 272-8874
          </a>
          <a
            href={`mailto:${EMAIL}`}
            style={{ color: "#64748b", textDecoration: "none" }}
          >
            {EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}
