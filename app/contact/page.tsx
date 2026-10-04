"use client";

import { FormEvent, useState } from "react";

const PHONE = "6892728874";

const SERVICES = [
  "Business WiFi & Networking",
  "Network Cabling & Structured Cabling",
  "Security Camera Installation",
  "Small Business IT Support",
  "Commercial AV / TV Installation",
  "Residential WiFi & Networking",
  "Smart Home & Access",
  "Residential Security Technology",
  "TV Mounting / Home AV",
  "Other",
];

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

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      setForm(INITIAL_FORM);
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

          .desktop-nav {
            display: flex;
            align-items: center;
            gap: 18px;
          }

          .contact-grid {
            display: grid;
            grid-template-columns: 0.82fr 1.18fr;
            gap: 44px;
            align-items: start;
          }

          .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .full-width {
            grid-column: 1 / -1;
          }

          .field-label {
            display: block;
            font-size: 13px;
            font-weight: 750;
            color: #334155;
            margin-bottom: 7px;
          }

          .field-input {
            width: 100%;
            border: 1px solid #cbd5e1;
            border-radius: 11px;
            padding: 13px 14px;
            font: inherit;
            font-size: 15px;
            color: #0f172a;
            background: #ffffff;
            outline: none;
          }

          .field-input:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.10);
          }

          .mobile-menu {
            display: none;
          }

          @media (max-width: 900px) {
            .desktop-nav {
              display: none !important;
            }

            .mobile-menu {
              display: block;
            }

            .contact-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            .form-grid {
              grid-template-columns: 1fr;
            }

            .full-width {
              grid-column: auto;
            }

            .contact-title {
              font-size: 36px !important;
            }

            .logo-image {
              height: 54px !important;
            }
          }
        `}
      </style>

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
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              className="logo-image"
              src="/Logo_Horizontal_FB.JPG"
              alt="Mighty Tech Solutions LLC"
              style={{ height: 64, width: "auto", display: "block" }}
            />
          </a>

          <nav className="desktop-nav">
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
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={`tel:+1${PHONE}`}
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
            📞 Call Now
          </a>

          <details className="mobile-menu" style={{ position: "relative" }}>
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
                href="/contact"
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
                Contact Us
              </a>
            </div>
          </details>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg, #f8fafc 0%, #eef6ff 55%, #f8fafc 100%)",
          padding: "78px 24px 84px",
        }}
      >
        <div
          className="contact-grid"
          style={{ maxWidth: 1120, margin: "0 auto" }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                background: "#dbeafe",
                color: "#1d4ed8",
                padding: "7px 14px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 750,
                marginBottom: 20,
              }}
            >
              Contact Mighty Tech Solutions
            </div>

            <h1
              className="contact-title"
              style={{
                fontSize: 47,
                lineHeight: 1.08,
                letterSpacing: "-1.4px",
                fontWeight: 850,
                margin: "0 0 20px",
              }}
            >
              Tell us what you need help with
            </h1>

            <p
              style={{
                color: "#475569",
                fontSize: 17,
                lineHeight: 1.72,
                margin: "0 0 28px",
                maxWidth: 520,
              }}
            >
              Send the details of your project, installation or technology
              problem. Your message will go directly to Mighty Tech Solutions.
            </p>

            <div
              style={{
                display: "grid",
                gap: 14,
                maxWidth: 480,
              }}
            >
              <div
                style={{
                  border: "1px solid #dbeafe",
                  background: "#ffffff",
                  borderRadius: 15,
                  padding: 20,
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 6 }}>Prefer to call?</div>
                <a
                  href={`tel:+1${PHONE}`}
                  style={{
                    color: "#2563eb",
                    textDecoration: "none",
                    fontWeight: 750,
                  }}
                >
                  (689) 272-8874
                </a>
              </div>

              <div
                style={{
                  border: "1px solid #e2e8f0",
                  background: "#ffffff",
                  borderRadius: 15,
                  padding: 20,
                }}
              >
                <div style={{ fontWeight: 800, marginBottom: 6 }}>
                  Commercial + Residential
                </div>
                <div style={{ color: "#64748b", fontSize: 14, lineHeight: 1.6 }}>
                  Networking, WiFi, structured cabling, security cameras,
                  small-business IT support, AV and residential technology.
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dbeafe",
              borderRadius: 20,
              padding: 28,
              boxShadow: "0 14px 45px rgba(15,23,42,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: 25,
                fontWeight: 850,
                margin: "0 0 7px",
              }}
            >
              Request Service
            </h2>

            <p
              style={{
                color: "#64748b",
                fontSize: 14,
                lineHeight: 1.65,
                margin: "0 0 24px",
              }}
            >
              Complete the form below and we&apos;ll receive your request by
              email.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div>
                  <label className="field-label" htmlFor="name">
                    Name *
                  </label>
                  <input
                    id="name"
                    className="field-input"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="email">
                    Email *
                  </label>
                  <input
                    id="email"
                    className="field-input"
                    type="email"
                    autoComplete="email"
                    maxLength={150}
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="phone">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    className="field-input"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    className="field-input"
                    type="text"
                    autoComplete="address-level2"
                    maxLength={100}
                    value={form.city}
                    onChange={(e) => updateField("city", e.target.value)}
                  />
                </div>

                <div className="full-width">
                  <label className="field-label" htmlFor="service">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    className="field-input"
                    value={form.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="full-width">
                  <label className="field-label" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    className="field-input"
                    rows={7}
                    maxLength={3000}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us what you need installed, repaired, configured or troubleshot."
                    required
                    style={{ resize: "vertical" }}
                  />
                </div>

                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-10000px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => updateField("website", e.target.value)}
                  />
                </div>

                <div className="full-width">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      width: "100%",
                      border: 0,
                      background:
                        status === "sending" ? "#64748b" : "#2563eb",
                      color: "#ffffff",
                      borderRadius: 12,
                      padding: "15px 20px",
                      fontSize: 15,
                      fontWeight: 800,
                      cursor:
                        status === "sending" ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>

            {status === "sent" && (
              <div
                role="status"
                style={{
                  marginTop: 18,
                  background: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  color: "#166534",
                  borderRadius: 12,
                  padding: "14px 16px",
                  fontSize: 14,
                  lineHeight: 1.55,
                  fontWeight: 650,
                }}
              >
                Thank you. Your message has been sent to Mighty Tech Solutions.
                We&apos;ll review your request and get back to you.
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                style={{
                  marginTop: 18,
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  color: "#991b1b",
                  borderRadius: 12,
                  padding: "14px 16px",
                  fontSize: 14,
                  lineHeight: 1.55,
                  fontWeight: 650,
                }}
              >
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </section>

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
      </footer>
    </main>
  );
}
