import React from "react";

const Skills = ({ darkMode }) => {


  const skillCategories = [

    {
      title: "Programming Languages",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "React JS"
      ]
    },


    {
      title: "Database",
      skills: [
        "MySQL",
        "MongoDB",
        "Oracle SQL"
      ]
    },


    {
      title: "AI / Machine Learning",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing"
      ]
    },


    {
      title: "Tools",
      skills: [
        "GitHub",
        "VS Code",
        "Google Colab",
        "Jupyter Notebook"
      ]
    }


  ];



  const styles = {


    section:{
      padding:"80px 8%",
      background:darkMode ? "#0f172a" : "#f8fafc",
      minHeight:"100vh",
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
      gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
      gap:"30px"
    },



    card:{
      background:darkMode ? "#1e293b" : "#ffffff",
      padding:"30px",
      borderRadius:"18px",

      boxShadow:darkMode
      ? "0 10px 25px rgba(255,255,255,0.05)"
      : "0 10px 25px rgba(0,0,0,0.08)",

      transition:"0.4s",

      animation:"fadeUp 0.8s ease forwards",

      opacity:0
    },



    heading:{
      color:"#e11d48",
      fontSize:"26px",
      marginBottom:"25px"
    },



    skill:{
      display:"inline-block",

      background:darkMode 
      ? "#334155"
      : "#f1f5f9",

      color:darkMode
      ? "#ffffff"
      : "#111827",

      padding:"10px 18px",

      margin:"8px",

      borderRadius:"25px",

      fontWeight:"600",

      cursor:"pointer",

      transition:"0.3s",

      animation:"popIn 0.6s ease"

    }


  };



  return (


    <section style={styles.section}>


      <h1 style={styles.title}>

        My <span style={styles.highlight}>
          Skills
        </span>

      </h1>



      <div style={styles.grid}>


        {
          skillCategories.map((category,index)=>(


            <div

              key={index}

              className="card"

              style={{

                ...styles.card,

                animationDelay:`${index * 0.2}s`

              }}

            >


              <h2 style={styles.heading}>

                {category.title}

              </h2>



              {


                category.skills.map((skill,i)=>(


                  <span

                    key={i}

                    className="skill"

                    style={{

                      ...styles.skill,

                      animationDelay:`${i * 0.1}s`

                    }}

                  >

                    {skill}

                  </span>


                ))


              }


            </div>


          ))
        }



      </div>



    </section>


  );


};


export default Skills;