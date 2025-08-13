import React, { useState, useEffect } from "react";

const galleryItems = [
  {
    id: 1,
    category: "Business",
    title: "Corporate Business Card",
    views: 5678,
    downloads: 1234,
    image:
      "https://plus.unsplash.com/premium_photo-1661380215864-8dd37776f596?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QnVzaW5lc3MlMjBDYXJkfGVufDB8fDB8fHww",
    description:
      "Professional business card with contact information and portfolio link",
    tags: ["Professional", "Contact", "Corporate"],
  },
  {
    id: 2,
    category: "Events",
    title: "Wedding Invitation QR",
    views: 3456,
    downloads: 892,
    image:
      "https://images.unsplash.com/photo-1656104717095-9d062b0d4e8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V2VkZGluZyUyMEludml0YXRpb258ZW58MHx8MHx8fDA%3D",
    description: "Elegant wedding invitation with RSVP and event details",
    tags: ["Wedding", "RSVP", "Celebration"],
  },
  {
    id: 3,
    category: "Business",
    title: "Product Catalog QR",
    views: 2134,
    downloads: 567,
    image:
      "https://plus.unsplash.com/premium_photo-1676559916183-d4033c0b51ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvZHVjdCUyMENhdGFsb2d8ZW58MHx8MHx8fDA%3D",
    description: "Interactive product catalog with pricing and specifications",
    tags: ["Products", "Catalog", "E-commerce"],
  },
  {
    id: 4,
    category: "Business",
    title: "Restaurant Menu QR",
    views: 2987,
    downloads: 743,
    image:
      "https://plus.unsplash.com/premium_photo-1723291330572-9a0f1cb77f06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVzdGF1cmFudCUyME1lbnV8ZW58MHx8MHx8fDA%3D",
    description:
      "Digital menu with ordering system and nutritional information",
    tags: ["Menu", "Restaurant", "Food"],
  },
  {
    id: 5,
    category: "Marketing",
    title: "Social Media Profile",
    views: 1876,
    downloads: 612,
    image:
      "https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29jaWFsJTIwTWVkaWElMjBQcm9maWxlfGVufDB8fDB8fHww",
    description: "Unified social media profile with all platform links",
    tags: ["Social", "Profile", "Marketing"],
  },
  {
    id: 6,
    category: "Events",
    title: "Event Check-in QR",
    views: 1543,
    downloads: 438,
    image:
      "https://media.istockphoto.com/id/1438152962/photo/unrecognizable-woman-arranging-business-id-cards-before-a-business-conference.webp?a=1&b=1&s=612x612&w=0&k=20&c=umB_2TdhG8GJFjBQ8aPtilaZ9b7XBDYKH-dsVlOVAfM=",
    description: "Streamlined event check-in system with attendee management",
    tags: ["Check-in", "Events", "Management"],
  },
  {
    id: 7,
    category: "Government",
    title: "Digital ID Verification",
    views: 4321,
    downloads: 1056,
    image:
      "https://images.unsplash.com/photo-1667453466805-75bbf36e8707?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGlnaXRhbCUyMElEfGVufDB8fDB8fHww",
    description: "Secure digital identity verification for government services",
    tags: ["ID", "Security", "Government"],
  },
  {
    id: 8,
    category: "Marketing",
    title: "Campaign Landing Page",
    views: 2765,
    downloads: 823,
    image:
      "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Marketing campaign landing page with analytics tracking",
    tags: ["Campaign", "Landing", "Analytics"],
  },
];

