import { useState, useEffect } from "react";
import {
  FaUserGraduate,
  FaBullseye,
  FaDownload,
  FaUniversity,
} from "react-icons/fa";

const About = ({ darkMode }) => {
  const [mobile, setMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      minHeight: "100vh",
      padding: mobile ? "50px 20px" : "80px 8%",
      background: darkMode ? "#0f172a" : "#f8fafc",
      transition: "0.4s",
    },

    title: {
      textAlign: "center",
      fontSize: mobile ? "36px" : "48px",
      fontWeight: "700",
      marginBottom: "60px",
      color: darkMode ? "#fff" : "#111827",
    },

    highlight: {
      color: "#e11d48",
    },

    container: {
      maxWidth: "1200px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: mobile ? "1fr" : "repeat(3,1fr)",
      gap: "30px",
    },

    card: {
      background: darkMode ? "#1e293b" : "#fff",
      borderRadius: "20px",
      padding: "30px",
      boxShadow: darkMode
        ? "0 10px 30px rgba(255,255,255,.05)"
        : "0 10px 30px rgba(0,0,0,.08)",
      transition: ".3s",
    },

    icon: {
      fontSize: "42px",
      color: "#e11d48",
      marginBottom: "18px",
    },

    heading: {
      fontSize: "26px",
      color: darkMode ? "#fff" : "#111827",
      marginBottom: "18px",
    },

    text: {
      color: darkMode ? "#cbd5e1" : "#475569",
      lineHeight: "1.8",
      fontSize: "16px",
      marginBottom: "15px",
    },

    educationBox: {
      background: darkMode ? "#334155" : "#f1f5f9",
      padding: "15px",
      borderRadius: "12px",
      marginBottom: "15px",
    },

    degree: {
      fontWeight: "700",
      color: darkMode ? "#fff" : "#111827",
      marginBottom: "5px",
    },

    year: {
      color: "#e11d48",
      marginBottom: "8px",
      fontWeight: "600",
    },

    button: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px 28px",
      background: "#e11d48",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontWeight: "600",
      marginTop: "15px",
    },
  };

  return (
    <section style={styles.section}>
      <h1 style={styles.title}>
        About <span style={styles.highlight}>Me</span>
      </h1>

      <div style={styles.container}>
        {/* Professional Introduction */}

        <div style={styles.card}>
          <FaUserGraduate style={styles.icon} />

          <h2 style={styles.heading}>Professional Introduction</h2>

          <p style={styles.text}>
            Hello! I'm <strong>Nandhini M</strong>, currently pursuing
            <strong> M.E. in Computer Science and Engineering</strong> at
            National Engineering College, Kovilpatti.
          </p>

          <p style={styles.text}>
            I am passionate about Full-Stack Development, Artificial
            Intelligence, Machine Learning and Deep Learning. I enjoy creating
            responsive web applications and solving real-world problems through
            innovative technologies.
          </p>

          <p style={styles.text}>
            My interests include Web Development, Data Analytics, Machine
            Learning and building intelligent software solutions.
          </p>

          <a href="/resume.pdf" download style={styles.button}>
            <FaDownload />
            Download Resume
          </a>
        </div>

        {/* Education */}

        <div style={styles.card}>
          <FaUniversity style={styles.icon} />

          <h2 style={styles.heading}>Education</h2>

          <div style={styles.educationBox}>
            <div style={styles.degree}>
              M.E. Computer Science and Engineering
            </div>

            <div style={styles.year}>2025 – 2027</div>

            <p style={styles.text}>
              National Engineering College, Kovilpatti
              <br />
              GPA : <strong>8.38</strong>
            </p>
          </div>

          <div style={styles.educationBox}>
            <div style={styles.degree}>
              B.E. Computer Science and Engineering
            </div>

            <div style={styles.year}>2020 – 2024</div>

            <p style={styles.text}>
              University College of Engineering Nagercoil (UCEN)
              <br />
              CGPA : <strong>7.79</strong> (First Class)
            </p>
          </div>

          <div style={styles.educationBox}>
            <div style={styles.degree}>Higher Secondary Certificate</div>

            <div style={styles.year}>2020</div>

            <p style={styles.text}>Percentage : 77%</p>
          </div>

          <div style={styles.educationBox}>
            <div style={styles.degree}>Secondary School Leaving Certificate</div>

            <div style={styles.year}>2018</div>

            <p style={styles.text}>Percentage : 87%</p>
          </div>
        </div>

        {/* Career Objective */}

        <div style={styles.card}>
          <FaBullseye style={styles.icon} />

          <h2 style={styles.heading}>Career Objective</h2>

          <p style={styles.text}>
            To become a skilled Full-Stack Developer by continuously learning
            modern technologies and contributing to innovative software
            solutions that create real-world impact.
          </p>

          <p style={styles.text}>
            I am looking for opportunities where I can apply my technical
            knowledge, improve my problem-solving abilities, collaborate with
            talented teams and grow professionally in the fields of Web
            Development, Artificial Intelligence and Machine Learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;