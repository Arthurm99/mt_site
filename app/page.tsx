"use client";

import { useState } from "react";

const PHONE = "6892728874";
const WA_URL = `https://wa.me/1${PHONE}`;
const SMS_URL = `sms:+1${PHONE}`;
const EMAIL = "mightytechsolutionsllc@gmail.com";

const NAV = [
  { label: "Commercial Services", id: "commercial-services" },
  { label: "Residential Services", id: "residential-services" },
  { label: "Projects", id: "projects" },
  { label: "Reviews", id: "reviews" },
  { label: "Areas", id: "areas" },
];

const COMMERCIAL_SERVICE_GROUPS = [
  {
    icon: "🌐",
    title: "Business Networking & WiFi",
    summary:
      "Reliable wired and wireless connectivity for offices, stores and small commercial spaces.",
    items: [
      "Business Network Installation",
      "Small Business Network Setup",
      "Office Network Installation",
      "Business WiFi Installation",
      "Wireless Access Point Installation",
      "Router Installation & Configuration",
      "Network Switch Installation",
      "Guest WiFi Setup",
      "Mesh Network Installation",
      "Network Optimization",
      "Network Troubleshooting",
    ],
  },
  {
    icon: "🔌",
    title: "Structured Cabling & Network Infrastructure",
    summary:
      "Clean, organized network infrastructure for new installations, expansions and existing systems.",
    items: [
      "Ethernet / Cat6 Cable Installation",
      "Network Data Drops",
      "Patch Panel Installation",
      "Network Rack Installation",
      "Rack Organization & Cleanup",
      "Cable Management",
      "Network Equipment Installation",
      "Equipment Relocation",
      "Network Expansion",
      "Existing Cabling Troubleshooting",
    ],
  },
  {
    icon: "📷",
    title: "Security Cameras & Video Surveillance",
    summary:
      "Camera systems for better visibility, monitoring and day-to-day property awareness.",
    items: [
      "Security Camera Installation",
      "Wired Camera Installation",
      "Wireless Camera Installation",
      "NVR Camera Systems",
      "Camera Replacement & Upgrades",
      "Camera Positioning",
      "Monitoring Display Setup",
      "Camera System Configuration",
      "Remote Viewing Setup",
      "Security Camera Troubleshooting",
    ],
  },
  {
    icon: "🚪",
    title: "Access Control & Gate Automation",
    summary:
      "Entry, gate and access technology for businesses, properties and controlled access areas.",
    items: [
      "Gate Operator Installation",
      "Gate Opener Replacement",
      "Gate Operator Troubleshooting",
      "Keypad Installation",
      "Remote Control Setup",
      "Gate Sensor Setup",
      "Door Entry Systems",
      "Card / Fob Access",
      "Access Control Device Setup",
      "Access System Configuration",
      "Access System Troubleshooting",
    ],
  },
  {
    icon: "📺",
    title: "Commercial AV & Displays",
    summary:
      "Professional display and AV installations for offices, customer areas and business environments.",
    items: [
      "Commercial TV Installation",
      "Conference Room Display Installation",
      "Digital Display Installation",
      "Waiting Room TV Installation",
      "Wall-Mounted Display Installation",
      "Display Configuration",
      "Soundbar Installation",
      "Commercial AV Setup",
      "Cable Management",
      "AV Troubleshooting",
    ],
  },
  {
    icon: "🛠️",
    title: "Business Technology Support",
    summary:
      "Practical troubleshooting, configuration and cleanup when your technology is not working the way it should.",
    items: [
      "Technology Troubleshooting",
      "Network Troubleshooting",
      "WiFi Troubleshooting",
      "Device Setup & Configuration",
      "Network Equipment Replacement",
      "Technology Audit",
      "Network Cleanup",
      "Equipment Reorganization",
      "System Expansion",
      "New Office Technology Setup",
    ],
  },
];

