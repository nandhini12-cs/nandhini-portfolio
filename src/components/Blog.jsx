const Blog = ({ darkMode }) => {

  const styles = {

    section:{
      minHeight:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      background:darkMode ? "#0f172a" : "#f8fafc",
      padding:"60px 8%",
      transition:"0.4s"
    },

    card:{
      maxWidth:"700px",
      width:"100%",
      background:darkMode ? "#1e293b" : "#ffffff",
      padding:"50px",
      borderRadius:"20px",
      textAlign:"center",
      boxShadow:darkMode
      ? "0 10px 25px rgba(255,255,255,.05)"
      : "0 10px 25px rgba(0,0,0,.08)"
    },

    icon:{
      fontSize:"80px"
    },

    title:{
      fontSize:"40px",
      margin:"20px 0",
      color:darkMode ? "#ffffff" : "#111827"
    },

    highlight:{
      color:"#e11d48"
    },

    text:{
      fontSize:"18px",
      lineHeight:"1.8",
      color:darkMode ? "#cbd5e1" : "#475569"
    }

  };

  return (

    <section style={styles.section}>

      <div style={styles.card}>

        <div style={styles.icon}>📝</div>

        <h1 style={styles.title}>
          <span style={styles.highlight}>Blog</span> Coming Soon
        </h1>

        <p style={styles.text}>
          I will be sharing articles on Full-Stack Development,
          React, Artificial Intelligence, Machine Learning,
          and software engineering soon.
        </p>

      </div>

    </section>

  );

};

export default Blog;