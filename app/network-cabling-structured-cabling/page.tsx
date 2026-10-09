import type { Metadata } from "next";

const PHONE = "6892728874";
const EMAIL = "mightytechsolutionsllc@gmail.com";
const SITE_URL = "https://www.mightytechfl.com";


const HERO_IMAGE = "/Projects/patch_panel2.jpg";

export const metadata: Metadata = {
  title: "Network Cabling & Structured Cabling | Mighty Tech FL",
  description:
    "Network cabling and structured cabling for small businesses in Orlando and Central Florida. Cat6, data drops, patch panels, racks and network cleanup.",
  alternates: {
    canonical: "/network-cabling-structured-cabling",
  },
  openGraph: {
    title: "Network Cabling & Structured Cabling | Mighty Tech FL",
    description:
      "Network cabling, structured cabling, Cat6 installation, data drops, patch panels and network infrastructure for Central Florida businesses.",
    url: `${SITE_URL}/network-cabling-structured-cabling`,
    siteName: "Mighty Tech Solutions",
    locale: "en_US",
    type: "website",
  },
};

const SERVICES = [
  {
    icon: "🔌",
    title: "Network Cabling Installation",
    description:
      "New network cable runs for offices, retail locations and small commercial environments that need reliable wired connectivity.",
  },
  {
    icon: "🌐",
    title: "Structured Cabling",
    description:
      "Organized network infrastructure designed around data drops, equipment locations, patch panels and the way the business actually operates.",
  },
  {
    icon: "🧵",
    title: "Cat6 Cabling",
    description:
      "Cat6 cable runs for computers, access points, cameras, printers, network equipment and other compatible Ethernet devices.",
  },
  {
    icon: "🔲",
    title: "Network Data Drops",
    description:
      "Add Ethernet connections where equipment, workstations, access points or other network devices need a physical network connection.",
  },
  {
    icon: "🗂️",
    title: "Patch Panel Installation",
    description:
      "Installation and termination of compatible patch panels to keep network cabling organized and easier to manage.",
  },
  {
    icon: "🗄️",
    title: "Network Rack Installation",
    description:
      "Rack installation, equipment placement and organization for small business network environments.",
  },
  {
    icon: "🔀",
    title: "Switch & Network Equipment Setup",
    description:
      "Installation and connection of compatible network switches, routers and related network equipment.",
  },
  {
    icon: "🧹",
    title: "Network Cleanup & Reorganization",
    description:
      "Improve existing network areas with better cable organization, equipment placement and identification of unnecessary or problematic connections.",
  },
  {
    icon: "🧪",
    title: "Cable Testing",
    description:
      "Basic testing and verification of installed network runs to confirm connectivity before the project is completed.",
  },
  {
    icon: "🛠️",
    title: "Existing Cabling Troubleshooting",
    description:
      "Help identify connectivity problems related to existing Ethernet runs, terminations, equipment or network organization.",
  },
];

const WHO_WE_HELP = [
  { icon: "🏢", title: "Small Offices" },
  { icon: "🛍️", title: "Retail Businesses" },
  { icon: "🏘️", title: "Property Managers" },
  { icon: "🚗", title: "Automotive Businesses" },
  { icon: "🏨", title: "Hospitality" },
  { icon: "💼", title: "Professional Services" },
  { icon: "✂️", title: "Salons & Studios" },
  { icon: "📦", title: "Small Warehouses" },
];

const PROCESS = [
  {
    number: "01",
    title: "Understand the network need",
    description:
      "We start with the devices, work areas, access points, cameras or equipment that need reliable network connectivity.",
  },
  {
    number: "02",
    title: "Plan cable paths",
    description:
      "We review practical cable routes, equipment locations, existing infrastructure and where network drops should terminate.",
  },
  {
    number: "03",
    title: "Install & terminate",
    description:
      "Compatible cabling, jacks, patch panels and related network components are installed and terminated as required by the project.",
  },
  {
    number: "04",
    title: "Organize & test",
    description:
      "We organize the finished installation and verify connectivity so the network infrastructure is ready for use.",
  },
];

const WHY = [
  {
    icon: "🧠",
    title: "Network-Focused Approach",
    description:
      "Cabling is planned as part of the network, not as an isolated wire run. Device locations, switches, access points and future use matter.",
  },
  {
    icon: "✨",
    title: "Clean Installations",
    description:
      "We pay attention to equipment placement, visible cabling, rack organization and how the finished installation looks.",
  },
  {
    icon: "🔍",
    title: "Practical Troubleshooting",
    description:
      "Existing cabling problems are approached as part of the complete network environment instead of assuming the cable is always the problem.",
  },
  {
    icon: "📈",
    title: "Built for Expansion",
    description:
      "A properly organized network makes it easier to add devices, access points, cameras and other technology later.",
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
    question: "Do you install Cat6 cable?",
    answer:
      "Yes. Mighty Tech Solutions installs Cat6 network cabling for compatible business networking applications, including computers, access points, cameras and other Ethernet-connected devices.",
  },
  {
    question: "Can you add Ethernet drops to an existing office?",
    answer:
      "Yes. We can add new network data drops where practical based on the building, cable path, equipment location and project requirements.",
  },
  {
    question: "Do you install patch panels and network racks?",
    answer:
      "Yes. We can install and organize compatible patch panels, network racks, switches and related network equipment as part of a small business network project.",
  },
  {
    question: "Can you clean up an existing network closet or media panel?",
    answer:
      "Yes. We can reorganize cabling and equipment, improve cable management and help identify connections or devices that need attention.",
  },
  {
    question: "Can you troubleshoot existing network cabling?",
    answer:
      "Yes. We can help diagnose connectivity issues involving existing Ethernet runs, terminations, switches, routers and related network equipment.",
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
  "@id": `${SITE_URL}/network-cabling-structured-cabling#service`,
  name: "Network Cabling & Structured Cabling",
  serviceType: "Network Cabling and Structured Cabling",
  url: `${SITE_URL}/network-cabling-structured-cabling`,
  description:
    "Network cabling, structured cabling, Cat6 installation, network data drops, patch panels and network infrastructure services for small businesses across Central Florida.",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Mighty Tech Solutions LLC",
    url: SITE_URL,
    telephone: "+1-689-272-8874",
  },
  areaServed: AREAS,
};

