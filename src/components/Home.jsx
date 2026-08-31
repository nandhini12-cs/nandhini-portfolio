import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";


const Home = ({ darkMode }) => {


  const [mobile, setMobile] = useState(false);



  useEffect(()=>{

    const handleResize = ()=>{

      setMobile(window.innerWidth <= 900);

    };


    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );


    return ()=>{

      window.removeEventListener(
        "resize",
        handleResize
      );

    };


  },[]);




  const animation = `

  @keyframes float {

    0%{
      transform:translateY(0px);
    }

    50%{
      transform:translateY(-18px);
    }

    100%{
      transform:translateY(0px);
    }

  }

  @keyframes glow {

    0%{
      box-shadow:0 0 15px #e11d48;
    }

    50%{
      box-shadow:0 0 35px #e11d48;
    }

    100%{
      box-shadow:0 0 15px #e11d48;
    }

  }

  `;



  const styles = {


    section:{

      minHeight:"90vh",

      display:"flex",

      alignItems:"center",

      justifyContent:"center",

      padding:mobile
      ?"40px 20px"
      :"60px 8%",


      background:darkMode
      ?"#0f172a"
      :"#fdf2f5",


      transition:"0.4s"

    },




    container:{

      display:"flex",

      flexDirection:mobile
      ?"column"
      :"row",


      justifyContent:"space-between",

      alignItems:"center",

      gap:"50px",

      maxWidth:"1200px",

      width:"100%"

    },




    left:{

      flex:1,

      textAlign:mobile
      ?"center"
      :"left"

    },




    name:{

      fontSize:mobile
      ?"40px"
      :"58px",

      fontWeight:"700",

      color:darkMode
      ?"#ffffff"
      :"#111827",

      marginBottom:"15px"

    },




    highlight:{

      color:"#e11d48"

    },




    role:{

      fontSize:mobile
      ?"22px"
      :"28px",

      color:darkMode
      ?"#cbd5e1"
      :"#64748b",

      minHeight:"45px"

    },




    desc:{

      fontSize:"18px",

      lineHeight:"1.8",

      color:darkMode
      ?"#cbd5e1"
      :"#475569",

      marginBottom:"35px"

    },




    buttons:{

      display:"flex",

      justifyContent:mobile
      ?"center"
      :"flex-start",

      gap:"20px",

      flexWrap:"wrap"

    },




    resumeBtn:{

      background:"#e11d48",

      color:"#ffffff",

      padding:"14px 28px",

      borderRadius:"8px",

      textDecoration:"none",

      display:"flex",

      alignItems:"center",

      gap:"10px",

      fontWeight:"600"

    },




    projectBtn:{

      border:"2px solid #e11d48",

      color:"#e11d48",

      padding:"14px 28px",

      borderRadius:"8px",

      textDecoration:"none",

      fontWeight:"600"

    },




    right:{

      flex:1,

      display:"flex",

      justifyContent:"center",

      order:mobile
      ?-1
      :0

    },




    image:{

      width:mobile
      ?"260px"
      :"360px",


      height:mobile
      ?"260px"
      :"360px",


      borderRadius:"50%",


      objectFit:"cover",


      animation:
      "float 4s ease-in-out infinite, glow 3s infinite",



      border:darkMode
      ?"6px solid #e11d48"
      :"6px solid #f8cdd3"

    }


  };




return(

<>


<style>
{animation}
</style>



<section style={styles.section}>


<div style={styles.container}>


{/* LEFT */}


<div style={styles.left}>


<h1 style={styles.name}>

Hi, I'm Nandhini <span style={styles.highlight}>
 M
</span>




</h1>




<h2 style={styles.role}>


<Typewriter

words={[

"Computer Science Engineering Student",

"Aspiring Full-Stack Developer",

"AI & Machine Learning Enthusiast",

"Open to Work"

]}


loop={0}

cursor

cursorStyle="|"

typeSpeed={80}

deleteSpeed={50}

delaySpeed={1500}

/>


</h2>




<p style={styles.desc}>


Passionate Computer Science Engineering student with strong interest in Full-Stack Web Development,Artificial Intelligence and Machine Learning.
I enjoy building responsive web applications and solving real-world problems using modern technologies.


</p>





<div style={styles.buttons}>


<a

href="/resume.pdf"

download

style={styles.resumeBtn}

>


<FaDownload/>

Resume


</a>





<a

href="/projects"

style={styles.projectBtn}

>

View Projects

</a>



</div>



</div>





{/* RIGHT IMAGE */}



<div style={styles.right}>


<img

src="/images/profile.jpg"

alt="Nandhini"

style={styles.image}

/>


</div>



</div>


</section>



</>

);


};


export default Home;