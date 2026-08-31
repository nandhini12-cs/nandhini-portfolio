import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Certifications = ({ darkMode }) => {

  const certificates = [

    {
      title: "Introduction to Industry 4.0 and Industrial Internet of Things (IIoT)",
      organization: "NPTEL",
      year: "2025",
      pdf: "/certificates/certificate1.pdf"
    },

    {
      title: "NASA International Space Apps Challenge",
      organization: "NASA",
      year: "2025",
      pdf: "/certificates/certificate2.pdf"
    },

    {
      title: "Android App Development Internship",
      organization: "Internship",
      year: "2024",
      pdf: "/certificates/certificate3.pdf"
    }

  ];

  const styles = {

    section:{
      minHeight:"100vh",
      padding:"80px 8%",
      background:darkMode ? "#0f172a" : "#f8fafc",
      transition:"0.4s"
    },

    title:{
      textAlign:"center",
      fontSize:"48px",
      marginBottom:"60px",
      color:darkMode ? "#ffffff" : "#111827"
    },

    highlight:{
      color:"#e11d48"
    },

    grid:{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit,minmax(350px,1fr))",
      gap:"35px"
    },

    card:{
      background:darkMode ? "#1e293b" : "#ffffff",
      borderRadius:"18px",
      padding:"35px",
      textAlign:"center",
      boxShadow:darkMode
      ? "0 10px 25px rgba(255,255,255,.05)"
      : "0 10px 25px rgba(0,0,0,.08)",
      transition:"0.3s"
    },

    icon:{
      fontSize:"70px",
      color:"#e11d48",
      marginBottom:"25px"
    },

    heading:{
      color:darkMode ? "#ffffff" : "#111827",
      fontSize:"24px",
      marginBottom:"15px"
    },

    text:{
      color:darkMode ? "#cbd5e1" : "#475569",
      lineHeight:"1.8",
      marginBottom:"10px"
    },

    button:{
      display:"inline-flex",
      alignItems:"center",
      gap:"10px",
      marginTop:"25px",
      background:"#e11d48",
      color:"#ffffff",
      padding:"14px 24px",
      textDecoration:"none",
      borderRadius:"8px",
      fontWeight:"600"
    }

  };

  return (

    <section style={styles.section}>

      <h1 style={styles.title}>
        My <span style={styles.highlight}>Certifications</span>
      </h1>

      <div style={styles.grid}>

        {certificates.map((certificate,index)=>(

          <div

            key={index}

            style={styles.card}

            onMouseEnter={(e)=>{
              e.currentTarget.style.transform="translateY(-10px)";
            }}

            onMouseLeave={(e)=>{
              e.currentTarget.style.transform="translateY(0px)";
            }}

          >

            <FaAward style={styles.icon}/>

            <h2 style={styles.heading}>
              {certificate.title}
            </h2>

            <p style={styles.text}>
              <strong>Organization :</strong> {certificate.organization}
            </p>

            <p style={styles.text}>
              <strong>Year :</strong> {certificate.year}
            </p>

            <a

              href={certificate.pdf}

              target="_blank"

              rel="noopener noreferrer"

              style={styles.button}

            >

              <FaExternalLinkAlt />

              View Certificate

            </a>

          </div>

        ))}

      </div>

    </section>

  );

};

export default Certifications;