const RESIDENTIAL_SERVICE_GROUPS = [
  {
    icon: "📶",
    title: "Home WiFi & Networking",
    summary:
      "Reliable home connectivity, better wireless coverage and practical network troubleshooting.",
    items: [
      "Home WiFi Installation",
      "Mesh WiFi Installation",
      "Router Setup & Configuration",
      "WiFi Coverage Optimization",
      "Ethernet Connections",
      "Home Network Troubleshooting",
    ],
  },
  {
    icon: "📷",
    title: "Home Security Technology",
    summary:
      "Security cameras and connected entry devices for residential properties.",
    items: [
      "Security Camera Installation",
      "Wireless Security Cameras",
      "Wired Security Cameras",
      "Video Doorbell Installation",
      "Camera Configuration",
      "Remote Viewing Setup",
      "Camera Troubleshooting",
    ],
  },
  {
    icon: "🏠",
    title: "Smart Home & Access",
    summary:
      "Smart devices installed and configured to work reliably together.",
    items: [
      "Smart Home Setup",
      "Smart Lock Installation",
      "Smart Thermostat Installation",
      "Alexa Setup",
      "Google Home Setup",
      "Apple HomeKit Setup",
      "Smart Device Setup",
      "Smart Device Troubleshooting",
    ],
  },
  {
    icon: "📺",
    title: "TV & Home AV",
    summary:
      "Clean TV, soundbar and entertainment technology installations.",
    items: [
      "TV Mounting",
      "Large TV Installation",
      "Soundbar Installation",
      "Home Theater Setup",
      "Display Configuration",
      "Cable Management",
      "Home AV Troubleshooting",
    ],
  },
];

const BUSINESS_CLIENTS = [
  {
    name: "Sorella Premiere Properties",
    logo: "/Clients/Sorella.png",
  },
  {
    name: "APM Car Rental",
    logo: "/Clients/APM.png",
  },
  {
    name: "Sunworth",
    logo: "/Clients/Sunworth.png",
  },
  {
    name: "Passion Pets Spa Grooming",
    logo: "/Clients/PassionPets.png",
  },
  {
    name: "Tachimotors",
    logo: "/Clients/Tachimotors.png",
  },
  {
    name: "Bal Bahia Interiors",
    logo: "/Clients/BalBahia.png",
  },
];

const WHO_WE_HELP = [
  { icon: "🏢", title: "Small Offices" },
  { icon: "🛍️", title: "Retail Stores" },
  { icon: "💼", title: "Professional Services" },
  { icon: "✂️", title: "Salons & Studios" },
  { icon: "🩺", title: "Medical & Dental Offices" },
  { icon: "🚗", title: "Automotive Businesses" },
  { icon: "🏘️", title: "Property Managers" },
  { icon: "🚐", title: "Mobile Businesses" },
];

const WHY = [
  {
    icon: "🧠",
    title: "Technical Background",
    desc: "Networking, connected systems, devices and troubleshooting handled with a practical technical approach.",
  },
  {
    icon: "✨",
    title: "Clean Installations",
    desc: "Thoughtful equipment placement, organized cabling and attention to how the finished installation looks and works.",
  },
  {
    icon: "🔍",
    title: "Practical Troubleshooting",
    desc: "We look beyond the obvious symptom to understand what is actually causing unreliable technology or poor performance.",
  },
  {
    icon: "🤝",
    title: "One Point of Contact",
    desc: "Networking, WiFi, cameras, displays, access systems and smart technology through one technology provider.",
  },
];

