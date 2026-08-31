import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = {
    background: darkMode ? "#111827" : "#ffffff",
    color: darkMode ? "#ffffff" : "#111827",
  };

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive
      ? "#e11d48"
      : darkMode
      ? "#ffffff"
      : "#111827",
    fontWeight: isActive ? "700" : "500",
    transition: "0.3s",
  });

  return (
    <nav
      style={{
        ...navStyle,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 3px 15px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "18px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}

        <h2
          style={{
            color: "#e11d48",
            fontWeight: "700",
          }}
        >
          Nandhini M
        </h2>

        {/* Desktop Menu */}

        <div
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>

          <NavLink to="/skills" style={linkStyle}>
            Skills
          </NavLink>

          <NavLink to="/projects" style={linkStyle}>
            Projects
          </NavLink>

          <NavLink to="/certifications" style={linkStyle}>
            Certifications
          </NavLink>

          <NavLink to="/blog" style={linkStyle}>
            Blog
          </NavLink>

          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>

          {/* GitHub */}

          <a
            href="https://github.com/nandhini12-cs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={22}
              color={darkMode ? "white" : "#111827"}
            />
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/nandhini-murugan1224/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={22}
              color="#0A66C2"
            />
          </a>

          {/* Theme */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {darkMode ? (
              <FaSun size={22} color="#FFD43B" />
            ) : (
              <FaMoon size={22} color="#111827" />
            )}
          </button>
        </div>

        {/* Mobile Icon */}

        <div
          className="mobile-icon"
          style={{
            display: "none",
            cursor: "pointer",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes size={26} />
          ) : (
            <FaBars size={26} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          style={{
            background: darkMode ? "#111827" : "#ffffff",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <NavLink
            to="/"
            style={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/skills"
            style={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            style={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/certifications"
            style={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Certifications
          </NavLink>

          <NavLink
            to="/blog"
            style={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            style={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}

      {/* Responsive CSS */}

      <style>
        {`
          @media(max-width:900px){

            .desktop-menu{
              display:none !important;
            }

            .mobile-icon{
              display:block !important;
            }

          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;