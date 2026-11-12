"use client";

import { useEffect, useState, type FormEvent } from "react";
import SiteHeader from "../../components/SiteHeader";

const PHONE = "6892728874";
const EMAIL = "mightytechsolutionsllc@gmail.com";

// Keep display values human-readable: the existing /api/contact endpoint receives
// the same "service" string field as before, not a URL slug.
const BUSINESS_SERVICES = [
  "Managed IT Services",
  "IT Support",
  "Networks & Infrastructure",
  "Security & Surveillance",
  "Technology Projects",
  "Digital Solutions",
];

const HOME_SERVICES = [
  "Home WiFi & Networking",
  "Security Cameras",
  "Smart Home Technology",
  "AV / TV / Audio",
];

// Every service CTA on the homepage routes to /contact?service=<slug>.
// Historical links from older pages are also recognized when possible.
const SERVICE_PRESETS: Record<string, string> = {
  "managed-it": "Managed IT Services",
  "it-support": "IT Support",
  "networks-infrastructure": "Networks & Infrastructure",
  "security-surveillance": "Security & Surveillance",
  "technology-project": "Technology Projects",
  "digital-solutions": "Digital Solutions",
  "home-wifi": "Home WiFi & Networking",
  "security-cameras": "Security Cameras",
  "smart-home": "Smart Home Technology",
  av: "AV / TV / Audio",
  "technology-troubleshooting": "Technology Troubleshooting",
  "home-service": "General Home Technology Request",

  // Legacy compatibility aliases. No changes to public SEO routes are required.
  "small-business-it-support": "IT Support",
  "business-wifi-networking": "Networks & Infrastructure",
  "network-cabling-structured-cabling": "Networks & Infrastructure",
  "security-camera-installation": "Security Cameras",
  "residential-wifi-networking": "Home WiFi & Networking",
  "tv-mounting": "AV / TV / Audio",
};

const GENERAL_SERVICES = [
  "Technology Troubleshooting",
  "General Home Technology Request",
];

const ALL_SERVICES = [
  ...BUSINESS_SERVICES,
  ...HOME_SERVICES,
  ...GENERAL_SERVICES,
  "Other",
];

function resolveServiceFromUrl(): string {
  const value = new URLSearchParams(window.location.search)
    .get("service")
    ?.trim();
  if (!value) return "";

  const normalized = value.toLowerCase();
  const preset = SERVICE_PRESETS[normalized];
  if (preset) return preset;

  // Also accept a readable service value for backward compatibility.
  return ALL_SERVICES.find((service) => service.toLowerCase() === normalized) ?? "";
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
  website: string;
};

