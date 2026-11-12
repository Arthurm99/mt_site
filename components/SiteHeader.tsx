type SiteHeaderProps = {
  phoneHref: string;
};

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "For Business", href: "/for-business" },
  { label: "For Home", href: "/for-home" },
  { label: "Projects", href: "/#projects" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader({ phoneHref }: SiteHeaderProps) {
  return (
    <header className="mts-site-header">
      <div className="mts-header-inner">
        <a href="/" className="mts-header-logo" aria-label="Mighty Tech Solutions — Home">
          <img
            src="/Logo_Horizontal_FB.JPG"
            alt="Mighty Tech Solutions LLC"
          />
        </a>

        <nav className="mts-header-desktop" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="mts-header-call" href={phoneHref}>
          Call Now
        </a>

        <details className="mts-header-mobile">
          <summary aria-label="Open navigation menu">
            <span aria-hidden="true">☰</span>
          </summary>

          <nav aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}

            <a className="mts-mobile-call" href={phoneHref}>
              Call Now
            </a>
          </nav>
        </details>
      </div>

      <style>{`
        .mts-site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.98);
          border-bottom: 1px solid #DBE7F3;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .mts-header-inner {
          width: 100%;
          max-width: 1240px;
          min-height: 88px;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .mts-header-logo {
          display: flex;
          align-items: center;
          flex: 0 0 auto;
          text-decoration: none;
        }

        .mts-header-logo img {
          display: block;
          height: 76px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
        }

        .mts-header-desktop {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 22px;
          flex: 1 1 auto;
        }

        .mts-header-desktop a {
          color: #294A69;
          text-decoration: none;
          font-size: 14px;
          font-weight: 650;
          white-space: nowrap;
          transition: color 0.15s ease;
        }

        .mts-header-desktop a:hover {
          color: #0866E8;
        }

        .mts-header-call,
        .mts-mobile-call {
          background: #0866E8;
          color: #ffffff;
          border-radius: 10px;
          padding: 13px 21px;
          font-size: 14px;
          font-weight: 750;
          line-height: 1.2;
          text-decoration: none;
          text-align: center;
          white-space: nowrap;
          transition: background-color 0.15s ease;
        }

        .mts-header-call:hover,
        .mts-mobile-call:hover {
          background: #0055C8;
        }

        .mts-header-mobile {
          display: none;
          position: relative;
          flex: 0 0 auto;
        }

        .mts-header-mobile summary {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F2F7FC;
          border: 1px solid #dbe3ef;
          border-radius: 11px;
          color: #08264A;
          font-size: 23px;
          cursor: pointer;
          list-style: none;
          user-select: none;
        }

        .mts-header-mobile summary::-webkit-details-marker {
          display: none;
        }

        .mts-header-mobile[open] summary {
          background: #E5F3FF;
          border-color: #A8CDED;
        }

        .mts-header-mobile nav {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          width: 280px;
          max-width: calc(100vw - 40px);
          padding: 14px;
          background: #ffffff;
          border: 1px solid #DBE7F3;
          border-radius: 16px;
          box-shadow: 0 16px 42px rgba(15, 23, 42, 0.16);
          display: flex;
          flex-direction: column;
        }

        .mts-header-mobile nav a {
          display: block;
          color: #294A69;
          padding: 12px 10px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 650;
          text-decoration: none;
        }

        .mts-header-mobile nav a:hover {
          background: #f1f5f9;
          color: #0756C4;
        }

        .mts-header-mobile nav .mts-mobile-call {
          margin-top: 10px;
          padding: 14px 18px;
          color: #ffffff;
        }

        .mts-header-mobile nav .mts-mobile-call:hover {
          background: #0055C8;
          color: #ffffff;
        }

        .mts-site-header a:focus-visible,
        .mts-site-header summary:focus-visible {
          outline: 3px solid #60a5fa;
          outline-offset: 3px;
        }

        @media (max-width: 1080px) {
          .mts-header-desktop,
          .mts-header-call {
            display: none;
          }

          .mts-header-mobile {
            display: block;
          }

          .mts-header-inner {
            min-height: 80px;
            padding: 0 22px;
          }

          .mts-header-logo img {
            height: 66px;
          }
        }

        @media (max-width: 420px) {
          .mts-header-inner {
            padding: 0 20px;
          }

          .mts-header-logo img {
            height: 62px;
          }
        }
      `}</style>
    </header>
  );
}
