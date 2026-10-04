import type { Metadata } from "next";

const PHONE = "6892728874";
const SMS_URL = `sms:+1${PHONE}`;
const EMAIL = "mightytechsolutionsllc@gmail.com";
const SITE_URL = "https://www.mightytechfl.com";

export const metadata: Metadata = {
  title: "Small Business IT Support | Mighty Tech Solutions",
  description:
    "On-site small business IT support, troubleshooting, WiFi and network support, device setup and technology cleanup across Central Florida.",
  alternates: {
    canonical: "/small-business-it-support/",
  },
  openGraph: {
    title: "Small Business IT Support | Mighty Tech Solutions",
    description:
      "Practical on-site IT support, troubleshooting, network support, device setup and technology cleanup for small businesses across Central Florida.",
    url: `${SITE_URL}/small-business-it-support/`,
    siteName: "Mighty Tech Solutions LLC",
    type: "website",
  },
};

const SERVICES = [
  {
    title: "Small Business IT Support",
    description:
      "Practical on-site support for everyday technology problems that affect small offices, stores and commercial spaces.",
  },
  {
    title: "On-Site IT Support",
    description:
      "Hands-on assistance when the problem requires someone physically at the location to diagnose, reconnect, replace or reconfigure equipment.",
  },
  {
    title: "IT Troubleshooting",
    description:
      "Troubleshooting for common business technology problems involving devices, connectivity, peripherals and network equipment.",
  },
  {
    title: "Network Troubleshooting",
    description:
      "Diagnose connectivity issues, equipment problems and network behavior that is disrupting normal business use.",
  },
  {
    title: "WiFi Troubleshooting",
    description:
      "Identify weak coverage, unstable connections, poor equipment placement and common configuration issues.",
  },
  {
    title: "Device Setup & Configuration",
    description:
      "Setup and configuration for business devices and connected technology that need to work together reliably.",
  },
  {
    title: "Network Equipment Replacement",
    description:
      "Replace and configure routers, switches, access points and related equipment when existing hardware is no longer reliable or appropriate.",
  },
  {
    title: "Technology Audits",
    description:
      "Review the current setup to identify obvious weak points, disorganization, aging equipment and practical improvement opportunities.",
  },
  {
    title: "Network Cleanup",
    description:
      "Clean up disorganized equipment, cabling and network layouts so the system is easier to understand, maintain and expand.",
  },
  {
    title: "Equipment Reorganization",
    description:
      "Reorganize routers, switches, hubs, power supplies and other technology equipment into a cleaner and more practical arrangement.",
  },
  {
    title: "New Office Technology Setup",
    description:
      "Help prepare a small office or business location with the core connectivity and technology needed for day-to-day operations.",
  },
];

const WHO_WE_HELP = [
  "Small Offices",
  "Retail Stores",
  "Professional Services",
  "Salons & Studios",
  "Automotive Businesses",
  "Property Managers",
  "Hospitality Businesses",
  "Mobile Businesses",
];

