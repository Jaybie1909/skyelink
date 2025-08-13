import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/partners", label: "Partners" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const headerStyles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(102, 126, 234, 0.1)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
  },
  headerScrolled: {
    background: "rgba(255, 255, 255, 0.98)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },
  nav: {
    display: "flex",
    height: "70px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    padding: "8px",
    borderRadius: "12px",
  },
  logoImage: {
    height: "55px",
    width: "auto",
    maxWidth: "220px",
    objectFit: "contain",
    filter: "brightness(1.1) contrast(1.1)",
    transition: "all 0.3s ease",
    display: "block",
  },
  logoFallback: {
    fontSize: "1.75rem",
    fontWeight: "900",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.025em",
    margin: 0,
    padding: 0,
  },
  navList: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    position: "relative",
    padding: "0.75rem 1rem",
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "#4a5568",
    textDecoration: "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    borderRadius: "25px",
    background: "transparent",
    cursor: "pointer",
  },
  navLinkActive: {
    color: "#667eea",
    background: "rgba(102, 126, 234, 0.1)",
  },
  navLinkHover: {
    color: "#667eea",
    background: "rgba(102, 126, 234, 0.05)",
    transform: "translateY(-1px)",
  },
  underline: {
    position: "absolute",
    bottom: "4px",
    left: "1rem",
    right: "1rem",
    height: "2px",
    background: "linear-gradient(90deg, #667eea, #764ba2)",
    borderRadius: "1px",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  underlineActive: {
    transform: "scaleX(1)",
  },
  mobileButton: {
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    color: "#4a5568",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderTop: "1px solid rgba(102, 126, 234, 0.1)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
    transform: "translateY(-100%)",
    opacity: 0,
    visibility: "hidden",
    transition: "all 0.3s ease",
  },
  mobileMenuOpen: {
    transform: "translateY(0)",
    opacity: 1,
    visibility: "visible",
  },
  mobileNavList: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "0.5rem",
  },
  mobileNavLink: {
    padding: "1rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#4a5568",
    textDecoration: "none",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  ctaButton: {
    marginLeft: "1rem",
    padding: "0.75rem 1.5rem",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "0.9rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const logoSrc = "/logo2.jpg";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Add mobile styles
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 768px) {
        .nav-desktop { display: none !important; }
        .mobile-button { display: flex !important; }
      }
      @media (min-width: 769px) {
        .nav-desktop { display: flex !important; }
        .mobile-button { display: none !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.head.removeChild(style);
    };
  }, []);

  const handleNavClick = (to) => {
    navigate(to);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header
      style={{
        ...headerStyles.header,
        ...(isScrolled ? headerStyles.headerScrolled : {}),
      }}
    >
      <div style={headerStyles.container}>
        <nav style={headerStyles.nav}>
          {/* Logo */}
          <div>
            <NavLink
              to="/"
              style={{
                ...headerStyles.logoContainer,
                transform: hoveredItem === "logo" ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setHoveredItem("logo")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={handleLogoClick}
            >
              {logoSrc ? (
                <img
                  src={logoSrc}
                  alt="Skyelink Logo"
                  style={headerStyles.logoImage}
                  className="logo-mobile"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              ) : null}
              <div
                style={{
                  ...headerStyles.logoFallback,
                  display: logoSrc ? "none" : "block",
                }}
              >
                SKYELINK
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <ul style={headerStyles.navList} className="nav-desktop">
            {navItems.map(({ to, label }) => {
              const isActive =
                location.pathname === to ||
                (to === "/" && location.pathname === "/");
              const isHovered = hoveredItem === label;

              return (
                <li key={label} style={headerStyles.navItem}>
                  <NavLink
                    to={to}
                    style={{
                      ...headerStyles.navLink,
                      ...(isActive ? headerStyles.navLinkActive : {}),
                      ...(isHovered ? headerStyles.navLinkHover : {}),
                    }}
                    onClick={() => {
                      handleNavClick(to);
                      setIsMobileMenuOpen(false);
                    }}
                    onMouseEnter={() => setHoveredItem(label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {label}
                    <span
                      style={{
                        ...headerStyles.underline,
                        ...(isActive || isHovered
                          ? headerStyles.underlineActive
                          : {}),
                      }}
                    />
                  </NavLink>
                </li>
              );
            })}
            <li>
              <button
                style={{
                  ...headerStyles.ctaButton,
                  transform:
                    hoveredItem === "cta"
                      ? "translateY(-2px) scale(1.05)"
                      : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredItem === "cta"
                      ? "0 8px 25px rgba(102, 126, 234, 0.4)"
                      : "0 4px 15px rgba(102, 126, 234, 0.3)",
                }}
                onMouseEnter={() => setHoveredItem("cta")}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => navigate("/contact")}
              >
                Get Started
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            style={headerStyles.mobileButton}
            className="mobile-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  isMobileMenuOpen
                    ? "M18 6L6 18M6 6l12 12"
                    : "M3 12h18M3 6h18M3 18h18"
                }
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          style={{
            ...headerStyles.mobileMenu,
            ...(isMobileMenuOpen ? headerStyles.mobileMenuOpen : {}),
          }}
        >
          <ul style={headerStyles.mobileNavList}>
            {navItems.map(({ to, label }) => {
              const isActive =
                location.pathname === to ||
                (to === "/" && location.pathname === "/");

              return (
                <li key={label}>
                  <NavLink
                    to={to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      ...headerStyles.mobileNavLink,
                      background: isActive
                        ? "rgba(102, 126, 234, 0.1)"
                        : "transparent",
                      color: isActive ? "#667eea" : "#4a5568",
                    }}
                  >
                    {label}
                  </NavLink>
                </li>
              );
            })}
            <li style={{ marginTop: "1rem" }}>
              <button
                style={{
                  ...headerStyles.ctaButton,
                  width: "100%",
                  marginLeft: 0,
                }}
                onClick={() => {
                  navigate("/contact");
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
