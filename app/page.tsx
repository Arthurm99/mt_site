"use client";

import { useState } from "react";
import SiteHeader from "../components/SiteHeader";

const PHONE = "6892728874";
const EMAIL = "mightytechsolutionsllc@gmail.com";
const CONTACT_URL = "/contact";
const GOOGLE_REVIEW_COUNT = 20;
const GOOGLE_RATING = 5.0;

type ServiceGroup = {
  icon: string;
  title: string;
  slug: string;
  summary: string;
  items: string[];
  cta: string;
  learnMore: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  imageFocus?: string;
};

// Business service-card images are illustrative, not photographs of completed MTS projects.
// Phase 1A: Learn More targets will become live when the /for-business hub is added.
const COMMERCIAL_SERVICE_GROUPS: ServiceGroup[] = [
  {
    icon: "🛡️",
    title: "Managed IT Services",
    slug: "managed-it",
    image: "/ServiceCards/managed-it.webp",
    imageAlt: "Illustrative managed IT workstation with network administration dashboards",
    imageFocus: "54% center",
    summary:
      "Ongoing technology oversight and practical IT administration for small businesses that need dependable support without a full internal IT team.",
    items: ["Cybersecurity and endpoint protection", "Network and Microsoft 365 administration", "Ongoing IT oversight and vendor coordination"],
    cta: "Schedule IT Consultation",
    learnMore: "/managed-it",
    featured: true,
  },
  {
    icon: "🖥️",
    title: "IT Support",
    slug: "it-support",
    image: "/ServiceCards/it-support.webp",
    imageAlt: "Illustrative technician troubleshooting office computer hardware",
    imageFocus: "57% center",
    summary:
      "Help with business computers, printers, accounts, software and the day-to-day technology problems that interrupt work.",
    items: ["Helpdesk and technical support", "Computer, software and printer troubleshooting", "On-site device setup and configuration"],
    cta: "Request IT Support",
    learnMore: "/for-business#it-support",
  },
  {
    icon: "🌐",
    title: "Networks & Infrastructure",
    slug: "networks-infrastructure",
    image: "/ServiceCards/networks-infrastructure.webp",
    imageAlt: "Illustrative business network rack with organized blue Ethernet cables",
    imageFocus: "50% center",
    summary:
      "Plan, improve and troubleshoot the connections and network infrastructure that keep your business running.",
    items: ["Business WiFi, mesh systems and VoIP", "Ethernet and structured cabling", "Access points, PoE power/data and network racks"],
    cta: "Request Network Service",
    learnMore: "/networks-infrastructure",
  },
  {
    icon: "📷",
    title: "Security & Surveillance",
    slug: "security-surveillance",
    image: "/ServiceCards/security-surveillance.webp",
    imageAlt: "Illustrative commercial security camera with video monitoring screens",
    imageFocus: "76% center",
    summary:
      "Network-connected surveillance technology, camera-system support and practical improvements to property visibility.",
    items: ["CCTV cameras and video recording", "Access control and alarm systems", "Remote monitoring and system integration"],
    cta: "Request Security Service",
    learnMore: "/for-business#security",
  },
  {
    icon: "⚙️",
    title: "Technology Projects",
    slug: "technology-project",
    image: "/ServiceCards/technology-projects.webp",
    imageAlt: "Illustrative commercial meeting room with professional AV display",
    imageFocus: "50% center",
    summary:
      "Focused technology upgrades for offices and commercial environments, from planning through setup and testing.",
    items: ["Commercial AV and office technology", "Lighting and HVAC control projects", "Integrated technology upgrades"],
    cta: "Discuss My Project",
    learnMore: "/for-business#technology-projects",
  },
  {
    icon: "💻",
    title: "Digital Solutions",
    slug: "digital-solutions",
    image: "/ServiceCards/digital-solutions.svg",
    imageAlt: "Illustrative website layouts and digital analytics displayed on desktop screens",
    imageFocus: "center",
    summary:
      "Professional websites and practical digital solutions that help your business build a stronger online presence.",
    items: ["Website design and development", "Search engine optimization (SEO)", "Professional portfolio websites"],
    cta: "Discuss My Digital Project",
    learnMore: "/for-business#digital-solutions",
  },
];

