import "./Contact.css";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import TopHeader from "../../component/TopHeader/TopHeader";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    e.target.reset();
  };

  return (
    <>
      <TopHeader />
      <Navbar />

      <div className="contact-page">

        {/* Hero */}
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Get in touch with the Nation News team
            for news tips, business inquiries, or general questions.
          </p>
        </section>

        <div className="contact-container">

          {/* Contact Info */}
          <div className="contact-info">

            <h2>Get In Touch</h2>

            <div className="info-card">
              <h3>📍 Address</h3>
              <p>Tech Zone IV, Greater Noida, Uttar Pradesh, India</p>
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-card">
              <h3>✉ Email</h3>
              <p>contact@nationnews.com</p>
            </div>

            <div className="info-card">
              <h3>🕒 Working Hours</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form">

            <h2>Send Message</h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                required
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}
        <div className="map-section">

          <h2>Find Us</h2>

          <iframe
            title="Nation News Location"
            src="https://www.google.com/maps?q=Greater%20Noida&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Contact;