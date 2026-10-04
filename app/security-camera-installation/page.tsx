import type { Metadata } from "next";

const PHONE = "6892728874";
const EMAIL = "mightytechsolutionsllc@gmail.com";
const SITE_URL = "https://www.mightytechfl.com";

const SMS_URL = `sms:+1${PHONE}`;

// Temporary image.
// We can replace this later with the strongest security-camera project photo.
const HERO_IMAGE = "/Projects/security-camera-av-installation.jpg";

export const metadata: Metadata = {
  title: "Security Camera Installation | Mighty Tech FL",
  description:
    "Security camera installation for businesses and homes in Orlando and Central Florida. Wired and wireless cameras, setup, remote viewing and troubleshooting.",
  alternates: {
    canonical: "/security-camera-installation/",
  },
  openGraph: {
    title: "Security Camera Installation | Mighty Tech FL",
    description:
      "Security camera installation, configuration, upgrades and troubleshooting for businesses and homes across Central Florida.",
    url: `${SITE_URL}/security-camera-installation/`,
    siteName: "Mighty Tech Solutions",
    locale: "en_US",
    type: "website",
  },
};

const SERVICES = [
  {
    title: "Security Camera Installation",
    description:
      "New security camera installations for businesses, commercial properties, rental properties and homes.",
  },
  {
    title: "Wired Camera Installation",
    description:
      "Installation and configuration of compatible wired camera systems where stable physical connectivity is appropriate.",
  },
  {
    title: "Wireless Camera Installation",
    description:
      "Setup and configuration of compatible WiFi-connected cameras for properties where wireless installation makes sense.",
  },
  {
    title: "NVR Camera Systems",
    description:
      "Connection and configuration of compatible cameras, network video recorders and viewing equipment.",
  },
  {
    title: "Camera Replacement & Upgrades",
    description:
      "Replace cameras, expand existing systems or improve coverage when your current setup no longer meets your needs.",
  },
  {
    title: "Remote Viewing Setup",
    description:
      "Configuration and testing of compatible mobile apps and remote viewing access for authorized users.",
  },
  {
    title: "Camera Positioning",
    description:
      "Practical camera placement based on the areas you actually need to monitor and the conditions of the property.",
  },
  {
    title: "Security Camera Troubleshooting",
    description:
      "Diagnosis of cameras that are offline, unreliable, poorly configured or not accessible from the expected devices.",
  },
];

const WHO_WE_HELP = [
  { icon: "🏢", title: "Small Offices" },
  { icon: "🛍️", title: "Retail Businesses" },
  { icon: "🏘️", title: "Property Managers" },
  { icon: "🚗", title: "Automotive Businesses" },
  { icon: "🚐", title: "Mobile Businesses" },
  { icon: "🏠", title: "Homes & Rentals" },
  { icon: "✂️", title: "Salons & Studios" },
  { icon: "💼", title: "Professional Services" },
];

const PROCESS = [
  {
    number: "01",
    title: "Understand the property",
    description:
      "We start with what you need to monitor, your existing equipment, available connectivity and how you expect to access the cameras.",
  },
  {
    number: "02",
    title: "Plan camera placement",
    description:
      "We consider useful viewing angles, equipment location, available infrastructure and practical installation conditions.",
  },
  {
    number: "03",
    title: "Install & configure",
    description:
      "Compatible cameras and related equipment are installed, connected and configured with attention to clean placement and reliable operation.",
  },
  {
    number: "04",
    title: "Test the system",
    description:
      "We verify camera views, connectivity, app access and basic system operation before considering the installation complete.",
  },
];

