"use client";

import { useState } from "react";

const PHONE = "6892728874";
const WA_URL = `https://wa.me/1${PHONE}`;
const SMS_URL = `sms:+1${PHONE}`;
const EMAIL = "mightytechsolutionsllc@gmail.com";

const NAV = ["Services", "Projects", "Areas", "Contact"];

const SERVICES = [
  { icon: "⚡", title: "Electrical", desc: "Lighting, outlets, switches, ceiling fans and clean electrical troubleshooting." },
  { icon: "📶", title: "Networking & WiFi", desc: "Mesh WiFi, routers, Ethernet wiring, switches and full network troubleshooting." },
  { icon: "📷", title: "Security Cameras", desc: "Ring, wired cameras, NVR systems, monitoring displays and clean cable management." },
  { icon: "🏠", title: "Smart Home", desc: "Smart locks, Nest thermostats, smart lighting, Google Home, Alexa and connected devices." },
  { icon: "📺", title: "TV Mounting & AV", desc: "TV mounting, display setup, basic AV support and organized cable management." },
  { icon: "🔧", title: "Home Tech Support", desc: "Tech support for homes and small businesses, device setup and practical troubleshooting." },
];

const PROJECTS = [
  {
    title: "Mesh WiFi & Networking",
    loc: "Osceola County, FL",
    img: "/Projects/Wifi/mesh.jpg",
  },
  {
    title: "Lighting Installation",
    loc: "Winter Garden, FL",
    img: "/Projects/Lighting/light.jpg",
  },
  {
    title: "Smart Home Solution",
    loc: "Citrus Springs, FL",
    img: "/Projects/SmartHome/sh.jpg",
  },
];

const REVIEWS = [
  {
    name: "Maria G.",
    stars: 5,
    date: "March 2025",
    text: "Arturo did an amazing job installing our security cameras. Very professional, clean work and explained everything clearly. Highly recommend!",
  },
  {
    name: "John R.",
    stars: 5,
    date: "February 2025",
    text: "Set up our entire mesh WiFi system and fixed issues we'd had for years. Fast, knowledgeable and super easy to work with.",
  },
  {
    name: "Sandra M.",
    stars: 5,
    date: "January 2025",
    text: "Installed smart locks, Nest thermostat and connected everything to Google Home. Everything works perfectly. Will definitely call again.",
  },
  {
    name: "Carlos T.",
    stars: 5,
    date: "December 2024",
    text: "Mounted 3 TVs and ran all the cables through the wall. Looks completely clean, no wires visible. Great attention to detail.",
  },
];

const AREAS = ["Davenport","Kissimmee","ChampionsGate","Reunion","Celebration","Orlando","Clermont","Winter Garden","Dr. Phillips","Haines City"];

