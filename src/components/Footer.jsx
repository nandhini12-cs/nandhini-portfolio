import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";


const Footer = ({ darkMode }) => {


  const styles = {


    footer:{

      background: darkMode
      ? "#020617"
      : "#ffffff",

      color: darkMode
      ? "#ffffff"
      : "#111827",

      padding:"50px 8%",

      transition:"0.4s",

      borderTop: darkMode
      ? "1px solid #1e293b"
      : "1px solid #e5e7eb"

    },


    container:{

      maxWidth:"1200px",

      margin:"auto",

      display:"grid",

      gridTemplateColumns:
      window.innerWidth <= 800
      ? "1fr"
      : "repeat(3,1fr)",

      gap:"40px"

    },


    heading:{

      color:"#e11d48",

      marginBottom:"15px"

    },


    title:{

      color:darkMode
      ? "#ffffff"
      : "#111827",

      marginBottom:"20px"

    },


    text:{

      color:darkMode
      ? "#cbd5e1"
      : "#475569",

      lineHeight:"1.8"

    },


    contactItem:{

      display:"flex",

      alignItems:"center",

      gap:"10px",

      marginBottom:"12px",

      color:darkMode
      ? "#cbd5e1"
      : "#475569"

    },


    icons:{

      display:"flex",

      gap:"20px",

      fontSize:"30px"

    },


    iconLink:{

      color:darkMode
      ? "#ffffff"
      : "#111827",

      transition:"0.3s"

    },


    bottom:{

      textAlign:"center",

      marginTop:"40px",

      paddingTop:"25px",

      borderTop:
      darkMode
      ? "1px solid #334155"
      : "1px solid #e5e7eb",

      color:darkMode
      ? "#cbd5e1"
      : "#64748b"

    }

  };



return (

<footer style={styles.footer}>


<div style={styles.container}>


{/* About */}






{/* Contact  */}

<div>


<h3 style={styles.title}>
Contact Details
</h3>



<p style={styles.contactItem}>

<FaEnvelope color="#e11d48"/>

mnandhini2422@gmail.com

</p>



<p style={styles.contactItem}>

<FaPhone color="#e11d48"/>

+91 7502728341

</p>



<p style={styles.contactItem}>

<FaMapMarkerAlt color="#e11d48"/>

Tamil Nadu, India

</p>


</div>





{/* Social */}

<div>


<h3 style={styles.title}>
Follow Me
</h3>



<div style={styles.icons}>


<a

href="https://github.com/Nandhini1224"

target="_blank"

rel="noopener noreferrer"

style={styles.iconLink}

>

<FaGithub/>

</a>




<a

href="https://www.linkedin.com/in/nandhini-murugan1224/"

target="_blank"

rel="noopener noreferrer"

style={styles.iconLink}

>

<FaLinkedin/>

</a>


</div>


</div>



</div>





<div style={styles.bottom}>

© {new Date().getFullYear()} Nandhini M.
All Rights Reserved.

</div>



</footer>

);

};


export default Footer;