const REVIEWS = [
  {
    name: "Keith Banda",
    text: "Great experience with Mighty Tech Solutions. They installed two Google Nest Floodlight Cameras. The work was professional, everything was tested and working properly, and communication was clear throughout the process. Highly recommended for any of your smart home needs! Very affordable in addition.",
  },
  {
    name: "Edgardo Medina",
    text: "Arturo from Mighty Tech Solutions installed a Ring Doorbell, 2 exterior security cameras, and door sensors for our front and back doors.",
  },
  {
    name: "Eliana Iglesias",
    text: "Excellent service! I needed some electrical troubleshooting at home and they responded immediately. The technician was super professional, neat, and explained everything clearly. It’s hard to find reliable electricians, but Mighty Tech Solutions is definitely my new go-to. Highly recommend them!",
  },
  {
    name: "Lenna Cordido",
    text: "Arturo installed a very solid mesh system in my home to reinforce the Wi-Fi signal strength, installed a camera in my garage and connected it to Alexa so I can easily view it, replaced my broken doorbell, and also checked an exterior outlet.",
  },
  {
    name: "Mighty Engines LLC",
    text: "Mighty Tech Solutions did a great job installing 4 exterior security cameras and a smart lock for our business.",
  },
  {
    name: "daniela montilva",
    text: "Excellent service! Really quality. Arturo installed 4 floodlight cameras and an access control system for our business.",
  },
  {
    name: "Alex Bui",
    text: "Arturo runs a great business. He promptly answered my questions and was able to get me quotes same day. I was on a tight timeline and he ensured me we were going to complete it. Everything was done smoothly and professionally.",
  },
  {
    name: "Fabiola Galeano",
    text: "Mighty Tech Solutions helped me with my security cameras. Now I can monitor my home remotely from anywhere. I truly recommend them! ✅",
  },
  {
    name: "Michelle Ingeme",
    text: "I highly recommend Mighty Techs! They installed our Google Home system, Nest thermostat, security camera, and mesh Wi-Fi network, and the entire experience was excellent from start to finish.",
  },
  {
    name: "Victor Blanco",
    text: "Arturo installed two exterior floodlight cameras and connected them with Alexa so we can view them from our kitchen display. He also installed a smart thermostat for us.",
  },
  {
    name: "Alvaro Blanco",
    text: "Arturo installed a mesh WiFi system to improve the signal throughout our home. He also installed smoke sensors and automated our garage door so we can open it with Alexa.",
  },
  {
    name: "Hector Padron torrealba",
    text: "Mighty Tech Solutions helped set up our smart access control system, I'm really happy with the service and highly recommend.",
  },
  {
    name: "Juan Oropeza",
    text: "Very happy with the installation of security cameras and a doorbell at home, thanks",
  },
  {
    name: "Gary Taylor",
    text: "We were having a recurring problem with a smart lock in our Airbnb. Arturo was very knowledgeable and identified the problem and fixed it quickly. Highly recommend!!",
  },
  {
    name: "Luisangel Martínez",
    text: "Mighty Tech Solutions helped replace all the kitchen outlets and also replaced the kitchen light fixtures as part of my home restoration project. I'm really happy with how everything turned out and highly recommend them!",
  },
];

type Project = {
  title: string;
  location: string;
  description: string;
  image: string;
  label: string;
};

const PROJECTS: Project[] = [
  {
    title: "Business Mesh WiFi Upgrade",
    location: "Orlando, FL",
    description:
      "Mesh WiFi configuration for a local rent-a-car business to improve reliable connectivity throughout its facility using a TP-Link Deco X55 system.",
    image: "/Projects/business-mesh-wifi.jpg",
    label: "Commercial Networking",
  },
  {
    title: "Network Infrastructure Upgrade",
    location: "Central Florida",
    description:
      "Media panel cleanup, network reorganization and TP-Link Deco X55 mesh installation with wired backhaul using the property's existing Ethernet infrastructure.",
    image: "/Projects/network-infrastructure-upgrade.jpg",
    label: "Network Infrastructure",
  },
  {
    title: "Security Camera & AV Installation",
    location: "Central Florida",
    description:
      "Exterior security camera installation combined with professional mounting and setup of 65-inch and 77-inch displays, including positioning, testing and clean final setup.",
    image: "/Projects/security-camera-av-installation.jpg",
    label: "Security & AV",
  },
  {
    title: "AV System Recovery & Reprogramming",
    location: "Kissimmee, FL",
    description:
      "Troubleshooting and recovery of an existing Logitech Harmony home theater control system after the original account credentials and previous configuration were no longer available.",
    image: "/Projects/av-system-recovery.jpg",
    label: "Technical Troubleshooting",
  },
];

const AREAS = [
  "Orlando",
  "Kissimmee",
  "Davenport",
  "Clermont",
  "Winter Garden",
  "Haines City",
  "ChampionsGate",
  "Celebration",
  "Reunion",
  "Dr. Phillips",
];

