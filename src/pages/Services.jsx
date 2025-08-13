import React, { useState, useEffect } from "react";

const styles = {
  main: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
    overflow: "hidden",
    paddingTop: "120px", // Account for fixed header
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 20px",
    position: "relative",
    zIndex: 10,
  },
  hero: {
    textAlign: "center",
    color: "white",
    marginBottom: "80px",
    animation: "fadeInUp 1s ease-out",
  },
  title: {
    fontSize: "3.2rem",
    fontWeight: "800",
    marginBottom: "20px",
    background: "linear-gradient(45deg, #fff, #e0e7ff)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 4px 20px rgba(0,0,0,0.3)",
  },
  subtitle: {
    fontSize: "1.3rem",
    color: "rgba(255,255,255,0.9)",
    maxWidth: 800,
    margin: "0 auto",
    lineHeight: 1.6,
  },
  contentSection: {
    background: "rgba(255,255,255,0.98)",
    borderRadius: "25px",
    padding: "60px 40px",
    marginBottom: "40px",
    boxShadow: "0 25px 80px rgba(0,0,0,0.15)",
    backdropFilter: "blur(20px)",
    animation: "slideInScale 0.8s ease-out 0.2s both",
  },
  sectionTitle: {
    fontSize: "2.2rem",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "50px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  tokenCardSection: {
    background: "linear-gradient(145deg, #f8fafc, #ffffff)",
    borderRadius: "20px",
    padding: "40px",
    marginBottom: "40px",
    border: "1px solid rgba(102, 126, 234, 0.1)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },
  includesList: {
    listStyle: "none",
    padding: 0,
    display: "grid",
    gap: "25px",
  },
  includesItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    padding: "25px",
    background: "linear-gradient(145deg, #ffffff, #f8fafc)",
    borderRadius: "15px",
    border: "1px solid rgba(102, 126, 234, 0.1)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },
  iconWrapper: {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "1.5rem",
    flexShrink: 0,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "8px",
  },
  itemDescription: {
    color: "#64748b",
    lineHeight: 1.6,
    fontSize: "1rem",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginTop: "50px",
  },
  serviceCard: {
    background: "linear-gradient(145deg, #ffffff, #f8fafc)",
    borderRadius: "20px",
    padding: "35px",
    border: "1px solid rgba(102, 126, 234, 0.1)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  },
  serviceIcon: {
    width: "60px",
    height: "60px",
    borderRadius: "15px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  serviceTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "15px",
  },
  serviceDescription: {
    color: "#64748b",
    lineHeight: 1.8,
    fontSize: "1rem",
    whiteSpace: "pre-line",
  },
  ctaSection: {
    textAlign: "center",
    padding: "80px 40px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "25px",
    marginTop: "40px",
    animation: "fadeInUp 1s ease-out 0.4s both",
  },
  ctaButton: {
    background: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
    color: "white",
    border: "none",
    padding: "18px 45px",
    borderRadius: "50px",
    fontSize: "1.2rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 15px 40px rgba(255, 107, 107, 0.4)",
    animation: "pulse 2s infinite",
  },
  floatingElements: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1,
  },
  floatingCircle: {
    position: "absolute",
    borderRadius: "50%",
    background:
      "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(102, 126, 234, 0.1))",
    animation: "float 8s ease-in-out infinite",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "60px",
    height: "60px",
    opacity: 0.1,
    fontSize: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
};

const animations = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInScale {
    from {
      opacity: 0;
      transform: translateY(50px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-30px) rotate(120deg); }
    66% { transform: translateY(15px) rotate(240deg); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredInclude, setHoveredInclude] = useState(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = animations;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const includedFeatures = [
    {
      icon: "💳",
      title: "Premium Token Card",
      description:
        "High-quality physical card with embedded NFC QR code, designed to last a lifetime with premium materials and elegant finish.",
      bgIcon: "💎",
    },
    {
      icon: "🌐",
      title: "Digital Platform",
      description:
        "Secure online space for your content and memories with cloud storage, easy management, and instant updates.",
      bgIcon: "☁️",
    },
    {
      icon: "♾️",
      title: "Lifetime Access",
      description:
        "Your memories and content preserved forever with guaranteed access, regular backups, and future-proof technology.",
      bgIcon: "🔒",
    },
  ];

  const services = [
    {
      icon: "🕊️",
      title: "Peacebook Card",
      description:
        "Honor loved ones with dignity. Create interactive digital memorials for funerals, featuring photo galleries, tribute messages, and donation links—all accessible with a single tap.",
    },
    {
      icon: "🎉",
      title: "Life Event Card",
      description: `Elevate your celebrations:

• Weddings: Share digital invitations, event schedules, and gift registries.
• Birthdays/Anniversaries: Curate video messages, photo albums, and wishlists.
• Reunions & Greetings: Send customizable e-cards that update in real-time.`,
    },
    {
      icon: "🚗",
      title: "Safe Ride Card",
      description: `Protect riders, drivers, and passengers:
 
• Instant ID verification for TNVS drivers, riders and passengers.
• Emergency contact access and trip-sharing features.
• Secure profile sharing during rides.`,
    },
    {
      icon: "💼",
      title: "SnapTap Pro Card",
      description: `The ultimate networking tool for every career:
 
• All Professions: Dynamic digital profiles with portfolios, resumes, and social links.
• Business Leaders: Share company insights, investor decks, and event calendars.
• Sales & Real Estate: Instant access to catalogs, virtual property tours, and appointment booking.
• Influencers & Executives: Link to content, promo codes, and contact forms.
        
Ideal For:
Entrepreneurs | Networkers | Consultants | Realtors | Executives | Creators
        
Upgrade Your Networking Game—Get Your SnapTap Pro Card Now.`,
    },
    {
      icon: "⚙️",
      title: "Customized NFC/QR Solutions Card",
      description: `• QR Menus for Restaurants:
Update menus instantly, highlight chef's specials, and integrate loyalty programs—no reprinting costs.

• Corporate Giveaways & IDs:
Reinvent company branding with NFC-enabled IDs, digital handbooks, and smart promotional materials.

• Organization Membership Cards:
Streamline access to member portals, event registrations, and exclusive resources.
        
Boost Efficiency & Brand Loyalty—Request a Custom Business Solution.`,
    },
  ];

  return (
    <main style={styles.main}>
      {/* Floating background elements */}
      <div style={styles.floatingElements}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.floatingCircle,
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div style={styles.container}>
        {/* Hero Section */}
        <section style={styles.hero}>
          <h1 style={styles.title}>Skyelink Card Services</h1>
          <p style={styles.subtitle}>
            Every NFC QR code is available through our premium Token Card
            system. Create lasting digital memories and professional connections
            with our comprehensive range of services.
          </p>
        </section>

        {/* What's Included Section */}
        <section style={styles.contentSection}>
          <h2 style={styles.sectionTitle}>
            What's Included with Every Skyelink Card
          </h2>

          <div style={styles.tokenCardSection}>
            <ul style={styles.includesList}>
              {includedFeatures.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    ...styles.includesItem,
                    transform:
                      hoveredInclude === index
                        ? "translateY(-8px) scale(1.02)"
                        : "translateY(0) scale(1)",
                    boxShadow:
                      hoveredInclude === index
                        ? "0 20px 50px rgba(102, 126, 234, 0.15)"
                        : "0 8px 25px rgba(0,0,0,0.05)",
                  }}
                  onMouseEnter={() => setHoveredInclude(index)}
                  onMouseLeave={() => setHoveredInclude(null)}
                >
                  <div style={styles.backgroundImage}>{feature.bgIcon}</div>
                  <div style={styles.iconWrapper}>{feature.icon}</div>
                  <div style={styles.itemContent}>
                    <h3 style={styles.itemTitle}>{feature.title}</h3>
                    <p style={styles.itemDescription}>{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services Grid Section */}
        <section style={styles.contentSection}>
          <h2 style={styles.sectionTitle}>Our Complete Service Range</h2>

          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  ...styles.serviceCard,
                  transform:
                    hoveredCard === index
                      ? "translateY(-15px) scale(1.03)"
                      : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredCard === index
                      ? "0 25px 60px rgba(102, 126, 234, 0.2)"
                      : "0 15px 40px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: "25px" }}>
            Ready to Get Started?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              marginBottom: "40px",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Choose your perfect Token Card service and start preserving your
            memories or building your professional network today.
          </p>
          <button
            style={styles.ctaButton}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px) scale(1.1)";
              e.target.style.boxShadow = "0 25px 60px rgba(255, 107, 107, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 15px 40px rgba(255, 107, 107, 0.4)";
            }}
            onClick={() => alert("Contact us to get started!")}
          >
            🚀 Get Your Token Card Now!
          </button>
        </section>
      </div>
    </main>
  );
}