const categories = ["All", "Business", "Events", "Marketing", "Government"];

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
  filterSection: {
    background: "rgba(255,255,255,0.95)",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "50px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
    backdropFilter: "blur(20px)",
    animation: "slideInScale 0.8s ease-out 0.2s both",
  },
  filterTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "20px",
    textAlign: "center",
  },
  filterButtons: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  filterButton: {
    padding: "12px 25px",
    borderRadius: "25px",
    border: "2px solid transparent",
    background: "transparent",
    color: "#64748b",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  filterButtonActive: {
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
  },
  statsBar: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "40px",
    padding: "20px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
  },
  statItem: {
    textAlign: "center",
    color: "white",
  },
  statNumber: {
    fontSize: "2rem",
    fontWeight: "800",
    display: "block",
  },
  statLabel: {
    fontSize: "0.9rem",
    opacity: 0.8,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "60px",
  },
  card: {
    background: "rgba(255,255,255,0.98)",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    cursor: "pointer",
    position: "relative",
    animation: "cardFadeIn 0.6s ease-out",
  },
  cardImage: {
    width: "100%",
    height: "200px",
    background: "linear-gradient(45deg, #f8fafc, #e2e8f0)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  qrCode: {
    width: "300px",
    height: "180px",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease",
  },
  cardContent: {
    padding: "25px",
  },
  categoryBadge: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: "15px",
    fontSize: "0.8rem",
    fontWeight: "600",
    color: "white",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#2d3748",
    marginBottom: "10px",
  },
  cardDescription: {
    color: "#64748b",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    marginBottom: "20px",
  },
  cardStats: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "15px",
    borderTop: "1px solid #e2e8f0",
  },
  statGroup: {
    display: "flex",
    gap: "20px",
  },
  stat: {
    textAlign: "center",
  },
  statValue: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#2d3748",
  },
  statText: {
    fontSize: "0.8rem",
    color: "#64748b",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "15px",
  },
  tag: {
    padding: "4px 10px",
    background: "rgba(102, 126, 234, 0.1)",
    color: "#667eea",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "600",
  },
  loadMoreSection: {
    textAlign: "center",
    padding: "60px 20px",
    background: "rgba(255,255,255,0.95)",
    borderRadius: "25px",
    animation: "fadeInUp 1s ease-out 0.6s both",
  },
  loadMoreButton: {
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
  
  @keyframes cardFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-25px) rotate(120deg); }
    66% { transform: translateY(12px) rotate(240deg); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(
        galleryItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const getCategoryColor = (category) => {
    const colors = {
      Business: "linear-gradient(135deg, #667eea, #764ba2)",
      Events: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
      Marketing: "linear-gradient(135deg, #4ecdc4, #44a08d)",
      Government: "linear-gradient(135deg, #f093fb, #f5576c)",
    };
    return colors[category] || "linear-gradient(135deg, #667eea, #764ba2)";
  };

  const totalViews = galleryItems.reduce((sum, item) => sum + item.views, 0);
  const totalDownloads = galleryItems.reduce(
    (sum, item) => sum + item.downloads,
    0
  );

  return (
    <main style={styles.main}>
      {/* Floating background elements */}
      <div style={styles.floatingElements}>
        {[...Array(8)].map((_, i) => (
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
          <h1 style={styles.title}>NFC QR code Gallery</h1>
          <p style={styles.subtitle}>
            Explore our collection of custom NFC QR code designs and find
            inspiration for your next project. Each design showcases different
            use cases and industries.
          </p>
        </section>

        {/* Stats Bar */}
        <div style={styles.statsBar}>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>{galleryItems.length}</span>
            <span style={styles.statLabel}>Designs</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>{totalViews.toLocaleString()}</span>
            <span style={styles.statLabel}>Total Views</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>
              {totalDownloads.toLocaleString()}
            </span>
            <span style={styles.statLabel}>Downloads</span>
          </div>
        </div>

        {/* Filter Section */}
        <section style={styles.filterSection}>
          <h3 style={styles.filterTitle}>Filter by Category</h3>
          <div style={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                style={{
                  ...styles.filterButton,
                  ...(activeFilter === category
                    ? styles.filterButtonActive
                    : {}),
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section>
          <div style={styles.grid}>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                style={{
                  ...styles.card,
                  transform:
                    hoveredCard === item.id
                      ? "translateY(-15px) scale(1.02)"
                      : "translateY(0) scale(1)",
                  boxShadow:
                    hoveredCard === item.id
                      ? "0 25px 60px rgba(0,0,0,0.2)"
                      : "0 15px 40px rgba(0,0,0,0.1)",
                  animationDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.cardImage}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      ...styles.qrCode,
                      transform:
                        hoveredCard === item.id
                          ? "scale(1.1) rotate(5deg)"
                          : "scale(1) rotate(0deg)",
                    }}
                  />
                </div>

                <div style={styles.cardContent}>
                  <div
                    style={{
                      ...styles.categoryBadge,
                      background: getCategoryColor(item.category),
                    }}
                  >
                    {item.category}
                  </div>

                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardDescription}>{item.description}</p>

                  <div style={styles.tags}>
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} style={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={styles.cardStats}>
                    <div style={styles.statGroup}>
                      <div style={styles.stat}>
                        <div style={styles.statValue}>
                          {item.views.toLocaleString()}
                        </div>
                        <div style={styles.statText}>Views</div>
                      </div>
                      <div style={styles.stat}>
                        <div style={styles.statValue}>
                          {item.downloads.toLocaleString()}
                        </div>
                        <div style={styles.statText}>Downloads</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Load More Section */}
        <section style={styles.loadMoreSection}>
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#2d3748",
              marginBottom: "20px",
            }}
          >
            Want to See More?
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#64748b",
              marginBottom: "40px",
            }}
          >
            Discover hundreds more NFC QR code designs and templates in our
            complete collection.
          </p>
          <button
            style={styles.loadMoreButton}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px) scale(1.1)";
              e.target.style.boxShadow = "0 25px 60px rgba(255, 107, 107, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 15px 40px rgba(255, 107, 107, 0.4)";
            }}
            onClick={() => alert("Load More Designs clicked")}
          >
            🎨 Load More Designs
          </button>
        </section>
      </div>
    </main>
  );
}
