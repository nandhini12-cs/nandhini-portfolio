import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = ({ darkMode }) => {

  const styles = {

    section: {
      minHeight: "100vh",
      padding: "80px 8%",
      background: darkMode ? "#0f172a" : "#f8fafc",
      transition: "0.4s",
    },

    title: {
      textAlign: "center",
      fontSize: "48px",
      marginBottom: "60px",
      color: darkMode ? "#ffffff" : "#111827",
    },

    highlight: {
      color: "#e11d48",
    },

    container: {
      maxWidth: "1200px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
      gap: "40px",
    },

    card: {
      background: darkMode ? "#1e293b" : "#ffffff",
      padding: "35px",
      borderRadius: "20px",
      boxShadow: darkMode
        ? "0 10px 25px rgba(255,255,255,.05)"
        : "0 10px 25px rgba(0,0,0,.08)",
    },

    heading: {
      color: darkMode ? "#ffffff" : "#111827",
      fontSize: "28px",
      marginBottom: "25px",
    },

    text: {
      color: darkMode ? "#cbd5e1" : "#475569",
      lineHeight: "1.8",
      marginBottom: "30px",
      fontSize: "17px",
    },

    info: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      marginBottom: "22px",
      color: darkMode ? "#ffffff" : "#111827",
      fontSize: "17px",
    },

    link: {
      color: "#e11d48",
      textDecoration: "none",
    },

    input: {
      width: "100%",
      padding: "15px",
      marginBottom: "18px",
      borderRadius: "10px",
      border: "1px solid #64748b",
      background: darkMode ? "#334155" : "#ffffff",
      color: darkMode ? "#ffffff" : "#111827",
      fontSize: "16px",
      outline: "none",
      boxSizing: "border-box",
    },

    textarea: {
      width: "100%",
      padding: "15px",
      borderRadius: "10px",
      border: "1px solid #64748b",
      background: darkMode ? "#334155" : "#ffffff",
      color: darkMode ? "#ffffff" : "#111827",
      fontSize: "16px",
      outline: "none",
      resize: "vertical",
      boxSizing: "border-box",
    },

    button: {
      marginTop: "20px",
      width: "100%",
      padding: "15px",
      border: "none",
      borderRadius: "10px",
      background: "#e11d48",
      color: "#ffffff",
      fontSize: "17px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
    },

  };

  return (
    <section style={styles.section}>

      <h1 style={styles.title}>
        Contact <span style={styles.highlight}>Me</span>
      </h1>

      <div style={styles.container}>

        {/* Left Side */}

        <div style={styles.card}>

          <h2 style={styles.heading}>Get In Touch</h2>

          <p style={styles.text}>
            I'm always interested in internships, full-time opportunities,
            collaborations, and exciting projects. Feel free to reach out.
          </p>

          <div style={styles.info}>
            <FaEnvelope color="#e11d48" />
            <a
              href="mailto:mnandhini2422@gmail.com"
              style={styles.link}
            >
              mnandhini2422@gmail.com
            </a>
          </div>

          <div style={styles.info}>
            <FaPhone color="#e11d48" />
            <span>+91 7502728341</span>
          </div>

          <div style={styles.info}>
            <FaMapMarkerAlt color="#e11d48" />
            <span>Tamil Nadu, India</span>
          </div>

          <div style={styles.info}>
            <FaGithub color="#e11d48" />
            <a
              href="https://github.com/Nandhini1224"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              github.com/Nandhini1224
            </a>
          </div>

          <div style={styles.info}>
            <FaLinkedin color="#e11d48" />
            <a
              href="https://www.linkedin.com/in/nandhini-murugan1224/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              linkedin.com/in/nandhini-murugan1224
            </a>
          </div>

        </div>

        {/* Right Side */}

        <div style={styles.card}>

          <h2 style={styles.heading}>Send Message</h2>

          <form
            action="https://formspree.io/f/xykqqrjk"
            method="POST"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={styles.input}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              style={styles.input}
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              style={styles.textarea}
            />

            <button
              type="submit"
              style={styles.button}
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;