const USE_CASES = [
  {
    title: "Technology is working, but not reliably",
    text: "Intermittent WiFi, devices dropping offline, unstable equipment or recurring problems can be harder to solve than a complete failure.",
  },
  {
    title: "A business inherited a messy setup",
    text: "Older routers, switches, cables and devices often accumulate without documentation or organization. We help make the environment understandable again.",
  },
  {
    title: "A device or network component needs replacement",
    text: "When equipment fails or is no longer appropriate, we can replace and configure it without turning the job into a full IT overhaul.",
  },
  {
    title: "A new location needs practical technology setup",
    text: "We can help establish the essential network, WiFi and device setup for a new small-business location.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Understand the problem",
    text: "We start with what is actually failing, unreliable or difficult for the business to use.",
  },
  {
    step: "02",
    title: "Inspect the environment",
    text: "We review the relevant devices, network equipment, connections and physical setup before changing things unnecessarily.",
  },
  {
    step: "03",
    title: "Troubleshoot or improve",
    text: "We repair, replace, reconfigure or reorganize the parts of the system that are creating the problem.",
  },
  {
    step: "04",
    title: "Test the result",
    text: "We verify the affected equipment and connectivity so the business can return to normal operation with a clearer setup.",
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
    q: "Do you provide on-site IT support for small businesses?",
    a: "Yes. Mighty Tech Solutions provides practical on-site technology support for small businesses that need help with connectivity, WiFi, network equipment, devices and related troubleshooting.",
  },
  {
    q: "Do you offer managed IT services or ongoing MSP contracts?",
    a: "Not as a full managed IT or MSP product at this time. This service is focused on on-site support, troubleshooting, setup, equipment replacement, cleanup and practical technology projects.",
  },
  {
    q: "Can you troubleshoot business WiFi and network problems?",
    a: "Yes. We troubleshoot WiFi coverage, router and switch issues, connectivity problems and other common small-business network problems.",
  },
  {
    q: "Can you replace routers, switches or access points?",
    a: "Yes. We can replace and configure common network equipment when existing hardware has failed, is unreliable or needs to be upgraded.",
  },
  {
    q: "Can you help organize an existing network setup?",
    a: "Yes. Network cleanup and equipment reorganization are part of this service. For new Cat6, Ethernet, data drops, patch panels or racks, use our Network Cabling & Structured Cabling service.",
  },
];