type AnalyticsWindow = Window & {
  gtag?: (
    command: "event",
    eventName: string,
    parameters?: Record<string, string>
  ) => void;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  message: "",
  website: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [requestedService, setRequestedService] = useState("");

  // Read the query string on the client. This avoids useSearchParams/Suspense
  // requirements during Next.js static prerendering.
  useEffect(() => {
    const synchronizeService = () => {
      const service = resolveServiceFromUrl();
      setRequestedService(service);
      if (service) {
        setForm((current) => ({ ...current, service }));
      }
    };

    synchronizeService();
    window.addEventListener("popstate", synchronizeService);
    return () => window.removeEventListener("popstate", synchronizeService);
  }, []);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  // Preserve the existing POST endpoint, JSON field names, validation,
  // honeypot and successful generate_lead event.
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setErrorMessage("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name, email and phone number.");
      return;
    }

    if (!form.service) {
      setStatus("error");
      setErrorMessage("Please select the service you need.");
      return;
    }

    if (!form.message.trim()) {
      setStatus("error");
      setErrorMessage("Please tell us how we can help.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || "Unable to send your message.");
      }

      (window as AnalyticsWindow).gtag?.("event", "generate_lead", {
        service_name: form.service,
        lead_source: "website_contact_form",
      });

      setStatus("sent");
      setForm({ ...INITIAL_FORM, service: requestedService });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please call us instead."
      );
    }
  }

  return (
    <div className="mts-contact-page">
      <style>{`
        .mts-contact-page {
          min-height: 100vh;
          color: #08264A;
          background: #FFFFFF;
          font-family: system-ui, sans-serif;
        }

        .mts-contact-page *,
        .mts-contact-page *::before,
        .mts-contact-page *::after { box-sizing: border-box; }

        /* Align the shared header's conversion button with the logo navy. */
        .mts-contact-page .mts-header-call,
        .mts-contact-page .mts-mobile-call {
          background: #011535 !important;
          color: #FFFFFF !important;
        }
        .mts-contact-page .mts-header-call:hover,
        .mts-contact-page .mts-mobile-call:hover {
          background: #103765 !important;
        }

        .mts-contact-section {
          background: linear-gradient(124deg, #EDF5FD 0%, #F5F9FE 50%, #FFFFFF 100%);
          padding: 82px 24px 96px;
        }

        .mts-contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.89fr) minmax(0, 1.11fr);
          gap: 58px;
          align-items: start;
          max-width: 1120px;
          margin: 0 auto;
        }

        .mts-contact-kicker {
          display: inline-block;
          color: #0866E8;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 20px;
        }

        .mts-contact-title {
          color: #08264A;
          font-weight: 850;
          font-size: clamp(35px, 4vw, 49px);
          line-height: 1.1;
          letter-spacing: -1.3px;
          margin: 0 0 20px;
        }

        .mts-contact-lead {
          color: #526981;
          font-size: 17px;
          line-height: 1.75;
          margin: 0 0 30px;
          max-width: 500px;
        }

        .mts-contact-info {
          display: grid;
          gap: 16px;
          max-width: 500px;
        }

        .mts-contact-info-box {
          border: 1px solid #D7E6F4;
          border-radius: 18px;
          padding: 24px;
          background: #FFFFFF;
          box-shadow: 0 6px 20px rgba(0,35,75,0.035);
        }

        .mts-contact-info-box--dark {
          background: #011535;
          border-color: #011535;
          color: #FFFFFF;
        }

        .mts-contact-info-label {
          margin: 0 0 10px;
          font-size: 15px;
          font-weight: 800;
        }

        .mts-contact-phone {
          color: #FFFFFF;
          font-size: 24px;
          font-weight: 800;
          text-decoration: none;
          letter-spacing: -0.2px;
        }

        .mts-contact-phone:hover { text-decoration: underline; }

        .mts-contact-info-copy {
          margin: 8px 0 0;
          color: #526981;
          font-size: 14px;
          line-height: 1.65;
        }

        .mts-contact-info-box--dark .mts-contact-info-copy { color: #C8DFF2; }

        .mts-contact-form-card {
          background: #FFFFFF;
          border: 1px solid #D4E3F2;
          border-radius: 22px;
          padding: 35px;
          box-shadow: 0 18px 52px rgba(0,35,75,0.09);
        }

        .mts-contact-form-card h2 {
          margin: 0 0 8px;
          font-size: 27px;
          font-weight: 850;
          letter-spacing: -0.4px;
          color: #08264A;
        }

        .mts-contact-form-intro {
          margin: 0 0 26px;
          color: #526981;
          font-size: 14px;
          line-height: 1.65;
        }

        .mts-contact-preset-note {
          background: #EDF5FD;
          border: 1px solid #CFE1F3;
          color: #254D77;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 21px;
        }

        .mts-contact-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px 16px;
        }

        .mts-contact-full { grid-column: 1 / -1; }

        .mts-contact-label {
          display: block;
          font-size: 13px;
          font-weight: 750;
          color: #294A69;
          margin-bottom: 8px;
        }

        .mts-contact-input {
          width: 100%;
          min-width: 0;
          border: 1px solid #C7D8E8;
          border-radius: 11px;
          padding: 13px 14px;
          font: inherit;
          font-size: 15px;
          color: #08264A;
          background: #FFFFFF;
          outline: none;
        }

        .mts-contact-input:focus {
          border-color: #0866E8;
          box-shadow: 0 0 0 3px rgba(8,102,232,0.12);
        }

        .mts-contact-input::placeholder { color: #7A90A7; }

        .mts-contact-submit {
          width: 100%;
          border: 1px solid #011535;
          border-radius: 11px;
          background: #011535;
          color: #FFFFFF;
          padding: 15px 22px;
          font: inherit;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          transition: background-color 0.18s ease, transform 0.18s ease;
        }

        .mts-contact-submit:hover:not(:disabled) {
          background: #103765;
          transform: translateY(-1px);
        }

        .mts-contact-submit:disabled { opacity: 0.60; cursor: not-allowed; }

        .mts-contact-submit:focus-visible,
        .mts-contact-phone:focus-visible {
          outline: 3px solid #60A5FA;
          outline-offset: 4px;
        }

        .mts-contact-alert {
          margin-top: 19px;
          padding: 15px 16px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 650;
        }

        .mts-contact-alert--success {
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          color: #166534;
        }

        .mts-contact-alert--error {
          background: #FEF2F2;
          border: 1px solid #FECACA;
          color: #991B1B;
        }

        .mts-contact-footer {
          background: #071E39;
          border-top: 1px solid #1A4775;
          padding: 30px 24px;
          text-align: center;
          color: #D3E5F7;
          font-size: 13px;
          line-height: 1.6;
        }
        .mts-contact-footer a { color: #D3E5F7; text-decoration: none; }
        .mts-contact-footer a:hover { text-decoration: underline; }

        @media (max-width: 900px) {
          .mts-contact-grid { grid-template-columns: 1fr; gap: 38px; }
          .mts-contact-section { padding: 65px 22px 75px; }
          .mts-contact-info { grid-template-columns: 1fr 1fr; max-width: none; }
        }

        @media (max-width: 600px) {
          .mts-contact-section { padding: 52px 20px 65px; }
          .mts-contact-form-card { padding: 25px 20px; }
          .mts-contact-form-grid { grid-template-columns: 1fr; }
          .mts-contact-full { grid-column: auto; }
          .mts-contact-info { grid-template-columns: 1fr; }
          .mts-contact-info-box { padding: 20px; }
          .mts-contact-phone { font-size: 21px; }
        }
      `}</style>

      <SiteHeader phoneHref={`tel:+1${PHONE}`} />

      <main>
        <section className="mts-contact-section" aria-labelledby="contact-heading">
          <div className="mts-contact-grid">
            <div>
              <div className="mts-contact-kicker">Contact Mighty Tech Solutions</div>
              <h1 className="mts-contact-title" id="contact-heading">
                Tell us what you need help with
              </h1>
              <p className="mts-contact-lead">
                Whether your business needs ongoing IT support or you are
                improving technology at home, tell us about your project,
                installation or technical issue. Your request goes directly to
                Mighty Tech Solutions.
              </p>

              <div className="mts-contact-info">
                <div className="mts-contact-info-box mts-contact-info-box--dark">
                  <div className="mts-contact-info-label">Prefer to call?</div>
                  <a className="mts-contact-phone" href={`tel:+1${PHONE}`}>
                    (689) 272-8874
                  </a>
                  <p className="mts-contact-info-copy">
                    Speak with us directly about your service request.
                  </p>
                </div>

                <div className="mts-contact-info-box">
                  <div className="mts-contact-info-label">Serving Central Florida</div>
                  <p className="mts-contact-info-copy">
                    Business technology and residential technology services,
                    including networks, IT support, security technology, smart
                    home systems and AV installations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mts-contact-form-card">
              <h2>Request Service</h2>
              <p className="mts-contact-form-intro">
                Complete the form below and we&apos;ll receive your request by email.
              </p>

              {requestedService && form.service === requestedService && (
                <div className="mts-contact-preset-note" role="status">
                  Service selected from your request: <strong>{requestedService}</strong>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mts-contact-form-grid">
                  <div>
                    <label className="mts-contact-label" htmlFor="name">Name *</label>
                    <input
                      id="name"
                      className="mts-contact-input"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      value={form.name}
                      onChange={(event) => updateField("name", event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="mts-contact-label" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      className="mts-contact-input"
                      type="email"
                      autoComplete="email"
                      maxLength={150}
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="mts-contact-label" htmlFor="phone">Phone *</label>
                    <input
                      id="phone"
                      className="mts-contact-input"
                      type="tel"
                      autoComplete="tel"
                      maxLength={40}
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="mts-contact-label" htmlFor="city">City</label>
                    <input
                      id="city"
                      className="mts-contact-input"
                      type="text"
                      autoComplete="address-level2"
                      maxLength={100}
                      value={form.city}
                      onChange={(event) => updateField("city", event.target.value)}
                    />
                  </div>

                  <div className="mts-contact-full">
                    <label className="mts-contact-label" htmlFor="service">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      className="mts-contact-input"
                      value={form.service}
                      onChange={(event) => updateField("service", event.target.value)}
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <optgroup label="For Business">
                        {BUSINESS_SERVICES.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </optgroup>
                      <optgroup label="For Home">
                        {HOME_SERVICES.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </optgroup>
                      <optgroup label="General Requests">
                        {GENERAL_SERVICES.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </optgroup>
                      <option value="Other">Other / Not sure</option>
                    </select>
                  </div>

                  <div className="mts-contact-full">
                    <label className="mts-contact-label" htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      className="mts-contact-input"
                      rows={7}
                      maxLength={3000}
                      value={form.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      placeholder="Tell us what you need installed, improved or troubleshot."
                      required
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {/* Retain the hidden honeypot field expected by the existing endpoint. */}
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}
                  >
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={(event) => updateField("website", event.target.value)}
                    />
                  </div>

                  <div className="mts-contact-full">
                    <button
                      className="mts-contact-submit"
                      type="submit"
                      disabled={status === "sending"}
                    >
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>

              {status === "sent" && (
                <div className="mts-contact-alert mts-contact-alert--success" role="status">
                  Thank you. Your message has been sent to Mighty Tech Solutions.
                  We&apos;ll review your request and get back to you.
                </div>
              )}

              {status === "error" && (
                <div className="mts-contact-alert mts-contact-alert--error" role="alert">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="mts-contact-footer">
        © 2026 Mighty Tech Solutions LLC · Business &amp; Residential Technology · Central Florida
        <div style={{ marginTop: 8 }}>
          <a href={`tel:+1${PHONE}`}>(689) 272-8874</a>
          {" · "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </footer>
    </div>
  );
}
