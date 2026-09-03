import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const facebookUrl = "https://www.facebook.com/EneroArts";
  const tiktokUrl =
    "https://www.tiktok.com/@eneroarts?_r=1&_t=ZS-99Q12Ye9F7X";
  const instagramUrl = "https://www.instagram.com/eneroarts/";

  const collections = [
    {
      number: "01",
      title: "Polo Shirts",
      description:
        "Custom sublimated polo shirts for organizations, schools, teams, businesses, and events.",
    },
    {
      number: "02",
      title: "T-Shirts",
      description:
        "Fully customized shirts made for events, groups, brands, reunions, and everyday wear.",
    },
    {
      number: "03",
      title: "Sports Jerseys",
      description:
        "Custom jerseys designed around your team colors, names, numbers, and identity.",
    },
    {
      number: "04",
      title: "Jackets & Hoodies",
      description:
        "Custom outerwear designed to match your organization, team, or personal style.",
    },
  ];

  const poloProducts = [
    {
      number: "01",
      title: "Custom Polo Shirt",
      description:
        "Fully customized sublimated polo shirt with your preferred colors, logo, text, names, and design.",
    },
    {
      number: "02",
      title: "Organization Polo",
      description:
        "Custom polo shirts for schools, organizations, student councils, and professional groups.",
    },
    {
      number: "03",
      title: "Team Polo",
      description:
        "Custom team polo shirts with personalized names, colors, logos, and designs.",
    },
    {
      number: "04",
      title: "Business Polo",
      description:
        "Professional custom polo shirts for businesses, staff uniforms, and company events.",
    },
    {
      number: "05",
      title: "Event Polo",
      description:
        "Customized polo shirts designed for reunions, celebrations, seminars, and special events.",
    },
    {
      number: "06",
      title: "School Polo",
      description:
        "Custom school polo shirts designed around your school colors, identity, and organization.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Send Your Idea",
      description:
        "Tell us what you need. Send your preferred colors, text, logos, references, or design ideas.",
    },
    {
      number: "02",
      title: "We Create",
      description:
        "Our team turns your ideas into a clean and customized apparel design.",
    },
    {
      number: "03",
      title: "You Approve",
      description:
        "Review your design and request adjustments before production.",
    },
    {
      number: "04",
      title: "We Produce",
      description:
        "Once approved, your order goes into production and is prepared for delivery.",
    },
  ];

  const features = [
    {
      icon: "✦",
      title: "Custom Designs",
      description:
        "Your apparel is made around your concept, colors, branding, and requirements.",
    },
    {
      icon: "◆",
      title: "Quality Production",
      description:
        "We focus on clean designs and quality production for every apparel order.",
    },
    {
      icon: "→",
      title: "Nationwide Delivery",
      description:
        "We accept orders from customers and organizations across the Philippines.",
    },
    {
      icon: "✓",
      title: "Made for Your Group",
      description:
        "From small group orders to organization and event apparel, we build around your needs.",
    },
  ];

  const goHome = () => {
    setCurrentPage("home");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToSection = (id) => {
    setCurrentPage("home");
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const goToPolo = () => {
    setCurrentPage("polo");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`page ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">
          <button className="nav-brand" onClick={goHome}>
            <div className="logo-mark">EA</div>
            <span>ENERO ARTS</span>
          </button>

          <nav className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
            <button onClick={goHome}>HOME</button>

            <button onClick={() => goToSection("collections")}>
              COLLECTIONS
            </button>

            <button onClick={() => goToSection("custom")}>
              CUSTOM APPAREL
            </button>

            <button onClick={() => goToSection("process")}>
              HOW IT WORKS
            </button>

            <button onClick={() => goToSection("contact")}>
              CONTACT
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-button"
              onClick={() => setDarkMode((value) => !value)}
              aria-label="Toggle theme"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HOME PAGE */}
        {currentPage === "home" && (
          <>
            {/* HERO */}
            <section id="home" className="hero">
              <div className="container hero-inner">
                <div className="hero-content">
                  <div className="eyebrow">
                    <span>✦</span>
                    ENERO ARTS · CUSTOM APPAREL
                  </div>

                  <h1>
                    Built to <br />
                    <span>be</span> seen.
                  </h1>

                  <p className="hero-description">
                    Premium custom apparel made for organizations, teams,
                    businesses, events, and every story worth wearing.
                  </p>

                  <div className="hero-buttons">
                    <button
                      className="primary-button"
                      onClick={() => goToSection("collections")}
                    >
                      EXPLORE COLLECTION
                    </button>

                    <button
                      className="outline-button"
                      onClick={() => goToSection("custom")}
                    >
                      START YOUR DESIGN <span>→</span>
                    </button>
                  </div>

                  <div className="hero-stats">
                    <div className="stat">
                      <div className="stat-icon">✦</div>

                      <div>
                        <strong>CUSTOM DESIGN</strong>
                        <small>100% Full Customization</small>
                      </div>
                    </div>

                    <div className="stat">
                      <div className="stat-icon">◆</div>

                      <div>
                        <strong>SUBLIMATION TECH</strong>
                        <small>Vibrant, Durable Prints</small>
                      </div>
                    </div>

                    <div className="stat">
                      <div className="stat-icon">→</div>

                      <div>
                        <strong>PH NATIONWIDE DELIVERY</strong>
                        <small>Fast, Reliable Shipping</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hero-product">
                  <div className="image-box large">
                    <span>PRODUCT IMAGE</span>
                    <small>Upload your image here</small>
                  </div>
                </div>
              </div>
            </section>

            {/* TICKER */}
            <div className="ticker">
              <div className="ticker-track">
                <div className="ticker-group">
                  <span>FULL SUBLIMATION</span>
                  <span>MINIMUM OF 1 PIECE</span>
                  <span>CUSTOM DESIGN AVAILABLE</span>
                  <span>POLO SHIRTS</span>
                  <span>T-SHIRTS</span>
                  <span>SPORTS JERSEYS</span>
                  <span>ORGANIZATION UNIFORMS</span>
                  <span>EVENT APPAREL</span>
                  <span>NATIONWIDE DELIVERY</span>
                </div>

                <div className="ticker-group">
                  <span>FULL SUBLIMATION</span>
                  <span>MINIMUM OF 1 PIECE</span>
                  <span>CUSTOM DESIGN AVAILABLE</span>
                  <span>POLO SHIRTS</span>
                  <span>T-SHIRTS</span>
                  <span>SPORTS JERSEYS</span>
                  <span>ORGANIZATION UNIFORMS</span>
                  <span>EVENT APPAREL</span>
                  <span>NATIONWIDE DELIVERY</span>
                </div>
              </div>
            </div>

            {/* COLLECTIONS */}
            <section id="collections" className="section">
              <div className="container">
                <div className="section-heading">
                  <div>
                    <span className="section-label">WHAT WE MAKE</span>

                    <h2>
                      BUILT FOR <br />
                      EVERY OCCASION.
                    </h2>
                  </div>

                  <p>
                    Custom apparel designed for organizations, teams,
                    businesses, events, and more.
                  </p>
                </div>

                <div className="collection-grid">
                  {collections.map((item) => (
                    <article
                      className="collection-card"
                      key={item.number}
                    >
                      <span className="card-number">
                        {item.number}
                      </span>

                      <div className="image-box">
                        <span>IMAGE</span>
                      </div>

                      <div className="card-content">
                        <h3>{item.title}</h3>

                        <p>{item.description}</p>

                        {item.title === "Polo Shirts" ? (
                          <button
                            className="text-link"
                            onClick={goToPolo}
                          >
                            VIEW PRODUCTS →
                          </button>
                        ) : (
                          <button
                            className="text-link"
                            onClick={() =>
                              goToSection("contact")
                            }
                          >
                            VIEW PRODUCTS →
                          </button>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* CUSTOM APPAREL */}
            <section id="custom" className="custom-section">
              <div className="container">
                <div className="custom-grid">
                  <div className="custom-copy">
                    <span className="section-label">
                      CUSTOM APPAREL
                    </span>

                    <h2>
                      YOUR IDEA. <br />
                      <span>OUR CRAFT.</span>
                    </h2>

                    <p>
                      You don't need to start with a finished design.
                      Send us your concept, preferred colors, logos,
                      text, or even a simple reference and we'll help
                      turn it into apparel you can wear with
                      confidence.
                    </p>

                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-button"
                    >
                      START YOUR ORDER
                    </a>
                  </div>

                  <div id="process" className="process-grid">
                    {process.map((item) => (
                      <div
                        className="process-card"
                        key={item.number}
                      >
                        <span>{item.number}</span>

                        <h3>{item.title}</h3>

                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* FEATURES */}
            <section className="section">
              <div className="container">
                <div className="section-heading">
                  <div>
                    <span className="section-label">
                      WHY ENERO ARTS
                    </span>

                    <h2>
                      MORE THAN <br />
                      JUST A SHIRT.
                    </h2>
                  </div>

                  <p>
                    We believe customized apparel should represent the
                    people, organization, team, or brand wearing it.
                  </p>
                </div>

                <div className="features-grid">
                  {features.map((item) => (
                    <article
                      className="feature-card"
                      key={item.title}
                    >
                      <div className="feature-icon">
                        {item.icon}
                      </div>

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT CTA */}
            <section id="contact" className="cta-section">
              <div className="container cta-content">
                <span className="section-label">
                  READY WHEN YOU ARE
                </span>

                <h2>
                  LET'S MAKE <br />
                  SOMETHING <span>STAND OUT.</span>
                </h2>

                <p>
                  Have an idea for your next apparel project?
                  <br />
                  Let's bring it to life.
                </p>

                <div className="hero-buttons">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-button"
                  >
                    MESSAGE US ON FACEBOOK
                  </a>

                  <a
                    href={tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button"
                  >
                    FOLLOW US ON TIKTOK ↗
                  </a>
                </div>
              </div>
            </section>
          </>
        )}

        {/* POLO PRODUCTS PAGE */}
        {currentPage === "polo" && (
          <section className="product-page">
            <div className="container">
              <button className="back-button" onClick={goHome}>
                ← BACK TO HOME
              </button>

              <div className="product-heading">
                <div>
                  <span className="section-label">
                    ENERO ARTS · COLLECTION
                  </span>

                  <h1>
                    POLO <span>SHIRTS.</span>
                  </h1>
                </div>

                <p>
                  Custom sublimated polo shirts designed for
                  organizations, schools, teams, businesses, events,
                  and more.
                </p>
              </div>

              <div className="product-grid">
                {poloProducts.map((product) => (
                  <article
                    className="product-card"
                    key={product.number}
                  >
                    <div className="product-image image-box">
                      <span>PRODUCT IMAGE</span>
                      <small>Upload image here</small>
                    </div>

                    <div className="product-info">
                      <span className="product-number">
                        {product.number}
                      </span>

                      <h2>{product.title}</h2>

                      <p>{product.description}</p>

                      <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-link"
                      >
                        INQUIRE ABOUT THIS PRODUCT →
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="product-cta">
                <span className="section-label">
                  NEED A CUSTOM DESIGN?
                </span>

                <h2>
                  LET'S CREATE YOUR <span>POLO.</span>
                </h2>

                <p>
                  Send us your idea, logo, colors, or reference and
                  we'll help create your custom polo shirt.
                </p>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  MESSAGE ENERO ARTS
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <button className="footer-logo" onClick={goHome}>
                <div className="logo-mark">EA</div>
                <span>ENERO ARTS</span>
              </button>

              <p>
                Custom apparel and full sublimation products made for
                organizations, teams, businesses, events, and
                individuals.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <strong>EXPLORE</strong>

                <button onClick={goHome}>HOME</button>

                <button
                  onClick={() => goToSection("collections")}
                >
                  COLLECTIONS
                </button>

                <button onClick={() => goToSection("custom")}>
                  CUSTOM APPAREL
                </button>

                <button onClick={() => goToSection("contact")}>
                  CONTACT
                </button>
              </div>

              <div className="footer-column">
                <strong>PRODUCTS</strong>

                <button onClick={goToPolo}>
                  POLO SHIRTS
                </button>

                <button
                  onClick={() => goToSection("collections")}
                >
                  T-SHIRTS
                </button>

                <button
                  onClick={() => goToSection("collections")}
                >
                  SPORTS JERSEYS
                </button>

                <button
                  onClick={() => goToSection("collections")}
                >
                  HOODIES
                </button>
              </div>

              <div className="footer-column">
                <strong>CONNECT</strong>

                <div className="social-icons">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    f
                  </a>

                  <a
                    href={tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    ♪
                  </a>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    ◎
                  </a>
                </div>

                <a href="mailto:hello@eneroarts.com">
                  EMAIL
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Enero Arts. All rights
              reserved.
            </span>

            <span>
              CUSTOM APPAREL · FULL SUBLIMATION · PHILIPPINES
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;