export default function SmallBusinessITSupportPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Small Business IT Support",
    serviceType: "Small Business IT Support",
    url: `${SITE_URL}/small-business-it-support/`,
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
      "On-site small business IT support, troubleshooting, WiFi and network support, device setup, equipment replacement and technology cleanup across Central Florida.",
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
          * {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            margin: 0;
          }

          a {
            transition:
              opacity 0.15s ease,
              transform 0.15s ease,
              box-shadow 0.15s ease;
          }

          a:hover {
            opacity: 0.94;
          }

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
            grid-template-columns: repeat(3, minmax(0, 1fr));
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

          .mobile-nav {
            display: none;
          }

          @media (max-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr;
            }

            .process-grid,
            .who-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .related-grid {
              grid-template-columns: 1fr;
            }

            .desktop-nav {
              display: none !important;
            }

            .mobile-nav {
              display: block;
            }
          }

          @media (max-width: 720px) {
            .service-grid,
            .use-case-grid {
              grid-template-columns: 1fr;
            }

            .hero-title {
              font-size: 39px !important;
            }

            .section-title {
              font-size: 29px !important;
            }

            .hero-section {
              padding-top: 52px !important;
              padding-bottom: 58px !important;
            }

            .cta-band {
              padding: 36px 24px !important;
            }
          }

          @media (max-width: 520px) {
            .process-grid,
            .who-grid {
              grid-template-columns: 1fr;
            }

            .hero-title {
              font-size: 35px !important;
            }

            .logo-image {
              height: 54px !important;
            }
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
              style={{
                height: 64,
                width: "auto",
                display: "block",
              }}
            />
          </a>

          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
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
            href="/#contact"
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
            Contact Us
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
          style={{
            maxWidth: 1120,
            margin: "0 auto",
          }}
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
              On-Site Technology Support · Central Florida
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
              Small Business IT Support
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
              Practical on-site IT support, troubleshooting, WiFi and network
              support, device setup, equipment replacement and technology
              cleanup for small businesses across Central Florida.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
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
                "On-site support",
                "Troubleshooting + setup",
                "Small-business focused",
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
              src="/Projects/pc-repair.jpg"
              alt="Small business IT support and network troubleshooting"
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
            Practical Technology Support
          </div>

          <h2
            className="section-title"
            style={{
              fontSize: 35,
              fontWeight: 850,
              margin: 0,
              maxWidth: 820,
            }}
          >
            Not every technology problem requires a full IT department
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: 16,
              lineHeight: 1.75,
              margin: 0,
              maxWidth: 860,
            }}
          >
            Small businesses often need someone who can come on site, understand
            the equipment that is already there and solve the actual problem.
            That may mean troubleshooting WiFi, replacing a router, cleaning up
            a network setup, reconnecting devices or helping a new location get
            its core technology working correctly.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          background: "#f8fafc",
          padding: "78px 24px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 40 }}>
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
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: "0 0 11px",
              }}
            >
              On-site IT support for everyday business technology
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              Focused on practical installation, troubleshooting, replacement,
              cleanup and configuration — not a generic managed IT package.
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
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: "0 0 11px",
              }}
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
              For businesses that need capable hands-on support without buying
              an oversized technology package.
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
      <section
        style={{
          background: "#0f172a",
          padding: "76px 24px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 38 }}>
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
              Common reasons businesses need on-site support
            </h2>
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
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: 0,
              }}
            >
              Diagnose first, change only what makes sense
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

      {/* REAL EXPERIENCE */}
      <section
        style={{
          background: "#f8fafc",
          padding: "76px 24px",
        }}
      >
        <div
          className="hero-grid"
          style={{
            maxWidth: 1120,
            margin: "0 auto",
          }}
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
              Real Field Experience
            </div>

            <h2
              className="section-title"
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: "0 0 14px",
              }}
            >
              Network cleanup, equipment reorganization and system recovery
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.75,
                margin: "0 0 18px",
              }}
            >
              Mighty Tech Solutions has worked on existing technology systems
              that needed more than a new device. That includes network
              reorganization, equipment cleanup, troubleshooting and recovery
              of systems whose original configuration was no longer usable.
            </p>

            <p
              style={{
                color: "#64748b",
                fontSize: 14,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              The goal is practical: understand what is already there, preserve
              what still makes sense and correct the parts that are creating the
              problem.
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
              src="/Projects/pc-repair.jpg"
              alt="Network infrastructure cleanup and reorganization"
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
      <section style={{ padding: "74px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 34 }}>
            <h2
              className="section-title"
              style={{
                fontSize: 31,
                fontWeight: 850,
                margin: "0 0 11px",
              }}
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
              Some support calls turn into a more specific networking, cabling
              or security project. These services handle those needs directly.
            </p>
          </div>

          <div className="related-grid">
            <a
              className="related-card"
              href="/business-wifi-networking/"
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
                Business WiFi & Networking
              </div>

              <div
                style={{
                  color: "#64748b",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                WiFi, access points, routers, switches, guest WiFi, optimization
                and network troubleshooting.
              </div>

              <div
                style={{
                  color: "#2563eb",
                  fontSize: 14,
                  fontWeight: 750,
                  marginTop: 14,
                }}
              >
                View WiFi Services →
              </div>
            </a>

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
      <section
        style={{
          background: "#f8fafc",
          padding: "70px 24px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            className="section-title"
            style={{
              fontSize: 31,
              fontWeight: 850,
              margin: "0 0 9px",
            }}
          >
            Small Business IT Support Areas
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

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {AREAS.map((area) => (
              <span
                key={area}
                style={{
                  background: "#ffffff",
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
      <section style={{ padding: "76px 24px" }}>
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
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: 0,
              }}
            >
              Small business IT support questions
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: 13,
            }}
          >
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
              Need help with a technology problem at your business?
            </h2>

            <p
              style={{
                color: "#94a3b8",
                fontSize: 15,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Tell us what is not working, what needs to be replaced or what
              you are trying to set up.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
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
            style={{
              color: "#64748b",
              textDecoration: "none",
            }}
          >
            (689) 272-8874
          </a>

          <a
            href={`mailto:${EMAIL}`}
            style={{
              color: "#64748b",
              textDecoration: "none",
            }}
          >
            {EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}
