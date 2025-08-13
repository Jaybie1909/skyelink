import React, { useState, useEffect } from "react";

const styles = {
  main: {
    maxWidth: "100%",
    margin: 0,
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
    overflow: "hidden",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 20px",
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px 60px",
    color: "white",
    position: "relative",
  },
  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
    zIndex: 1,
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: "800",
    marginBottom: "20px",
    background: "linear-gradient(45deg, #fff, #e0e7ff)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 4px 20px rgba(0,0,0,0.3)",
    animation: "fadeInUp 1s ease-out",
  },
  lead: {
    fontSize: "1.3rem",
    marginBottom: "40px",
    color: "rgba(255,255,255,0.9)",
    maxWidth: 800,
    margin: "0 auto 40px",
    lineHeight: 1.6,
    animation: "fadeInUp 1s ease-out 0.2s both",
  },
  qrSection: {
    background: "rgba(255,255,255,0.95)",
    borderRadius: "20px",
    padding: "40px",
    margin: "40px auto",
    maxWidth: 600,
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
    backdropFilter: "blur(10px)",
    animation: "slideInScale 0.8s ease-out 0.4s both",
    position: "relative",
    overflow: "hidden",
  },
  qrGlow: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    background:
      "conic-gradient(from 0deg, transparent, rgba(102, 126, 234, 0.1), transparent)",
    animation: "rotate 8s linear infinite",
    zIndex: 1,
  },
  qrContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    color: "#333",
  },
  qrImage: {
    width: 180,
    height: 180,
    margin: "20px auto",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "block",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    border: "none",
    padding: "15px 35px",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
    position: "relative",
    overflow: "hidden",
  },
  btnSecondary: {
    background: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
    color: "white",
    border: "none",
    padding: "18px 45px",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "700",
    transition: "all 0.3s ease",
    boxShadow: "0 15px 40px rgba(255, 107, 107, 0.4)",
    position: "relative",
    overflow: "hidden",
    animation: "pulse 2s infinite",
  },
  contentSection: {
    background: "rgba(255,255,255,0.98)",
    margin: "40px 20px",
    borderRadius: "25px",
    padding: "60px 40px",
    boxShadow: "0 25px 80px rgba(0,0,0,0.15)",
    backdropFilter: "blur(20px)",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: "50px",
    background: "linear-gradient(blue, black, green)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    marginBottom: "40px",
  },
  card: {
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  cardBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
  },
  cardOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)",
    zIndex: 2,
  },
  cardContent: {
    position: "relative",
    zIndex: 3,
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    marginBottom: "15px",
    color: "white",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  cardDesc: {
    color: "rgba(255,255,255,0.9)",
    lineHeight: 1.6,
    fontSize: "1rem",
    textShadow: "0 1px 2px rgba(0,0,0,0.5)",
  },
  ctaSection: {
    textAlign: "center",
    padding: "80px 20px",
    background:
      "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
    margin: "40px 20px",
    borderRadius: "25px",
  },
  floatingElements: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },
  floatingCircle: {
    position: "absolute",
    borderRadius: "50%",
    background:
      "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(102, 126, 234, 0.1))",
    animation: "float 6s ease-in-out infinite",
  },
};

// Add CSS animations
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
      transform: translateY(50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(120deg); }
    66% { transform: translateY(10px) rotate(240deg); }
  }
  
  @keyframes cardHover {
    from { transform: translateY(0) scale(1); }
    to { transform: translateY(-10px) scale(1.02); }
  }
