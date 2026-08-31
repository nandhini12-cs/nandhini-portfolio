import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./routes";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0f172a" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#111827";

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <>
      <ScrollToTop />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <AppRoutes darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;