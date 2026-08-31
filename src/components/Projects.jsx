import { FaGithub } from "react-icons/fa";

const Projects = ({ darkMode }) => {

  const projects = [

    {
      title: "Smart Real-Time Exam Preparation and Performance Evaluation Platform",

      description:
        "A React-based platform that helps students prepare for exams through mock tests, performance tracking, performance analytics, and personalized learning.",

      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS"
      ],

      image: "/images/project1.jpg",

      github: "https://github.com/Nandhini1224"
    },

    {
      title: "Early Detection of Diabetic Retinopathy",

      description:
        "Deep Learning project using Swin Transformer and Attention U-Net for diabetic retinopathy classification and lesion localization.",

      technologies: [
        "Python",
        "PyTorch",
        "OpenCV",
        "Deep Learning"
      ],

      image: "/images/project2.jpg",

      github: "https://github.com/Nandhini1224"
    },

    {
      title: "Personal Portfolio Website",

      description:
        "A premium responsive portfolio website built using React with Dark Mode, responsive design, modern UI, animations and contact form.",

      technologies: [
        "React",
        "JavaScript",
        "CSS"
      ],

      image: "/images/project3.jpg",

      github: "https://github.com/Nandhini1224"
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
      borderRadius:"20px",
      overflow:"hidden",
      boxShadow:darkMode
      ? "0 10px 25px rgba(255,255,255,.05)"
      : "0 10px 25px rgba(0,0,0,.08)",
      transition:"0.3s",
      cursor:"pointer"
    },

    image:{
      width:"100%",
      height:"220px",
      objectFit:"cover"
    },

    content:{
      padding:"25px"
    },

    heading:{
      color:darkMode ? "#ffffff" : "#111827",
      fontSize:"24px",
      marginBottom:"15px"
    },

    desc:{
      color:darkMode ? "#cbd5e1" : "#475569",
      lineHeight:"1.8",
      marginBottom:"20px"
    },

    techContainer:{
      display:"flex",
      flexWrap:"wrap",
      gap:"10px",
      marginBottom:"25px"
    },

    tech:{
      background:"#fee2e2",
      color:"#e11d48",
      padding:"8px 15px",
      borderRadius:"20px",
      fontSize:"14px",
      fontWeight:"600"
    },

    githubBtn:{
      display:"block",
      width:"100%",
      textAlign:"center",
      background:"#111827",
      color:"#ffffff",
      padding:"14px",
      borderRadius:"8px",
      textDecoration:"none",
      fontWeight:"600"
    }

  };

  return (

    <section style={styles.section}>

      <h1 style={styles.title}>
        My <span style={styles.highlight}>Projects</span>
      </h1>

      <div style={styles.grid}>

        {projects.map((project,index)=>(

          <div

            key={index}

            style={styles.card}

            onMouseEnter={(e)=>{
              e.currentTarget.style.transform="translateY(-10px)";
            }}

            onMouseLeave={(e)=>{
              e.currentTarget.style.transform="translateY(0)";
            }}

          >

            <img
              src={project.image}
              alt={project.title}
              style={styles.image}
            />

            <div style={styles.content}>

              <h2 style={styles.heading}>
                {project.title}
              </h2>

              <p style={styles.desc}>
                {project.description}
              </p>

              <div style={styles.techContainer}>

                {project.technologies.map((tech,index)=>(

                  <span
                    key={index}
                    style={styles.tech}
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <a

                href={project.github}

                target="_blank"

                rel="noopener noreferrer"

                style={styles.githubBtn}

              >

                <FaGithub />

                {" "}View Source Code

              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

};

export default Projects;