const WHY = [
  {
    icon: "🔍",
    title: "Practical Camera Placement",
    description:
      "The installation starts with what you actually need to see, not simply where a camera is easiest to mount.",
  },
  {
    icon: "✨",
    title: "Clean Installation",
    description:
      "Equipment placement, visible cabling and the finished appearance of the installation matter.",
  },
  {
    icon: "📱",
    title: "Configuration Included",
    description:
      "Where supported by the equipment, we configure the system and help establish app or remote viewing access.",
  },
  {
    icon: "🛠️",
    title: "Troubleshooting Experience",
    description:
      "We also work with existing systems that need diagnosis, replacement, expansion or configuration changes.",
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
];

const FAQS = [
  {
    question: "Do you install security cameras for businesses?",
    answer:
      "Yes. Mighty Tech Solutions installs and configures security camera systems for small businesses and commercial environments across Central Florida.",
  },
  {
    question: "Do you install residential security cameras too?",
    answer:
      "Yes. We also provide security camera installation and setup for homes, rental properties and other residential environments.",
  },
  {
    question: "Do you install wired and wireless cameras?",
    answer:
      "Yes, depending on the equipment, property and project requirements. We can help determine which approach makes sense for the installation.",
  },
  {
    question: "Can you work with an existing camera system?",
    answer:
      "Yes. We can troubleshoot many existing systems, replace compatible equipment, improve configuration or expand coverage where appropriate.",
  },
  {
    question: "Can you set up remote viewing on my phone?",
    answer:
      "For compatible camera systems, we can configure and test the manufacturer's mobile app or remote viewing functionality for authorized users.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Orlando, Kissimmee, Davenport, Clermont, Haines City, Winter Haven, Winter Garden and surrounding Central Florida communities.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/security-camera-installation/#service`,
  name: "Security Camera Installation",
  serviceType: "Security Camera Installation",
  url: `${SITE_URL}/security-camera-installation/`,
  description:
    "Security camera installation, configuration, remote viewing setup, upgrades and troubleshooting for businesses and homes across Central Florida.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Mighty Tech Solutions LLC",
    url: SITE_URL,
    telephone: "+1-689-272-8874",
  },
  areaServed: AREAS,
};

export default function SecurityCameraInstallationPage() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        color: "#0f172a",
        background: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

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

          .desktop-nav {
            display: flex;
          }

          .mobile-menu {
            display: none;
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
            gap: 22px;
          }

          .who-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
          }

          .process-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 18px;
          }

          .why-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 18px;
          }

          .proof-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 34px;
            align-items: center;
          }

          .service-card,
          .proof-card {
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              border-color 0.18s ease;
          }

          .service-card:hover,
          .proof-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
            border-color: #bfdbfe !important;
          }

          .nav-link {
            color: #475569;
            text-decoration: none;
            font-size: 13px;
            font-weight: 650;
            white-space: nowrap;
          }

          .nav-link:hover {
            color: #2563eb;
          }

          .button-link {
            transition:
              transform 0.15s ease,
              opacity 0.15s ease,
              box-shadow 0.15s ease;
          }

          .button-link:hover {
            opacity: 0.94;
          }

          .faq-item:last-child {
            border-bottom: none !important;
          }

          @media (max-width: 1080px) {
            .desktop-nav {
              display: none !important;
            }

            .header-whatsapp {
              display: none !important;
            }

            .mobile-menu {
              display: block;
            }
          }

          @media (max-width: 900px) {
            .hero-grid,
            .proof-grid {
              grid-template-columns: 1fr;
            }

            .who-grid,
            .why-grid,
            .process-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 720px) {
            .service-grid,
            .who-grid,
            .why-grid,
            .process-grid {
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

            .hero-actions a {
              width: 100%;
              text-align: center;
            }

            .hero-image {
              height: 320px !important;
            }
          }

          @media (max-width: 520px) {
            .hero-title {
              font-size: 35px !important;
            }

            .logo-image {
              height: 54px !important;
            }

            .hero-image {
              height: 270px !important;
            }
          }
        `}
      </style>

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
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
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
              gap: 18,
              alignItems: "center",
            }}
          >
            <a className="nav-link" href="/#commercial-services">
              Commercial Services
            </a>

            <a className="nav-link" href="/#residential-services">
              Residential Services
            </a>

            <a className="nav-link" href="/#projects">
              Projects
            </a>

            <a className="nav-link" href="/#reviews">
              Reviews
            </a>

            <a className="nav-link" href="/#areas">
              Areas
            </a>
          </nav>

          <a
            className="header-whatsapp button-link"
            href="/#contact"
            style={{
              background: "#0f172a",
              color: "#ffffff",
              padding: "12px 20px",
              borderRadius: 11,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 7,
              whiteSpace: "nowrap",
            }}
          >
            Contact Us
          </a>

          <details
            className="mobile-menu"
            style={{
              position: "relative",
            }}
          >
            <summary
              aria-label="Open navigation menu"
              style={{
                listStyle: "none",
                width: 44,
                height: 44,
                alignItems: "center",
                justifyContent: "center",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                cursor: "pointer",
                fontSize: 22,
                display: "flex",
              }}
            >
              ☰
            </summary>

            <div
              style={{
                position: "absolute",
                right: 0,
                top: 53,
                minWidth: 245,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 14,
                padding: 16,
                boxShadow: "0 12px 35px rgba(15,23,42,0.12)",
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
                    display: "block",
                    padding: "10px 4px",
                    color: "#334155",
                    textDecoration: "none",
                    fontSize: 14,
                    fontWeight: 650,
                  }}
                >
                  {label}
                </a>
              ))}

              <a
                href={SMS_URL}
                style={{
                  marginTop: 10,
                  background: "#2563eb",
                  color: "#ffffff",
                  padding: "12px 16px",
                  borderRadius: 10,
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: 700,
                  display: "block",
                }}
              >
                📱 Text Us
              </a>
            </div>
          </details>
        </div>
      </header>

      <main>
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
                Security Cameras • Central Florida
              </div>

              <h1
                className="hero-title"
                style={{
                  fontSize: 49,
                  fontWeight: 850,
                  lineHeight: 1.08,
                  margin: "0 0 22px",
                  letterSpacing: "-1.5px",
                  maxWidth: 690,
                }}
              >
                Security Camera Installation in Central Florida
              </h1>

              <p
                style={{
                  fontSize: 18,
                  color: "#475569",
                  lineHeight: 1.72,
                  margin: "0 0 18px",
                  maxWidth: 680,
                }}
              >
                Security camera installation, configuration and troubleshooting
                for small businesses, commercial properties and homes across
                Central Florida.
              </p>

              <p
                style={{
                  fontSize: 15,
                  color: "#64748b",
                  lineHeight: 1.72,
                  margin: "0 0 31px",
                  maxWidth: 680,
                }}
              >
                We work with wired and wireless cameras, compatible NVR
                systems, camera replacement and upgrades, remote viewing setup
                and practical camera positioning based on the property and the
                areas you need to monitor.
              </p>

              <div
                className="hero-actions"
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <a
                  className="button-link"
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
                  className="button-link"
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
                }}
              >
                {[
                  "Commercial & residential",
                  "5.0 Google rating",
                  "Central Florida service",
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
                    <span style={{ color: "#2563eb", fontWeight: 800 }}>
                      ✓
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 8px 45px rgba(15,23,42,0.12)",
              }}
            >
              <img
                className="hero-image"
                src={HERO_IMAGE}
                alt="Security camera installation completed by Mighty Tech Solutions in Central Florida"
                style={{
                  width: "100%",
                  height: 430,
                  display: "block",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "20px 22px",
                }}
              >
                <div
                  style={{
                    color: "#2563eb",
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.8px",
                    marginBottom: 5,
                  }}
                >
                  Real Project
                </div>

                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    marginBottom: 5,
                  }}
                >
                  Security Camera Installation
                </div>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: 13,
                    lineHeight: 1.55,
                  }}
                >
                  Installation, positioning, configuration and final system
                  testing.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM / USE CASE */}
        <section
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "82px 24px",
          }}
        >
          <div style={{ maxWidth: 780, marginBottom: 42 }}>
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
              Security Camera Services
            </div>

            <h2
              className="section-title"
              style={{
                fontSize: 35,
                fontWeight: 850,
                margin: "0 0 13px",
              }}
            >
              Install, upgrade or troubleshoot your camera system
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              Whether you are starting from scratch or dealing with an existing
              camera system that is not working the way it should, we focus on
              the practical parts of the project: useful coverage, equipment
              connectivity, configuration and reliable access.
            </p>
          </div>

          <div className="service-grid">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="service-card"
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 18,
                  padding: 26,
                  background: "#ffffff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 13,
                      background: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    📷
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        margin: "1px 0 7px",
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WHO WE HELP */}
        <section
          style={{
            background: "#f8fafc",
            padding: "78px 24px",
          }}
        >
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div style={{ maxWidth: 740, marginBottom: 38 }}>
              <h2
                className="section-title"
                style={{
                  fontSize: 33,
                  fontWeight: 850,
                  margin: "0 0 11px",
                }}
              >
                Security cameras for businesses, properties and homes
              </h2>

              <p
                style={{
                  color: "#64748b",
                  fontSize: 16,
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                Camera requirements vary by property. We work with customers
                who need practical visibility around business operations,
                buildings, entrances, exterior areas and residential
                properties.
              </p>
            </div>

            <div className="who-grid">
              {WHO_WE_HELP.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 14,
                    padding: "20px 18px",
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: 25 }}>{item.icon}</div>

                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "82px 24px",
          }}
        >
          <div style={{ maxWidth: 760, marginBottom: 42 }}>
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
              How We Approach the Job
            </div>

            <h2
              className="section-title"
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: "0 0 12px",
              }}
            >
              From camera placement to final testing
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              A camera system needs more than equipment mounted to a wall.
              Placement, connectivity, configuration and testing all affect
              whether the finished system is actually useful.
            </p>
          </div>

          <div className="process-grid">
            {PROCESS.map((step) => (
              <div
                key={step.number}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 17,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    color: "#2563eb",
                    fontSize: 13,
                    fontWeight: 850,
                    marginBottom: 14,
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: 14,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* REAL EXPERIENCE */}
        <section
          style={{
            background: "#0f172a",
            padding: "76px 24px",
          }}
        >
          <div
            className="proof-grid"
            style={{
              maxWidth: 1120,
              margin: "0 auto",
            }}
          >
            <div>
              <div
                style={{
                  color: "#60a5fa",
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
                  color: "#ffffff",
                  fontSize: 33,
                  fontWeight: 850,
                  lineHeight: 1.2,
                  margin: "0 0 17px",
                }}
              >
                Camera systems installed for real operating environments
              </h2>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                  lineHeight: 1.72,
                  margin: "0 0 17px",
                }}
              >
                Mighty Tech Solutions has completed camera installations for
                residential and business customers, including exterior camera
                systems, multi-camera projects, app configuration and systems
                integrated into day-to-day property or business use.
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                One commercial example involved a multi-camera monitoring
                system for a mobile pet grooming operation, where cameras were
                used as part of the business&apos;s operating environment rather
                than as a decorative technology upgrade.
              </p>
            </div>

            <div
              className="proof-card"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 18,
                padding: 28,
              }}
            >
              <div
                style={{
                  color: "#ffffff",
                  fontSize: 18,
                  fontWeight: 800,
                  marginBottom: 18,
                }}
              >
                Common reasons customers call us
              </div>

              {[
                "Add camera coverage to areas that are difficult to monitor",
                "Install cameras at a new business or property",
                "Replace or expand an existing camera system",
                "Configure mobile app access and remote viewing",
                "Troubleshoot cameras that are offline or unreliable",
                "Improve camera positioning or system usability",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    color: "#cbd5e1",
                    fontSize: 14,
                    lineHeight: 1.6,
                    padding: "10px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    style={{
                      color: "#60a5fa",
                      fontWeight: 900,
                    }}
                  >
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY MIGHTY TECH */}
        <section
          style={{
            padding: "78px 24px",
          }}
        >
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div style={{ maxWidth: 740, marginBottom: 40 }}>
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
                Why Mighty Tech Solutions
              </div>

              <h2
                className="section-title"
                style={{
                  fontSize: 33,
                  fontWeight: 850,
                  margin: "0 0 11px",
                }}
              >
                A practical approach to security camera installation
              </h2>

              <p
                style={{
                  color: "#64748b",
                  fontSize: 16,
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                The goal is not simply to install equipment. It is to leave you
                with a camera system that is positioned sensibly, configured
                correctly and usable after the job is finished.
              </p>
            </div>

            <div className="why-grid">
              {WHY.map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 16,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      marginBottom: 14,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div
                    style={{
                      color: "#0f172a",
                      fontWeight: 750,
                      marginBottom: 9,
                    }}
                  >
                    {item.title}
                  </div>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: 14,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section
          style={{
            background: "#f8fafc",
            padding: "70px 24px",
          }}
        >
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div
              style={{
                maxWidth: 830,
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 18,
                padding: 30,
              }}
            >
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
                Related Technology Services
              </div>

              <h2
                style={{
                  fontSize: 25,
                  fontWeight: 850,
                  margin: "0 0 10px",
                }}
              >
                Cameras depend on the network around them
              </h2>

              <p
                style={{
                  color: "#64748b",
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                If your camera project also needs stronger connectivity, see our{" "}
                <a
                  href="/business-wifi-networking/"
                  style={{ color: "#2563eb", fontWeight: 750, textDecoration: "none" }}
                >
                  Business WiFi & Networking services
                </a>
                . For troubleshooting, device configuration and broader on-site
                technology support, see our{" "}
                <a
                  href="/small-business-it-support/"
                  style={{ color: "#2563eb", fontWeight: 750, textDecoration: "none" }}
                >
                  Small Business IT Support
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "10px 24px 78px",
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
                Need security cameras installed or an existing system checked?
              </h2>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Tell us what you need to monitor, what equipment you already
                have and what problem you&apos;re trying to solve.
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
                className="button-link"
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

        {/* AREAS */}
        <section
          style={{
            background: "#f8fafc",
            padding: "70px 24px",
          }}
        >
          <div style={{ maxWidth: 1120, margin: "0 auto" }}>
            <div style={{ maxWidth: 800, marginBottom: 32 }}>
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
                Service Areas
              </div>

              <h2
                className="section-title"
                style={{
                  fontSize: 31,
                  fontWeight: 850,
                  margin: "0 0 10px",
                }}
              >
                Security Camera Installation Across Central Florida
              </h2>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Serving businesses and homes across Orlando, Kissimmee,
                Davenport, Clermont, Haines City, Winter Haven, Winter Garden
                and surrounding Central Florida communities.
              </p>
            </div>

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
        <section
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "82px 24px",
          }}
        >
          <div style={{ maxWidth: 760, marginBottom: 36 }}>
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
              Frequently Asked Questions
            </div>

            <h2
              className="section-title"
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: 0,
              }}
            >
              Security Camera Installation FAQ
            </h2>
          </div>

          <div
            style={{
              maxWidth: 900,
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 18,
              padding: "0 26px",
            }}
          >
            {FAQS.map((faq) => (
              <article
                key={faq.question}
                className="faq-item"
                style={{
                  padding: "23px 0",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  {faq.question}
                </h3>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: 14,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 24px 78px",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
              border: "1px solid #bfdbfe",
              borderRadius: 24,
              padding: "48px 38px",
              textAlign: "center",
            }}
          >
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
              Request Service
            </div>

            <h2
              style={{
                color: "#0f172a",
                fontSize: 30,
                lineHeight: 1.25,
                fontWeight: 850,
                margin: "0 auto 12px",
                maxWidth: 760,
              }}
            >
              Talk to Mighty Tech about your security camera project
            </h2>

            <p
              style={{
                color: "#475569",
                fontSize: 15,
                lineHeight: 1.7,
                margin: "0 auto 28px",
                maxWidth: 680,
              }}
            >
              New installation, camera replacement, system expansion or
              troubleshooting — send us the project details and we&apos;ll help
              determine the next step.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                className="button-link"
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

              <a
                className="button-link"
                href={`tel:+1${PHONE}`}
                style={{
                  background: "#0f172a",
                  color: "#ffffff",
                  padding: "14px 26px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 750,
                }}
              >
                📞 (689) 272-8874
              </a>
            </div>
          </div>
        </section>
      </main>

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
            href="/"
            style={{
              color: "#64748b",
              textDecoration: "none",
            }}
          >
            Home
          </a>

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
    </div>
  );
}