// Phase 1A: Learn More targets will become live when the /for-home hub is added.
const RESIDENTIAL_SERVICE_GROUPS: ServiceGroup[] = [
  {
    icon: "📶",
    title: "Home WiFi & Networking",
    slug: "home-wifi",
    image: "/ServiceCards/home-wifi.webp",
    imageAlt: "Illustrative mesh WiFi devices improving home coverage in a modern living room",
    imageFocus: "center",
    summary: "Weak signal, dead zones or an unreliable connection? We set up and troubleshoot home networks for better everyday coverage.",
    items: ["Router and mesh WiFi setup", "Coverage and connection optimization", "Troubleshooting slow or unstable WiFi"],
    cta: "Request WiFi Service",
    learnMore: "/for-home#home-wifi",
  },
  {
    icon: "📷",
    title: "Security Cameras",
    slug: "security-cameras",
    image: "/ServiceCards/security-cameras.webp",
    imageAlt: "Illustrative residential security camera and video doorbell installed at a home entry",
    imageFocus: "center",
    summary: "Make it easier to keep an eye on your property with connected cameras, video doorbells and reliable remote viewing.",
    items: ["Indoor and outdoor camera setup", "Video doorbell and app configuration", "Remote access and existing-camera support"],
    cta: "Request Camera Installation",
    learnMore: "/for-home#security-cameras",
  },
  {
    icon: "🏠",
    title: "Smart Home Technology",
    slug: "smart-home",
    image: "/ServiceCards/smart-home.webp",
    imageAlt: "Illustrative smart home controls with connected devices in a modern home interior",
    imageFocus: "center",
    summary: "Bring your smart devices together with clear setup, thoughtful configuration and help when things stop connecting.",
    items: ["Smart lighting and HVAC controls", "Smart locks, thermostats and connected devices", "Smart system integration and troubleshooting"],
    cta: "Plan My Smart Home",
    learnMore: "/for-home#smart-home",
  },
  {
    icon: "📺",
    title: "AV / TV / Audio",
    slug: "av",
    image: "/ServiceCards/av.webp",
    imageAlt: "Illustrative home theater with wall-mounted TV and premium sound system",
    imageFocus: "center",
    summary: "Enjoy your entertainment setup without the cable clutter or configuration headaches, from displays to connected audio.",
    items: ["TV mounting and display setup", "Soundbar and speaker configuration", "AV connections and troubleshooting"],
    cta: "Request AV Service",
    learnMore: "/for-home#av",
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

type WhyIconName = "technical" | "troubleshooting" | "execution" | "local";

const WHY: { icon: WhyIconName; title: string; desc: string }[] = [
  {
    icon: "technical",
    title: "Hands-On Technical Experience",
    desc: "Real experience working with networks, devices and connected technology in business and residential environments.",
  },
  {
    icon: "troubleshooting",
    title: "We Look Beyond the Symptoms",
    desc: "We investigate the underlying issue before recommending a repair, adjustment or technology upgrade.",
  },
  {
    icon: "execution",
    title: "Thoughtful, Professional Execution",
    desc: "We pay attention to equipment placement, organized connections, configuration and final testing.",
  },
  {
    icon: "local",
    title: "Local Service. Direct Accountability.",
    desc: "A Central Florida technology company with direct communication and a clear point of contact.",
  },
];

function WhyIcon({ name }: { name: WhyIconName }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "technical" && (
        <>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </>
      )}
      {name === "troubleshooting" && (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5M8 11l2 2 3.5-4" />
        </>
      )}
      {name === "execution" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.6 2.6L16.5 9" />
        </>
      )}
      {name === "local" && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
    </svg>
  );
}

