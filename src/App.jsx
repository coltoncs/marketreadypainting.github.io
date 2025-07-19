import ServiceCard from "./components/ServiceCard";
import ContactForm from "./components/ContactForm";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">Market Ready Painting</h2>
          <div className="nav-links">
            <a href="#home">home</a>
            <a href="#services">services</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section id="home" className="section header-section">
        <div className="container">
          <h1 className="header-title">
            TRANSFORM YOUR HOME WITH EXPERT PAINTING SERVICES
          </h1>
          <p className="header-text">
            Trusted by homeowners and businesses across the Triangle Region of
            North Carolina, we specialize in delivering high-quality interior
            and exterior painting solutions. Our team of experienced
            professionals is dedicated to enhancing the beauty and value of your
            property with precision and care.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <ServiceCard
              title="Interior Painting"
              text="We offer comprehensive interior painting services that transform 
                your living spaces. Our team uses high-quality paints and techniques 
                to ensure a flawless finish that enhances the beauty of your home."
            />
            <ServiceCard
              title="Exterior Painting"
              text="Our exterior painting services protect and beautify your home’s 
                exterior. We use durable, weather-resistant paints to ensure your home 
                looks great and stands up to the elements for years to come."
            />
            <ServiceCard
              title="Commercial Painting"
              text="Trusted by businesses across the Triangle Region, our commercial
                painting services deliver professional results on time and
                within budget. We understand the importance of minimizing
                disruption to your operations while providing top-notch painting
                solutions."
            />
            <ServiceCard
              title="Color Consultation"
              text="Let us help you choose the perfect colors for your home or business. 
                Our color consultation services provide expert advice on color selection, 
                ensuring your space reflects your style and enhances its ambiance."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <p className="about-text">
              For over 20 years, Market Ready Painting has been a trusted name
              in the home painting industry. Based in the Triangle Region of
              North Carolina, we pride ourselves on delivering exceptional
              quality and customer service. Our team of skilled painters is
              committed to transforming your spaces with precision and care.
              Whether it’s a residential or commercial project, we approach
              every job with the same level of dedication and attention to
              detail.
            </p>
            <p className="about-text">
              We offer free consultations to discuss your painting needs and
              provide personalized solutions. Our goal is to ensure your
              complete satisfaction with every project we undertake. From color
              selection to the final brushstroke, we are here to make your
              painting experience seamless and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2 className="section-title">Get In Touch</h2>
              <p className="contact-description">
                Reach out to us for a free consultation today! Whether you have
                questions about our services, need a quote, or want to schedule
                an appointment, we're here to help. Fill out the form, and we'll
                get back to you as soon as possible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-title">Market Ready Painting</h3>
            </div>
            <div className="footer-info">
              <div className="footer-location">
                <h4 className="footer-subtitle">Location</h4>
                <p className="footer-text">
                  Triangle Region
                  <br />
                  North Carolina
                </p>
              </div>
              <div className="footer-contact">
                <h4 className="footer-subtitle">Contact</h4>
                <p className="footer-text">
                  Phone: <a href="tel:9199246485">(919) 924-6327</a>
                  <br />
                  Email: <a href="mailto:dannypainter@hotmail.com">dannypainter@hotmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
