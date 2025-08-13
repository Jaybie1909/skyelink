import React, { useState, useEffect } from "react";

const styles = {
  main: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
    overflow: "hidden",
    paddingTop: "120px",
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
    maxWidth: 700,
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
  demoSection: {
    background: "linear-gradient(145deg, #f8fafc, #ffffff)",
    borderRadius: "20px",
    padding: "40px",
    marginBottom: "50px",
    border: "1px solid rgba(102, 126, 234, 0.1)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  demoTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "15px",
  },
  demoDescription: {
    color: "#64748b",
    fontSize: "1.1rem",
    marginBottom: "30px",
    lineHeight: 1.6,
  },
  primaryButton: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    border: "none",
    padding: "15px 35px",
    borderRadius: "50px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
    position: "relative",
    overflow: "hidden",
  },
  secondaryButton: {
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
  benefitsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "25px",
    marginBottom: "50px",
  },
  benefitCard: {
    background: "linear-gradient(145deg, #ffffff, #f8fafc)",
    borderRadius: "18px",
    padding: "30px",
    border: "1px solid rgba(102, 126, 234, 0.1)",
    boxShadow: "0 12px 35px rgba(0,0,0,0.06)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  },
  benefitIcon: {
    width: "55px",
    height: "55px",
    borderRadius: "15px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "1.8rem",
    marginBottom: "20px",
  },
  benefitTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "12px",
  },
  benefitDescription: {
    color: "#64748b",
    lineHeight: 1.6,
    fontSize: "1rem",
  },
  industriesSection: {
    background: "linear-gradient(145deg, #f8fafc, #ffffff)",
    borderRadius: "20px",
    padding: "40px",
    marginBottom: "40px",
    border: "1px solid rgba(102, 126, 234, 0.1)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },
  industriesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  industryItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "20px",
    background: "rgba(255,255,255,0.8)",
    borderRadius: "12px",
    border: "1px solid rgba(102, 126, 234, 0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  industryIcon: {
    width: "45px",
    height: "45px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: "1.3rem",
    flexShrink: 0,
  },
  industryText: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#2d3748",
  },
  ctaSection: {
    textAlign: "center",
    padding: "80px 40px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "25px",
    animation: "fadeInUp 1s ease-out 0.6s both",
  },
  ctaTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "25px",
  },
  ctaDescription: {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto 40px",
    lineHeight: 1.6,
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

export default function Partners() {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

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

  const benefits = [
    {
      icon: "💰",
      title: "Bulk Discount",
      description:
        "Get special pricing on bulk NFC QR code orders with tiered discounting that scales with your business needs.",
    },
    {
      icon: "🚀",
      title: "Priority Support",
      description:
        "Direct access to our technical team for quick issue resolution and dedicated account management.",
    },
    {
      icon: "🏷️",
      title: "White-Label Solution",
      description:
        "Offer QR services under your own brand with complete customization and branding options.",
    },
    {
      icon: "🔧",
      title: "Custom Integration",
      description:
        "API access for seamless integration with your existing systems and workflow automation.",
    },
    {
      icon: "✨",
      title: "Extended Features",
      description:
        "Password protection, time-limited QRs, custom branding, and advanced security features.",
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description:
        "Track performance and engagement with comprehensive analytics and detailed reporting tools.",
    },
  ];

  const industries = [
    { icon: "👔", text: "Business Cards & Digital Profiles" },
    { icon: "🆔", text: "Employee ID Integration" },
    { icon: "🔒", text: "Product Authentication" },
    { icon: "📦", text: "Inventory Management & Warehousing" },
    { icon: "🤝", text: "Conference & Networking" },
    { icon: "📢", text: "Marketing Applications" },
    { icon: "🍽️", text: "Product Packaging & Restaurant Menus" },
    { icon: "🎉", text: "Events & Special Occasions" },
    { icon: "🏛️", text: "Government & Institutional Use" },
    { icon: "🎓", text: "Educational & Healthcare Solutions" },
  ];

  const handleButtonHover = (e, isPrimary = true) => {
    if (isPrimary) {
      e.target.style.transform = "translateY(-3px) scale(1.05)";
      e.target.style.boxShadow = "0 20px 50px rgba(102, 126, 234, 0.5)";
    } else {
      e.target.style.transform = "translateY(-5px) scale(1.1)";
      e.target.style.boxShadow = "0 25px 60px rgba(255, 107, 107, 0.6)";
    }
  };

  const handleButtonLeave = (e, isPrimary = true) => {
    if (isPrimary) {
      e.target.style.transform = "translateY(0) scale(1)";
      e.target.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.3)";
    } else {
      e.target.style.transform = "translateY(0) scale(1)";
      e.target.style.boxShadow = "0 15px 40px rgba(255, 107, 107, 0.4)";
    }
  };

  return (
    <main style={styles.main}>
      {/* Floating background elements */}
      <div style={styles.floatingElements}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.floatingCircle,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
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
          <h1 style={styles.title}>Partnership Program</h1>
          <p style={styles.subtitle}>
            Join our network of NFC QR code service providers and unlock
            exclusive benefits that will accelerate your business growth.
          </p>
        </section>

        {/* Demo Section */}
        <section style={styles.contentSection}>
          <h2 style={styles.sectionTitle}>See Our Partnership in Action</h2>

          <div style={styles.demoSection}>
            <h3 style={styles.demoTitle}>
              TechNova Solutions Partnership Demo
            </h3>
            <p style={styles.demoDescription}>
              Explore how TechNova Solutions leverages our QR platform to
              deliver enterprise-grade solutions and enhance their client
              offerings.
            </p>
            <button
              style={styles.primaryButton}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonLeave(e, true)}
              onClick={() => alert("View Business Partner Demo clicked")}
            >
              🔍 View Business Partner Demo
            </button>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={styles.contentSection}>
          <h2 style={styles.sectionTitle}>Partnership Benefits</h2>

          <div style={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  ...styles.benefitCard,
                  transform:
                    hoveredBenefit === index
                      ? "translateY(-10px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredBenefit === index
                      ? "0 25px 60px rgba(102, 126, 234, 0.15)"
                      : "0 12px 35px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div style={styles.benefitIcon}>{benefit.icon}</div>
                <h3 style={styles.benefitTitle}>{benefit.title}</h3>
                <p style={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section style={styles.contentSection}>
          <h2 style={styles.sectionTitle}>QR Solutions For Every Industry</h2>

          <div style={styles.industriesSection}>
            <div style={styles.industriesGrid}>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.industryItem,
                    transform:
                      hoveredIndustry === index
                        ? "translateX(5px)"
                        : "translateX(0)",
                    background:
                      hoveredIndustry === index
                        ? "rgba(102, 126, 234, 0.08)"
                        : "rgba(255,255,255,0.8)",
                    boxShadow:
                      hoveredIndustry === index
                        ? "0 8px 25px rgba(102, 126, 234, 0.1)"
                        : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                >
                  <div style={styles.industryIcon}>{industry.icon}</div>
                  <span style={styles.industryText}>{industry.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>Become Our QR Partner Today</h2>
          <p style={styles.ctaDescription}>
            Enhance your business offerings with our cutting-edge QR solutions.
            Join our partner network and get access to exclusive benefits that
            will transform your service capabilities.
          </p>
          <button
            style={styles.secondaryButton}
            onMouseEnter={(e) => handleButtonHover(e, false)}
            onMouseLeave={(e) => handleButtonLeave(e, false)}
            onClick={() => alert("Be Our QR Partner clicked")}
          >
            🤝 Be Our QR Partner
          </button>
        </section>
      </div>
    </main>
  );
}