const REVIEWS = [
  {
    name: "Mighty Engines LLC",
    text: "Mighty Tech Solutions did a great job installing 4 exterior security cameras and a smart lock for our business.",
  },
  {
    name: "daniela montilva",
    text: "Excellent service! Really quality. Arturo installed 4 floodlight cameras and an access control system for our business.",
  },
  {
    name: "Michelle Ingeme",
    text: "I highly recommend Mighty Techs! They installed our Google Home system, Nest thermostat, security camera, and mesh Wi-Fi network, and the entire experience was excellent from start to finish.",
  },
  {
    name: "Lenna Cordido",
    text: "Arturo installed a very solid mesh system in my home to reinforce the Wi-Fi signal strength, installed a camera in my garage and connected it to Alexa so I can easily view it, replaced my broken doorbell, and also checked an exterior outlet.",
  },
  {
    name: "Gary Taylor",
    text: "We were having a recurring problem with a smart lock in our Airbnb. Arturo was very knowledgeable and identified the problem and fixed it quickly. Highly recommend!!",
  },
  {
    name: "Keith Banda",
    text: "Great experience with Mighty Tech Solutions. They installed two Google Nest Floodlight Cameras. The work was professional, everything was tested and working properly, and communication was clear throughout the process. Highly recommended for any of your smart home needs! Very affordable in addition.",
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
    name: "Edgardo Medina",
    text: "Arturo from Mighty Tech Solutions installed a Ring Doorbell, 2 exterior security cameras, and door sensors for our front and back doors.",
  },
  {
    name: "Juan Oropeza",
    text: "Very happy with the installation of security cameras and a doorbell at home, thanks",
  },
  {
    name: "Eliana Iglesias",
    text: "Excellent service! I needed some electrical troubleshooting at home and they responded immediately. The technician was super professional, neat, and explained everything clearly. It’s hard to find reliable electricians, but Mighty Tech Solutions is definitely my new go-to. Highly recommend them!",
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
  imagePosition?: string;
  imageFit?: "cover" | "contain";
};

const PROJECTS: Project[] = [
  {
    title: "Business Mesh WiFi Upgrade",
    location: "Orlando, FL",
    description:
      "Mesh WiFi configuration for a local rent-a-car business to improve reliable connectivity throughout its facility using a TP-Link Deco X55 system.",
    image: "/Projects/mesh_system.jpg",
    label: "Commercial Networking",
  },
  {
    title: "Network Infrastructure Upgrade",
    location: "Central Florida",
    description:
      "Media panel cleanup, network reorganization and TP-Link Deco X55 mesh installation with wired backhaul using the property's existing Ethernet infrastructure.",
    image: "/Projects/network_upgrade.jpg",
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
  "Haines City",
  "Winter Haven",
  "Winter Garden",
  "ChampionsGate",
  "Celebration",
  "Reunion",
  "Dr. Phillips",
];

export default function App() {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const visibleReviews = showAllReviews ? REVIEWS : REVIEWS.slice(0, 6);

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
        color: "#08264A",
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

          .mts-hero-artwork {
            width: 100%;
            max-width: 560px;
            justify-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
          }

          .mts-hero-artwork img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: contain;
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1.08fr 0.92fr;
            gap: 52px;
            align-items: center;
          }

          /* Static client logo banner: one compact band, not individual cards. */
          .client-logo-banner {
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            align-items: center;
            gap: 22px;
            padding: 24px 26px;
            background: #FFFFFF;
            border: 1px solid #DBE7F3;
            border-radius: 18px;
          }

          .client-logo-item {
            min-width: 0;
            min-height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .client-logo-item img {
            display: block;
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 68px;
            object-fit: contain;
          }

          /* Why Mighty Tech: authentic project proof + concise trust reasons. */
          .mts-why-section {
            padding: 94px 24px 88px;
            background: #E9F3FC;
          }

          .mts-why-inner {
            max-width: 1120px;
            margin: 0 auto;
          }

          .mts-why-intro {
            max-width: 860px;
            margin-bottom: 36px;
          }

          .mts-why-intro h2 {
            color: #08264A;
            font-size: clamp(30px, 3.4vw, 42px);
            font-weight: 850;
            line-height: 1.14;
            letter-spacing: -0.9px;
            margin: 0 0 15px;
          }

          .mts-why-intro p {
            color: #526981;
            font-size: 16px;
            line-height: 1.72;
            margin: 0;
          }

          .mts-why-layout {
            display: grid;
            grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
            align-items: stretch;
            gap: 25px;
          }

          .mts-why-project {
            position: relative;
            margin: 0;
            border-radius: 20px;
            overflow: hidden;
            min-height: 510px;
            background: #08264A;
            box-shadow: 0 12px 32px rgba(0, 35, 75, 0.10);
          }

          .mts-why-project img {
            position: absolute;
            inset: 0;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .mts-why-project::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 45%, rgba(0, 23, 52, 0.82) 100%);
            pointer-events: none;
          }

          .mts-why-project figcaption {
            position: absolute;
            z-index: 1;
            bottom: 26px;
            left: 26px;
            right: 26px;
            color: #FFFFFF;
            display: grid;
            gap: 7px;
            font-size: 17px;
            font-weight: 750;
            line-height: 1.35;
          }

          .mts-why-project figcaption span {
            color: #A6DFFF;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 11px;
            font-weight: 800;
          }

          .mts-why-reasons {
            display: grid;
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .mts-why-reason {
            display: flex;
            gap: 16px;
            align-items: flex-start;
            background: #FFFFFF;
            border: 1px solid #D5E6F5;
            border-radius: 17px;
            padding: 22px 23px;
            box-shadow: 0 5px 20px rgba(0, 35, 75, 0.035);
          }

          .mts-why-reason-icon {
            width: 48px;
            height: 48px;
            flex: 0 0 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #0866E8;
            background: #EDF5FD;
            border-radius: 13px;
          }

          .mts-why-reason h3 {
            font-size: 17px;
            color: #08264A;
            font-weight: 800;
            line-height: 1.3;
            margin: 0 0 7px;
          }

          .mts-why-reason p {
            font-size: 14px;
            line-height: 1.65;
            color: #526981;
            margin: 0;
          }

          .project-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }

          .reviews-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
          }

          .project-card,
          .review-card {
            transition:
              transform 0.18s ease,
              box-shadow 0.18s ease,
              border-color 0.18s ease;
          }

          .project-card:hover,
          .review-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 14px 35px rgba(15, 23, 42, 0.08);
            border-color: #A8CDED !important;
          }

          .mts-audience-section {
            padding: 100px 24px;
            scroll-margin-top: 100px;
          }

          .mts-audience-inner {
            max-width: 1120px;
            margin: 0 auto;
          }

          .mts-section-kicker {
            color: #0866E8;
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.3px;
            margin-bottom: 12px;
          }

          .mts-section-copy {
            max-width: 720px;
            margin-bottom: 42px;
          }

          .mts-section-copy h2 {
            font-size: clamp(30px, 3.4vw, 42px);
            line-height: 1.15;
            letter-spacing: -0.9px;
            margin: 0 0 16px;
            font-weight: 850;
          }

          .mts-section-copy p {
            color: #526981;
            font-size: 16px;
            line-height: 1.72;
            margin: 0;
          }

          .mts-service-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .mts-service-card {
            background: #ffffff;
            border: 1px solid #DBE7F3;
            border-radius: 20px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            box-shadow: 0 5px 22px rgba(15,23,42,0.035);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .mts-service-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 13px 32px rgba(15,23,42,0.085);
          }

          /* Service cards use photographic headers for both Business and Home sections. */
          .mts-service-card--photo {
            padding: 0;
            overflow: hidden;
          }

          .mts-service-media {
            position: relative;
            width: 100%;
            height: 212px;
            overflow: hidden;
            background: #00234B;
            flex: 0 0 auto;
          }

          .mts-service-media img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .mts-service-card--photo:hover .mts-service-media img {
            transform: scale(1.025);
          }

          .mts-service-media::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(0deg, rgba(0,35,75,0.22), transparent 58%);
            pointer-events: none;
          }

          .mts-service-content {
            padding: 27px 30px 31px;
            display: flex;
            flex: 1 1 auto;
            flex-direction: column;
            min-width: 0;
          }

          .mts-service-card--photo .mts-service-icon {
            margin-top: -48px;
            position: relative;
            z-index: 1;
            border: 4px solid #FFFFFF;
            box-shadow: 0 5px 14px rgba(0,35,75,0.08);
          }

          .mts-service-card--featured.mts-service-card--photo {
            grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
            background: #ffffff;
          }

          .mts-service-card--featured .mts-service-media {
            height: 100%;
            min-height: 430px;
          }

          .mts-service-card--featured .mts-service-content {
            padding: 42px 42px 38px;
          }

          .mts-service-card--featured .mts-service-icon {
            margin-top: 0;
            box-shadow: none;
            border: 0;
          }

          /* Sixth Business card fills the final row without changing the featured card. */
          .mts-business-card--digital {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
            padding: 0;
          }

          .mts-business-card--digital .mts-service-media {
            height: 100%;
            min-height: 335px;
          }

          .mts-business-card--digital .mts-service-content {
            padding: 32px 38px;
          }

          .mts-business-card--digital .mts-service-icon {
            margin-top: 0;
            border: 0;
            box-shadow: none;
          }

          .mts-service-card--featured {
            grid-column: 1 / -1;
            background: #FFFFFF;
            border-color: #A8CDED;
            padding: 0;
            display: grid;
          }

          .mts-service-icon {
            width: 54px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #EDF5FD;
            border-radius: 15px;
            font-size: 27px;
            margin-bottom: 22px;
          }

          .mts-service-card h3 {
            font-size: 23px;
            line-height: 1.25;
            font-weight: 800;
            margin: 0 0 12px;
            letter-spacing: -0.35px;
          }

          .mts-service-card p {
            color: #526981;
            line-height: 1.7;
            margin: 0;
            font-size: 15px;
          }

          .mts-service-list {
            list-style: none;
            padding: 0;
            margin: 24px 0 28px;
            display: grid;
            gap: 11px;
          }

          .mts-service-list li {
            display: flex;
            gap: 10px;
            font-size: 14px;
            line-height: 1.5;
            color: #294A69;
          }

          .mts-service-list li::before {
            content: '✓';
            color: #0866E8;
            font-weight: 850;
            flex: 0 0 auto;
          }

          .mts-service-actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 15px;
            margin-top: auto;
          }

          .mts-service-primary {
            display: inline-block;
            padding: 13px 18px;
            background: #0866E8;
            border-radius: 10px;
            color: white;
            font-size: 14px;
            font-weight: 750;
            text-decoration: none;
            text-align: center;
          }

          .mts-service-primary:hover {
            background: #0055C8;
          }

          .mts-service-secondary {
            color: #0756C4;
            font-size: 14px;
            font-weight: 750;
            text-decoration: none;
            padding: 10px 0;
          }

          .mts-service-secondary:hover {
            text-decoration: underline;
          }

          /* For Home: photographic cards with balanced copy and a clear action area. */
          .mts-home-section {
            background: linear-gradient(180deg, #EAF4FC 0%, #F4F9FF 100%);
          }

          .mts-home-section .mts-section-copy {
            max-width: 790px;
          }

          .mts-home-card {
            border-color: #CFE2F3;
            box-shadow: 0 10px 28px rgba(0,35,75,0.055);
          }

          .mts-home-card .mts-service-media {
            height: 236px;
          }

          .mts-home-card .mts-service-content {
            padding: 29px 31px 31px;
          }

          .mts-home-card h3 {
            font-size: 24px;
            color: #08264A;
          }

          .mts-home-card .mts-service-list {
            margin-top: 21px;
            margin-bottom: 24px;
          }

          .mts-home-card .mts-service-actions {
            padding-top: 18px;
            border-top: 1px solid #E2EDF6;
          }

          .mts-home-support {
            background: linear-gradient(108deg, #064E9B 0%, #00234B 100%);
            border: 1px solid #1263A5;
            color: #FFFFFF;
            box-shadow: 0 9px 26px rgba(0,35,75,0.1);
          }

          .mts-home-support .mts-service-primary {
            background: #FFFFFF;
            color: #0756C4;
          }

          .mts-home-support .mts-service-primary:hover {
            background: #E8F4FF;
          }

          .mts-home-support {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 18px;
            padding: 25px 30px;
            margin-top: 26px;
            border-radius: 18px;
          }

          /* Meet the Team: an authentic two-person company introduction. */
          .mts-team-section {
            background: #FFFFFF;
            padding: 96px 24px 98px;
          }

          .mts-team-inner {
            max-width: 1120px;
            margin: 0 auto;
          }

          .mts-team-intro {
            margin-bottom: 35px;
            max-width: 790px;
          }

          .mts-team-intro h2 {
            font-size: clamp(30px, 3.4vw, 42px);
            font-weight: 850;
            line-height: 1.15;
            letter-spacing: -0.9px;
            margin: 0 0 14px;
            color: #08264A;
          }

          .mts-team-intro p {
            color: #526981;
            font-size: 16px;
            line-height: 1.72;
            margin: 0;
          }

          .mts-team-layout {
            display: grid;
            grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
            align-items: stretch;
            gap: 32px;
          }

          .mts-team-figure {
            margin: 0;
            border-radius: 22px;
            overflow: hidden;
            background: #E9F3FC;
            position: relative;
            min-height: 450px;
            box-shadow: 0 12px 32px rgba(0,35,75,0.10);
          }

          .mts-team-photo {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            inset: 0;
            object-fit: cover;
            object-position: center;
          }

          .mts-team-photo-caption {
            position: absolute;
            left: 22px;
            bottom: 22px;
            z-index: 1;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(0,35,75,0.88);
            color: #FFFFFF;
            border: 1px solid rgba(255,255,255,0.20);
            border-radius: 999px;
            padding: 10px 15px;
            font-size: 12px;
            font-weight: 750;
            backdrop-filter: blur(8px);
          }

          .mts-team-photo-caption::before {
            content: '';
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #58C6FF;
          }

          .mts-team-copy {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0;
            padding: 10px 0;
          }

          .mts-team-eyebrow {
            font-size: 12px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #0866E8;
            font-weight: 800;
            margin: 0 0 18px;
          }

          .mts-team-person {
            padding: 0 0 27px;
          }

          .mts-team-person + .mts-team-person {
            border-top: 1px solid #DCE8F3;
            padding: 27px 0 0;
          }

          .mts-team-person h3 {
            font-size: 25px;
            font-weight: 850;
            line-height: 1.2;
            letter-spacing: -0.4px;
            margin: 0 0 7px;
            color: #08264A;
          }

          .mts-team-role {
            display: block;
            font-size: 13px;
            color: #0756C4;
            font-weight: 800;
            margin-bottom: 13px;
            letter-spacing: 0.1px;
          }

          .mts-team-person p {
            margin: 0;
            color: #526981;
            line-height: 1.72;
            font-size: 15px;
          }

          .mts-team-closing {
            display: flex;
            gap: 11px;
            align-items: center;
            background: #EDF5FD;
            border: 1px solid #D7E8F6;
            border-radius: 13px;
            color: #294A69;
            padding: 15px 18px;
            font-size: 13px;
            font-weight: 700;
            line-height: 1.6;
            margin-top: 29px;
          }

          .mts-team-closing svg {
            flex: 0 0 auto;
            color: #0866E8;
          }

          @media (min-width: 721px) and (max-width: 900px) {
            .mts-service-card--featured.mts-service-card--photo {
              grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
            }

            .mts-service-card--featured .mts-service-content {
              padding: 30px;
            }
          }

          @media (max-width: 720px) {
            .mts-business-card--digital {
              grid-column: auto;
              display: flex;
              flex-direction: column;
            }

            .mts-business-card--digital .mts-service-media {
              height: 220px;
              min-height: 0;
            }

            .mts-business-card--digital .mts-service-content {
              padding: 28px 26px 30px;
            }

            .mts-business-card--digital .mts-service-icon {
              margin-top: -48px;
              border: 4px solid #FFFFFF;
              box-shadow: 0 5px 14px rgba(0,35,75,0.08);
            }

            .mts-audience-section {
              padding: 70px 20px;
            }

            .mts-service-grid {
              grid-template-columns: 1fr;
            }

            .mts-service-card--featured {
              grid-column: auto;
              display: flex;
              flex-direction: column;
              padding: 0;
            }

            .mts-service-card {
              padding: 26px;
            }

            .mts-service-card--photo {
              padding: 0;
            }

            .mts-service-card--featured .mts-service-media {
              height: 220px;
              min-height: 0;
            }

            .mts-service-card--featured .mts-service-content,
            .mts-service-content {
              padding: 28px 26px 30px;
            }

            .mts-service-card--featured .mts-service-icon {
              margin-top: -48px;
              border: 4px solid #FFFFFF;
              box-shadow: 0 5px 14px rgba(0,35,75,0.08);
            }

            .mts-home-card .mts-service-media {
              height: 210px;
            }

            .mts-home-card .mts-service-content {
              padding: 27px 25px 29px;
            }

            .mts-home-support {
              padding: 26px 24px;
            }

            .mts-service-primary {
              width: 100%;
            }

            .mts-service-actions {
              align-items: stretch;
              flex-direction: column;
              gap: 5px;
            }

            .mts-team-section {
              padding: 74px 20px 76px;
            }

            .mts-team-layout {
              grid-template-columns: 1fr;
              gap: 28px;
            }

            .mts-team-figure {
              min-height: 0;
              aspect-ratio: 1.28 / 1;
            }

            .mts-team-copy {
              padding: 0;
            }

            .mts-team-photo-caption {
              left: 16px;
              bottom: 16px;
            }
          }

          @media (max-width: 900px) {
            .mts-team-layout {
              grid-template-columns: 1fr;
              gap: 28px;
            }

            .mts-team-figure {
              min-height: 0;
              aspect-ratio: 1.55 / 1;
            }

            .mts-team-copy {
              padding: 0;
            }

            .mts-why-layout {
              grid-template-columns: 1fr;
            }

            .mts-why-project {
              height: 380px;
              min-height: 0;
            }

            .hero-grid {
              grid-template-columns: 1fr;
            }

            .reviews-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .client-logo-banner {
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 12px 24px;
            }
          }

          @media (max-width: 720px) {
            .mts-why-section {
              padding: 72px 20px 66px;
            }

            .mts-why-project {
              height: 320px;
            }

            .mts-why-reason {
              padding: 19px;
              gap: 13px;
            }

            .project-grid,
            .reviews-grid {
              grid-template-columns: 1fr;
            }

            .client-logo-banner {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px 18px;
              padding: 18px 20px;
            }

            .client-logo-item {
              min-height: 74px;
            }

            .client-logo-item img {
              max-height: 62px;
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
            .hero-title {
              font-size: 35px !important;
            }

            .logo-image {
              height: 54px !important;
            }
          }
/* MTS — Unified corporate CTA buttons */
.mts-header-call,
.mts-mobile-call,
.mts-service-primary,
.hero-section .hero-grid > div:first-child > div > a[href="#commercial-services"],
.hero-section .hero-grid > div:first-child > div > a[href="#residential-services"],
.cta-band a[href^="/contact"] {
  background: #011535 !important;
  color: #FFFFFF !important;
  border: 1px solid #011535 !important;
  text-decoration: none;
}

.mts-header-call:hover,
.mts-mobile-call:hover,
.mts-service-primary:hover,
.hero-section .hero-grid > div:first-child > div > a[href="#commercial-services"]:hover,
.hero-section .hero-grid > div:first-child > div > a[href="#residential-services"]:hover,
.cta-band a[href^="/contact"]:hover {
  background: #103765 !important;
  color: #FFFFFF !important;
}

/* Contrast on dark backgrounds */
.mts-home-support .mts-service-primary,
.hero-section .hero-grid > div:first-child > div > a[href="#commercial-services"],
.hero-section .hero-grid > div:first-child > div > a[href="#residential-services"],
.cta-band a[href^="/contact"] {
  border-color: #64C9FF !important;
}
`}
      </style>

      {/* HEADER */}
      <SiteHeader phoneHref={`tel:+1${PHONE}`} />

      {/* HERO */}
      <section
        className="hero-section"
        style={{
          background:
            "linear-gradient(112deg, #00234B 0%, #052E59 58%, #0A426B 100%)",
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
                background: "rgba(0,168,237,0.16)",
                border: "1px solid rgba(92,205,255,0.32)",
                color: "#9CE4FF",
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
                color: "#FFFFFF",
              }}
            >
              Business Technology Solutions for Central Florida
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "#E0EEFA",
                lineHeight: 1.72,
                margin: "0 0 31px",
                maxWidth: 680,
              }}
            >
              Managed IT, business support, networks, security, digital solutions
              and practical technology projects for local businesses. We also
              provide professional WiFi, cameras, smart home and AV solutions
              for homeowners across Central Florida.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href="#commercial-services"
                style={{
                  background: "#0866E8",
                  color: "#ffffff",
                  padding: "15px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 750,
                }}
              >
                For Business
              </a>

              <a
                href="#residential-services"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.68)",
                  color: "#ffffff",
                  padding: "15px 28px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 750,
                }}
              >
                For Home
              </a>
            </div>

            <div
              style={{
                marginTop: 26,
                paddingTop: 20,
                borderTop: "1px solid rgba(213,235,255,0.22)",
                maxWidth: 675,
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "#D1E5F6",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#FFFFFF" }}>
                  Residential customer?
                </strong>{" "}
                We also provide home WiFi, security cameras, smart home, video
                doorbell and AV services.{" "}
                <a
                  href="#residential-services"
                  style={{
                    color: "#8FDEFF",
                    fontSize: 14,
                    fontWeight: 750,
                    textDecoration: "none",
                  }}
                >
                  View Residential Services →
                </a>
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
                  `${GOOGLE_REVIEW_COUNT}+ Google reviews`,
                  `${GOOGLE_RATING.toFixed(1)} rating`,
                  "Commercial & residential",
                ].map((item) => (
                <span
                  key={item}
                  style={{
                    color: "#C8DFF2",
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ color: "#58C6FF", fontWeight: 800 }}>✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Conceptual hero artwork; actual project photos remain in Projects. */}
          <div className="mts-hero-artwork">
            <img
              src="/Hero/technology-illustration.webp"
              alt="Illustrative overview of IT, networking, surveillance and home technology"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* FOR BUSINESS — 6 approved categories */}
      <section
        id="commercial-services"
        className="mts-audience-section"
        style={{ background: "#ffffff" }}
      >
        <div className="mts-audience-inner">
          <div className="mts-section-copy">
            <div className="mts-section-kicker">For Business</div>
            <h2>Technology that supports your business</h2>
            <p>
              From ongoing IT support to network improvements and focused
              technology projects, find the service you need and contact
              Mighty Tech directly. No extra steps required.
            </p>
          </div>

          <div className="mts-service-grid">
            {COMMERCIAL_SERVICE_GROUPS.map((service) => (
              <article
                key={service.slug}
                className={`mts-service-card mts-service-card--photo${service.featured ? " mts-service-card--featured" : ""}${service.slug === "digital-solutions" ? " mts-business-card--digital" : ""}`}
              >
                <div className="mts-service-media">
                  <img
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    style={{ objectPosition: service.imageFocus ?? "center" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mts-service-content">
                  <div className="mts-service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul className="mts-service-list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="mts-service-actions">
                    <a
                      className="mts-service-primary"
                      href={`/contact?service=${service.slug}`}
                    >
                      {service.cta}
                    </a>
                    {(service.slug === "managed-it" ||
                      service.slug === "networks-infrastructure") && (
                      <a className="mts-service-secondary" href={service.learnMore}>
                        Learn More →
                      </a>
                    )}
                    {/* Pending Business Learn More links are hidden until their pages are ready. */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOR HOME — directly after Business */}
      <section
        id="residential-services"
        className="mts-audience-section mts-home-section"
      >
        <div className="mts-audience-inner">
          <div className="mts-section-copy">
            <div className="mts-section-kicker">For Home</div>
            <h2>Technology that works better at home</h2>
            <p>
              Better WiFi, easier home security, connected devices and cleaner
              entertainment setups. Choose what you need and reach out directly
              for practical help with your home technology.
            </p>
          </div>

          <div className="mts-service-grid">
            {RESIDENTIAL_SERVICE_GROUPS.map((service) => (
              <article key={service.slug} className="mts-service-card mts-service-card--photo mts-home-card">
                <div className="mts-service-media">
                  <img
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    style={{ objectPosition: service.imageFocus ?? "center" }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mts-service-content">
                  <div className="mts-service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul className="mts-service-list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="mts-service-actions">
                    <a
                      className="mts-service-primary"
                      href={`/contact?service=${service.slug}`}
                    >
                      {service.cta}
                    </a>
                    {/*
                    <a className="mts-service-secondary" href={service.learnMore}>
                      Learn More →
                    </a>
                    */}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mts-home-support">
            <div style={{ maxWidth: 680 }}>
              <strong style={{ fontSize: 19, lineHeight: 1.35, display: "block" }}>
                Already have a system that is not working right?
              </strong>
              <p style={{ margin: "8px 0 0", color: "#D8E9F7", lineHeight: 1.65, fontSize: 14 }}>
                Whether it is a connection issue, an offline device or a setup
                you inherited, tell us what is happening and we can review your request.
              </p>
            </div>
            <a className="mts-service-primary" href={CONTACT_URL}>
              Request Technology Support
            </a>
          </div>
        </div>
      </section>

      {/* WHY MIGHTY TECH — trust section with a real MTS project photo */}
      <section className="mts-why-section" aria-labelledby="why-mighty-tech-heading">
        <div className="mts-why-inner">
          <div className="mts-why-intro">
            <div className="mts-section-kicker">Why Mighty Tech</div>
            <h2 id="why-mighty-tech-heading">
              Technology Solutions. Real Experience. Local Accountability.
            </h2>
            <p>
              Hands-on technical work, careful execution and clear communication
              for the systems your business or home depends on.
            </p>
          </div>

          <div className="mts-why-layout">
            <figure className="mts-why-project">
              <img
                src="/Projects/pic_01.jpg"
                alt="Mighty Tech Solutions network infrastructure upgrade and equipment organization project"
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>Real MTS project</span>
                Network infrastructure upgrade in Central Florida
              </figcaption>
            </figure>

            <div className="mts-why-reasons">
              {WHY.map((item) => (
                <article key={item.title} className="mts-why-reason">
                  <div className="mts-why-reason-icon">
                    <WhyIcon name={item.icon} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MEET THE TEAM — real company photograph, two actual company members. */}
      <section className="mts-team-section" aria-labelledby="mts-team-heading">
        <div className="mts-team-inner">
          <div className="mts-team-intro">
            <div className="mts-section-kicker">Meet the Team</div>
            <h2 id="mts-team-heading">The People Behind Mighty Tech Solutions</h2>
            <p>
              A locally owned technology company built around hands-on service,
              straightforward communication and a personal connection with our clients.
            </p>
          </div>

          <div className="mts-team-layout">
            <figure className="mts-team-figure">
              <img
                className="mts-team-photo"
                src="/Projects/mts_team.png"
                alt="Olga and Arturo, the people behind Mighty Tech Solutions"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="mts-team-photo-caption">
                Local team · Central Florida
              </figcaption>
            </figure>

            <div className="mts-team-copy">
              <p className="mts-team-eyebrow">Get to know us</p>

              <div className="mts-team-person">
                <h3>Arturo</h3>
                <span className="mts-team-role">Technical Lead | Operations</span>
                <p>
                  Arturo leads technical evaluations, troubleshooting, on-site
                  service and project execution. He is the direct technical point
                  of contact, from understanding the problem to testing the solution.
                </p>
              </div>

              <div className="mts-team-person">
                <h3>Olga</h3>
                <span className="mts-team-role">Owner</span>
                <p>
                  As the owner of Mighty Tech Solutions, Olga supports the company
                  behind the scenes, assisting with administrative needs and helping
                  the business grow while keeping service personal.
                </p>
              </div>

              <div className="mts-team-closing">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Proud to serve businesses and homeowners across Central Florida.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          background: "#EAF4FC",
          padding: "82px 24px",
          scrollMarginTop: 90,
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <div style={{ maxWidth: 740, marginBottom: 40 }}>
            <div
              style={{
                color: "#0866E8",
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
                color: "#526981",
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
                  border: "1px solid #DBE7F3",
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
                    background: "#DBE7F3",
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
                      color: "#0866E8",
                      fontSize: 13,
                      fontWeight: 650,
                      marginBottom: 12,
                    }}
                  >
                    📍 {project.location}
                  </div>

                  <p
                    style={{
                      color: "#526981",
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

      {/* REVIEWS */}
      <section
        id="reviews"
        style={{
          background: "#FFFFFF",
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
                border: "1px solid #DBE7F3",
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

              <span style={{ fontWeight: 800, fontSize: 14 }}>
                {GOOGLE_RATING.toFixed(1)}
              </span>

              <span style={{ color: "#526981", fontSize: 13 }}>
                · {GOOGLE_REVIEW_COUNT}+ reviews
              </span>
            </div>
          </div>

          <p
            style={{
              color: "#526981",
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
                  border: "1px solid #DBE7F3",
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
                      background: "#D6EAFB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "#0756C4",
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
                        color: "#102E50",
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
                    color: "#49617A",
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
                    color: "#758BA2",
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
                color: "#0756C4",
                border: "1px solid #A8CDED",
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
                : "Show more reviews ↓"}
            </button>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section
        id="clients"
        style={{
          padding: "70px 24px",
          background: "#F2F7FC",
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
                color: "#0866E8",
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
                color: "#526981",
                fontSize: 14,
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Selected businesses we&apos;ve provided technology installation
              and support services to.
            </p>
          </div>

          <div className="client-logo-banner" aria-label="Businesses we've worked with">
            {BUSINESS_CLIENTS.map((client) => (
              <div key={client.name} className="client-logo-item">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  title={client.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <p
            style={{
              maxWidth: 800,
              margin: "24px auto 0",
              textAlign: "center",
              color: "#758BA2",
              fontSize: 11,
              lineHeight: 1.6,
            }}
          >
            Company names and logos are the property of their respective owners.
            Their appearance does not imply endorsement or affiliation.
          </p>
        </div>
      </section>

      {/* FINAL CTA — for both audiences */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "82px 24px" }}>
        <div className="cta-band" style={{ background: "linear-gradient(110deg, #064E9B 0%, #00234B 100%)", borderRadius: 24, padding: "50px 40px" }}>
          <h2 style={{ color: "#ffffff", fontSize: 30, fontWeight: 850, margin: "0 0 14px" }}>
            Ready to talk about your technology needs?
          </h2>
          <p style={{ color: "#D3E5F7", lineHeight: 1.75, maxWidth: 680, margin: "0 0 30px" }}>
            Tell us what you need to install, improve or troubleshoot. Choose
            the right path for your business or home and we will take it from there.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="/contact?service=technology-project"
              style={{ background: "#0866E8", padding: "15px 22px", borderRadius: 11, color: "#ffffff", textDecoration: "none", fontWeight: 750 }}
            >
              Discuss a Business Project
            </a>
            <a
              href={CONTACT_URL}
              style={{ background: "#ffffff", padding: "15px 22px", borderRadius: 11, color: "#08264A", textDecoration: "none", fontWeight: 750 }}
            >
              Request Home Service
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#071E39",
          borderTop: "1px solid #1A4775",
          padding: "29px 24px",
          textAlign: "center",
          color: "#E1EFFC",
          fontSize: 13,
        }}
      >
        © 2026 Mighty Tech Solutions LLC · Business & Residential Technology · Central Florida

        <div style={{ marginTop: 8, color: "#BFD5EA", fontSize: 12 }}>
          Serving {AREAS.slice(0, 5).join(", ")} and surrounding Central Florida communities.
        </div>

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
              color: "#D3E5F7",
              textDecoration: "none",
            }}
          >
            (689) 272-8874
          </a>

          <a
            href={`mailto:${EMAIL}`}
            style={{
              color: "#D3E5F7",
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