export default function NetworkCablingPage() {
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

          .context-link {
            color: #2563eb;
            font-weight: 750;
            text-decoration: none;
          }

          .context-link:hover {
            text-decoration: underline;
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
            className="button-link"
            href="/contact"
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
                Network Infrastructure • Central Florida
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
                Network Cabling & Structured Cabling in Central Florida
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
                Network cabling and structured cabling for small businesses,
                offices and commercial properties across Central Florida.
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
                We install and organize Cat6 cabling, Ethernet data drops, wall
                jacks, patch panels, network racks, switches and related
                infrastructure for new installations, expansions and existing
                networks that need improvement.
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
                  href="/contact"
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
                  "20 Google reviews",
                  "5.0 rating",
                  "Real commercial projects",
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
                alt="Network cabling and network infrastructure installation completed by Mighty Tech Solutions in Central Florida"
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
                  Real project 
                </div>

                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    marginBottom: 5,
                  }}
                >
                  Network Infrastructure Upgrade
                </div>

                <div
                  style={{
                    color: "#64748b",
                    fontSize: 13,
                    lineHeight: 1.55,
                  }}
                >
                  Network reorganization, equipment cleanup and wired
                  connectivity using existing Ethernet infrastructure.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
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
              Network Cabling Services
            </div>

            <h2
              className="section-title"
              style={{
                fontSize: 35,
                fontWeight: 850,
                margin: "0 0 13px",
              }}
            >
              Network infrastructure built around how your business works
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              Reliable networking starts with the physical infrastructure.
              Cable runs, data drops, patch panels, switches and equipment
              locations all need to work together instead of becoming a pile of
              disconnected parts.
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
                    {service.icon}
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
                Network cabling for real small-business environments
              </h2>

              <p
                style={{
                  color: "#64748b",
                  fontSize: 16,
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                We work with businesses that need new network connections,
                better organization, additional equipment or a cleaner
                foundation for WiFi, cameras and day-to-day operations.
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
              Our Approach
            </div>

            <h2
              className="section-title"
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: "0 0 12px",
              }}
            >
              From cable path planning to final testing
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              A useful cabling project begins with understanding what the
              network needs to support today and where the infrastructure may
              need to grow later.
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
                Network work that goes beyond simply running a cable
              </h2>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                  lineHeight: 1.72,
                  margin: "0 0 17px",
                }}
              >
                Mighty Tech Solutions works with networking as a complete
                environment. That can include Ethernet infrastructure, network
                equipment, WiFi, switches, access points and the devices that
                rely on the network every day.
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                Our project experience includes network reorganization and
                wired backhaul using existing Ethernet infrastructure, as well
                as business WiFi deployments where reliable connectivity was
                the central goal.
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
                Common network cabling needs
              </div>

              {[
                "Add Ethernet drops to an existing office",
                "Connect new WiFi access points",
                "Provide wired connections for cameras or devices",
                "Organize a network rack or equipment area",
                "Install or terminate a patch panel",
                "Clean up existing network cabling",
                "Expand network capacity for new equipment",
                "Troubleshoot unreliable wired connections",
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

        {/* WHY */}
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
                Cabling planned as part of the complete network
              </h2>

              <p
                style={{
                  color: "#64748b",
                  fontSize: 16,
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                The cable itself is only one part of the system. We look at how
                your network equipment, WiFi, cameras and connected devices
                need to work together.
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

        {/* CROSS SELL */}
        <section
          style={{
            background: "#f8fafc",
            padding: "70px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 1120,
              margin: "0 auto",
            }}
          >
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
                Connected Technology
              </div>

              <h2
                style={{
                  fontSize: 25,
                  fontWeight: 850,
                  margin: "0 0 10px",
                }}
              >
                Cabling often supports more than computers
              </h2>

              <p
                style={{
                  color: "#64748b",
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Ethernet infrastructure can also support WiFi access points,
                network-connected equipment and camera systems. For active
                connectivity, see our{" "}
                <a className="context-link" href="/business-wifi-networking">
                  Business WiFi & Networking services
                </a>
                . For hands-on troubleshooting and device support, see our{" "}
                <a className="context-link" href="/small-business-it-support">
                  Small Business IT Support
                </a>
                . If your project also includes surveillance, see our{" "}
                <a
                  className="context-link"
                  href="/security-camera-installation"
                >
                  security camera installation services
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
            padding: "78px 24px",
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
                Need new network cabling or help with existing infrastructure?
              </h2>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 15,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Tell us what you need connected, where the equipment is located
                and what problem you&apos;re trying to solve.
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
                href="/contact"
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
                Network Cabling Services Across Central Florida
              </h2>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Serving businesses across Orlando, Kissimmee, Davenport,
                Clermont, Haines City, Winter Haven, Winter Garden and
                surrounding Central Florida communities.
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
              Network Cabling & Structured Cabling FAQ
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
              Talk to Mighty Tech about your network cabling project
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
              New data drops, Cat6 cabling, network rack organization, patch
              panels, equipment installation or existing network cleanup —
              tell us what you need.
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
                href="/contact"
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