type ContactForm = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    service: "Business Network Installation",
    message: "",
  });

  const visibleReviews = showAllReviews ? REVIEWS : REVIEWS.slice(0, 6);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  const requestService = (service: string) => {
    setForm((current) => ({
      ...current,
      service,
    }));

    setTimeout(() => {
      scrollTo("contact");
    }, 50);
  };

  const handleSend = () => {
    if (!form.name || !form.phone) return;

    const msg = encodeURIComponent(
      `Hi! I'm ${form.name}. I need help with: ${form.service}. ${form.message} My phone: ${form.phone}`
    );

    window.open(`https://wa.me/1${PHONE}?text=${msg}`, "_blank");
    setSent(true);
  };

  const toggleReviews = () => {
    if (showAllReviews) {
      setShowAllReviews(false);

      setTimeout(() => {
        document.getElementById("reviews")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    } else {
      setShowAllReviews(true);
    }
  };

  return (
    <div
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

          button,
          input,
          select,
          textarea {
            font-family: inherit;
          }

          button {
            transition:
              transform 0.15s ease,
              opacity 0.15s ease,
              box-shadow 0.15s ease;
          }

          button:hover {
            opacity: 0.94;
          }

          .desktop-nav {
            display: flex;
          }

          .mobile-menu-button,
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

          .client-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 18px;
          }

          .who-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
          }

          .why-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 18px;
          }

          .project-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }

          .residential-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .reviews-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
          }

          .service-card,
          .project-card,
          .client-card,
          .review-card {
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              border-color 0.18s ease;
          }

          .service-card:hover,
          .project-card:hover,
          .review-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
            border-color: #bfdbfe !important;
          }

          .client-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 28px rgba(15, 23, 42, 0.07);
          }

          .service-item {
            width: 100%;
            display: flex;
            align-items: flex-start;
            gap: 9px;
            text-align: left;
            color: #334155;
            font-size: 14px;
            line-height: 1.45;
            background: transparent;
            border: none;
            border-radius: 8px;
            padding: 6px 7px;
            cursor: pointer;
          }

          .service-item:hover {
            background: #eff6ff;
            color: #1d4ed8;
          }

          @media (max-width: 1080px) {
            .desktop-nav {
              display: none !important;
            }

            .header-whatsapp {
              display: none !important;
            }

            .mobile-menu-button {
              display: flex;
            }

            .mobile-menu {
              display: block;
            }
          }

          @media (max-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr;
            }

            .why-grid,
            .who-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .reviews-grid,
            .client-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          @media (max-width: 720px) {
            .service-grid,
            .project-grid,
            .residential-grid,
            .client-grid,
            .reviews-grid {
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
            .who-grid,
            .why-grid {
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

          <nav
            className="desktop-nav"
            style={{
              gap: 18,
              alignItems: "center",
            }}
          >
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  color: "#475569",
                  fontWeight: 650,
                  padding: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a
            className="header-whatsapp"
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
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
            💬 WhatsApp
          </a>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Open navigation menu"
            style={{
              width: 44,
              height: 44,
              alignItems: "center",
              justifyContent: "center",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              cursor: "pointer",
              fontSize: 22,
            }}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div
            className="mobile-menu"
            style={{
              background: "#ffffff",
              borderTop: "1px solid #e2e8f0",
              padding: "12px 24px 20px",
            }}
          >
            <div
              style={{
                maxWidth: 1120,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  style={{
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "12px 0",
                    cursor: "pointer",
                    fontSize: 15,
                    color: "#334155",
                    fontWeight: 650,
                  }}
                >
                  {item.label}
                </button>
              ))}

              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: 10,
                  background: "#25d366",
                  color: "#ffffff",
                  padding: "13px 18px",
                  borderRadius: 10,
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        )}
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
              Serving Central Florida
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
              Commercial Technology Infrastructure for Small Businesses
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "#475569",
                lineHeight: 1.72,
                margin: "0 0 31px",
                maxWidth: 680,
              }}
            >
              Networking, WiFi, structured cabling, security cameras, access
              control, gate automation, commercial displays and technology
              support across Central Florida.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  background: "#2563eb",
                  color: "#ffffff",
                  padding: "15px 28px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 15,
                  fontWeight: 750,
                }}
              >
                Request Service
              </button>

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
                marginTop: 26,
                paddingTop: 20,
                borderTop: "1px solid #dbeafe",
                maxWidth: 675,
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#64748b",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#334155" }}>
                  Residential customer?
                </strong>{" "}
                We also provide home WiFi, security cameras, smart home, video
                doorbell and AV services.{" "}
                <button
                  onClick={() => scrollTo("residential-services")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#2563eb",
                    fontSize: 14,
                    fontWeight: 750,
                    cursor: "pointer",
                  }}
                >
                  View Residential Services →
                </button>
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
                marginTop: 24,
              }}
            >
              {[
                "15 Google reviews",
                "5.0 rating",
                "Commercial & residential",
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

          {/* CONTACT */}
          <div
            id="contact"
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 20,
              padding: 32,
              boxShadow: "0 8px 45px rgba(15,23,42,0.12)",
              scrollMarginTop: 105,
            }}
          >
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                margin: "0 0 7px",
              }}
            >
              Tell us what you need
            </h2>

            <p
              style={{
                fontSize: 13,
                color: "#64748b",
                lineHeight: 1.55,
                margin: "0 0 22px",
              }}
            >
              Describe the project or problem and we&apos;ll follow up with
              availability and next steps.
            </p>

            {sent ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: 42 }}>✅</div>

                <p style={{ fontWeight: 750, marginTop: 12 }}>
                  Request opened in WhatsApp.
                </p>

                <p style={{ color: "#64748b", fontSize: 14 }}>
                  Send the message and we&apos;ll get back to you.
                </p>

                <button
                  onClick={() => setSent(false)}
                  style={{
                    marginTop: 16,
                    background: "#0f172a",
                    color: "#ffffff",
                    border: "none",
                    padding: "10px 24px",
                    borderRadius: 10,
                    cursor: "pointer",
                    fontWeight: 650,
                  }}
                >
                  Start another request
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 650,
                      color: "#374151",
                      marginBottom: 5,
                    }}
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        name: e.target.value,
                      }))
                    }
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: 10,
                      border: "1.5px solid #e2e8f0",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 650,
                      color: "#374151",
                      marginBottom: 5,
                    }}
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="(407) 555-0000"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        phone: e.target.value,
                      }))
                    }
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: 10,
                      border: "1.5px solid #e2e8f0",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 650,
                      color: "#374151",
                      marginBottom: 5,
                    }}
                  >
                    Service needed
                  </label>

                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        service: e.target.value,
                      }))
                    }
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: 10,
                      border: "1.5px solid #e2e8f0",
                      fontSize: 14,
                      background: "#ffffff",
                    }}
                  >
                    {COMMERCIAL_SERVICE_GROUPS.map((group) => (
                      <optgroup key={group.title} label={group.title}>
                        {group.items.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </optgroup>
                    ))}

                    {RESIDENTIAL_SERVICE_GROUPS.map((group) => (
                      <optgroup
                        key={group.title}
                        label={`Residential - ${group.title}`}
                      >
                        {group.items.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 650,
                      color: "#374151",
                      marginBottom: 5,
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    placeholder="Briefly describe the project or problem"
                    value={form.message}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        message: e.target.value,
                      }))
                    }
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: 10,
                      border: "1.5px solid #e2e8f0",
                      fontSize: 14,
                      minHeight: 84,
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  onClick={handleSend}
                  style={{
                    background: "#25d366",
                    color: "#ffffff",
                    border: "none",
                    padding: "14px",
                    borderRadius: 12,
                    cursor: "pointer",
                    fontSize: 15,
                    fontWeight: 750,
                  }}
                >
                  💬 Send via WhatsApp
                </button>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={`tel:+1${PHONE}`}
                    style={{
                      fontSize: 13,
                      color: "#2563eb",
                      textDecoration: "none",
                    }}
                  >
                    📞 (689) 272-8874
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    style={{
                      fontSize: 13,
                      color: "#2563eb",
                      textDecoration: "none",
                    }}
                  >
                    ✉️ Email us
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMMERCIAL SERVICES */}
      <section
        id="commercial-services"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "82px 24px",
          scrollMarginTop: 90,
        }}
      >
        <div style={{ maxWidth: 780, marginBottom: 44 }}>
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
            Commercial Services
          </div>

          <h2
            className="section-title"
            style={{
              fontSize: 35,
              fontWeight: 850,
              margin: "0 0 13px",
            }}
          >
            Technology services for your business
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: 16,
              lineHeight: 1.72,
              margin: 0,
            }}
          >
            Find the exact service you need. From a single wireless access
            point or camera to a complete network, cabling or access system.
          </p>
        </div>

        <div className="service-grid">
          {COMMERCIAL_SERVICE_GROUPS.map((group) => (
            <div
              key={group.title}
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
                    fontSize: 25,
                    flexShrink: 0,
                  }}
                >
                  {group.icon}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 800,
                      margin: "1px 0 7px",
                    }}
                  >
                    {group.title}
                  </h3>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: 14,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {group.summary}
                  </p>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid #e2e8f0",
                  marginTop: 20,
                  paddingTop: 14,
                }}
              >
                {group.items.map((item) => (
                  <button
                    key={item}
                    className="service-item"
                    onClick={() => requestService(item)}
                  >
                    <span style={{ color: "#2563eb", fontWeight: 900 }}>✓</span>
                    <span>{item}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESIDENTIAL SERVICES */}
      <section
        id="residential-services"
        style={{
          background: "#f8fafc",
          padding: "78px 24px",
          scrollMarginTop: 90,
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: 42 }}>
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
              Residential Services
            </div>

            <h2
              className="section-title"
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: "0 0 11px",
              }}
            >
              Technology services for your home
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              Home WiFi, security cameras, video doorbells, smart locks, smart
              home systems, TV mounting and connected technology.
            </p>
          </div>

          <div className="residential-grid">
            {RESIDENTIAL_SERVICE_GROUPS.map((group) => (
              <div
                key={group.title}
                className="service-card"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 17,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 13,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 12,
                      background: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                    }}
                  >
                    {group.icon}
                  </div>

                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      margin: 0,
                    }}
                  >
                    {group.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: "#64748b",
                    lineHeight: 1.6,
                  }}
                >
                  {group.summary}
                </p>

                <div
                  style={{
                    borderTop: "1px solid #e2e8f0",
                    paddingTop: 13,
                  }}
                >
                  {group.items.map((item) => (
                    <button
                      key={item}
                      className="service-item"
                      onClick={() => requestService(item)}
                    >
                      <span style={{ color: "#2563eb", fontWeight: 900 }}>✓</span>
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section
        style={{
          background: "#0f172a",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <h2
            className="section-title"
            style={{
              fontSize: 33,
              fontWeight: 850,
              color: "#ffffff",
              margin: "0 0 40px",
            }}
          >
            Why Mighty Tech Solutions?
          </h2>

          <div className="why-grid">
            {WHY.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 16,
                  padding: 24,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 14 }}>
                  {item.icon}
                </div>

                <div
                  style={{
                    color: "#ffffff",
                    fontWeight: 750,
                    marginBottom: 9,
                  }}
                >
                  {item.title}
                </div>

                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: 14,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS ENVIRONMENTS */}
      <section style={{ padding: "72px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 730, marginBottom: 38 }}>
            <h2
              className="section-title"
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: "0 0 11px",
              }}
            >
              Built for real business environments
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 16,
                lineHeight: 1.72,
                margin: 0,
              }}
            >
              From new locations to existing systems that need improvement, we
              focus on practical technology solutions that fit the way your
              business actually operates.
            </p>
          </div>

          <div className="who-grid">
            {WHO_WE_HELP.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 14,
                  padding: "20px 18px",
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: 25 }}>{item.icon}</div>

                <div style={{ fontSize: 14, fontWeight: 700 }}>
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          background: "#f8fafc",
          padding: "82px 24px",
          scrollMarginTop: 90,
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
              Recent Work
            </div>

            <h2
              className="section-title"
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: "0 0 10px",
              }}
            >
              Recent Projects
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Selected projects that show our work in networking, technology
              infrastructure, security, AV and technical troubleshooting.
            </p>
          </div>

          <div className="project-grid">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="project-card"
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "#ffffff",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 300,
                    overflow: "hidden",
                    background: "#e2e8f0",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      background: "rgba(15,23,42,0.88)",
                      color: "#ffffff",
                      borderRadius: 999,
                      padding: "7px 12px",
                      fontSize: 11,
                      fontWeight: 750,
                      letterSpacing: "0.3px",
                    }}
                  >
                    {project.label}
                  </div>
                </div>

                <div style={{ padding: 24 }}>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 800,
                      margin: "0 0 6px",
                    }}
                  >
                    {project.title}
                  </h3>

                  <div
                    style={{
                      color: "#2563eb",
                      fontSize: 13,
                      fontWeight: 650,
                      marginBottom: 12,
                    }}
                  >
                    📍 {project.location}
                  </div>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: 14,
                      lineHeight: 1.68,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section
        id="clients"
        style={{
          padding: "70px 24px",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              maxWidth: 720,
              margin: "0 auto 40px",
            }}
          >
            <div
              style={{
                color: "#2563eb",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: 9,
              }}
            >
              Commercial Experience
            </div>

            <h2
              className="section-title"
              style={{
                fontSize: 31,
                fontWeight: 850,
                margin: "0 0 11px",
              }}
            >
              Businesses We&apos;ve Worked With
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 14,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Selected businesses we&apos;ve provided technology installation
              and support services to.
            </p>
          </div>

          <div className="client-grid">
            {BUSINESS_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="client-card"
                style={{
                  height: 170,
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 17,
                  padding: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  title={client.name}
                  style={{
                    maxWidth: "88%",
                    maxHeight: 105,
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>

          <p
            style={{
              maxWidth: 800,
              margin: "24px auto 0",
              textAlign: "center",
              color: "#94a3b8",
              fontSize: 11,
              lineHeight: 1.6,
            }}
          >
            Company names and logos are the property of their respective owners.
            Their appearance does not imply endorsement or affiliation.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        style={{
          background: "#f8fafc",
          padding: "78px 24px",
          scrollMarginTop: 90,
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: 10,
            }}
          >
            <h2
              className="section-title"
              style={{
                fontSize: 33,
                fontWeight: 850,
                margin: 0,
              }}
            >
              Google Reviews
            </h2>

            <div
              style={{
                display: "flex",
                gap: 9,
                alignItems: "center",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 999,
                padding: "8px 16px",
              }}
            >
              <span
                style={{
                  color: "#f59e0b",
                  fontSize: 18,
                  letterSpacing: -1,
                }}
              >
                ★★★★★
              </span>

              <span style={{ fontWeight: 800, fontSize: 14 }}>5.0</span>

              <span style={{ color: "#64748b", fontSize: 13 }}>
                · {REVIEWS.length} reviews
              </span>
            </div>
          </div>

          <p
            style={{
              color: "#64748b",
              lineHeight: 1.7,
              margin: "0 0 38px",
              maxWidth: 720,
            }}
          >
            Real feedback from customers who trusted Mighty Tech Solutions with
            their homes, businesses and technology projects.
          </p>

          <div className="reviews-grid">
            {visibleReviews.map((review) => (
              <article
                key={review.name}
                className="review-card"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 17,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 245,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 15,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#dbeafe",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "#1d4ed8",
                      flexShrink: 0,
                    }}
                  >
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#1e293b",
                      }}
                    >
                      {review.name}
                    </div>

                    <div
                      style={{
                        color: "#f59e0b",
                        fontSize: 16,
                        letterSpacing: -1,
                        marginTop: 2,
                      }}
                    >
                      ★★★★★
                    </div>
                  </div>
                </div>

                <p
                  style={{
                    color: "#475569",
                    fontSize: 14,
                    lineHeight: 1.68,
                    margin: 0,
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 18,
                    color: "#94a3b8",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  Google Review
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 34,
            }}
          >
            <button
              onClick={toggleReviews}
              style={{
                background: "#ffffff",
                color: "#1d4ed8",
                border: "1px solid #bfdbfe",
                padding: "13px 24px",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 750,
                cursor: "pointer",
                boxShadow: "0 3px 12px rgba(15,23,42,0.04)",
              }}
            >
              {showAllReviews
                ? "Show fewer reviews ↑"
                : `Show all ${REVIEWS.length} reviews ↓`}
            </button>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section
        id="areas"
        style={{
          padding: "68px 24px",
          scrollMarginTop: 90,
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
            Service Areas
          </h2>

          <p
            style={{
              color: "#64748b",
              lineHeight: 1.7,
              margin: "0 0 31px",
            }}
          >
            Serving businesses and homeowners across Orange, Osceola and Polk
            counties in Central Florida.
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
              Need help with your network, cameras, access system or technology?
            </h2>

            <p
              style={{
                color: "#94a3b8",
                fontSize: 15,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Tell us what you&apos;re trying to install, improve or
              troubleshoot. We&apos;ll help you determine the next step.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "#2563eb",
                color: "#ffffff",
                border: "none",
                padding: "14px 26px",
                borderRadius: 12,
                cursor: "pointer",
                fontSize: 15,
                fontWeight: 750,
              }}
            >
              Request Service
            </button>

            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#25d366",
                color: "#ffffff",
                padding: "14px 26px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 750,
              }}
            >
              💬 WhatsApp
            </a>

            <a
              href={SMS_URL}
              style={{
                background: "#ffffff",
                color: "#0f172a",
                padding: "14px 26px",
                borderRadius: 12,
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 750,
              }}
            >
              📱 SMS
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
    </div>
  );
}