`;

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Add animations to head
    const style = document.createElement("style");
    style.textContent = animations;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleQRHover = (e) => {
    e.target.style.transform = "scale(1.1) rotate(5deg)";
    e.target.style.boxShadow = "0 20px 50px rgba(102, 126, 234, 0.4)";
  };

  const handleQRLeave = (e) => {
    e.target.style.transform = "scale(1) rotate(0deg)";
    e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = "translateY(-3px) scale(1.05)";
    e.target.style.boxShadow = "0 20px 50px rgba(102, 126, 234, 0.5)";
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = "translateY(0) scale(1)";
    e.target.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.3)";
  };

  const services = [
    {
      title: "Family Memories Capture",
      desc: "Preserve every precious moment with interactive QR-powered memory books",
      backgroundImage:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop&crop=faces",
    },
    {
      title: "Business Networking Hub",
      desc: "Professional connections made simple with dynamic contact sharing",
      backgroundImage:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
    },
    {
      title: "Life Events Collage",
      desc: "Celebrate milestones with beautifully curated memory collections",
      backgroundImage:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop&crop=center",
    },
    {
      title: "Moment Scrapbooks",
      desc: "Traditional scrapbooking meets digital innovation",
      backgroundImage:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=center",
    },
    {
      title: "Wedding Memories Forever",
      desc: "Your special day, preserved for eternity in digital elegance",
      backgroundImage:
        "https://images.unsplash.com/photo-1519027156611-f83273d3333a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHdlZGRpbmclMjBtZW1vcmllc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Legacy Life Moments",
      desc: "Create lasting tributes and memory books for loved ones",
      backgroundImage:
        "https://images.unsplash.com/photo-1528569937393-ee892b976859?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBhbGJ1bXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const features = [
    {
      title: "Capture Life's Moments",
      desc: "SKYELINK helps you preserve every special occasion, big or small. From family milestones to personal achievements, store it all in one easy-to-access space.",
    },
    {
      title: "Share What Matters",
      desc: "SKYELINK lets you share memories in a unique way. Give loved ones a digital token that connects them instantly to photos, videos, and stories.",
    },
    {
      title: "For Every Chapter of Life",
      desc: "Whether it's a wedding, newborn, business, or beloved pet, SKYELINK offers custom token cards designed to hold memories for every stage.",
    },
    {
      title: "Dynamic NFC QR codes",
      desc: "Update content without reprinting codes - your memories evolve as life happens",
    },
    {
      title: "Lightning Fast Access Via NFC",
      desc: "Instant generation and real-time analytics with cloud-powered performance",
    },
    {
      title: "Premium Quality Cards",
      desc: "High-resolution codes on premium materials that last a lifetime",
    },
  ];

  return (
    <main style={styles.main}>
      {/* Floating background elements */}
      <div style={styles.floatingElements}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.floatingCircle,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroBackground} />
        <div style={styles.heroContent}>
          <h1 style={styles.title}>One Tap. One Scan. Total Trust.</h1>
          <p style={styles.lead}>
            From preserving your most cherished memories to powering modern
            business needs, SKYELINK delivers dynamic, customized NFC QR code
            solutions—whether for loved ones or your livelihood.
          </p>

          <div style={styles.qrSection}>
            <div style={styles.qrGlow} />
            <div style={styles.qrContent}>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                See How SKYELINK Works
              </p>
              <p style={{ marginBottom: "25px", color: "#666" }}>
                Scan this NFC QR code or click below to see a sample business
                portfolio page
              </p>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://SKYELINK.com/sample-business-portfolio"
                alt="Sample Business Portfolio NFC QR code"
                style={styles.qrImage}
                onMouseEnter={handleQRHover}
                onMouseLeave={handleQRLeave}
              />
              <br />
              <button
                style={styles.btnPrimary}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                onClick={() =>
                  window.open(
                    "https://SKYELINK.com/sample-business-portfolio",
                    "_blank"
                  )
                }
              >
                View Sample Page
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div style={styles.container}>
        <section style={styles.contentSection}>
          <h2 style={styles.sectionTitle}>
            NFC & Smart QR Solutions for Life & Legacy
          </h2>
          <div style={styles.grid}>
            {services.map((service, index) => (
              <div
                key={service.title}
                style={{
                  ...styles.card,
                  transform:
                    hoveredCard === index
                      ? "translateY(-15px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredCard === index
                      ? "0 25px 60px rgba(102, 126, 234, 0.2)"
                      : "0 15px 35px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  style={{
                    ...styles.cardBackground,
                    backgroundImage: `url(${service.backgroundImage})`,
                  }}
                />
                <div style={styles.cardOverlay} />
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{service.title}</h3>
                  <p style={styles.cardDesc}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section style={styles.contentSection}>
          <h2 style={styles.sectionTitle}>Why SKYELINK?</h2>
          <div style={styles.grid}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                style={{
                  ...styles.card,
                  background: "linear-gradient(145deg, #ffffff, #f8fafc)",
                  border: "1px solid rgba(102, 126, 234, 0.1)",
                  transform:
                    hoveredCard === `feature-${index}`
                      ? "translateY(-15px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredCard === `feature-${index}`
                      ? "0 25px 60px rgba(118, 75, 162, 0.2)"
                      : "0 15px 35px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={() => setHoveredCard(`feature-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.cardContent}>
                  <h3 style={{ ...styles.cardTitle, color: "#2d3748" }}>
                    {feature.title}
                  </h3>
                  <p style={{ ...styles.cardDesc, color: "#64748b" }}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: "30px" }}>
            Ready to Create Your Digital Legacy?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "black",
              marginBottom: "40px",
              maxWidth: "600px",
              margin: "0 auto 40px",
            }}
          >
            Join thousands who trust SKYELINK to preserve their most precious
            memories and power their professional connections.
          </p>
          <button
            style={styles.btnSecondary}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px) scale(1.1)";
              e.target.style.boxShadow = "0 25px 60px rgba(255, 107, 107, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 15px 40px rgba(255, 107, 107, 0.4)";
            }}
            onClick={() =>
              alert("Get Yours Now! - Services exploration coming soon!")
            }
          >
            🚀 Get Yours Now! Explore Services
          </button>
        </section>
      </div>
    </main>
  );
}