const WHY = [
  { icon: "🛠️", t: "Real technical background", d: "Electrical work plus networking, systems and IT experience in one provider." },
  { icon: "✨", t: "Clean installations", d: "Organized setups, no exposed cables, clear communication throughout the job." },
  { icon: "📱", t: "Modern home ready", d: "WiFi, smart devices, cameras, TVs, lighting — all connected and working together." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "Security cameras", message: "" });

  const handleSend = () => {
    if (!form.name || !form.phone) return;
    const msg = encodeURIComponent(`Hi! I'm ${form.name}. I need help with: ${form.service}. ${form.message} My phone: ${form.phone}`);
    window.open(`https://wa.me/1${PHONE}?text=${msg}`, "_blank");
    setSent(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", color: "#0f172a", background: "#fff", minHeight: "100vh" }}>

      {/* NAV */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.97)", borderBottom: "1px solid #e2e8f0", backdropFilter: "blur(8px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 80, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img src="/Logo_Horizontal_FB.JPG" alt="Mighty Tech Solutions LLC" style={{ height: 64, width: "auto", display: "block" }} />
          <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
            {NAV.map(n => (
              <button key={n} onClick={() => scrollTo(n)}             style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "#475569", fontWeight: 500 }}>{n}</button>
            ))}
          </nav>
          <a href={WA_URL} target="_blank" rel="noreferrer"
            style={{ background: "#0f172a", color: "#fff", padding: "12px 24px", borderRadius: 12, fontSize: 16, fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            💬 WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#dbeafe", color: "#1d4ed8", padding: "6px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
              ✅ Serving Central Florida
            </div>
            <h1 style={{ fontSize: 42, fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: "-1px" }}>
              Electrical, Networking, WiFi,Cameras & Smart Home Solutions.
            </h1>
            <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.7, margin: "0 0 32px" }}>
              Clean, practical technology services for homes, rentals and small businesses in Davenport, Kissimmee, Orlando and surrounding areas.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={WA_URL} target="_blank" rel="noreferrer"
                style={{ background: "#25d366", color: "#fff", padding: "14px 28px", borderRadius: 14, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                💬 WhatsApp
              </a>
              <a href={SMS_URL}
                style={{ background: "#0f172a", color: "#fff", padding: "14px 28px", borderRadius: 14, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
                📱 Send SMS
              </a>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
              {["Clean work", "Fast response"].map(t => (
                <span key={t} style={{ fontSize: 13, color: "#64748b", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: "#2563eb" }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* CONTACT CARD */}
          <div id="contact" style={{ background: "#fff", borderRadius: 20, padding: 32, boxShadow: "0 4px 40px rgba(0,0,0,0.10)", border: "1px solid #e2e8f0" }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 6px" }}>Request a service or estimate</h2>
            <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 20px" }}>We'll follow up with availability and next steps.</p>
            {sent ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <div style={{ fontSize: 40 }}>✅</div>
                <p style={{ fontWeight: 700, marginTop: 12 }}>Request sent via WhatsApp!</p>
                <p style={{ color: "#64748b", fontSize: 14 }}>We'll get back to you shortly.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 16, background: "#0f172a", color: "#fff", border: "none", padding: "10px 24px", borderRadius: 10, cursor: "pointer", fontWeight: 600 }}>Send another</button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[["Name", "name", "text", "Your name"], ["Phone", "phone", "tel", "(407) 555-0000"]].map(([lbl, key, type, ph]) => (
                  <div key={key}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>{lbl}</label>
                    <input type={type} placeholder={ph} value={form[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 14, boxSizing: "border-box", outline: "none" }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>Service needed</label>
                  <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 14, boxSizing: "border-box" }}>
                    {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#374151", display: "block", marginBottom: 4 }}>Message (optional)</label>
                  <textarea placeholder="Briefly describe what you need" value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 14, boxSizing: "border-box", minHeight: 80, resize: "vertical" }} />
                </div>
                <button onClick={handleSend}
                  style={{ background: "#25d366", color: "#fff", border: "none", padding: "13px", borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                  💬 Send via WhatsApp
                </button>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", paddingTop: 4 }}>
                  <a href={`tel:+1${PHONE}`} style={{ fontSize: 13, color: "#2563eb", textDecoration: "none" }}>📞 (689) 272-8874</a>
                  <a href={`mailto:${EMAIL}`} style={{ fontSize: 13, color: "#2563eb", textDecoration: "none" }}>✉️ Email us</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" }}>Our Services</h2>
        <p style={{ color: "#64748b", fontSize: 16, marginBottom: 40 }}>Electrical, connectivity and smart technology — one provider, clean results.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {SERVICES.map(s => (
            <div key={s.title} style={{ background: "#f8fafc", borderRadius: 16, padding: 24, border: "1px solid #e2e8f0", transition: "box-shadow 0.2s" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{s.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, margin: "0 0 8px" }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section style={{ background: "#0f172a", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Why Mighty Tech?</h2>
          <p style={{ color: "#94a3b8", marginBottom: 40 }}>One provider for electrical work, connectivity and technology setup.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {WHY.map(w => (
              <div key={w.t} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{w.icon}</div>
                <div style={{ fontWeight: 700, color: "#fff", marginBottom: 8 }}>{w.t}</div>
                <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.6, margin: 0 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.5px" }}>Take a look at our most Recent Projects!</h2>
        <p style={{ color: "#64748b", marginBottom: 40 }}></p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {PROJECTS.map(p => (
            <div key={p.title} style={{ borderRadius: 16, overflow: "hidden", position: "relative", minHeight: 220, background: "#1e293b" }}>
              <img src={p.img} alt={p.title} style={{ width: "100%", height: 550, objectFit: "cover", display: "block", opacity: 0.7 }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", background: "linear-gradient(transparent, rgba(0,0,0,0.75))" }}>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: "#cbd5e1" }}>{p.loc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: "#f8fafc", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0, letterSpacing: "-0.5px" }}>Google Reviews</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 999, padding: "6px 16px" }}>
              <span style={{ color: "#f59e0b", fontSize: 18 }}>★★★★★</span>
              <span style={{ fontWeight: 700, fontSize: 15 }}>5.0</span>
              <span style={{ color: "#64748b", fontSize: 13 }}>· {REVIEWS.length} reviews</span>
            </div>
          </div>
          <p style={{ color: "#64748b", marginBottom: 36 }}>What our clients say about us.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {REVIEWS.map(r => (
              <div key={r.name} style={{ background: "#fff", borderRadius: 16, padding: 24, border: "1px solid #e2e8f0", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, color: "#1d4ed8" }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{r.name}</div>
                      <div style={{ fontSize: 12, color: "#94a3b8" }}>{r.date}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: 18, color: "#f59e0b", letterSpacing: -1 }}>{"★".repeat(r.stars)}</span>
                </div>
                <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, margin: 0 }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: "auto" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span style={{ fontSize: 12, color: "#94a3b8" }}>Google review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" style={{ background: "#f8fafc", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 30, fontWeight: 800, marginBottom: 8 }}>Service Areas</h2>
          <p style={{ color: "#64748b", marginBottom: 32 }}>Serving homeowners, rentals, investors and small businesses across Central Florida.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {AREAS.map(a => (
              <span key={a} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 999, padding: "8px 18px", fontSize: 14, fontWeight: 500, color: "#374151" }}>
                📍 {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ background: "#0f172a", borderRadius: 24, padding: "48px 40px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <h2 style={{ color: "#fff", fontSize: 26, fontWeight: 800, margin: "0 0 8px" }}>Need electrical, WiFi, cameras or smart home setup?</h2>
            <p style={{ color: "#94a3b8", margin: 0, fontSize: 15 }}>Contact us for clean work, fast response and practical tech solutions.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={WA_URL} target="_blank" rel="noreferrer"
              style={{ background: "#25d366", color: "#fff", padding: "14px 28px", borderRadius: 14, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              💬 WhatsApp
            </a>
            <a href={SMS_URL}
              style={{ background: "#fff", color: "#0f172a", padding: "14px 28px", borderRadius: 14, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              📱 SMS
            </a>
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #e2e8f0", background: "#f8fafc", padding: "24px", textAlign: "center", fontSize: 13, color: "#94a3b8" }}>
        © 2026 Mighty Tech Solutions LLC · Electrical & Technology Services · Central Florida
        <div style={{ marginTop: 8, display: "flex", justifyContent: "center", gap: 16 }}>
          <a href={`tel:+1${PHONE}`} style={{ color: "#64748b", textDecoration: "none" }}>(689) 272-8874</a>
          <a href={`mailto:${EMAIL}`} style={{ color: "#64748b", textDecoration: "none" }}>{EMAIL}</a>
        </div>
      </footer>
    </div>
  );
}